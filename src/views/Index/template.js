import request from '@/helpers/request.js';
import auth from '@/api/auth.js';
window.request = request;
window.auth = auth;
export default {
    name: 'Index'
}