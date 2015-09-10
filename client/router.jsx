const {
  Router,
  Route,
  Redirect,
  NotFoundRoute,
  DefaultRoute
} = ReactRouter;

console.log(ReactRouter);

const {
  history
} = ReactRouter.history;

Meteor.startup(function() {
  let AppRoutes = (
    <Router history={history}>
      <Route component={App}>
        <Router component={Landing} path="/" />
        <Router component={Login} path="login" />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  )
  React.render(AppRoutes, document.body)
});
