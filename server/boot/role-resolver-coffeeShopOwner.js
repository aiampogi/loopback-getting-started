'use strict';

module.exports = function(app)
{
  var Role = app.models.Role;

  Role.registerResolver('coffeeShopOwner', function(role, context, cb)
  {
    function reject()
    {
      //process.nextTick(function() {
      cb(null, false);
      //});
    }

    // if the target model is not project
    if (context.modelName !== 'CoffeeShop')
    {
      return reject();
    }

    // do not allow anonymous users
    var userId = context.accessToken.userId;
    if (!userId)
    {
      return reject();
    }

    // check if userId is in team table for the given project id
    context.model.findById(context.modelId, function(err, coffeeShop)
    {
      if (err || !coffeeShop)
        return reject();

      // check if our user is associated
      console.log('check if our user is associated');
      coffeeShop.customUsers
        .findById(userId)
        .then(function(user)
        {
          console.log(user);
          if (!user)
          {
            return reject();
          }
          else
          {
            cb(null, true);
          }
        })
        .catch(function(err)
        {
          console.log(err);
          return reject();
        });

      // var Team = app.models.Team;
      // Team.count({
      //   ownerId: project.ownerId,
      //   memberId: userId
      // }, function(err, count) {
      //   if (err) {
      //     console.log(err);
      //     return cb(null, false);
      //   }

      //   cb(null, count > 0); // true = is a team member
      // });
    });
  });
};