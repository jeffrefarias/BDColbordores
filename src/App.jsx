import './App.css'
import Formulario from './compontents/Formulario';
import Listado from './compontents/Listado'
import Buscador from './compontents/Buscador'
import BaseColaboradores from './Colaboradores';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

function App() {
    const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores);
    const [filtro, setFiltro] = useState("");
  
 

    const agregarColaborador = (nombre, correo,edad,cargo,telefono) => {
        setListaColaboradores([
            ...listaColaboradores,
            { nombre: nombre, correo: correo,edad:edad,cargo:cargo, telefono : telefono },
        ]);
    }

    const colaboradoresFiltrados = listaColaboradores.filter(colaborador => {
        return colaborador.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
            colaborador.correo.toLowerCase().includes(filtro.toLowerCase()) ||
            colaborador.edad.toLowerCase().includes(filtro.toLowerCase()) ||
            colaborador.cargo.toLowerCase().includes(filtro.toLowerCase()) ||
            colaborador.telefono.toLowerCase().includes(filtro.toLowerCase());
    });

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center">
             <div>
                <div className="row">
                        <div className="col-4 mb-3 mt-5">
                            <Buscador setFiltro={setFiltro} />
                        </div>
                    </div>
                <div className='row'>
                        <div className="col-8">
                            <Listado listaColaboradores={colaboradoresFiltrados} />
                        </div>
                        <div className="col-4">
                        <Formulario agregarColaborador={agregarColaborador}/>
                        </div>
                </div>
             </div>
            </div>


        </>
    )
}

export default App
