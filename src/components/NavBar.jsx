import { Link  } from "react-router-dom";
import "../pages/Waiter/Waiter.css";

export const NavBar = () => { 
  console.log(location)

return location.pathname == "/Waiter" ? ((
    <header className="Top">
      <button className="buttonRouter" id="backWaiter"> {" "}<Link to="/">Back</Link>{" "}</button>
      <img src="src\img\SanrioCoffeeLogo1.png"></img>
      <button className="buttonRouter" id="backWaiter"> {" "}<Link to="/Kitchen">Cocina</Link>{" "}</button> 
      </header>
    ) ): (
      <header className="TopKitchen">
      <button className="buttonRouter" id="backMain"><img src="src\img\SanrioCoffeeLogo1.png"></img> {" "}<Link to="/">Back</Link>{" "}
       </button>
      </header>
    )
} 


