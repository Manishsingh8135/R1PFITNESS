"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../CustomUi/navbar-menu";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/trainers', label: 'Trainers' },
    { href: '/testimonials', label: 'Transformations' },
    { href: '/about', label: 'About Us' },
  ];

  return (
    <motion.div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Menu setActive={setActive}>
        {navItems.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <HoveredLink href={item.href}>
              <motion.span
                className="relative text-gray-300 hover:text-maincolor transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-maincolor"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.span>
            </HoveredLink>
          </motion.div>
        ))}
      </Menu>
    </motion.div>
  );
}

export default NavbarDemo;