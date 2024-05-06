import React from 'react';
import Link from "next/link";

export default async function Category() {
    const response = await fetch("http://localhost:7000/getcategory", {
        cache: 'no-store'
    });
    const categorys = await response.json();
    console.log("first", categorys);
    //    async function issa() {
    //         const response = await fetch("http://localhost:7000/ge", {
    //             cache: 'no-store'
    //         });
    //         const categorys = await response.json();
    //         console.log("first", categorys);
    //     }
    return (
        <div className="flex gap-5 justify-center">
            {categorys.map((cat, index) => ( // Added key prop to the mapping function
                <div key={index} className="mt-6">
                    <div className="">
                        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                            <img src={cat.img} alt="Category Image" className="h-full w-full object-cover object-center" />
                        </div>

                        <div >
                            <Link href={`../../product/category/${cat.category_id}`}>
                                {cat.cat_name}
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
