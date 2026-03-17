"use client";

import { usePathname } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

interface LayoutContentProps {
  children: React.ReactNode;
}

export function LayoutContent({ children }: LayoutContentProps) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith('/admin');

  return (
    <>
      {!isAdminPage && <Navigation />}
      <main className="flex-1">
        {children}
      </main>
      {!isAdminPage && <Footer />}
      <Toaster />
    </>
  );
}
