import {Route, Routes} from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home/Index'
import { Checkout } from './pages/Checkout/Index'
import { Confirm } from './pages/Confirm/Index'


export function Router(){
    return(
        <Routes>
            <Route path='/' element={<DefaultLayout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/Checkout' element={<Checkout/>}/>
                <Route path='/Confirm' element={<Confirm/>}/>
            </Route>
        </Routes>
    )
}