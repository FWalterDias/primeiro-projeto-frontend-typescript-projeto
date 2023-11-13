import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { Main } from "./pages/Main";
import { SignIn } from "./pages/SignIn";
import { useAuth } from "./hooks/useAuth";

export function MainRoutes() {

    type ProtectedRoutsProps ={
        redrectTo: string
    }

    function ProtectedRouts({ redrectTo }: ProtectedRoutsProps) {
        const { handleGetToken } = useAuth();

        return handleGetToken() ? <Outlet /> : <Navigate to={redrectTo} />
    }

    return (
        <Routes>
            <Route path="/" element={<SignIn />} />

            <Route element={<ProtectedRouts redrectTo={"/"} />}>
                <Route path="/main" element={<Main />} />
            </Route>
        </Routes>
    );
}