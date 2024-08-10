import { Route, Routes } from "react-router-dom";


import Home from "../pages/Home";
import Layout from "../pages/Root";


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
