import React, { createContext, useContext, useState, useEffect } from 'react';
import { Page, Project } from '../types';

interface NavigationContextType {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  isDiscoveryOpen: boolean;
  openDiscoveryModal: () => void;
  closeDiscoveryModal: () => void;
  selectedProject: Project | null;
  openCaseStudy: (project: Project) => void;
  closeCaseStudy: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPageState] = useState<Page>(() => {
    const hash = window.location.hash.replace('#', '') as Page;
    if (['home', 'about', 'services', 'portfolio', 'contact'].includes(hash)) {
      return hash;
    }
    return 'home';
  });

  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (['home', 'about', 'services', 'portfolio', 'contact'].includes(hash)) {
        setCurrentPageState(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const setCurrentPage = (page: Page) => {
    setCurrentPageState(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openDiscoveryModal = () => setIsDiscoveryOpen(true);
  const closeDiscoveryModal = () => setIsDiscoveryOpen(false);

  const openCaseStudy = (project: Project) => {
    setSelectedProject(project);
  };

  const closeCaseStudy = () => {
    setSelectedProject(null);
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        isDiscoveryOpen,
        openDiscoveryModal,
        closeDiscoveryModal,
        selectedProject,
        openCaseStudy,
        closeCaseStudy,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
