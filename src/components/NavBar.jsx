import { Link  } from "react-router-dom";
import "../pages/Waiter/Waiter.css";
import { BiArrowBack} from "react-icons/bi";
import { GiCookingPot} from "react-icons/gi";


export const NavBar = () => { 


return location.pathname == "/Waiter" ? ((
    <header className="Top">
      <Link to="/" className="buttonStyle"> <button className="buttonR" > {" "}<BiArrowBack/>{" "}</button></Link>
      <img src="src\img\SanrioCoffeeLogo1.png"></img>
      <Link to="/Kitchen" className="buttonStyle"><button className="buttonR">{" "}<GiCookingPot/>{" "}</button></Link>
      </header>
    ) ): (
      <header className="TopKitchen">
     <Link to="/"> <button className="buttonRouter" id="backMain"><img src="src\img\SanrioCoffeeLogo1.png"></img> {" "}<BiArrowBack/>{" "}
       </button></Link>
      </header>
    )
} 


