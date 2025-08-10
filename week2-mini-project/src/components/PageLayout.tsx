import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <main className="container mx-auto p-4 sm:p-6 md:p-8">
      {children}
    </main>
  );
};

export default PageLayout;