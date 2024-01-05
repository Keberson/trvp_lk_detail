import React, {useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/useAppSelector";

const LoginWrap = () => {
    const navigate = useNavigate();
    const isAuth = useAppSelector(state => state.auth.isAuth);

    useEffect(() => {
        if (isAuth) {
            navigate("/dashboard");
        }
    }, [isAuth, navigate]);

    return (
        <>
            <Outlet />
        </>
    );
};

export default LoginWrap;
