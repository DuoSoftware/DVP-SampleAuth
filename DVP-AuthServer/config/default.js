module.exports = {
  "DB": {
    "Type":"postgres",
    "User":"duo",
    "Password":"DuoS123",
    "Port":5432,
    "Host":"127.0.0.1",
    "Database":"dvpdb"
  },

  "Authentication":
  {
    "apiKey": "56a9e759fb071907a000000125d9e80b5c7c4f98466f9211796ebf43",
    "clientId": "388a87a5217af6a1d919",
    "clientSecret": "06145507a521592717010f127ab2dde4c953bec1"
  },

  "Redis":
  {
    "ip": "45.55.142.207",
    "port": "6389",
    "user": "duo",
    "password": "DuoS123"
  },
  "Security":
  {
    "ip": "45.55.142.207",
    "port":6389,
    "user": "duo",
    "password": "DuoS123",
    "redisdb":0
  },

  "Host":
  {
    "vdomain": "localhost",
    "domain": "localhost",
    "port": 9999,
    "version": "1.0"
  },

  "LBServer" : {

    "ip": "localhost",
    "port": "3434"

  }
};
