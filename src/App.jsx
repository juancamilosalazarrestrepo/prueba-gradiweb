import { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            nameProduct: "",
            imagesProduct: []

        }
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
        let contenido;



        if (this.state.gif == "") {
            contenido = <p>Cargando...</p>
        } else {
            contenido = <div>

                <h2>{this.state.nameProduct}</h2>
                <img src={this.state.imagesProduct[0]} alt="" />


            </div>;

        }
        console.log("este es el nombre" + this.state.nameProduct);
        return (
            <div >
                <div className='productContainer'>
                    <div className='containerImage'>
                        <span>Catalog/ Sneackers / <span className='nameRoute'>{this.state.nameProduct} </span></span>

                        <img src="//cdn.shopify.com/s/files/1/0454/8316/3809/products/product-1.jpg?v=1639585159" alt="" />

                    </div>
                    <div className='productCard'>
                        <p className='grayTitle'>by Nike x ALYX</p>
                        <h2 className="productName">{this.state.nameProduct}</h2>
                        <div className='prices'>
                            <span className='price'>${this.state.price}</span>
                            <span className='real-price'>${this.state.comparePrice}</span>
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



                        <div className='selectSize'>

                            <label htmlFor="">Size:</label>
                            <button className='buttonSize btnSize1'>7</button>
                            <button className='buttonSize btnSize2'>7.5</button>
                            <button className='buttonSize btnSize3'>8</button>
                            <button className='buttonSize btnSize4'>8.5</button>
                            <button className='buttonSize btnSize5'>9</button>
                            <button className='buttonSize btnSize6'>9.5</button>
                            <button className='buttonSize btnSize7'>10</button>
                            <button className='buttonSize btnSize8'>10.5</button>
                            <button className='buttonSize btnSize9'>11</button>
                            <button className='buttonSize btnSize10'>11.5</button>

                        </div>

                        <div className='amountPrice'>
                            <div className='amountContainer'>
                                <button className='buttonAmount'>-</button>
                                <input className='amountInput' type="number" value={1} />
                                <button className='buttonAmount'>+</button>
                            </div>

                            <div className='totalPriceContainer'>
                                <span className='priceTitle'>Total Price</span>
                                <span className='totalPrice'>$340000</span>
                            </div>




                        </div>

                        <div className='buttonsContainer'>
                            <button className='favoriteButton'>add to favorites</button>
                            <button className='addCarButton'>add to car</button>

                        </div>



                    </div>



                </div>

                <div className='gallery'>
                    <img src="//cdn.shopify.com/s/files/1/0454/8316/3809/products/product-2.jpg?v=1639585158" alt="" />
                    <img src="//cdn.shopify.com/s/files/1/0454/8316/3809/products/product-2.jpg?v=1639585158" alt="" />
                    <img src="//cdn.shopify.com/s/files/1/0454/8316/3809/products/product-2.jpg?v=1639585158" alt="" />

                </div>



                {contenido}


            </div>



        );

    }
}



export default App;
