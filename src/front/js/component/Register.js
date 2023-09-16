import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logopadel from "../../img/logopadel.png";
import padelmodelo from "../../img/padelmodelo.png";
import "../../styles/home.css";
import { Context } from "../store/appContext";

const registerValue = {
  name: "",
  apellido: "",
  email: "",
  password: "",
};



export const Register = () => {
  const { store, actions } = useContext(Context);
  const [register, setRegister] = useState(registerValue);

  const handleChange = (event) => {
    setRegister({ ...register, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    const result = await actions.registerUser(setRegister);
  };

  return (
    <>
      <div className="back-landing3">
        <nav
          className="navbar  border-bottom border-body bg-black "
          data-bs-theme="dark"
        >
          <div className="container">
            <span className="navbar-brand mb-0">
				<Link to="/home">
              <img
                src={logopadel}
                className="img-fluid"
                width="100"
                height="100px"
				/>
				</Link>
            </span>
          </div>
        </nav>
        <div className="container ">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card p-5  border-0 shadow rounded-3 my-5">
                <h2 className="text-center">
                  Registro de Usuario {""}
                  <i className="fa-solid fa-user"></i>
                </h2>
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">
                      Nombre
                    </label>
                    <input
                      type="name"
                      name="name"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Escribe tu nombre aqui"
                      onChange={handleChange}
                    />
                    <div id="emailHelp"></div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Apellido
                    </label>
                    <input
                      type="apellido"
                      name="apellido"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Escribe tu apellido aqui"
                      onChange={handleChange}
                    />
                    <div id="emailHelp"></div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Correo Electronico
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Escribe tu Email aqui"
                      onChange={handleChange}
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Contraseña
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Escribe tu contraseña aqui"
                      onChange={handleChange}
                    />
                  </div>
                </form>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Registrate
                </button>
                <Link
                  className="nav-link link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-center"
                  to="/login"
                >
                  ¿Ya estas registrado? dale click aqui
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center text-white bg-black border-top border-body ">
        <div className="container pt-4">
          <section className="mb-4">
            <a
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="white"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="white"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="white"
            >
              <i className="fab fa-google"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="white"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="white"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-white m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="white"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>
        <div className="text-center text-white p-3">© 2023 Copyright:</div>
      </footer>
    </>
  );
};

export default Register;
