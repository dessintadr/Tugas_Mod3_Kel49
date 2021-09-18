import { render } from "@testing-library/react";
import React, { Component } from "react";

class Pelanggan extends Component {
    state = {
        namapelanggan: ''
    }
    componentDidMount() {
        alert('Isi nama pelanggan')
    }
    componentWillUnmount() {
        alert('Ok !!')
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState((state) => {
            return {
                [name]: value
            }
        })
    }
    render() {
        return (
            <>
                <div>
                    <h3> Isikan nama pelanggan</h3>
                    <input placeholder='Nama' style={{ textAlign: 'center', border: '1px solid black', height: '50px', width: '60%', marginLeft: 'auto', marginRight: 'auto' }} onChange={this.handleChange} name='namapelanggan'
                        value={this.state.namapelanggan} />
                    <br />
                    <br />
                    <span>{this.state.namapelanggan}</span>
                </div>
            </>
        )
    }
}
export default Pelanggan;
