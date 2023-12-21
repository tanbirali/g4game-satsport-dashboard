"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import LoginLayout from "./layout"

const Page = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({username: false, password: false});

    const USERNAME = 'admin'; // dummy admin
    const PASSWORD = 'password'; // dummy password

    const router = useRouter();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setError({username: false, password: false});

        if (username !== USERNAME) {
        setError((prevState) => ({...prevState, username: true}));
        }

        if (password !== PASSWORD) {
        setError((prevState) => ({...prevState, password: true}));
        }

        if (username === USERNAME && password === PASSWORD) {
        router.push('/dashboard');
        }
    }

    return (
        <LoginLayout>
            <div className="min-h-screen flex items-center justify-center bg-white md:flex-row flex-col">
                <div className="hidden md:block w-full h-screen md:w-1/2">
                    <div className="h-full w-full bg-cover" style={{backgroundImage: "url('/images/loginheroimage.jpeg')"}}>
                    </div>
                </div>
                <div className="bg-white p-8 w-full md:w-1/2">
                    <h1 className="text-2xl font-bold mb-4 text-center text-black-2">Sport Manager Portal</h1>
                    <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input 
                        type="text" 
                        placeholder="Username" 
                        className="w-full p-3 border border-gray-300 rounded-md"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                        {error.username && <p className="text-red-500">Incorrect username</p>}
                    </div>
                    <div className="mb-4">
                        <input 
                        type="password" 
                        placeholder="Password" 
                        className="w-full p-3 border border-gray-300 rounded-md"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        {error.password && <p className="text-red-500">Incorrect password</p>}
                    </div>
                    <button type="submit" className="w-full bg-black text-white p-3 rounded-md">Sign In</button>
                    </form>
                </div>
                </div>
        </LoginLayout>
    )
}

export default Page;