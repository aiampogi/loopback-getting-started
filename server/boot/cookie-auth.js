'use strict';

var loopback;

loopback = require('loopback');
var crypto = require('crypto');

module.exports = function(app)
{

  //app.use(loopback.cookieParser('secret'));

  // access token will be searched in cookies as well.
  app.use(loopback.token(
  {
    model: app.models.accessToken
  }));

  app.use(function(req, res, next)
  {
    if (!req.accessToken && req.signedCookies && req.signedCookies.authorization)
    {
      res.clearCookie('authorization');
    }

    // res.cookie('XSRF-TOKEN', req.csrfToken());
    console.log(req.session['wewew']);


    return next();
  });

  app.models.CustomUser.afterRemote('login', function(context, result, next)
  {
    var req, res;
    req = context.req;
    res = context.res;

    if (result != null)
    {
      if (result.id != null)
      {
        res.cookie('authorization', result.id,
        {
          httpOnly: true,
          signed: true
        });
        // console.log('req.secret: ' + req.secret);
        // console.log('result.id: ' + result.id);
        // console.log(res);
        var session = req.session;
        var secret = session['wewew'];
        // Save the secret for validation
        if (!secret)
        {
          session['wewew'] = crypto.pseudoRandomBytes(10).toString('base64');
          secret = session['wewew'];
        }
      }
    }

    // console.log('res.cookie: ' + res.cookie);
    // console.log('res.signedCookies: ' + res.signedCookies);
    next();
  });
  return app.models.CustomUser.afterRemote('logout', function(context, result, next)
  {
    var req, res;
    req = context.req;
    res = context.res;
    res.clearCookie('authorization');
    if (req.session)
    {
      req.session.destroy();
    }

    next();
  });
};