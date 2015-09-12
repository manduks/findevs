Content = React.createClass({
  mixins : [ReactRouter.Navigation],
  render() {
    return (
      <section className="hero">
        <Header/>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="hero-content text-center">
                <h1>Find the best developers, win.</h1>
                <p className="intro">Findevs is the perfect tool to find the best developers your project needs. We connect you to the best candidates by technology, location, disponibility and reputation.</p>
                <a className="btn btn-fill btn-large btn-margin-right" onClick={this.redirecTologin}>FIND DEVELOPERS</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  },
  redirecTologin (e) {
    e.preventDefault();
    this.transitionTo('login');
  }
});
