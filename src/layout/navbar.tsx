"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import MenuLogo from "@/components/utility/menu-button";
import ThemeSwitch from "@/components/utility/theme-switch";
import AnimatedLogo from "@/animation/animated-logo";
import MobileMenu from "@/components/utility/mobile-menu";
import { classNames } from "@/utility/classNames";

export type NavbarRoute = {
  title: string;
  href: string; // e.g. "/", "/projects", "/Aakash_Tripathi_Resume.pdf"
};

export type NavbarRoutes = NavbarRoute[];

export interface NavbarProps {
  routes: NavbarRoutes;
}

export default function Navbar({ routes }: NavbarProps) {
  const pathName = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 mt-2 px-6 py-8 sm:mt-8 sm:px-14 md:px-20">
      <div className="mx-auto flex items-center justify-between lg:max-w-7xl">
        {/* Logo */}
        <Link
          href="/"
          className="drop-shadow-teralight flex items-center justify-center"
          aria-label="Return to home page"
        >
          <div className="relative h-12 w-12 sm:h-14 sm:w-14">
            <AnimatedLogo />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-2 rounded-full px-2 py-2 shadow-md ring-1 ring-zinc-200 backdrop-blur-md dark:ring-accent/50 md:flex">
          <ul className="flex gap-2 text-sm font-medium">
            {routes.map((link, idx) => {
              const isExternal =
                link.href.startsWith("http") || link.href.endsWith(".pdf");
              const isActive = !isExternal && pathName === link.href;

              return (
                <li
                  key={idx}
                  className="my-3 transition-transform duration-100 hover:scale-[1.1]"
                >
                  {isExternal ? (
                    /* External link (PDF, absolute URL, etc.) */
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative mx-3 rounded-full px-3 py-2 text-foreground transition-colors duration-200 hover:text-accent"
                    >
                      {link.title}
                    </a>
                  ) : (
                    /* Internal link */
                    <Link
                      href={link.href}
                      className={classNames(
                        isActive
                          ? "font-semibold text-background dark:hover:text-foreground"
                          : "text-foreground",
                        "group relative mx-3 rounded-full px-3 py-2 transition-colors duration-200",
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="tab-pill"
                          animate={{
                            transition: {
                              x: {
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                              },
                            },
                          }}
                          className="absolute inset-0 -z-10 rounded-full bg-accent group-hover:bg-accent/80"
                        />
                      )}
                      {link.title}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <ThemeSwitch />
        </nav>

        {/* Mobile menu button */}
        <AnimatePresence>
          <MenuLogo open={isModalOpen} toggle={toggleModal} />
        </AnimatePresence>
      </div>

      {/* Mobile menu drawer */}
      <MobileMenu
        routes={routes}
        openMenu={isModalOpen}
        setOpenMenu={setIsModalOpen}
      />
    </header>
  );
}
