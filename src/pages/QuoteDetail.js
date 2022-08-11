import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import { Route } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Jatinder', text: 'Learning React is fun!' },
    { id: 'q2', author: 'Jatinder Kaur', text: 'Learning React is great!' },
];

const QuoteDetail = () => {
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return <p>no</p>
    }

    return (
        <section>
            <HighlightedQuote text={quote.text} author={quote.author}></HighlightedQuote>
            {/* OR <Route path='/quotes/:quoteId/comments'> */}
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </section>
    );
};

export default QuoteDetail;