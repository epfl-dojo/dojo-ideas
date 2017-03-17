var GitHub = require('github-api');
var Project = require('github-api/dist/components/Project.js');

// basic auth
var gh = new GitHub({
      username: '',
      token: ''
});

var id = '445276';

var project = new Project(id, gh);
project.getProject((test) => {
      console.log(test)
})

/*
var me = gh.getUser(); // no user specified defaults to the user for whom credentials were provided
me.listNotifications(function(err, notifications) {
console.log(notifications);
   // do some stuff
});
*/
var user = gh.getUser('ponsfrilus');
var repos = user.listStarredRepos(function(err, repos) {
      console.log("user");
//      console.log(repos);
   // look at all the starred repos!
});
