import React, { Fragment } from "react";
import { render } from "react-dom";

class ProductSatu extends React.Component {
    constructor(props) {
        super(props)
        this.handleChangeMenu = this.handleChangeMenu.bind(this)
        this.state = {
            minuman: [
                {
                    nama: 'vanilla latte',
                    gambar: 'src="https://cdn.idntimes.com/content-images/community/2021/04/fromandroid-5ad79a4b679f8ede003ddbfb5984f6bf_600x400.jpg"',
                    harga: 20000
                }
            ],
            menu: {
                kopi: 0
            },
            hargaTotal: 0
        }
    }
    handletotalHarga = () => {
        const {
            kopi
        }
            = this.state.menu
        this.setState({
            totalHarga: kopi
        })
    }

    handleChangeMenu(e) {
        e.preventDefault()
        const { menu } = this.state
        const { name } = e.target
        var index = e.nativeEvent.target.selectedIndex;
        const { value } = e.nativeEvent.target[index];
        this.setState({
            menu: {
                ...menu,
                [name]: Number(value)
            }
        }, this.handletotalHarga);
    }
    tambahMinuman = () => {
        this.setState((state) => {
            return { minuman: state.minum + 1 }
        })
    }
    render() {
        const {
            minuman,
            totalHarga
        } = this.state

        return (
            <>
                <div className="col-3">
                    <div className="kopi">
                        <Fragment>{
                            minuman.map(minum => {
                                return (
                                    <>

                                        <img src={minum.gambar} />
                                        <h3>{minum.nama}</h3>
                                        <div>{minum.harga}</div>
                                        <div>
                                            <button onClick={this.tambahMinuman}>Tambah</button>
                                            <br />
                                            <span>{this.state.minuman}</span>
                                        </div>
                                    </>
                                )
                            })
                        }
                        </Fragment>

                    </div>
                </div>
            </>
        )
    }
}

export default ProductSatu;