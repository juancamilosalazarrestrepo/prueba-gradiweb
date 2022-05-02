
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import ProductsCar from './components/ProductsCar.jsx';
import ProductDetail from './components/ProductDetail.jsx';


function App() {
    return (



        <div className='App'>
            <Link to="/car">Car</Link>


            {/* <Routes>

                <Route path="/car" element={<ProductsCar/>} />

            </Routes> */}






            <ProductDetail />

            <ProductsCar />








        </div>



    );

}




export default App;
