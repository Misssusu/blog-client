import axios from 'axios';
import { Message } from 'element-ui';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-unlencoded';
axios.defaults.baseURL = 'https://blog-server.hunger-valley.com';
axios.defaults.withCredentials = true;

export default function request(url, type = 'GET', data = {}){
    return new Promise((resolve,reject)=>{
        let options = {
            url,
            method: type
        }
        if(type.toLocaleLowerCase() === 'get') {
            options.params = data
        }else {
            options.data = data
        }
        axios(options).then((res) => {
            if(res.data.status === 'ok'){
                Message.success(res.data.msg);
                resolve(res.data)
            }else {
                Message.error(res.data.msg);
                reject(res.data)
            }
        }).catch(() => {
            Message.error('网络异常');
            reject({msg: '网络异常'})
        })
    })
}