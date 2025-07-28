import { MapPinLine, ShoppingCart } from "phosphor-react";
import logo from '../../assets/header/Logo.svg';
import { Buy, HeaderStyle, Location } from "./Index";
import { NavLink } from "react-router-dom";


export function Header(){
    function handleBuy(){

    }

    return(
        <HeaderStyle>
            <NavLink to="/">
                <figure>
                    <img src={logo}/>
                </figure>
            </NavLink>
            <nav>
                <Location>
                    <MapPinLine size={23} weight="fill"/>
                    <p>Irecê, BA</p>
                </Location>
                <NavLink to="/Checkout" title="Finalizar Compra">
                    <Buy>
                        <ShoppingCart size={23} weight="fill"/>
                    </Buy>
                </NavLink>
                
            </nav>
        </HeaderStyle>
    )


}