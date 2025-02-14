import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function ServiceLayout({ children }: LayoutProps) {
  return (
    <div>
      {children}
    </div>
  );
} 