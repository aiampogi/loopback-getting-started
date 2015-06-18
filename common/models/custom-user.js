'use strict';

module.exports = function(CustomUser)
{
	// CustomUser.beforeRemote('create',
	// 	function(context, customUser, next)
	// 	{
	// 		var req = context.req;

	// 		console.log(req.body);
	// 		console.log(req.accessToken);
	// 		next();
	// 	});


	// TODO:
	// remote method getRoles ($owner only)
	// arg should be req to get accessToken.userId (foreign key of accessToken)
	// then from there we can know the role by using Role.getRoles({principalType: RoleMapping.USER, principalId: user.id}, function(err, roles)
};