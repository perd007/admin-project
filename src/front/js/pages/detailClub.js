import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify"




export const DetailClub = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();
    const params = useParams();
    const id = parseInt(params.id);



    const SubmitEdit = (id_club) => {
        navigate(`/editClub/${id_club}`)
    }
    const deleteClub = async (id_club) => {
        confirm("¿Esta seguro de eliminar este Club?")
        const deleteClub = await actions.deleteClub(id_club);

        if (deleteClub) {
            toast.success("Club eliminado")
            navigate("/clubList");
            return
        } else {
            toast.error("Error al Eliminar")
            navigate("/clubList");
            return
        }

    }
    const cargarLugar = (id_club) => {
        navigate(`/placelist/${id_club}`);
    }

    //validamos que exista un token, si no existe lo enviamos a login
    useEffect(() => {
        if (store.token === "" || !store.token) {
            toast.error("No autenticado");
            navigate("/login");
            return;
        }
        actions.getClubData(id);
    }, [store.token]);

    return (
        <>

            <div className="list-c container-fluid">
                <div className="row">
                    <div className="card col-sm-9 col-md-7 col-lg-5 mx-auto mt-5 form d-flex justify-content-center">
                        <div className="card-body ">
                            <h3 className="card-title d-flex justify-content-center fw-bold">{store.clubData.name}</h3>
                            <p className="card-text fs-5">Ciudad:{" "}{store.clubData.ciudad}</p>
                            <p className="card-text fs-5">Estado:{" "}{store.clubData.estado}</p>
                            <p className="card-text fs-5">Direccion:{" "}{store.clubData.direccion}</p>
                            <p className="card-text fs-5">Descripcion:{" "}{store.clubData.description}</p>
                            <div className="d-flex justify-content-between">
                                <button href="#" className="btn btn-warning" onClick={() => SubmitEdit(id)}>Editar</button>
                                <button href="#" className="btn btn-danger" onClick={() => deleteClub(id)} >Eliminar</button>
                                <button href="#" className="btn btn-primary" onClick={() => cargarLugar(id)} >Lugares</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

