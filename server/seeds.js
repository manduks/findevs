console.log('users' + Meteor.users.find().count());
if (Meteor.users.find().count() <= 1) {
	var users = [
     {
       profile : {
         name: 'Nikola Tesla'
       }
     },
     {
       profile : {
         name: 'Isaac Newton'
       }
     },
     {
       profile : {
         name: 'Alan Turing'
       }
     }
  ];
  console.log('insert users');
  users.forEach(function (user) {
    Meteor.users.insert(users);
  });
}
