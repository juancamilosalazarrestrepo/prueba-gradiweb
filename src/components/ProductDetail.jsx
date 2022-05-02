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
            size: "",
            amount: 1,
            color: "",
            productInCard: []

        }
    }

    addToCar = () => {

        this.setState({
            size: this.size,
            amount: this.state.amount,
            color: "red"

        })

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
        return (
            <div >
                <div className='productContainer'>
                    <div className='containerImage'>
                        <span>Catalog/ Sneackers / <span className='nameRoute'>{this.state.nameProduct} </span></span>

                        <img src={this.state.imagesProduct[0]} alt="" />

                    </div>
                    <div className='productCard'>
                        <p className='grayTitle'>by Nike x ALYX</p>
                        <h2 className="productName">{this.state.nameProduct}</h2>
                        <div className='prices'>
                            <span className='price'>${(this.state.price / 100) + ".00"}</span>
                            <span className='real-price'>${(this.state.comparePrice / 100) + ".00"}</span>
                        </div>
                        <hr />
                        <div className='selectColor'>
                            <label htmlFor="">Color:</label>
                            <label>
                                <input className='radioRed' id='radioRed' type="radio" name="color" value="rojo" />
                                {/* <label htmlFor="radioRed">Rojo</label> */}
                            </label>
                            <label>
                                <input className='radioBlack' type="radio" name="color" value="negro" />
                            </label>
                            <label>
                                <input className='radioWhite' type="radio" name="color" value="blanco" />
                            </label>


                        </div>
                        <hr />



                        <div className='selectSize'>

                            <label htmlFor="">Size:</label>
                            <button className='buttonSize btnSize1' value="7" onClick={this.selectSize1}>7</button>
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
                        <hr />

                        <div className='amountPrice'>
                            <div className='amountContainer'>
                                <button className='buttonAmount' onClick={this.amountDecrement}>-</button>
                                <input className='amountInput' type="number" value={this.state.amount} />
                                <button className='buttonAmount' onClick={this.amountIncrement}>+</button>
                            </div>

                            <div className='totalPriceContainer'>
                                <span className='priceTitle'>Total Price</span>
                                <span className='totalPrice'>$340000</span>
                            </div>




                        </div>

                        <div className='buttonsContainer'>
                            <button className='favoriteButton'>add to favorites</button>
                            <button className='addCarButton' onClick={this.addToCar}>add to car</button>

                        </div>



                    </div>



                </div>

                <div className='gallery'>
                    <img src={this.state.imagesProduct[1]} alt="" />
                    <img src={this.state.imagesProduct[2]} alt="" />
                    <img src={this.state.imagesProduct[3]} alt="" />

                </div>

                <button >Car</button>






            </div>



        );

    }
}



export default ProductDetail;
