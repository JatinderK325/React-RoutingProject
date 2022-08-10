import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import { Route } from "react-router-dom";

const QuoteDetail = () => {
    const params = useParams();
    return (
        <section>
            <h1>Quote Detail Page</h1>
            <p>{params.quoteId}</p>
            {/* OR <Route path='/quotes/:quoteId/comments'> */}
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </section>
    );
};

export default QuoteDetail;