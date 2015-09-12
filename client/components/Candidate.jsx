Candidate = React.createClass({
  render() {
    return (
      <div className="candidate">
        {this.props.user.profile.name}
      </div>
    )
  }
});
