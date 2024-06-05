import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PostContext = createContext();

const PosteProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [colisId, setcolisId] = useState()

    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"));
        setUser(user);
    }, [navigate]);

    return (
        <PostContext.Provider
            value={{
                user,
                setUser,
                colisId,
                setcolisId,
            }}
        >
            {children}
        </PostContext.Provider>
    );
};

export const PosteState = () => {
    return useContext(PostContext);
};

export default PosteProvider;
