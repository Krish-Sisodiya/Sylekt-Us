import { BrowserRouter,Routes,Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import CareersPage from "./pages/Creers";
import BookingPage from "./pages/BookingPage";
import ServicesPage from "./pages/ServicePage";



export default function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>} />

<Route
path="/about"
element={<About/>}
/>

<Route
path="/careers"
element={<CareersPage/>}
/>

<Route
path="/booking"
element={<BookingPage/>}
/>

<Route
path="/services"
element={<ServicesPage/>}
/>




</Routes>

</BrowserRouter>

)

}