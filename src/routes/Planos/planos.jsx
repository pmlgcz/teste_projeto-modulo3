import "./Planos.css"
import { useEffect } from 'react';
import { useState } from 'react';
import API from '../../axios/config'
import PlanosIMG from '../../images/cinema.png'
import Catalogo from "../Catalogo/catalogo";

export default function Planos() {


    const [planos, setPlanos] = useState([]);

    useEffect(() => {
        API.get("/planos").then((response) => setPlanos(response.data));
    }, []);


    return (
        <>
        <div id="Planos">
        <br></br><h2><img src={PlanosIMG}/> Planos</h2><br></br>
        </div>
        <ul className="lista-planos">
            <li>
                {planos.map(function valores(item){
                    return <div>
                        <p><b> </b> {item.PlanosBásico}</p>
                        <p><b> </b> {item.PlanoUp}</p>
                        <p><b> </b> {item.PlanoPremium}</p>
                    </div>
                })}
            </li>
        </ul>
     </>
    );
}
