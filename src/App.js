import { Button } from "antd";
import "./stylesheets/theme.css";
import "./stylesheets/alignments.css";
import "./stylesheets/textelements.css";
import "./stylesheets/custom-components.css";
import "./stylesheets/form-elements.css";
import "./stylesheets/layout.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/common/Login";
import Register from "./pages/common/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/common/Home";
import Exams from "./pages/admin/Exams";
import AddEditExam from "./pages/admin/Exams/AddEditExam";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* common route */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* user route */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* admin route */}
        <Route
          path="admin/exams"
          element={
            <ProtectedRoute>
              <Exams />
            </ProtectedRoute>
          }
        />

        <Route
          path="admin/exams/add"
          element={
            <ProtectedRoute>
              <AddEditExam />
            </ProtectedRoute>
          }
        />

        <Route
          path="admin/exams/edit/:id"
          element={
            <ProtectedRoute>
              <AddEditExam />
            </ProtectedRoute>
          }
        />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
