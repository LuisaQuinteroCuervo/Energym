
import { useNavigate } from "react-router-dom";



const Resumen = () => {
    const navigate = useNavigate();

    const handleDevolver = () => {
        navigate("/");
    }



    return (
        <di>
            <div className="container containerCli">
            <div className="volver">
                <button className="btnV" onClick={handleDevolver}></button>
                <h1 className="titC">Lista Clientes</h1>
            </div>
            </div>
        </di>
    )


}
export default Resumen;