import React, { useContext } from "react";
import NavBar from "../component/NavBar";
import { userContext } from "../context/UserContextProvider";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const { user, deleteUser } = useContext(userContext);
    const navigate = useNavigate();

    const onDelete = (index) => {
        deleteUser(index);
    };

    return (
        <>
            <NavBar title="User List" />
            <div className="px-1">
                <div className="max-w-6xl m-auto mt-10 ">
                    <div className="flex justify-between bg-slate-300 text-black text-base sm:text-lg px-3 py-2 rounded-sm mb-5 flex-1 gap-1 font-medium">
                        <p className="flex-1">Profile Picture</p>
                        <p className="flex-1">First name</p>
                        <p className="flex-1">Last name</p>
                        <p className="flex-1">Gender</p>
                        <p className="flex-1">Birthday</p>
                        <p className="flex-1">Action</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        {user.map((el, i) => (
                            <div
                                className="flex justify-between px-3 gap-1"
                                key={i}
                            >
                                <div className="flex-1">
                                    <img
                                        className="rounded-full w-10 h-10 flex justify-center items-center bg-blue-500 text-white"
                                        src={
                                            el.image &&
                                            URL.createObjectURL(el.image)
                                        }
                                        alt={el.firstName.slice(0, 1)}
                                    />
                                </div>
                                <h1 className="flex-1">{el.firstName}</h1>
                                <h1 className="flex-1">{el.lastName}</h1>
                                <h1 className="flex-1">{el.gender}</h1>
                                <h1 className="flex-1">{el.birthDate}</h1>
                                <div className="flex gap-3 flex-1">
                                    <button
                                        className="flex-1 h-10 bg-orange-400 text-white hover:bg-orange-500"
                                        onClick={() =>
                                            navigate(`/editUser/${i}`)
                                        }
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="flex-1 h-10 bg-red-500 text-white hover:bg-red-600"
                                        onClick={() => onDelete(i)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
