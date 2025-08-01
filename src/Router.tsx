import {Route, Routes} from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home/Index'
import { Checkout } from './pages/Checkout/index'


export function Router(){
    return(
        <Routes>
            <Route path='/' element={<DefaultLayout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/Checkout' element={<Checkout/>}/>
            </Route>
        </Routes>
    )
}