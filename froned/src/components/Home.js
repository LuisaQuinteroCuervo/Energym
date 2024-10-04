import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path)
    }

return(
    <div className="containerM">
      <div className="row rowMenu ">
        <div className="col coll order-first">
          <ul></ul>
          <button 
          className="botonH"
          type="button"
          onClick={() => handleNavigate('/Clientes')}
          >Clientes</button>
        </div>
        <div className="col coll order-medio">

          <button 
          className="botonH1"
          type="button"
          onClick={() => handleNavigate('/Resumen')}
          >Resumenes</button>
        </div>
        </div>
        </div>


)
}
    export default Home;