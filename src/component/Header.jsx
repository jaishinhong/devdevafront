import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="bg-blue-500 flex justify-between sm:px-10 px-3 h-16 items-center">
            <Link to="/">
                <h1 className="text-2xl text-white">User Management</h1>
            </Link>
            <h1 className="w-10 h-10 bg-white text-black rounded-full flex justify-center items-center text-xl font-semibold ring-black ring-1">
                D
            </h1>
        </div>
    );
}
