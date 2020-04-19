import JsonP from 'jsonp'

import axios from 'axios'

import {Modal} from 'antd'

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
        });
    }

    static ajax(options) {
        let loading;

        if (options.data && options.data.isShowLoading !== false) {
            loading = document.getElementById('ajaxLoading');
            loading.style.display = 'block';
        }

        let baseApi = "http://139.129.90.134:7300/mock/5e9985713497be7c2f1928ea/api";
        return new Promise((resolve, reject) => {
                axios({
                    url: options.url,
                    method: 'get',
                    baseURL: baseApi,
                    timeout: 5000,
                    params: (options.data && options.data.params) || ''
                }).then((response) => {

                        if (options.data && options.data.isShowLoading !== false) {
                            loading = document.getElementById('ajaxLoading');
                            loading.style.display = 'none';
                        }

                        if (response.status == '200') {
                            let res = response.data;
                            if (res.code == 0) {
                                resolve(res);
                            } else {
                                Modal.info({
                                    title: '提示',
                                    content: res.message
                                });
                            }
                        } else {
                            reject(response.data)
                        }
                    }
                );
            }
        );
    }

}

export default Axios;