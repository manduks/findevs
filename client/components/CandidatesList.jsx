CandidatesList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(props, state) {
    var subscription = Meteor.subscribe("users");
    return {
      users: Meteor.users.find({}).fetch()
    }
  },
  getInitialState() {
    return {
      reachButton : 'disabled',
      selectedUser: null,
      sorter      : {'profile.name' : 1}
    };
  },
  render() {
    var self = this;
    return (
      <div>
        {self.data.users.map(function (user) {
              var name = user.profile.name;
              return <Candidate  key={user._id} user={user} onClick={self.handleClick.bind(self, user)}/>;
        }, self)}
      </div>
    )
  },
  handleClick(){
    alert(user._id)
  }
});
