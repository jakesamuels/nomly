import "./globals.css";
import { RecipeProvider } from "@/context/RecipeContext";

export const metadata = {
  title: "Nomly",
  description: "Personalized Recipe Discovery Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RecipeProvider>{children}</RecipeProvider>
      </body>
    </html>
  );
}
