Header = React.createClass({
  render() {
    return (
      <section className="hero">
        <section className="navigation">
          <header>
            <div className="header-content">
              <div className="logo"><a href="#"><img src="img/logo.png" alt="FINDEVs logo"></img></a></div>
              <div className="header-nav">
                <nav>
                  <ul className="member-actions">
                    <li><a href="#download" className="login">Log in</a></li>
                    <li><a href="#download" className="btn-white btn-small">Sign up</a></li>
                  </ul>
                </nav>
              </div>
              <div className="navicon">
                <a className="nav-toggle" href="#"><span></span></a>
              </div>
            </div>
          </header>
        </section>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="hero-content text-center">
                <h1>Find the best developers, win.</h1>
                <p className="intro">Findevs is the perfect tool to find the best developers your project needs. We connect you to the best candidates by technology, location, disponibility and reputation.</p>
                <a href="#" className="btn btn-fill btn-large btn-margin-right">FIND DEVELOPERS</a>
              </div>
            </div>
          </div>
        </div>
        <div className="down-arrow floating-arrow"><a href="#"><i className="fa fa-angle-down"></i></a></div>
      </section>
    )
  }
});
