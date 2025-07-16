import {Outlet} from 'react-router-dom'
import {LayoutContainer} from './style'
import { Header } from '../../Components/header/Index.tsx'

export function DefaultLayout(){
    return(
        <LayoutContainer>
            <Header/>
            <Outlet/>
        </LayoutContainer>
    )
}