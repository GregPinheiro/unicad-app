import React, { Component } from 'react';
import '../App.css';
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../api";
import DataService from "../services/entregas.service";
import Rota from './rota';

class Table extends Component {

    constructor(props) {
        super(props);
        this.searchItem = this.searchItem.bind(this);
        this.state = { items: []}
    }

    searchItem(e) {
        DataService.get(e.target.value)
        .then(response => {
            let datas = response.data;
            console.log(datas);
        })
        .catch(e => {
            console.log(e);
        })
    }
    

    async componentDidMount() { 
        const response = await api.get('');

        this.setState({ items: response.data.results})
    }

    render(){
        const { items } = this.state;

        return(
            <div>

                <table class="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome do Cliente</th>
                        <th scope="col">Previsão de Entrega</th>
                        <th scope="col">Função</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                        <tr scope="row">
                            <td>{item.id}</td>
                            <td>{item.nomeCliente}</td>
                            <td>{item.dataEntrega}</td>
                            <td>
                                <button 
                                    onClick={this.searchItem}
                                    class="btn btn-secondary"
                                    value={item.id}>
                                        Buscar Entrega
                                </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default Table;