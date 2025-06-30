import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-slate-300 dark:bg-background border-b px-6 py-4 flex justify-between items-center">
      <h1 className="text-black dark:text-white text-lg font-bold">TASKAPP</h1>
      {/* Desktop Navigation Links */}
      <div className={`hidden md:flex space-x-4`}>
        <Button variant="link" asChild>
          <Link to="/">Home</Link>
        </Button>
        <Button variant="link" asChild>
          <Link to="/posts">API-Posts</Link>
        </Button>
        <Button variant="link" asChild>
          <Link to="/about">About</Link>
        </Button>
        <ThemeToggle />
      </div>
       {/* Mobile Hamburger Icon */}
      <div className="md:hidden">
        <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="text-black dark:text-white absolute top-16 left-0 w-full bg-background border-t shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/posts" onClick={() => setMenuOpen(false)}>API-Posts</Link>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
