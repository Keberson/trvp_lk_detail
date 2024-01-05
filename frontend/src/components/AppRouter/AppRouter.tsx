import React from 'react';
import {Route, Routes} from 'react-router-dom';
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import ProjectPage from "../../pages/ProjectPage/ProjectPage";
import DashboardPage from "../../pages/DashboardPage/DashboardPage";
import NotAuthorizedPage from "../../pages/NotAuthorizedPage/NotAuthorizedPage";
import AuthWrap from "../AuthWrap/AuthWrap";
import LoginWrap from "../LoginWrap/LoginWrap";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<ProjectPage />} />
            <Route path="/login" element={<LoginWrap />}>
                <Route index element={<LoginPage />} />
            </Route>
            <Route path="/dashboard" element={<AuthWrap />}>
                <Route index element={<DashboardPage />} />
            </Route>
            <Route path="/denied" element={<NotAuthorizedPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default AppRouter;
