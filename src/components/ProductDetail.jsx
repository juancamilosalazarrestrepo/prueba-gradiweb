import { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import ProductsCar from './ProductsCar.jsx';


class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            nameProduct: "",
            imagesProduct: [],
            size: "7",
            price:0,
            amount: 1,
            color: "Rojo",
            productInCard: [],
            description: "",
            totalPrice:0

        }
    }



    addToCar = () => {

        this.setState({
            size: this.state.size,
            amount: this.state.amount,
            color: "red",
            totalPrice: this.state.totalPrice + ((this.state.price / 100)*this.state.amount)

        });
        let saveProducts = document.querySelectorAll(".saveProducts");
        let emptyCar = document.querySelectorAll(".emptyCar");

        emptyCar.forEach((item) =>
        item.classList.add('ocult'));
    


        
        
        

        saveProducts.forEach((item) =>
          item.innerHTML += 
          "<span> <span  style='font-weight:700'>Producto: </span> " + this.state.nameProduct + "</span><br/>"+
          "<span> <span style='font-weight:700'>Precio: </span> " + ((this.state.price / 100)*this.state.amount) + ".00" + "</span><br/>"+
          "<span > <span style='font-weight:700'>Cantidad: </span> " +  this.state.amount + "</span><br/>" + 
          "<span> <span style='font-weight:700'>Talla: </span> " +  this.state.size + "</span><br/>"+
          "<span> <span style='font-weight:700'>Color: </span> " +  this.state.color + "</span><br/>"+
          "<hr/>"
          );

    }

    switchCar = () => {
        let carProduct = document.querySelector('.car');

        carProduct.classList.toggle('activate');
        

        
    }

    selectColorRed = () => {
        this.setState({

            color: "Rojo"


        })

        let btnsColor = document.querySelectorAll(".selectBorder");
        let btnRed =document.querySelectorAll(".selectBorderRed")

        btnsColor.forEach((item) =>
                item.classList.remove('selected'));

                btnRed.forEach((item) =>
                item.classList.add('selected'));
    }

    selectColorBlack = () => {
        this.setState({

            color: "Negro"


        })

        let btnsColor = document.querySelectorAll(".selectBorder");
        let btnBlack =document.querySelectorAll(".selectBorderBlack")

        btnsColor.forEach((item) =>
                item.classList.remove('selected'));

        btnBlack.forEach((item) =>
                item.classList.add('selected'));
    }

    selectColorWhite = () => {
        this.setState({

            color: "Blanco"


        })

        let btnsColor = document.querySelectorAll(".selectBorder");
        let btnWhite =document.querySelectorAll(".selectBorderWhite")

        btnsColor.forEach((item) =>
                item.classList.remove('selected'));

        btnWhite.forEach((item) =>
                item.classList.add('selected'));
    }

    amountIncrement = () => {
        this.setState({

            amount: this.state.amount + 1,


        })
    }




    selectSize1 = () => {



        this.setState({

            size: "7"


        })
        console.log(this.state.size)

    }
    selectSize2 = () => {



        this.setState({

            size: "7.5"


        })
        console.log(this.state.size)

    }

    selectSize3 = () => {



        this.setState({

            size: "8"


        })
        console.log(this.state.size)

    }


    selectSize4 = () => {



        this.setState({

            size: "8.5"


        })
        console.log(this.state.size)

    }

    selectSize5 = () => {



        this.setState({

            size: "9"


        })
        console.log(this.state.size)

    }

    selectSize6 = () => {



        this.setState({

            size: "9.5"


        })
        console.log(this.state.size)
    }
    selectSize7 = () => {



        this.setState({

            size: "10"


        })
        console.log(this.state.size)
    }

    selectSize8 = () => {



        this.setState({

            size: "10.5"


        })
        console.log(this.state.size)
    }

    selectSize9 = () => {



        this.setState({

            size: "11"


        })
        console.log(this.state.size)
    }
    selectSize10 = () => {



        this.setState({

            size: "11.5"


        })
        console.log("este es la talla" + this.state.size)
    }

    amountDecrement = () => {
        this.setState({

            amount: this.state.amount - 1,


        })

    }

    apiCall(url, consecuencia) {
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(error => console.log(error))
    }

    componentDidMount() {
        console.log("me monte");
        this.getProductInfo();

        
    }

    getProductInfo() {


        this.apiCall("https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js", this.showProduct)


    }
    showProduct = (data) => {

        this.setState({
            data: data,
            nameProduct: data.title,
            imagesProduct: data.images,
            description: data.description,

            price: data.price,
            comparePrice: data.compare_at_price

        })


        console.log(this.state.nameProduct)



    }

    componentDidUpdate() {
        console.log("me actualize")


    }
    render() {
        console.log("estoy renderizando");

        
       
        
        
       

        

        
        

        
        let sizeBtns = document.querySelectorAll('.buttonSize');
        function activeLink() {
           
                
                
            

            console.log(sizeBtns)
            sizeBtns.forEach((item) =>
                item.classList.remove('active'));
            this.classList.add('active');
        }

        sizeBtns.forEach((item) =>
            item.addEventListener('click', activeLink));


            



        console.log("este es el nombre" + this.state.nameProduct);

        let carButtons = document.querySelectorAll('.carButtonAct');
        
        

        let carProduct = document.querySelector('.car');

     

          let descriptionContainer = document.querySelectorAll('.description');

          descriptionContainer.forEach((item) =>
          item.innerHTML = this.state.description);

      

       

        function activeCar() {
           
            carProduct.classList.toggle('activate');

            

                
            

            
        }
        return (
            <div >
                 
                 
               
              

                    
    
     
                <div className='productContainer'>
               
                    <div className='containerImage'>
                        <span className="route">Catalog/ Sneackers / <span className='nameRoute'>{this.state.nameProduct} </span></span>
                        <div className="containerImg"><img src={this.state.imagesProduct[0]} alt="" /></div>
                        <div className="btnsliderCont"><div className="btnslider selected"></div> <div className="btnslider"></div> <div className="btnslider"></div></div>

                        

                    </div>
                    <div className='productCard'>
                        <div className="btnCar"><button id="carButtonAct" className="carButtonAct"  onClick={this.switchCar}><ion-icon name="cart-outline"></ion-icon></button></div>
                    
                        <p className='grayTitle'>by Nike x ALYX</p>
                        <h2 className="productName">{this.state.nameProduct}</h2>
                        <div className='prices'>
                            <span className='price'>${(this.state.price / 100) + ".00"}</span>
                            <span className='real-price'>${(this.state.comparePrice / 100) + ".00"}</span>
                        </div>
                        <hr />
                        <div className='selectColor'>
                            <label htmlFor="">Color:</label>

                            <div className="selectBorder selectBorderRed selected" onClick={this.selectColorRed}><div className="btnRed"></div></div>
                            <div className="selectBorder selectBorderBlack" onClick={this.selectColorBlack}><div className="btnBlack"></div></div>
                            <div className="selectBorder selectBorderWhite" onClick={this.selectColorWhite}><div className="btnWhite"></div></div>

                            
                           


                        </div>
                        <hr />


                         <div className='selectSizeCont'>
                         <label htmlFor="">Size:</label>
                          <div className='selectSize'>

                            
                            <button className='buttonSize btnSize1 active' value="7" onClick={this.selectSize1}>7</button>
                            <button className='buttonSize btnSize2' onClick={this.selectSize2}>7.5</button>
                            <button className='buttonSize btnSize3' onClick={this.selectSize3}>8</button>
                            <button className='buttonSize btnSize4' onClick={this.selectSize4}>8.5</button>
                            <button className='buttonSize btnSize5' onClick={this.selectSize5}>9</button>
                            <button className='buttonSize btnSize6' onClick={this.selectSize6}>9.5</button>
                            <button className='buttonSize btnSize7' onClick={this.selectSize7}>10</button>
                            <button className='buttonSize btnSize8' onClick={this.selectSize8}>10.5</button>
                            <button className='buttonSize btnSize9' onClick={this.selectSize9}>11</button>
                            <button className='buttonSize btnSize10' onClick={this.selectSize10}>11.5</button>

                          </div>

                        </div>
                        
                        <hr />

                        <div className='amountPrice'>
                            <div className='amountContainer'>
                                <button className='buttonAmount decrement' onClick={this.amountDecrement}>-</button>
                                <input className='amountInput' type="number" value={this.state.amount} />
                                <button className='buttonAmount increment' onClick={this.amountIncrement}>+</button>
                            </div>

                            <div className='totalPriceContainer'>
                                <span className='priceTitle'>Total Price</span>
                                <span className='totalPrice'>${((this.state.price / 100)*this.state.amount) + ".00"}</span>
                            </div>




                        </div>

                        <div className='buttonsContainer'>
                            <button className='favoriteButton'>add to favorites</button>
                            <button className='addCarButton' onClick={this.addToCar}>add to car</button>

                        </div>

                        <div className="description"></div>
                        



                    </div>
                    
                    <div className="car">
                    
                    
                    
                    
                    <h4 className="titleCar"> Tu carrito</h4>
                    <hr />

                    <span className="emptyCar">Carrito Vacio</span>

                    <div className="saveProducts">
                    
                        
                    </div>

                    <div className="total">
                        <hr />
                        <h3><span>Total a pagar : </span>  ${this.state.totalPrice}.00 </h3>
                        

                    </div>


                   
                    
                    </div>




                </div>

                <div className="galleryContainer">

                   <div className='gallery'>

                    <img src={this.state.imagesProduct[1]} alt="" />
                    <img src={this.state.imagesProduct[2]} alt="" />
                    <img src={this.state.imagesProduct[3]} alt="" />

                   </div>
                
                  
                
                </div>

               
               

                

                

                   
                    


                

            </div>



        );

    }
}



export default ProductDetail;
