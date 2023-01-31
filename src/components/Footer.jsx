import instagram from "../images/instagram.png"
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import googleplus from "../images/google-plus.png" 
import "./Footer.css"
export default function Footer () {

    return (
        <div className="Footer">
       
        <p> SeriesFlix é um site de series feito para o modulo 3 (REACT) do curso Programadores Cariocas, cujo objetivo consumir fake API e utilizar os métodos HTTP</p>
        <ul className="listaFooter">
            <li><img className="imgFooter" src={instagram} alt="" /></li>
            <li><img className="imgFooter" src={facebook} alt="" /> </li>
            <li><img className="imgFooter" src={twitter} alt="" /> </li>
        </ul>
        </div>
    )
}
