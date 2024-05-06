
"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function CategoryDetails({ IDs }) {
    const [productData, setProductData] = useState(null);
    console.log(productData);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("Token");
                if (token !== null) {
                    const response = await fetch(`http://localhost:7000/idcategory/${IDs}`);
                    const data = await response.json();
                    console.log(data);
                    setProductData(data);
                } else {
                    alert("You need to login first");
                    window.location.href = "../login";
                }
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchData();
    }, [IDs]);

    if (!productData) {
        return <div>Loading...</div>; // You might want to render a loading spinner or message here
    }

    return (
        <>
            {productData && productData.map((category) => (
                <div key={category.id} className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <a href="#!">
                        <img className="rounded-t-lg" src={category.img} alt={category.name} />
                    </a>
                    <div className="p-6">
                        <h1 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            {category.name}
                        </h1>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            {category.disc}
                        </p>
                        <Link href={`../product/getproduct`} passHref>
                            <button
                                type="button"
                                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                            >
                                Back
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}
