Header = React.createClass({
  mixins : [ReactRouter.Navigation, ReactMeteorData],
  getMeteorData(props, state) {
    return {
      currentUser: Meteor.user()
    }
  },
  render() {
    let currentUser = this.data.currentUser,
        name = '';
    if (!currentUser) {
      return (
        <section className="navigation">
          <header>
            <div className="header-content">
              <div className="logo"><a href="#"><img src="img/logo.png" alt="FINDEVs logo"></img></a></div>
              <div className="header-nav">
                <nav>
                  <ul className="member-actions">
                    <li><a className="login" onClick={this.redirecTologin}>Log in</a></li>
                    <li><a  className="btn-white btn-small" onClick={this.redirecTologin}>Sign up</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
        </section>
      )
    }
    return (
      <section className="navigation">
        <header>
          <div className="header-content">
            <div className="logo"><a href="#"><img src="img/logo.png" alt="FINDEVs logo"></img></a></div>
            <div className="header-nav">
              <nav>
                <ul className="member-actions profile-actions">
                  <li><span className="profile-avatar"><img src="img/white.png"></img></span></li>
                  <li><span className="profile-name">{currentUser.profile.name}</span></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </section>
    )
  },
  redirecTologin (e) {
    e.preventDefault();
    this.transitionTo('login');
  }
});
