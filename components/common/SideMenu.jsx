"use client";

import React from "react";
import { navLinks } from ".";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const SideMenu = ({ className }) => {
  const pathname = usePathname();

  return (
    <aside className={`border-r shadow-md ${className}`}>
      <div className="flex flex-col justify-center items-center h-screen gap-20">
        <div>Logo</div>
        <div className="flex flex-col gap-[30px] justify-center items-center">
          {navLinks.map(({ id, label, href, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={id}
                href={href}
                className={`group relative flex items-center`}
              >
                <TooltipProvider delayDuration={50}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Icon
                        className={`w-6 h-6 hover:text-red-500 ${
                          isActive ? "text-red-500" : "text-yellow-300"
                        }`}
                      />
                    </TooltipTrigger>
                    <TooltipContent side="right" sideOffset={15}>
                      {label}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            );
          })}
        </div>
        <div className="-rotate-90">copy</div>
      </div>
    </aside>
  );
};

export default SideMenu;
