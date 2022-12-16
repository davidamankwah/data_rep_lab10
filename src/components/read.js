import React from "react";
import { Books } from "./books"; //imported books
import axios from "axios";

export class Read extends React.Component {

    //constructor
    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this); //bind event
    }
   
    componentDidMount() {
        axios.get('http://localhost:4000/api/books')
            .then((response) => {
                this.setState({ books: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    state = {
        books: []
    }

    render() {
        return (
            <div>
                <h3>Hello from my Read component!</h3>
                
                 {/* pass ReloadData method */}
                <Books books={this.state.books} Reload={this.componentDidMount}></Books>
            </div>
        );
    }
}