"use client";

import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

type Variant = {
    name: string;
    quantity: string;
    price: string;
};

export default function AddProduct() {
    const [variants, setVariants] = useState<Variant[]>([
        { name: "", quantity: "", price: "" },
    ]);

    // Thêm variant mới
    const addVariant = () => {
        setVariants([...variants, { name: "", quantity: "", price: "" }]);
    };

    // Xoá variant
    const removeVariant = (index: number) => {
        const updated = [...variants];
        updated.splice(index, 1);
        setVariants(updated);
    };

    // Cập nhật input variant
    const handleVariantChange = (
        index: number,
        field: keyof Variant,
        value: string
    ) => {
        const updated = [...variants];
        updated[index][field] = value;
        setVariants(updated);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Product variants:", variants);
        // Gửi lên API nếu cần
    };

    return (
        <form onSubmit={handleSubmit} className="flex justify-between gap-1">
            <div className="bg-white p-4 rounded shadow w-1/2">
                <label className="block font-semibold mb-2">
                    Product Name <span className="text-xl text-red-400">*</span>
                </label>
                <input
                    type="text"
                    placeholder="Enter product name"
                    className="border p-3 w-full rounded outline-none border-gray-400 mb-5"
                />

                <div className="flex items-center justify-between mb-3">
                    <h2 className="font-semibold">Variants</h2>
                    <button
                        type="button"
                        onClick={addVariant}
                        className="bg-[var(--primary)] text-white px-4 py-1 rounded hover:bg-[var(--secondary)] hover:cursor-pointer"
                    >
                        + Add Variant
                    </button>
                </div>
                <div className="border rounded-lg border-gray-300">
                    {variants.map((variant, index) => (
                        <div
                            key={index}
                            className="flex gap-3 items-end p-3 rounded"
                        >
                            <div className="flex-1">
                                <label className="text-sm">
                                    Name{" "}
                                    <span className="text-xl text-red-400">
                                        *
                                    </span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder={`Red - M, Blue - L, ...`}
                                    value={variant.name}
                                    onChange={(e) =>
                                        handleVariantChange(
                                            index,
                                            "name",
                                            e.target.value
                                        )
                                    }
                                    className="border px-3 py-2 w-full rounded outline-none border-gray-400"
                                />
                            </div>
                            <div className="w-1/4">
                                <label className="text-sm">
                                    Quantity{" "}
                                    <span className="text-xl text-red-400">
                                        *
                                    </span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder={`100`}
                                    value={variant.quantity}
                                    onChange={(e) =>
                                        handleVariantChange(
                                            index,
                                            "quantity",
                                            e.target.value
                                        )
                                    }
                                    className="border px-3 py-2 w-full rounded outline-none border-gray-400"
                                />
                            </div>
                            <div className="w-1/4">
                                <label className="text-sm">
                                    Price{" "}
                                    <span className="text-xl text-red-400">
                                        *
                                    </span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder={`100.000`}
                                    value={variant.price}
                                    onChange={(e) =>
                                        handleVariantChange(
                                            index,
                                            "price",
                                            e.target.value
                                        )
                                    }
                                    className="border px-3 py-2 w-full rounded outline-none border-gray-400"
                                />
                            </div>
                            <div className="w-10 text-center">
                                <button
                                    type="button"
                                    onClick={() => removeVariant(index)}
                                    className="text-red-500 hover:text-red-700 hover:cursor-pointer"
                                >
                                    <FiTrash2 className="text-xl" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    type="submit"
                    className="mt-5 bg-[var(--primary)] text-white px-6 py-2 rounded hover:bg-[var(--secondary)]"
                >
                    Save Product
                </button>
            </div>
            <div className="w-1/2">Images</div>
        </form>
    );
}
