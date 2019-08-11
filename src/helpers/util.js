function formatDate(dateStr) {
    let dateObj = typeof dateStr === "object" ? dateStr : new Date(dateStr);
    let time = dateObj.getTime();
    let nowTime = Date.now();
    let space = nowTime - time;
    let str = '';
    switch (true) {
        case space < 60000:    //小于1分钟
            str = "刚刚"
            break
        case  space < 1000 * 3600:   //小于1小时
            str = Math.floor(space / (1000 * 60) ) + "分钟前"
            break
        case  space < 1000 * 3600 * 24:   //小于1天
            str = Math.floor( space / (1000 * 3600) ) + "小时前"
            break
        default:
            str = Math.floor( space / (1000 * 3600 * 24) ) + "天前"
        
    }
    return str
}
export default {
    install(Vue, options) {
        Vue.prototype.formatDate = formatDate;
    }
}