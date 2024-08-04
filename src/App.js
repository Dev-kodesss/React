import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./compo/Product";

import img1 from './compo/images/r.jpeg'
import img2 from './compo/images/img2.jpeg'
import img3 from './compo/images/img3.jpeg'
import img4 from './compo/images/img4.jpeg'
function App() {
  return (
    <>
     
      <div className="product text-center">
        <h1>Product List</h1>
      </div>
      <div className="product-item container">
        <div className="row">
          <div className="col-md-3 ">
          <Product title="Jordan 12" content="Nike" price={1000} img={img1} />
          </div>
          <div className="col-md-3 ">
          <Product title="Jordan 14 Retro" price={2000} img={img2} />
          </div>
          <div className="col-md-3 ">
          <Product title="Nike Air Force 1 Low" price={5000} img={img3} />
          </div>
          <div className="col-md-3 ">
          <Product title="Nike Air 90" price={7000} img={img4} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
