import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import App from '../App'
import SecondPage from '../pages/SecondPage'

function Router() {
return (
<BrowserRouter>
<Routes>
<Route path='/' element={<App/>}/>
<Route path='/pagina2' element={<SecondPage/>}/>
</Routes>
</BrowserRouter>
)
}
export default Router