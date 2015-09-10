/*const {
  Router,
  Route,
  Redirect,
  NotFoundRoute,
  DefaultRoute
} = ReactRouter;

const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)()

Meteor.startup(function() {
  React.render((
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/login" component={Login} />
        <NotFoundRoute component={NotFound} />
      </Route>
    </Router>
  ), document.body);
});*/

const {
  Route,
  Router,
  Redirect,
  NotFoundRoute,
  DefaultRoute
} = ReactRouter;

const routes = (
  <Route name="root" handler={App} path="/">
    <Route name="login" path="/login" handler={Login} />
    <DefaultRoute handler={Loading} />
    <NotFoundRoute handler={NotFound} />
  </Route>
)

console.log(ReactRouter);
const router = ReactRouter.create({
  routes: routes,
  location: ReactRouter.HistoryLocation
});

Meteor.startup(function () {
  router.run(function (Handler, state) {
    React.render(<Handler/>, document.body);
  });
});
