import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ title, isAddPage = true }) {
    return (
        <div className="flex justify-between sm:px-10 px-3 h-16 items-center">
            <h1 className="text-xl font-semibold text-slate-400">{title}</h1>
            {isAddPage && (
                <Link to="/addUser">
                    <button className="bg-blue-500 text-white h-11 w-28 rounded-md hover:bg-blue-600">
                        Add +
                    </button>
                </Link>
            )}
        </div>
    );
}
