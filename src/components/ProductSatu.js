import React, { Fragment } from "react";


class ProductSatu extends React.Component {
    constructor(props) {
        super(props)
        this.handleChangeMenu = this.handleChangeMenu.bind(this)
        this.state = {
            minuman: [
                ['Vanilla Latte', 25000],
                ['Americano', 30000],
                ['Kopi Susu', 20000],
                ['Vanilla Latte', 25000],
                ['Americano', 30000],
                ['Kopi Susu', 20000],
                ['Avogato', 30000]
            ],
            menu: {
                kopi1: 0,
                kopi2: 0,
                kopi3: 0,
                kopi4: 0,
                kopi5: 0,
                kopi6: 0,
            },
            hargaTotal: 0
        }
    }

    handletotal = () => {
        const {
            kopi1,
            kopi2,
            kopi3,
            kopi4,
            kopi5,
            kopi6
        }
            = this.state.menu
        this.setState({
            hargaTotal: kopi1 + kopi2 + kopi3 + kopi4 + kopi4 + kopi5 + kopi6
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
        }, this.handletotal);
    }


    render() {
        const {
            minuman,
            hargaTotal
        } = this.state

        return (
            <>
                <div className='tips-container'>
                    <div style={{ height: '50%' }} className='tips-content'>
                        <div className='pilih-minuman'>
                            <div className='minum1'>
                                <select onChange={this.handleChangeMenu} name='kopi1'>
                                    <option value='0'> Pilih Minuman</option>
                                    <Fragment>
                                        {
                                            minuman.map(minum => {
                                                return (
                                                    <option value={minum[1]}> {minum[0]} </option>
                                                )
                                            })
                                        }
                                    </Fragment>
                                </select> <br></br>
                                <select onChange={this.handleChangeMenu} name='kopi2'>
                                    <option value='0'> Pilih Minuman</option>
                                    <Fragment>
                                        {
                                            minuman.map(minum => {
                                                return (
                                                    <option value={minum[1]}> {minum[0]} </option>
                                                )
                                            }
                                            )
                                        }
                                    </Fragment>
                                </select> <br></br>
                                <select onChange={this.handleChangeMenu} name='kopi3'>
                                    <option value='0'> Pilih Minuman</option>
                                    <Fragment>
                                        {
                                            minuman.map(minum => {
                                                return (
                                                    <option value={minum[1]}> {minum[0]} </option>
                                                )
                                            }
                                            )
                                        }
                                    </Fragment>
                                </select> <br></br>
                                <div className='minum2'>
                                    <select onChange={this.handleChangeMenu} name='kopi4'>
                                        <option value='0'> Pilih Minuman</option>
                                        <Fragment>
                                            {
                                                minuman.map(minum => {
                                                    return (
                                                        <option value={minum[1]}> {minum[0]} </option>
                                                    )
                                                }
                                                )
                                            }
                                        </Fragment>
                                    </select> <br></br>
                                    <select onChange={this.handleChangeMenu} name='kopi5'>
                                        <option value='0'> Pilih Minuman</option>
                                        <Fragment>
                                            {
                                                minuman.map(minum => {
                                                    return (
                                                        <option value={minum[1]}> {minum[0]} </option>
                                                    )
                                                }
                                                )
                                            }
                                        </Fragment>
                                    </select> <br></br>
                                    <select onChange={this.handleChangeMenu} name='kopi6'>
                                        <option value='0'> Pilih Minuman</option>
                                        <Fragment>
                                            {
                                                minuman.map(minum => {
                                                    return (
                                                        <option value={minum[1]}> {minum[0]} </option>
                                                    )
                                                }
                                                )
                                            }
                                        </Fragment>
                                    </select> <br></br>
                                    <h2 style={{ color: '#000', textAlign: 'center', flex: '1 0 100%', margin: '10px 0' }}>Total Harga: <br></br>Rp {hargaTotal} </h2>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </>
        )
    }
}
export default ProductSatu;