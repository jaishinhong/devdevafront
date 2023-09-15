import React, { createContext, useState } from "react";

export const userContext = createContext();

export default function UserContextProvider({ children }) {
    const [user, setUser] = useState([]);

    const addUser = (input) => {
        setUser([...user, input]);
    };

    const editUser = (input, index) => {
        const updateUser = [...user];
        updateUser[index] = input;
        setUser(updateUser);
    };

    const deleteUser = (index) => {
        const mockUser = [...user];
        const newUsers = mockUser.filter((_, i) => i !== index);
        console.log(newUsers);
        setUser(newUsers);
    };
    return (
        <userContext.Provider value={{ user, addUser, editUser, deleteUser }}>
            {children}
        </userContext.Provider>
    );
}
