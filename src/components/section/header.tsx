import { useThemeContext } from "@/contexts/ThemeProvider";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import { Button } from "../ui/button";

export const Header = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <div className="w-full flex items-end justify-end pt-16">
      {theme === "light" ? (
        <Button onClick={toggleTheme} variant="outline" >
          <MdOutlineDarkMode />
        </Button>
      ) : (
        <Button onClick={toggleTheme} variant="outline" className="text-white border-transparent">
          <MdLightMode />
        </Button>
      )}
    </div>
  )
}