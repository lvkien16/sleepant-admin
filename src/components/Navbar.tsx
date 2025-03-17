"use client";
import Link from "next/link";
import { useState } from "react";
import {
    FiMenu,
    FiHome,
    FiUser,
    FiShoppingCart,
    FiSettings,
    FiLogOut,
} from "react-icons/fi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Overlay - Khi click vào sẽ đóng menu */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/10 bg-opacity-50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)} // Khi click, menu sẽ đóng
                />
            )}

            <div className="flex">
                {/* Sidebar */}
                <div
                    className={`bg-gray-900 text-white w-64 h-screen p-5 flex flex-col space-y-6 fixed top-0 left-0 z-50 transition-transform duration-500 ${
                        isOpen ? "translate-x-0" : "-translate-x-64"
                    } md:translate-x-0 md:relative`}
                >
                    <h2 className="text-xl font-semibold text-center">
                        Admin Panel
                    </h2>
                    <nav className="flex flex-col space-y-4">
                        <Link
                            href="/dashboard"
                            className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
                        >
                            <FiHome />
                            <span>Dashboard</span>
                        </Link>
                        <a
                            href="#"
                            className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
                        >
                            <FiUser />
                            <span>Users</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
                        >
                            <FiShoppingCart />
                            <span>Orders</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
                        >
                            <FiSettings />
                            <span>Settings</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded text-red-400"
                        >
                            <FiLogOut />
                            <span>Logout</span>
                        </a>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col w-full">
                    {/* Top Navbar */}
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
