var redis = require('redis');
var config = require('config');
var resource = config.Host.resource;


var redisip = config.Redis.ip;
var redisport = config.Redis.port;

var redisClient = redis.createClient(redisport, redisip);

redisClient.on('error', function (err) {
    console.log('Error ' + err);
});

var Secret = function(req, payload, done){


    if(payload && payload.iss && payload.jti) {
        var issuer = payload.iss;
        var jti = payload.jti;


        redisClient.get("token:iss:" + issuer + ":" + jti, function (err, key) {

            if (err) {
                return done(err);
            }
            if (!key) {
                return done(new Error('missing_secret'));
            }
            return done(null, key);


        });
    }else{
        done(new Error('wrong token format'));


    }




};



module.exports.Secret = Secret;
