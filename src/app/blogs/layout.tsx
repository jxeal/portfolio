import { Footer } from "@/components";
import React from "react";

interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="max-w-[800px] mx-auto p-4 sm:p-6 lg:p-8">
      <main>{children}</main>
      <Footer />
    </div>
  );
}
