import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PlusOne, PlusOneRounded } from "@material-ui/icons";
import { Button } from "@material-ui/core";
class BootstrapCarouselComponent extends React.Component {
render() {
return (
<div>
<div className='container-fluid' >
<div className="row">

</div>
<div className="row">
<div className="col-12">
<Carousel>
<Carousel.Item>

<div id="morph" className="d-flex  " style={{height:"170px",alignItems:"center",gap:"10px"}}> <img  src="https://tse3.mm.bing.net/th?id=OIP.umQykVZVU07VySHFSodqWgHaFm&pid=Api&P=0" style={{height:"100px"}} />
<div><h5>Monster Energy</h5>

<p>500 grams</p>
<button style={{backgroundColor:"greenyellow",color:"black",border:"none"}}>+</button></div></div>

</Carousel.Item>
<Carousel.Item>

<div id="morph" className="d-flex  " style={{height:"170px",alignItems:"center",gap:"10px"}}> <img  src="https://tse2.mm.bing.net/th?id=OIP.1QOlOlPQlr58kaKqA5914wHaGx&pid=Api&P=0" style={{height:"100px"}} />
<div><h5>Anniversary</h5>

<p>1500 grams</p>
<button style={{backgroundColor:"greenyellow",color:"black",border:"none"}}>+</button></div></div>

</Carousel.Item>
<Carousel.Item>

<div id="morph" className="d-flex  " style={{height:"170px",alignItems:"center",gap:"10px"}}> <img  src="https://tse2.mm.bing.net/th?id=OIP.eryfIfSPJqGh2tEHC5Aw2AHaHD&pid=Api&P=0" style={{height:"100px"}} />
<div><h5>Party Cakes</h5>

<p>1000 grams</p>
<button style={{backgroundColor:"greenyellow",color:"black",border:"none"}}>+</button></div></div>

</Carousel.Item>
</Carousel>
</div>
</div>
</div>
</div>
)
};
}
export default BootstrapCarouselComponent;