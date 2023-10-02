import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { elementType } from "prop-types";

export const ClubList = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = (id) => {
    navigate(`/detailClub/${id}`);
  };

  const registerClub = () => {
    navigate("/clubs");
  };

  const fetchClub = async () => {
    const response = await actions.getClubs();
    if (response === 0) {
      registerClub();
    }
  };

  //validamos que exista un token, si no existe lo enviamos a login
  useEffect(() => {
    if (store.token === "" || !store.token) {
      alert("No autenticado");
      navigate("/login");
      return;
    }

    actions.getUserData();
    actions.getClubs();
  }, [store.token]);

  return (
    <>
    <div className="list-c">
        <div className=" container ">
            <h2 className="text-center text-white  p-2 fw-bold"> Registra tu Club</h2>
            <div className="card col-sm-12 col-md-7 col-lg-5 mx-auto form">
            <div className="card-body">
            <h5 className="card-title fw-bold text-center mb-2"> Club registrados</h5>
            <ul className="list-group col-12 mt-5 mb-2 p-2">
              <li className="list-group-item d-flex justify-content-between text-white form fw-bold">
               {store.clubslist.length} Lista de clubs 
              </li>
              {
                  store.clubslist.map((element, index) => {
                      return (
                        <li
                        className="list-group-item list-group-item-action  form fw-semibold form"
                        key={element.id}
                        onClick={() => handleSubmit(element.id)}
                        >
                      {element.name}
                      {" - "}
                      {element.estado} {element.ciudad} 
                    </li>
                  );
                }) //fin del map
              }
            </ul>
              </div>
              </div>
          </div>
        </div>
            
        <div className="fix">
        </div>
    </>
  );
};

export default ClubList;
