import "./Footer.css";
import { Link } from "react-router-dom";


function footerBody() {
    return (
        <footer>

            <div className="footer-contenido">
                <h3>CineEnCasa.com</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, alias!</p>
                <ul className="social">
                    <Link> <li><i className="fa fa-facebook" ></i></li></Link>
                    <Link> <li><i className="fa fa-twitter" ></i></li></Link>
                    <Link>  <li><i className="fa fa-google-plus" ></i></li></Link>
                    <Link>  <li><i className="fa fa-youtube" ></i></li></Link>
                    <Link>  <li><i className="fa fa-instagram" ></i></li></Link>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>copyright &copy;2022</p>
            </div>



        </footer>
    );
}

export default footerBody;