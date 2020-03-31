import JsonP from 'jsonp'

class Axios {

    static jsonp(opinions) {
        return new Promise((resolve, reject) => {
            JsonP(opinions.url, {
                param: 'callback'
            }, function (err, response) {
                if (response.status === 'success') {
                    resolve(response);
                } else {
                    reject(response.message);
                }
            })
        })
    }

}

export default Axios;