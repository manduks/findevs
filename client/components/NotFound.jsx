NotFound = React.createClass({
  mixins : [ReactRouter.Navigation],
  render() {
    return (
      <div>
        <div className="panel">
          <img src="img/not_found.png" alt="not found"></img>
          <button type="submit" className="btn-fill sign-up-btn go-home" onClick={this.handleBack}>GO HOME</button>
        </div>
      </div>
    )
  },
  handleBack() {
    return this.transitionTo('findevs');
  }
});
