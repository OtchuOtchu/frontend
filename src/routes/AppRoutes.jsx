import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../pages/Root";
import Login from "../pages/Login";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
