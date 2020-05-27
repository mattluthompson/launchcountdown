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

    /*
    Ok -- code is close to being really solid.
    I see that data in quotes.json is an array inside of an array and as a result you're using
    map to access the array of quotes that you really want.
    You could either honestly delete the external object that is causing your array to be length 1 and 
    then just have an array of the quotes / author information themselves.
    The other way you could handle this is define your quotes as const quotes = myQuote[0] above your
    class declaration and then in
    getQuote, instead of using map, you can simply say quote[quoteIndex].quote etc.
    
    Your code isn't "wrong" but these are suggestions for optimal implementation / high readability
    should another engineer come along and need to add on to your work. 
    
    */
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
