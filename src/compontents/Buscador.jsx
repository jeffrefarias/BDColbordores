const Buscador = ({ setFiltro }) => {
    return (
        
            <input
                type="text"
                className="form-control"
                placeholder="Buscar colaborador..."
                onChange={(e) => setFiltro(e.target.value)}
            />
    );
}

export default Buscador;