import net = require('net');

export namespace Shadow {
    export class Socket {
        connect(host, port) {
            return new Promise((resolve, rejecct) => {
                var client = net.connect(port, host, (s) => {
                    // console.log('连接上了' + client.bytesRead + client.bytesWritten);
                    client.write('hello \n');
                });
                client.setTimeout(2, () => {
                    // console.log('延时')
                    client.destroy();
                    resolve();
                });



                client.on('end', (err) => {
                    // console.log('没有链接成功')
                });


                client.on('data', (data) => {
                    var result = data.toString();
                    console.log('接收数据:' + result);
                    resolve(result);
                    client.end();
                });

            });
        }
    }
}