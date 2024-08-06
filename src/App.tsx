import {
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import FilterList from "./pages/FilterList";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import LibroMatrix from "./pages/LibroMatrix";
import { CurricularBoxProvider, LibroMatrixProvider } from "./contexts";
import CurricularBox from "./pages/CurricularBox";
import FormikAndYup from "./pages/FormikAndYup";
import TableFormProvider from "./contexts/TableForm/TableForm.provider";
import TableForm from "./pages/TableForm";

const router = createBrowserRouter([{ path: "*", element: <Root /> }]);

function Root() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<FilterList />} />
        <Route
          path="/libro-matriz"
          element={
            <LibroMatrixProvider>
              <LibroMatrix />
            </LibroMatrixProvider>
          }
        />
        <Route
          path="/curriculum-box"
          element={
            <CurricularBoxProvider>
              <CurricularBox />
            </CurricularBoxProvider>
          }
        />
        <Route path="formik-and-yup" element={<FormikAndYup />} />
        <Route
          path="/table-form"
          element={
            <TableFormProvider>
              <TableForm />
            </TableFormProvider>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

function ErrorPage() {
  return (
    <div
      style={{
        fontSize: "30px",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div> No such page ;)</div>
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
