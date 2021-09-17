import React, { Component } from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import api from "../api";

class Table extends Component {
    state = { items: [],
                count: 0 }

    async componentDidMount() { 
        const response = await api.get('');

        this.setState({ items: response.data.results})
        this.setState({ count: response.data.count})
    }

    render(){
        const { items, count } = this.state;

        // const pages = Math.round(count / 5);
        // const pageNumber = [];
        // for (let index = 1; index <= pages; index++) {
        //     pageNumber.push(index);
        // }

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
                            <td><a>Buscar Rota</a></td>
                        </tr>
                        ))}
                    </tbody>
                </table>

                {/* <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        {pageNumber.map(page => (
                            <li class="page-item">
                                <Link to={"/page"} class="page-link">{page}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="container mt-3">
                <Switch>
                    <Route exact path={["/", "/entregas"]} component={Table} />
                </Switch>
                </div> */}
                
            </div>
        )
    }
}

export default Table;