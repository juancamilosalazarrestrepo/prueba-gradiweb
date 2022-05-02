import { Component } from 'react';


class ProductsCar extends Component {
    constructor(props) {
        super(props);
        this.state = {

            amount: props.amount


        }
    }











    componentDidUpdate() {
        console.log("soy el carrito")


    }
    render() {
        console.log("estoy renderizando el carro");






        return (
            <div >
                este es el amount
                <p>{this.state.amount}</p>


            </div>



        );

    }
}



export default ProductsCar;
