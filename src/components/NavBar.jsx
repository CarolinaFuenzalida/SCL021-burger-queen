import { Link  } from "react-router-dom";
import "../pages/Waiter/Waiter.css";
import { BiArrowBack} from "react-icons/bi";
import { GiCookingPot} from "react-icons/gi";


export const NavBar = () => { 


return location.pathname == "/Waiter" ? ((
    <header className="Top">
      <Link to="/" className="buttonStyle"> <button className="buttonR" > {" "}<BiArrowBack/>{" "}</button></Link>
      <img src="https://cdn.discordapp.com/attachments/1037900045095284787/1065335756639453234/SanrioCoffeeLogo1.png"></img>
      <Link to="/Kitchen" className="buttonStyle"><button className="buttonR">{" "}<GiCookingPot/>{" "}</button></Link>
      </header>
    ) ): (
      <header className="TopKitchen">
     <Link to="/"> <button className="buttonRouter" id="backMain"><img src="https://cdn.discordapp.com/attachments/1037900045095284787/1065335756639453234/SanrioCoffeeLogo1.png"></img> {" "}<BiArrowBack/>{" "}
       </button></Link>
      </header>
    )
} 


