import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
// useRouteMatch is a kind of similar to useLocation but it has more information abt currently loaded route.
import { Route, Link, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Jatinder', text: 'Learning React is fun!' },
    { id: 'q2', author: 'Jatinder Kaur', text: 'Learning React is great!' },
];

const QuoteDetail = () => {
    const match = useRouteMatch();
    console.log(match);
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return <p>no</p>
    }

    return (
        <section>
            <HighlightedQuote text={quote.text} author={quote.author}></HighlightedQuote>
            {/* Or <Route path={`/quotes/${params.quoteId}`} exact> */}
            <Route path={match.path} exact>
                <div className='centered'>
                    {/* Or <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link> */}
                    <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>
            {/* OR <Route path='/quotes/:quoteId/comments'> */}
            {/* Or <Route path={`/quotes/${params.quoteId}/comments`}> */}
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </section>
    );
};

export default QuoteDetail;