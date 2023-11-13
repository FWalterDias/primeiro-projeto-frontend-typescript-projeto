import { Route, Routes } from "react-router-dom";
import { Main } from "../src/pages/Main";
import { SignIn } from "./pages/SignIn";

export function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/main" element={<Main />} />
        </Routes>
    );
}