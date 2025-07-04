import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="barba-wrapper" data-barba="wrapper">
      <main data-barba="container">
        <div className="container">
          {children}
        </div>
      </main>
    </div>
  );
}
