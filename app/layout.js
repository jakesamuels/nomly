import "./globals.css";

export const metadata = {
  title: "Nomly",
  description: "Personalized Recipe Discovery Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
