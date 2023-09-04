import {Link} from "react-router-dom"
import './Navbar.css'
export default function Home(){

    return(
        <nav>
            <div className="one">
            <Link to="/"> Numerical Methods </Link>
            </div>
            <div className="two">
                <ul>
           <li> <Link to="/bi"> Bisection  </Link> </li>
           <li> <Link to="/Taylor"></Link> </li>
            </ul>
            </div>
        </nav>
    )
}