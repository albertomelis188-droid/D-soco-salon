
export const metadata = {
  title: "De Soco Salon",
  description: "Salon de Belleza",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
