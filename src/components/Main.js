import { Component } from "react";
import React from "react";
import ProductSatu from "./ProductSatu";
import Pelanggan from "./Pelanggan";

class Main extends Component {
    state = {
        ProductSatu: false,
        ProductDua: false,
    }
    dropdown1 = () => {
        this.setState(() => {
            return {
                ProductSatu: !this.state.ProductSatu
            }
        })
    }
    dropdown2 = () => {
        this.setState(() => {
            return {
                Pelanggan: !this.state.Pelanggan
            }
        })
    }
    componentDidMount() {
        alert(`Hai Admin`)
    }
    render() {
        return (
            <div>
                <h2>Coffe Shop</h2>
                <p>by Kelompok 49</p>
                <div style={{ display: "flex" }}>
                    <div style={{ width: "30%" }}>
                        <button onClick={this.dropdown1}>{this.state.ProductSatu ? 'Tutup' : 'Pilih'} Minuman</button>
                        {this.state.ProductSatu && <ProductSatu />}
                    </div>
                    <div style={{ width: "30%" }}>
                        <button onClick={this.dropdown2}>{this.state.Pelanggan ? 'Tutup' : 'Isi'} Form</button>
                        {this.state.Pelanggan && <Pelanggan />}
                    </div>
                </div>
            </div>
        )
    }
}
export default Main;