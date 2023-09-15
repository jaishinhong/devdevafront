import React, { useContext, useRef, useState } from "react";
import NavBar from "../component/NavBar";
import { userContext } from "../context/UserContextProvider";
import { useNavigate } from "react-router-dom";

const initialState = {
    firstName: "",
    lastName: "",
    gender: "",
    birthDate: "",
    image: null
};

export default function AddUserPage() {
    const [input, setInput] = useState(initialState);
    const { addUser } = useContext(userContext);
    const navigate = useNavigate();
    const inputEl = useRef();

    const handleChange = (e) => {
        if (e.target.name == "image") {
            if (e.target.files[0]) {
                setInput({ ...input, [e.target.name]: e.target.files[0] });
            }
        } else {
            setInput({ ...input, [e.target.name]: e.target.value });
        }
    };

    const handleClick = () => {
        inputEl.current.click();
    };

    const handleDeletePicture = () => {
        setInput({ ...input, image: null });
    };

    const handleCancle = () => {
        setInput(initialState);
    };

    const handleSave = () => {
        const answer = confirm("Are you confirm?");
        if (answer) {
            if (!input.firstName || !input.lastName) {
                alert("First Name or Last Name can not be empty");
            }
            addUser(input);
            navigate("/");
        }
    };
    return (
        <>
            <NavBar title="Create new User" />
            <div className="sm:flex block m-auto mt-5 justify-center gap-16">
                <div className=" flex flex-col items-center gap-5">
                    <img
                        className="w-36 h-36 ring-1 ring-black rounded-full"
                        src={input.image && URL.createObjectURL(input.image)}
                    />

                    <input
                        type="file"
                        className="hidden"
                        ref={inputEl}
                        name="image"
                        onChange={handleChange}
                    />
                    <button
                        className="bg-blue-500 px-3 py-1 rounded-md text-white"
                        onClick={handleClick}
                    >
                        Update Profile Picture
                    </button>
                    <button
                        className="bg-red-500 text-white px-3 py-1 rounded-md"
                        onClick={handleDeletePicture}
                    >
                        Delete Picture
                    </button>
                </div>
                <div className="flex sm:items-end justify-center">
                    <form className="flex flex-col md:gap-12">
                        <div className="md:flex block gap-5">
                            <div className="flex flex-col">
                                <label
                                    htmlFor="firstName"
                                    className="text-slate-500 text-lg"
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    className="ring-1 ring-slate-400 w-80 px-3 py-2 rounded-md"
                                    placeholder="Please Enter First Name"
                                    name="firstName"
                                    value={input.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="lastName"
                                    className="text-slate-500 text-lg"
                                >
                                    last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className="ring-1 ring-slate-400 w-80 px-3 py-2 rounded-md"
                                    placeholder="Please Enter Last Name"
                                    name="lastName"
                                    value={input.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="md:flex block gap-5">
                            <div className="flex flex-col">
                                <label
                                    htmlFor="firstName"
                                    className="text-slate-500 text-lg"
                                >
                                    Gender
                                </label>
                                <select
                                    className="ring-1 ring-slate-400 w-80 px-3 py-2 rounded-md"
                                    name="gender"
                                    value={input.gender}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled hidden>
                                        -- Select your Gender --
                                    </option>
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="lastName"
                                    className="text-slate-500 text-lg"
                                >
                                    Birthday
                                </label>
                                <input
                                    type="date"
                                    id="lastName"
                                    className="ring-1 ring-slate-400 w-80 px-3 py-2 rounded-md"
                                    placeholder="Please Enter Last Name"
                                    name="birthDate"
                                    onChange={handleChange}
                                    value={input.birthDate}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="max-w-[900px] m-auto flex md:justify-end justify-center mt-10 gap-5">
                <button
                    className="px-10 py-1 bg-gray-500 text-white rounded-md"
                    onClick={handleCancle}
                >
                    Cancel
                </button>
                <button
                    className="px-10 py-1 bg-green-500 text-white rounded-md"
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </>
    );
}
