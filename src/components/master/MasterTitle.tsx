"use client";

import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function MasterTitle({
    title,
    page,
    param,
}: {
    title: string;
    page: string ;
    param?: string;
}) {
    return (
        <div className="flex justify-between items-center">
            <h2 className="font-semibold text-2xl py-5">{title}</h2>
            <div className="flex gap-1 items-center text-xs">
                <Link href="/" className=" hover:text-[var(--primary)]">
                    Dashboard{" "}
                </Link>
                <MdKeyboardArrowRight />
                <button className="">{page}</button>
                {param && (
                    <>
                        <MdKeyboardArrowRight />
                        <button>{param}</button>
                    </>
                )}
            </div>
        </div>
    );
}
