import { Modal } from "antd";
import JsonP from 'jsonp';
import axios from 'axios';

interface IAjaxOptions {
    url: string;
    data?: any;
}

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

    static ajax(options: IAjaxOptions){
        let loading;
        if (options.data && options.data.isShowLoading !== false){
            loading = document.getElementById('ajaxLoading');
            // @ts-ignore
            loading.style.display = 'block';
        }
        const baseApi = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api';
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'get',
                baseURL:baseApi,
                timeout:5000,
                params: (options.data && options.data.params) || ''
            }).then((response)=>{
                if (options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading');
                    // @ts-ignore
                    loading.style.display = 'none';
                }
                if (response.status === 200){
                    const res = response.data;
                    if (res.code === 0 || res.code === '0'){
                        resolve(res);
                    }else{
                        Modal.info({
                            title:"提示",
                            content: 'Axios请求错误: ' + res.msg
                        })
                    }
                }else{
                    reject(response.data);
                }
            })
        });
    }
}
