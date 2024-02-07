"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2 " />
      
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}
    >
      <Menu  setActive={setActive}>
        <HoveredLink href='#Trainers'>Trainers</HoveredLink>
      <MenuItem setActive={setActive} active={active} item="Home">
          
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services" >
          <div className="flex flex-col space-y-4 text-sm">
            {/* <HoveredLink href="/web-dev">Custom Workout Program</HoveredLink>
            <HoveredLink href="/interface-design">Weight-loss Program</HoveredLink>
            <HoveredLink href="/seo">Strength Training Program</HoveredLink>
            <HoveredLink href="/branding">Regular</HoveredLink> */}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Trainers">
          
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="FAQS">
          
        </MenuItem>
        {/* <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://res.cloudinary.com/algochurn/image/upload/v1700109138/framer%20motion%20components/290shots_so_gruelx.png"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://res.cloudinary.com/algochurn/image/upload/v1700109138/framer%20motion%20components/155shots_so_acab66.png"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://res.cloudinary.com/algochurn/image/upload/v1700109138/framer%20motion%20components/53shots_so_wygjpf.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://res.cloudinary.com/algochurn/image/upload/v1700109139/framer%20motion%20components/356shots_so_hwpzvs.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem> */}
        <MenuItem setActive={setActive} active={active} item="Pricing">
          {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Year-Pass</HoveredLink>
            <HoveredLink href="/individual">Month-Pass</HoveredLink>
            <HoveredLink href="/team">Week-Pass</HoveredLink>
            <HoveredLink href="/enterprise">Day-Pass</HoveredLink>
          </div> */}
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact Us">
          
        </MenuItem>
      </Menu>
    </div>
  );
}