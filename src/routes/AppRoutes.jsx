import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../pages/Root";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
