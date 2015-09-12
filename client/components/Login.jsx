Login = React.createClass({
  mixins : [ReactRouter.Navigation],
  render() {
    return (
      <div className="panel">
        <img src="img/logo_big.png" alt="FINDEVs logo"></img>
        <button type="submit" className="btn-fill sign-up-btn" onClick={this.handleLogin}>Login with GITHUB</button>
      </div>
    )
  },
  handleLogin() {
    var self = this;
    Meteor.loginWithGithub({
        requestPermissions: ['user', 'public_repo']
    }, function (err) {
          if (err){
              return console.log(err);
          }
          return self.transitionTo('findevs');
    });
  }
})
