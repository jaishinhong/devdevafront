import React, { useContext, useEffect, useRef, useState } from "react";
import { userContext } from "../context/UserContextProvider";
import NavBar from "../component/NavBar";
import { useNavigate, useParams } from "react-router-dom";

const initialState = {
    firstName: "",
    lastName: "",
    gender: "",
    birthDate: "",
    image: null
};

export default function EditUserPage() {
    const { user, editUser } = useContext(userContext);
    const [input, setInput] = useState(initialState);
    const inputEl = useRef();
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        setInput(user[id]);
    }, [user]);

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
        navigate("/");
    };

    const handleSave = () => {
        const answer = confirm("Are you confirm?");
        if (answer) {
            if (!input.firstName || !input.lastName) {
                alert("First Name or Last Name can not be empty");
            }
            editUser(input, id);
            navigate("/");
        }
    };

    return (
        <>
            <NavBar title="Edit User" isAddPage={false} />
            <div className="px-3">
                <div className="max-w-5xl sm:flex block m-auto justify-center md:gap-28 gap-10 mt-10">
                    <div className="flex flex-col items-center gap-5">
                        <img
                            src={
                                input.image && URL.createObjectURL(input.image)
                            }
                            className="w-48 h-48 rounded-full ring-1 ring-gray-500"
                        />
                        <input
                            type="file"
                            className="hidden"
                            ref={inputEl}
                            name="image"
                            onChange={handleChange}
                        />
                        <div className="flex sm:flex-col mb-3 sm:mb-0 gap-3 sm:items-center">
                            <button
                                className="px-5 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                onClick={handleClick}
                            >
                                Upload Profile Picture
                            </button>
                            <button
                                className="px-5 py-3 bg-red-600 text-white rounded-md hover:bg-red-700"
                                onClick={handleDeletePicture}
                            >
                                Delete Picture
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 self-end">
                        <div className="md:flex block gap-5 md:mb-5 mb-0">
                            <div className="flex-1 flex flex-col gap-1">
                                <label
                                    htmlFor="firstName"
                                    className="text-xl text-gray-500"
                                >
                                    First name
                                </label>
                                <input
                                    id="firstName"
                                    type="text"
                                    className="w-full rounded-md ring-1 ring-gray-500 px-3 py-3"
                                    placeholder="please enter your First name"
                                    name="firstName"
                                    value={input.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex-1 flex flex-col gap-1">
                                <label
                                    htmlFor="lastName"
                                    className="text-slate-500 text-lg"
                                >
                                    Last Name
                                </label>
                                <input
                                    id="lastName"
                                    type="text"
                                    className="w-full rounded-md ring-1 ring-gray-500 px-3 py-3"
                                    placeholder="please enter your Last name"
                                    name="lastName"
                                    value={input.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="md:flex block gap-5">
                            <div className="flex-1 flex flex-col gap-1">
                                <label
                                    htmlFor="gender"
                                    className="text-slate-500 text-lg"
                                >
                                    Gender
                                </label>
                                <select
                                    id="gender"
                                    className="w-full rounded-md ring-1 ring-gray-500 px-3 py-3"
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
                            <div className="flex-1 flex flex-col gap-1">
                                <label
                                    htmlFor="birthday"
                                    className="text-slate-500 text-lg"
                                >
                                    Birthday
                                </label>
                                <input
                                    id="birthday"
                                    type="date"
                                    className="w-full rounded-md ring-1 ring-gray-500 px-3 py-3"
                                    name="birthDate"
                                    onChange={handleChange}
                                    value={input.birthDate}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-5xl m-auto flex sm:justify-end justify-center mt-20 gap-5">
                    <button
                        className="px-10 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                        onClick={handleCancle}
                    >
                        CANCEL
                    </button>
                    <button
                        className="px-10 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                        onClick={handleSave}
                    >
                        SAVE
                    </button>
                </div>
            </div>
        </>
    );
}
