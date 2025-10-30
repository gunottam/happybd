export const metadata = {
  title: "Pastel Birthday Surprise",
  description: "A dreamy, pastel, password-protected birthday card.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Headings: Playfair Display / Great Vibes; Body: Poppins */}
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen text-slate-900 selection:bg-babyPink/60 selection:text-slate-900">
        {children}
      </body>
    </html>
  );
}


