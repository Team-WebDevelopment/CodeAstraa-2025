"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"

// Define the type for nav items
interface NavItem {
  name: string
  href: string
}

const navItems: NavItem[] = [
  { name: "About", href: "about" },
  { name: "Details", href: "details" },
  { name: "Sponsors", href: "sponsors" },
  { name: "FAQ", href: "faq" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string): void => {
    setIsOpen(false)
    if (pathname === "/") {
      // scrollToSection(href)
    } else {
      router.push(`/#${href}`)
    }
  }

  const isHomePage: boolean = pathname === "/"

  return (
    <motion.nav
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-2xl $`} // Added rounded corners, magical border, and enhanced shadow
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
      style={{
        backgroundImage: scrolled
          ? "url('/parchment-texture.png'), radial-gradient(circle at 1px 1px, rgba(255, 215, 0, 0.2) 1px, transparent 0), linear-gradient(45deg, rgba(147, 51, 234, 0.1) 0%, transparent 50%, rgba(255, 215, 0, 0.1) 100%)"
          : "none", // Added a subtle magical gradient overlay
        backgroundSize: "200px 200px, 40px 40px, auto",
        backgroundBlendMode: "overlay",
      }}
      // Levitation animation for a magical floating effect
      // animate={{
      //   y: [0, -5, 0], // Subtle floating motion
      // }}
      // transition={{
      //   y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
      // }}
    >
      <div className="flex flex-row items-center justify-between sm:justify-center py-4 max-w-[83rem] mx-auto px-4 relative z-50">
        <div className="hidden sm:flex justify-center">
          <div className="flex flex-row space-x-6 items-center antialiased border border-purple-700/30 px-3 py-2 rounded-2xl bg-gradient-to-b from-purple-950/50 to-gray-900/50 backdrop-blur-lg shadow-[0_0_10px_rgba(147,51,234,0.3)]">
            <Link href="/" className="font-bold text-sm flex items-center justify-center text-yellow-300 space-x-2">
              <span className="w-10 h-10 flex items-center justify-center rounded-[8px] relative overflow-hidden border border-yellow-500/50 shadow-[0_0_8px_rgba(255,215,0,0.5)]">
                <Image
                  src="/CA-logo.png"
                  height={100}
                  width={100}
                  alt="CA-logo"
                  className="w-full h-full object-contain"
                />
              </span>
              <span className="harryp text-xl text-yellow-300 tracking-wide glow-text">
                Code Astraa
              </span>
            </Link>
            {navItems.map((item: NavItem) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-yellow-300 text-sm relative group font-cormorant-garamond tracking-wide"
              >
                <motion.span
                  className="relative z-10 px-2 py-2 inline-block hover:text-yellow-100 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-yellow-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-center shadow-[0_0_5px_rgba(255,215,0,0.7)]"></span>
                </motion.span>
              </button>
            ))}
            <div className="relative group">
              <motion.button
                onClick={() => handleNavClick("registration")}
                className="font-medium text-yellow-300 inline-flex items-center justify-center rounded-[10px] bg-gradient-to-b from-purple-700 to-purple-900 text-sm px-4 py-2 transition duration-150 shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:shadow-[0_0_20px_rgba(147,51,234,0.7)] active:outline-none hover:opacity-90 font-cormorant-garamond tracking-wide glow-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register
              </motion.button>
            </div>
          </div>
        </div>
        <div className="flex sm:hidden w-full">
          <div className="flex flex-row justify-between items-center w-full">
            <Link href="/" className="font-bold text-sm flex items-center justify-center text-yellow-300 space-x-2">
              <span className="w-8 h-8 flex items-center justify-center rounded-[6px] relative overflow-hidden border border-yellow-500/50 shadow-[0_0_8px_rgba(255,215,0,0.5)]">
                <Image
                  src="/hogwarts-logo.png"
                  height={100}
                  width={100}
                  alt="Hogwarts Logo"
                  className="w-full h-full object-contain"
                />
              </span>
              <span className="font-cinzel-decorative text-lg text-yellow-300 tracking-wide glow-text">
                Code Astraa
              </span>
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-yellow-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="sm:hidden bg-gradient-to-b from-purple-950/90 to-gray-900/80 border-t border-purple-700/30 shadow-[0_0_10px_rgba(147,51,234,0.3)] rounded-b-2xl magical-border"
          style={{
            backgroundImage:
              "url('/parchment-texture.png'), radial-gradient(circle at 1px 1px, rgba(255, 215, 0, 0.2) 1px, transparent 0), linear-gradient(45deg, rgba(147, 51, 234, 0.1) 0%, transparent 50%, rgba(255, 215, 0, 0.1) 100%)",
            backgroundSize: "200px 200px, 40px 40px, auto",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item: NavItem) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-yellow-300 hover:bg-purple-800/50 hover:text-yellow-100 block w-full text-left px-3 py-2 rounded-md text-base font-medium relative group font-cormorant-garamond tracking-wide"
              >
                <motion.span
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-yellow-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-center shadow-[0_0_5px_rgba(255,215,0,0.7)]"></span>
                </motion.span>
              </button>
            ))}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-yellow-300 hover:bg-purple-800/50 hover:text-yellow-100 block w-full text-left px-3 py-2 rounded-md text-base font-medium relative group font-cormorant-garamond tracking-wide"
              >
                <motion.span
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Committee
                  <ChevronDown className="inline-block ml-1 w-4 h-4" />
                </motion.span>
              </button>
              {dropdownOpen && (
                <div className="pl-4">
                  <Link
                    href="/committee"
                    className="block px-3 py-2 text-sm text-yellow-300 hover:bg-purple-800/50 hover:text-yellow-100 font-dancing-script"
                    onClick={() => {
                      setDropdownOpen(false)
                      setIsOpen(false)
                    }}
                  >
                    Committee
                  </Link>
                  <Link
                    href="/speakers"
                    className="block px-3 py-2 text-sm text-yellow-300 hover:bg-purple-800/50 hover:text-yellow-100 font-dancing-script"
                    onClick={() => {
                      setDropdownOpen(false)
                      setIsOpen(false)
                    }}
                  >
                    Speakers
                  </Link>
                </div>
              )}
            </div>
            <motion.button
              onClick={() => handleNavClick("registration")}
              className="block w-full text-center font-medium text-yellow-300 rounded-md bg-gradient-to-b from-purple-700 to-purple-900 px-3 py-2 transition duration-150 shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:shadow-[0_0_20px_rgba(147,51,234,0.7)] font-cormorant-garamond tracking-wide glow-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}