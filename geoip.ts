import geoip = require('geoip-lite');
//npm https://github.com/bluesmoon/node-geoip/blob/master/README.md
//document http://www.maxmind.com/app/iso3166
// nodejs 抓包神器   https://github.com/rehorn/livepool/blob/master/package.json

var ip = "171.43.219.158";
var geo = geoip.lookup(ip);

console.log(geo);