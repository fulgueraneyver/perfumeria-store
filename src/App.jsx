import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import LoginAdmin from "./pages/LoginAdmin";
import AdminPanel from "./pages/AdminPanel";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <HashRouter>
            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/admin-login"
                    element={<LoginAdmin />}
                />

                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute>
                            <AdminPanel />
                        </ProtectedRoute>
                    }
                />

            </Routes>
        </HashRouter>
    );
}

export default App;