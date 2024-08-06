import { NavLink } from "react-router-dom";

const TABS = [
  { label: "Home", id: "home" },
  { label: "List", id: "list" },
  { label: "Libro Matriz", id: "libro-matriz" },
  { label: "Caja Curricular", id: "curriculum-box" },
  { label: "Formik and Yup", id: "formik-and-yup" },
  { label: "Tabla-Formulario", id: "table-form" },
];

const NavBar = () => {
  const basicStyle = {
    padding: "10px",
    fontWeight: "bold",
    textDecoration: "none",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        padding: "10px",
      }}
    >
      {TABS.map((tab) => (
        <NavLink
          key={tab.id}
          style={({isActive}) => ({
            ...basicStyle,
            backgroundColor: isActive ? "black" : "transparent",
            color: isActive ? "white" : "black",
            cursor: isActive ? "default" : "pointer",
          })}
          to={`/${tab.id}`}
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
};

export default NavBar;
