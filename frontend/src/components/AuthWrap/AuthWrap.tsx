import React, {useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/useAppSelector";

const AuthWrap = () => {
    const isAuth = useAppSelector(state => state.auth.isAuth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate("/denied");
        }
    }, [isAuth, navigate]);

    return (
        <>
            <Outlet />
        </>
    );
};

export default AuthWrap;
