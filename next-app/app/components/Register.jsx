"use client"
import React, { useState } from 'react';
import {
    Drawer,
    Button,
    Typography,
    IconButton,
    Input,
    Textarea,
} from "@material-tailwind/react";


export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = React.useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);


    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:7000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password }) // Corrected
            });

            if (response.ok) {
                alert('User registered successfully!');
            } else {
                alert('Failed to register user.');
            }
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };


    return (
        <React.Fragment>
            <Button onClick={openDrawer}>Register</Button>
            <Drawer open={open} onClose={closeDrawer}>
                <div className="flex items-center justify-between px-4 pb-2">
                    <Typography variant="h5" color="black">
                        Register
                    </Typography>
                    <IconButton variant="text" color="black" onClick={closeDrawer}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>

                <form className="flex flex-col gap-6 p-4" onSubmit={handleRegister}>

                    <Input
                        type="text"
                        className='text-black p-2'
                        // className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="username"
                        placeholder="User Name" value={username} onChange={(e) => setUsername(e.target.value)}
                    />

                    <Input
                        type="text"
                        className='text-black p-2'

                        // className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="email"
                        placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} label='Email' />

                    <Input
                        type="password"
                        className='text-black p-2'

                        // className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="password"
                        placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} label='Password'
                    />
                    <Button
                        type="submit"
                        className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                        Register
                    </Button>
                </form>
            </Drawer>
        </React.Fragment >
    );
}
