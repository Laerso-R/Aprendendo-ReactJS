import './contador.css'
import React, { Component } from 'react'
import Display from './Display'

export default class Contador extends Component {

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })

    }

    /*    constructor (props) {
        super(props)

        this.state = {
            passo: props.passo,
            valor: 0
        }
    } */

    render () {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <div>
                    <label for="passoInput">Passo:</label>
                    <input id="passoInput" type="number" style={{}}
                        value={this.state.passo}
                        onChange={e => this.setState({ passo: +e.target.value})}/>
                </div>
                <Display valor={this.state.valor}></Display>

                <div>
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                </div>
            </div>
        )
    }
}