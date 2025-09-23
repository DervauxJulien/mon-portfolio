// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Dervaux Julien - Portfolio",
  description: "Portfolio de Dervaux Julien",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
