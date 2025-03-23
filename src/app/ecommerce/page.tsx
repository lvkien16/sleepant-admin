"use client";

import AddProduct from "@/pages/ecommere/AddProduct";
import { useSearchParams } from "next/navigation";
import MasterTitle from "@/components/master/MasterTitle";

import React from "react";

export default function Ecommerce() {
    const searchParams = useSearchParams();

    const tab = searchParams?.get("tab");

    if (tab === "add-product") {
        return (
            <div>
                <MasterTitle
                    title="Add Product"
                    page="Ecommerce"
                    param="Add Product"
                />
                <AddProduct />
            </div>
        );
    }
    return <div>Ecommerce</div>;
}
