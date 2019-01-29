import JsonP from 'jsonp';

export class Axios {
    static jsonp(options: any) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function (err: any, response: any) {
                if (response.status === 'success') {
                    resolve(response);
                } else {
                    reject(response.messsage);
                }
            })
        })
}
}
