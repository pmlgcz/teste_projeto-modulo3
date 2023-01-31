import "./Planos.css"
import { useEffect } from 'react';
import { useState } from 'react';
import API from '../../axios/config'
import EmCartazIMG from '../../images/cinema.png'
import Cinemas from "../Catalogo/catalogo";

export default function Precos() {


    const [precos, setPreco] = useState([]);

    useEffect(() => {
        API.get("/planos").then((response) => setPreco(response.data));
    }, []);


    return (
        <>
        <div id="Planos">
        <br></br><h2><img src={EmCartazIMG}/> Preços</h2><br></br>
        </div>
        <ul className="lista-planos">
            <li>
                {precos.map(function valores(item){
                    return <div>
                        <p><b> </b> {item. }</p>
                        <p><b> </b> {item. }</p>
                        <p><b> </b> {item. }</p>
                    </div>
                })}
            </li>
        </ul>
     </>
    );
}
