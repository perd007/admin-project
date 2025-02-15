import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { toast } from "react-toastify"

const registerValue = {
  name: "",
  last_name: "",
  email: "",
  password: "",
};



export const Register = () => {
  const { store, actions } = useContext(Context);
  const [register, setRegister] = useState(registerValue);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setRegister({ ...register, [event.target.name]: event.target.value });
  };


  const handleSubmit = async () => {
    if (register.name == "") {
      toast.error("El nombre es necesario para registrarte")
      return
    }
    if (register.last_name == "") {
      toast.error("El Apellido es necesario para registrarte")
      return
    }
    if (register.email == "") {
      toast.error("El email es necesario para registrarte ")
      return
    }
    if (register.password == "") {
      toast.error("El password es necesario para registrarte")
      return
    }
    const result = await actions.registerUser(register);
    if (result) {
      toast.success("Registro Exitoso!")
      navigate("/login");
      return
    } else {
      toast.error("Ocurrio un Error!")
      navigate("/login");
      return
    }

  };

  return (
    <>

      <div className="back-landing-register ">
        <div className="container  ">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-9 col-md-7 col-lg-5  ">
              <div className="card p-5  border-0 shadow rounded-3 my-2 form ">
                <h2 className="text-center ">
                  Registro de Usuario {""}
                  <i className="fa-solid fa-user"></i>
                </h2>
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Escribe tu nombre aqui"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Apellido
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Escribe tu apellido aqui"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Correo Electronico
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Escribe tu Email aqui"
                      onChange={handleChange}
                    />
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

    </>
  );
};

export default Register;
