
import React from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen">
        {children}
      </body>
    </html>
  );
}
