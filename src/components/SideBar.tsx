'use client'

import { sideMenus } from "@/app/utils/sideMenus";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Icon } from "./Icon";

interface SubMenuProps {
    title: string;
    src: string;
    icon: string;
  }
  
  interface MenuProps {
    title: string;
    src: string;
    subMenus?: SubMenuProps[];
  }
  
  interface SideBarProps {
    active: "explorar" | "perfil" | "resumo" | "home";
  }

export default function SideBar(props: SideBarProps) {
    const { active } = props;
    const classActive = "bg-slate-700 px-20 py-4 rounded-md ";
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

    const toggleSubMenu = (index: number) => {
        setOpenMenuIndex(openMenuIndex === index ? null : index);
    };

    return (
        <aside className="fixed top-0 left-0 z-40 h-screen bg-slate-900 w-64 flex flex-col justify-center items-center ">
        <div className="h-full px-3 py-4 overflow-y-auto">
          <Link href={"/"}>
            <h1 className="text-4xl font-bold mb-12 cursor-pointer">InovaTechDuo</h1>
          </Link>
          <div className="flex justify-center mb-8">
            <div className="w-40 h-40 rounded-full overflow-hidden flex justify-center items-center">
              <img src="https://i.pravatar.cc/300" alt="avatar do usuário" />
            </div>
          </div>
          <ul className="flex flex-col gap-5 ">
            {sideMenus.map((menu: MenuProps, index) => (
              <React.Fragment key={index}>
                <li
                  className={`hover:bg-slate-500 px-20 py-4 rounded-md ${
                    openMenuIndex === index && active === menu.title
                      ? classActive
                      : ""
                  }`}
                >
                  <span>
                    {menu.subMenus ? (
                      <div className="flex items-center justify-between">
                        <Link href={`/${menu.src}`}>
                          <span className="cursor-pointer">{menu.title}</span>
                        </Link>
                        <button
                          onClick={() => toggleSubMenu(index)}
                          className="focus:outline-none ml-2"
                        >
                          <ChevronDown
                            className={`${openMenuIndex === index ? "rotate-180" : ""
                              }`}
                          />
                        </button>
                      </div>
                    ) : (
                      <Link href={`/${menu.src}`}>
                        <span className="cursor-pointer">{menu.title}</span>
                      </Link>
                    )}
                  </span>
                </li>
                {menu.subMenus && openMenuIndex === index && (
                  <ul className="items-center">
                    {menu.subMenus.map((subMenu, idx) => (
                      <li key={idx} className="flex px-5 cursor-pointer text-sm text-gray-200 py-1">
                        <Link href={`/${menu.src}/${subMenu.src}`}>
                          <span className="cursor-pointer flex items-center">
                            <div className="flex items-center">
                              <span>{subMenu.title}</span>
                            </div>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </aside>
    );
}

