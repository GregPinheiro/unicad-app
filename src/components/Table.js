import React, { Component } from 'react';
import '../App.css';
import api from "../api";

class Table extends Component {
    state = { items: [] }

    async componentDidMount() {
        const response = await api.get('');

        this.setState({ items: response.data.result})
    }

    render(){
        const { items } = this.state;

        return(
            <div>
                <table>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Nome do Cliente</th>
                        <th>Previsão de Entrega</th>
                        <th>Ponto Partida</th>
                        <th>Ponto Destino</th>
                        <th>Função</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nomeCliente}</td>
                            <td>{item.dataEntrega}</td>
                            <td>{item.pontoPartida}</td>
                            <td>{item.pontoDestino}</td>
                            <td><a>Buscar Rota</a></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;