import React from 'react';
import myQuote from './quotes.json';
import './Quotes.css'

class Quote extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quote: 'Click the button below to get some inspiration!',
            author: ''
        }
        this.getQuote = this.getQuote.bind(this)
    }

    getQuote(e) {
        var quoteIndex = Math.floor(Math.random() * 101) + 1 ;

        const currentQuote = myQuote.map((dataset)=>{
            return(
                dataset.quotes[quoteIndex].quote
            )
        })

        const currentAuthor = myQuote.map((dataset)=>{
            return(
                dataset.quotes[quoteIndex].author
            )
        })

        this.setState({
            quote: currentQuote,
            author: '-' + currentAuthor
        })
    }

    render(){

        return (
            <div>
                <h1>{this.state.quote}</h1>
                <h2>{this.state.author}</h2>
                <button onClick = {this.getQuote}>Inspire Me!</button>
            </div>
        );
    }
}

export default Quote;