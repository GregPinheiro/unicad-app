import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import DataService from "../services/entregas.service";

class Form extends Component {

    constructor(props) {
        super(props);
        this.onChangeNomeCliente = this.onChangeNomeCliente.bind(this);
        this.onChangeDataEntrega = this.onChangeDataEntrega.bind(this);
        this.onChangePontoPartida = this.onChangePontoPartida.bind(this);
        this.onChangePontoDestino = this.onChangePontoDestino.bind(this);
        this.saveEntrega = this.saveEntrega.bind(this);
        this.novaEntrega = this.novaEntrega.bind(this);

        this.state = {
            nomeCliente: "",
            dataEntrega: Date(),
            pontoPartida: "",
            pontoDestino: "",

            submitted: false
        }
    }

    onChangeNomeCliente(e) {
        this.setState({
            nomeCliente: e.target.value
        });
    }

    onChangeDataEntrega(e) {
        this.setState({
            dataEntrega: e.target.value
        })
    }

    onChangePontoPartida(e) {
        this.setState({
            pontoPartida: e.target.value
        });
    }

    onChangePontoDestino(e) {
        this.setState({
            pontoDestino: e.target.value
        });
    }

    saveEntrega() {
        var data = {
            nomeCliente: this.state.nomeCliente,
            dataEntrega: this.state.dataEntrega,
            pontoPartida: this.state.pontoPartida,
            pontoDestino: this.state.pontoDestino,

            submitted: true
        }

        DataService.create(data)
        .then(response => {
            alert(response.data)           
        })
        .catch(e => {
            alert(e)
        });
    }

    novaEntrega() {
        this.state({
            nomeCliente: "",
            dataEntrega: Date(),
            pontoPartida: "",
            pontoDestino: "",

            submitted: false
        })
    }

    render() {
        return(
            <div lassName="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>Entrega registrada com sucesso!</h4>
                        <button className="btn btn-sucess"
                                onClick={this.novaEntrega}>
                                    Nova Entrega
                        </button>
                    </div>
                ):(
                    <div>
                        <form className="submit-form">
                            <div class="form-group">
                                <label for="NomeCliente">Nome do Cliente: </label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="NomeCliente" 
                                    required
                                    value={this.state.nomeCliente}
                                    onChange={this.onChangeNomeCliente}
                                    name="NomeCliente"
                                />
                            </div>
                            <div>
                                <label for="DataEntrega">Data de Entrega</label>
                                <input 
                                    type="date"
                                    class="form-control"
                                    id="DataEntrega"
                                    required
                                    value={this.state.dataEntrega}
                                    onChange={this.onChangeDataEntrega}
                                    name="DataEntrega"
                                />
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput2">Ponto de Partida</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="PontoPartida"
                                    required
                                    value={this.state.pontoPartida}
                                    onChange={this.onChangePontoPartida}
                                    name="PontoPartida"
                                />
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput2">Ponto de Destino</label>
                                <input t
                                    ype="text" 
                                    class="form-control" 
                                    id="PontoDestino" 
                                    required
                                    value={this.state.pontoDestino}
                                    onChange={this.onChangePontoDestino}
                                    name="PontoDestino"
                                />
                            </div>
                            <br />
                            <div class="form-group">
                            <button
                                onClick={this.saveEntrega}
                                class="btn btn-secondary">Cadastrar Entrega
                            </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        )
    }
}

export default Form;