import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import ProjectPage from "../../pages/ProjectPage/ProjectPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<ProjectPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default AppRouter;
