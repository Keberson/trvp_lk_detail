import React, {useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/useAppSelector";

const AuthWrap = () => {
    const isAuth = useAppSelector(state => state.auth.isAuth);
    const navigate = useNavigate();
    const jwt = localStorage.getItem("jwt");

    useEffect(() => {
        if (!isAuth || jwt === null) {
            navigate("/denied");
        }
    }, [isAuth, jwt, navigate]);

    return (
        <>
            <Outlet />
        </>
    );
};

export default AuthWrap;
