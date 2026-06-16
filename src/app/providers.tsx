"use client";

import React, { Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { LoaderComponent } from "@/components/loader-component/LoaderComponent";


export function Providers({
  children,} : { children: React.ReactNode; }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
              <Suspense fallback={
                  <div style={{marginTop: '20px'}}>
                      <LoaderComponent/>
                  </div>
              }>
                  <div>
              {children}
            </div>
          </Suspense>
    </ThemeProvider>
  );
}