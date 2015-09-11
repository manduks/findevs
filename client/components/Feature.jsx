Feature = React.createClass({
  render() {
    return (
      <div className="col-md-4 intro-feature">
          <div className="intro-icon">
              <span data-icon={this.props.icon} className="icon"></span>
          </div>
          <div className="intro-content">
              <h5>{this.props.title}</h5>
              <p>{this.props.text}</p>
          </div>
      </div>
    )
  }
});
