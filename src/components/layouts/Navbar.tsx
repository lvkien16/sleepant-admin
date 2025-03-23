"use client";
import Link from "next/link";
import { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import {
    FiMenu,
    FiShoppingCart,
    FiLogOut,
    FiFilePlus,
    FiChevronDown,
} from "react-icons/fi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { RxCube, RxDashboard } from "react-icons/rx";
import { usePathname, useSearchParams } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const toggleMenu = (name: string) => {
        setOpenMenus((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    const pages = [
        { name: "Dashboard", href: "/", icon: <RxDashboard /> },
        {
            name: "Ecommerce",
            href: "/ecommerce",
            icon: <FiShoppingCart />,
            children: [
                { name: "Add product", href: "add-product" },
                { name: "Product list", href: "product-list" },
            ],
        },
        {
            name: "Category",
            href: "/category",
            icon: <HiOutlineSquare3Stack3D />,
            children: [
                { name: "Add category", href: "add-category" },
                { name: "Category list", href: "category-list" },
            ],
        },
        {
            name: "Attribute",
            href: "/attribute",
            icon: <RxCube />,
            children: [
                { name: "Add attribute", href: "add-attribute" },
                { name: "Attribute list", href: "attribute-list" },
            ],
        },
        {
            name: "Order",
            href: "/order",
            icon: <FiFilePlus />,
            children: [
                { name: "Order list", href: "order-list" },
                { name: "Order detail", href: "order-detail" },
                { name: "Pending order", href: "pending-order" },
                { name: "Shipping order", href: "shipping-order" },
                { name: "Completed order", href: "completed-order" },
                { name: "Cancelled order", href: "cancelled-order" },
                { name: "Refunded order", href: "refunded-order" },
            ],
        },
        { name: "Report", href: "/report", icon: <HiOutlineDocumentReport /> },
        { name: "Comment", href: "/comment", icon: <FaRegComment /> },
    ];

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/10 bg-opacity-50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div className="flex">
                <div
                    className={`bg-gray-900 overflow-y-auto scrollbar-hide text-white w-64 h-screen p-5 flex flex-col space-y-6 fixed top-0 left-0 z-50 transition-transform duration-500 ${
                        isOpen ? "translate-x-0" : "-translate-x-64"
                    } md:translate-x-0 md:relative`}
                >
                    <h2 className="text-xl font-semibold text-center">
                        Admin Panel
                    </h2>
                    <nav className="flex flex-col space-y-2">
                        {pages.map((page) => {
                            const isOpenMenu = openMenus[page.name];
                            const isActive = pathname === page.href;

                            return (
                                <div key={page.href}>
                                    {page.children ? (
                                        <>
                                            <button
                                                onClick={() =>
                                                    toggleMenu(page.name)
                                                }
                                                className={`flex items-center justify-between w-full hover:cursor-pointer p-2 rounded hover:text-[var(--primary)] ${
                                                    isActive
                                                        ? "bg-gray-700 text-[var(--primary)]"
                                                        : ""
                                                }`}
                                            >
                                                <div className="flex items-center space-x-2">
                                                    {page.icon}
                                                    <span>{page.name}</span>
                                                </div>
                                                <FiChevronDown
                                                    className={`transition-transform duration-300 ${
                                                        isOpenMenu
                                                            ? "rotate-180"
                                                            : ""
                                                    }`}
                                                />
                                            </button>
                                            <div
                                                className={`ml-6 mt-1 flex flex-col space-y-1 overflow-hidden transition-all duration-300 ${
                                                    isOpenMenu
                                                        ? "max-h-96"
                                                        : "max-h-0"
                                                }`}
                                            >
                                                {page.children.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        href={`${page.href}?tab=${child.href}`}
                                                        className={`block px-2 py-1 text-sm rounded hover:text-[var(--primary)] ${
                                                            pathname ===
                                                                `${page.href}` &&
                                                            searchParams?.get(
                                                                "tab"
                                                            ) ===
                                                                `${child.href}`
                                                                ? "text-[var(--primary)]"
                                                                : ""
                                                        }`}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            href={page.href}
                                            className={`flex items-center space-x-2 p-2 hover:text-[var(--primary)] rounded ${
                                                isActive
                                                    ? "bg-gray-700 text-[var(--primary)]"
                                                    : ""
                                            }`}
                                        >
                                            {page.icon}
                                            <span>{page.name}</span>
                                        </Link>
                                    )}
                                </div>
                            );
                        })}
                        <button className="flex items-center space-x-2 p-2 hover:text-[var(--primary)] hover:cursor-pointer rounded">
                            <FiLogOut />
                            <span>Log out</span>
                        </button>
                    </nav>
                </div>

                <div className="flex-1 flex flex-col w-full">
                    <div className="bg-white md:hidden shadow-md p-4 flex items-start justify-between h-screen">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-gray-700 hover:text-black transition"
                        >
                            <FiMenu size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
