import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      {/* route for list of quotes */}
      <Route path='/quotes'></Route>
      {/* route for quotes detail. quoteId = dynamic segment, so that we can load same component for different quotes. here we encoded quote identifier(quoteId) in the url so that we can get it inside of the loaded component. */}
      <Route path='/quotes/:quoteId'></Route>
      {/* route for adding new quote */}
      <Route path='/new-quote'></Route>
    </Switch>
  );
}

export default App;
