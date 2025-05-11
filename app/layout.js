import "./globals.css";
import { RecipeProvider } from "@/context/RecipeContext";
import Nav from "@/components/layout/Nav";

export const metadata = {
  title: "Nomly",
  description: "Personalized Recipe Discovery Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RecipeProvider>
          <Nav />
          {children}
        </RecipeProvider>
      </body>
    </html>
  );
}
