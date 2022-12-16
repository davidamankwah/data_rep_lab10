import React from "react";
import {BookItem} from './bookItem';  //import bookitem

export class Books extends React.Component{
    render(){
        return this.props.books.map(
            (book)=>{
                
                // pass ReloadData method
                return <BookItem book={book} key={book._id} Reload={this.props.Reload}></BookItem>
            }
        );
    }
}