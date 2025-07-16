import { MapPinLine, ShoppingCart } from "phosphor-react";
import logo from '../../assets/header/Logo.svg';
import { Buy, HeaderStyle, Location } from "./Index";


export function Header(){
    return(
        <HeaderStyle>
            <figure>
                <img src={logo}/>
            </figure>
            <nav>
                <Location>
                    <MapPinLine size={23} weight="fill"/>
                    <p>Irecê, BA</p>
                </Location>
                <Buy>
                    
                    <ShoppingCart size={23} weight="fill"/>
                </Buy>
            </nav>
        </HeaderStyle>
    )


}