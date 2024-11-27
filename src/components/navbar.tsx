import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolling(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-colors ${
        isScrolling ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link
          href="/"
          className={`text-lg font-bold ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          Elewade Nigeria Limited
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden gap-8 lg:flex">
          <li>
            <Link
              href="/"
              className={`text-sm font-medium ${
                isScrolling ? "text-gray-900" : "text-white"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`text-sm font-medium ${
                isScrolling ? "text-gray-900" : "text-white"
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`text-sm font-medium ${
                isScrolling ? "text-gray-900" : "text-white"
              }`}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={`text-sm font-medium ${
                isScrolling ? "text-gray-900" : "text-white"
              }`}
            >
              Our Services
            </Link>
          </li>
        </ul>

        {/* Social Media & Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <Button
            variant="ghost"
            className={`${
              isScrolling ? "text-gray-900" : "text-white"
            } hover:text-primary`}
          >
            <i className="fa-brands fa-twitter" />
          </Button>
          <Button
            variant="ghost"
            className={`${
              isScrolling ? "text-gray-900" : "text-white"
            } hover:text-primary`}
          >
            <i className="fa-brands fa-facebook" />
          </Button>
          <Button
            variant="ghost"
            className={`${
              isScrolling ? "text-gray-900" : "text-white"
            } hover:text-primary`}
          >
            <i className="fa-brands fa-instagram" />
          </Button>
          <Link href="/services">
            <Button variant="default" className="px-4">
              Our Services
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <Button
          variant="ghost"
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-white lg:hidden">
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <Link href="/" className="text-sm font-medium text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm font-medium text-gray-900">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm font-medium text-gray-900"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-sm font-medium text-gray-900"
              >
                Our Services
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-2 px-4 pb-4">
            <Button variant="ghost">
              <i className="fa-brands fa-twitter text-gray-900" />
            </Button>
            <Button variant="ghost">
              <i className="fa-brands fa-facebook text-gray-900" />
            </Button>
            <Button variant="ghost">
              <i className="fa-brands fa-instagram text-gray-900" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
