const {
  Router,
  Route,
  Redirect,
  //NotFoundRoute,
  //DefaultRoute
} = ReactRouter;

console.log(ReactRouter);

const {
  history
} = ReactRouter.history;

Meteor.startup(function() {
  let AppRoutes = (
    <Router history={history}>
      <Route component={App}>
        <Router name="landing" component={Landing} path="/" />
        <Router name="login" component={Login} path="/login"/>
        <Router name="findevs" component={Main} path="/findevs"/>
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  )
  React.render(AppRoutes, document.body)
});
