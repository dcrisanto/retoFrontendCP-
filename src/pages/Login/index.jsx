import "../../styles/login.scss";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import ModalLogin from "../../modals/ModalLogin";

const Login = () => {
  const context = useContext(ShoppingCartContext);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dulceria");
  };

  const initialForm = {
    username: "",
    password: "",
  };
  console.log(initialForm);
  //creando una referencia, pasando un valor initial
  const form = useRef(initialForm);
  const handleSubmit = (event) => {
    //preventDefault para que envie los valores no por url sino que continue con la lógica que se tiene. Así no se recargará la página
    event.preventDefault();

    //FormData nos permite instanciar los elementos que se encuentran dentro del formulario y los va a capturar conforme sean llenados. Acceder a los valores del form por medio de current
    const formData = new FormData(form.current);
    const data = {
      username: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);

    if (data.username != "" && data.password != "") {
      context.openModalLogin();
      setTimeout(() => {
        navigate("/dulceria");
      }, 2000);
    } else {
      alert("Ingresa datos");
    }
  };
  return (
    <>
      <section className="login-section">
        <div className="container-form">
          <form className="form" action="" ref={form}>
            <label className=" label label-email">
              <span>Email address</span>
              <input
                className="input input-email"
                type="email"
                name="email"
                placeholder="tu correo"
              />
            </label>
            <label className="label label-password">
              <span>Password</span>
              <input
                className="input input-password"
                name="password"
                type="password"
                placeholder="tu contraseña"
              />
            </label>
            <div className="container-button">
              <button
                className="primary-button login-button"
                onClick={handleSubmit}
              >
                Log in
              </button>
            </div>
          </form>
        </div>
        <button onClick={() => handleClick()} className="guest-btn btn-primary">
          Invitado
        </button>
      </section>
      {context.isOpenModalLogin && <ModalLogin />}
    </>
  );
};

export default Login;
