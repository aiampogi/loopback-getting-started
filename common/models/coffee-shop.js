module.exports = function(CoffeeShop)
{
	// CoffeeShop.remoteMethod(
	// 		'add',
	// 		{
	// 			accepts: [
	// 				{arg: 'name', type: 'string'}
	// 			],
	// 			returns : [
	// 				{arg: 'success', type: 'boolean'},
	// 				{arg: 'id', type: 'number'}
	// 			],
	// 			http: {path: '/:id/add', verb: 'post'}
	// 		}
	// 	);

	// CoffeeShop.add = function(paramName, cb)
	// {
	// 	CoffeeShop.create(
	// 	{
	// 		name: paramName
	// 	},
	// 	function(err, coffeeShop)
	// 	{
	// 		if (err)
	// 		{
	// 			return cb(err);
	// 		}

	// 		console.log('Created CoffeeShop: ', coffeeShop);

	// 		cb(null, {success: true, id: coffeeShop.coffeeshopid})
	// 	});
	// }

	CoffeeShop.beforeRemote('create',
		function(context, coffeeShop, next)
		{
			var req = context.req;
			req.body.date = Date.now();
			req.body.customUserId = req.accessToken.userId;

			console.log(req.accessToken);
			next();
		});
};
