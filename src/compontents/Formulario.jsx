import { useState } from "react";
import Alert from './Alert'



const AgregarColaboradores = ({agregarColaborador}) => {
    const [nombreColaborador, setNombreColaborador] = useState("");
    const [correoColaborador, setCorreoColaborador] = useState("");
    const [edadColaborador, setEdadColaborador] = useState("");
    const [cargoColaborador, setCargoColaborador] = useState("");
    const [telefonoColaborador, setTelefonoColaborador] = useState("");
    const [errorVacios, setErrorVacios] = useState(false);
    const [errorEdad, setErrorEdad] = useState(false);
    const [errorTelefono, setErrorTelefono] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false)
    const [success, setSuccess] = useState(false);


    


    const enviarFormulario = (e) => {
        e.preventDefault();
        setSuccess(false); 
        setErrorVacios(false);
        setErrorEdad(false);
        setErrorTelefono(false);
        setErrorEmail(false);
    
        if (!nombreColaborador || !correoColaborador || !cargoColaborador) {           
            setErrorVacios(true);
            return; 
        }
    
        if(!validarEdad(edadColaborador)) {
            setErrorEdad(true);
            return;
        }
    
        if (!validarTelefono(telefonoColaborador)) {
            setErrorTelefono(true);
            return;
        }
    
        if (!validarEmail(correoColaborador)) {
            setErrorEmail(true);
            return;
        }
    
        agregarColaborador(nombreColaborador, correoColaborador, edadColaborador, cargoColaborador, telefonoColaborador);
        setNombreColaborador("");
        setCorreoColaborador("");
        setEdadColaborador("");
        setCargoColaborador("");
        setTelefonoColaborador("");
        setSuccess(true);
    }
    

    const capturaNombre = (e) => {
        setNombreColaborador(e.target.value);
    };

    const capturaCorreo = (e) => {
        setCorreoColaborador(e.target.value);
    };

    const capturaEdad = (e) => {
        setEdadColaborador(e.target.value);
    };

    const capturaCargo = (e) => {
        setCargoColaborador(e.target.value);
    };

    const capturaTelefono = (e) => {
        setTelefonoColaborador(e.target.value);
    };

    
    const validarEdad = (edad) => {
        const agePattern = /^(1[89]|[2-9]\d|\d{3,})$/;
        return agePattern.test(edad);
    };

    const validarTelefono = (telefono) => {
        const telefonoPattern = /^9(\d{8}| ?\d{4}-\d{4})$/;
        return telefonoPattern.test(telefono);
    };
    

    const validarEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
      };

    return (
        <>
     
            
                <h3 className="fw-bold">Agregar Colaborador</h3>
                <form onSubmit={enviarFormulario}>  
                <div className="form-group mt-3">
                  <input className="form-control" type="text" name="nombreColaborador" onChange={capturaNombre} value={nombreColaborador} placeholder="Nombre del Colaborador" autoComplete="off"/>                
                </div>
                <div className="form-group mt-3">
                  <input className="form-control" type="text" name="correoColaborador" onChange={capturaCorreo} value={correoColaborador} placeholder="Email del colaborador" autoComplete="off"/>
                </div>
                <div className="form-group mt-3">
                    <input className="form-control" type="number" name="edadColaborador" onChange={capturaEdad} value={edadColaborador} placeholder="Edad del colaborador" min="0" autoComplete="off"/>
                </div>
                <div className="form-group mt-3">
                  <input className="form-control" type="text" name="cargoColaborador" onChange={capturaCargo} value={cargoColaborador} placeholder="Cargo del colaborador" autoComplete="off"/>
                </div>
                <div className="form-group mt-3">
                 <input className="form-control" type="text" name="teléfonoColaborador" onChange={capturaTelefono} value={telefonoColaborador} placeholder="Teléfono del colaborador" autoComplete="off"/>
                </div>                
                    <button type="submit" className="form-control btn btn-success mt-3">Ingresar Colaborador</button>
                </form>
                <div className="mt-3">
                    {errorVacios ? <Alert message="Todos los campos son obligatorios" type="danger" show={errorVacios} /> : null}
                    {errorEdad ? <Alert message="Los Colaboradores no pueden ser menor a 18 años" type="danger" show={errorEdad} /> : null}
                    {errorTelefono ? <Alert message="El número de teléfono ingresado no es válido." type="danger" show={errorTelefono} /> : null}
                    {errorEmail ? <Alert message="Debe ingresar un email válido" type="danger" show={correoColaborador} /> : null}
                    {success ? <Alert message="Colaborador agregado con éxito" type="success" show={success} /> : null} 
                </div>
    
     
           
        </>
    );
};

export default AgregarColaboradores;