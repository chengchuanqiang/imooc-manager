export default {
    formatDate (time){
        if (!time) {
            return '';
        }
        let date = new Date(time);

        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let seconds = date.getSeconds();

        return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + seconds;
    }
}