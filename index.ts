import net = require('net');
import { Shadow } from './libs/shadow';


async function test() {


    var socket = new Shadow.Socket();
    var ips = [];

    for (var i = 0; i < 255; i++)ips.push(i);

    for (var second of ips) {
        for (var ip of ips) {
            for (var port of [21, 22, 25, 80, 3000, 110, 443]) {
                var r = await socket.connect('192.168.' + second + '.' + ip, port);
                if (r) {
                    console.log(ip + ":" + port + "  端口:" + JSON.stringify(r))
                } else {
                    // console.log('192.168.137.' + ip + ":" + port + '端口无效:')
                }
            }
        }
    }


}

test()
