import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../pages/Root";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import RecommendPage from "../pages/RecommendPage";


import AddForm from "../components/Recommend/AddForm";
import Weather from "../components/Recommend/Weather";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/recommend" element={<RecommendPage />} />
                <Route path="/addform" element={<AddForm />} />
                <Route path="/weather" element={<Weather />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
