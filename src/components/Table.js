import React, { Component } from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../api";
import DataService from "../services/entregas.service";

class Table extends Component {

    constructor(props) {
        super(props);
        this.searchItem = this.searchItem.bind(this);
        this.tableView = this.tableView.bind(this);
        this.state = { 
            items: [], 
            item: [],
            mapsView: false
        }
    }

    searchItem(e) {
        DataService.get(e.target.value)
        .then(response => {
            this.setState({ item: response.data});
            console.log(response.data);
        })
        .then(() => {
            this.setState({ mapsView: true })
        })
        .catch(e => {
            console.log(e);
        })
    }

    tableView() {
        this.setState({ mapsView: false })
    }
    

    async componentDidMount() { 
        const response = await api.get('');
        console.log(response)
        this.setState({ items: response.data})
    }

    render(){
        const { items, item, mapsView } = this.state;

        return(
            <div>
                {mapsView ? (
                    <div>
                        <h1>Rota para Entrega</h1>

                        <table class="table table-dark">
                            <thead>
                            <tr>
                                <th scope="col">Informações da Entrega</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr><td>Nome do Cliente: {item.nomeCliente} </td></tr>
                                <tr><td>Data da Entrega: {item.dataEntrega} </td></tr>
                            </tbody>
                        </table>

                        <button className="btn btn-sucess"
                                onClick={this.tableView}>
                                    Voltar
                        </button>
                    </div>
                ):(
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
                                        Buscar Rota
                                </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                ) }
                                
            </div>
        )
    }
}

export default Table;