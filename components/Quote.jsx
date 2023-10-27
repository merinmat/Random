import { useState, useEffect } from "react";
import './Quote.css'


export default function Quote() {
    const [quotes, setQuotes] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        randomQuote()
    }, [])

    const randomQuote = async () => {
        const quote = await fetch("https://inspo-quotes-api.herokuapp.com/quotes/random");
        const response = await quote.json();

        if (response.quote.author === null) {
            setAuthor('Anonymous')
        }

        setQuotes(response.quote.text);
        setAuthor(response.quote.author);
    }


    const handleQuote = () => {
        randomQuote();
    }

    return (
        <div className="quotebox">
            <div className="text">{quotes}</div>
            <div className="author">{author}</div>
            <button className="button" onClick={handleQuote}> Click</button>
        </div>
    )
}