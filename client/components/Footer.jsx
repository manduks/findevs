Footer = React.createClass({
  render() {
    return (
      <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <div className="footer-links">
                        <p>Copyright © 2015 <a href="#">FINDEVs</a><br></br>
                        &#60;&#62; with <span className="icon-heart"></span> using Meteor <a href="http://www.armando.mx/">@manduks</a>.</p>
                    </div>
                </div>
                <div className="social-share">
                  <img src="img/logo_big.png" alt="FINDEVs logo"></img>
                </div>
            </div>
        </div>
      </footer>
    )
  }
});
