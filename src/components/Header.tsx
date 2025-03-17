import React from "react";
import { FiBell, FiMessageCircle } from "react-icons/fi";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";

export default function Header() {
    return (
        <div className="shadow px-5 py-2 w-full flex items-center justify-between">
            <div className="flex items-center gap-2">
                <Image
                    src="/brand.png"
                    alt="Logo"
                    width={30}
                    height={30}
                    className=""
                />
                <p className="lg:text-xl font-semibold">SleepAnt</p>
            </div>
            <div className="flex items-center justify-end space-x-3 lg:space-x-6">
                <FiBell
                    className="text-gray-700 hover:text-red-500 cursor-pointer"
                    size={20}
                />
                <FiMessageCircle
                    className="text-gray-700 hover:text-blue-500 cursor-pointer"
                    size={20}
                />
                <Menu as="div" className="relative">
                    <div>
                        <MenuButton className="relative flex items-center gap-2 py-1 rounded-full">
                            <Image
                                alt=""
                                src="/next.svg"
                                className="size-8 rounded-full border border-black"
                                width={100}
                                height={100}
                            />
                            <div className="">
                                <h1 className="font-semibold">Kien</h1>
                                <p className="text-sm">Admin</p>
                            </div>
                        </MenuButton>
                    </div>
                    <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                        <MenuItem>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                            >
                                Your Profile
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                            >
                                Settings
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                            >
                                Sign out
                            </a>
                        </MenuItem>
                    </MenuItems>
                </Menu>
            </div>
        </div>
    );
}
