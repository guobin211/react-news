/**
 * Tools
 * @author guobin201314@gmail.com on 2019-01-28
 */

export class Tools {
    static formatDate(time: any){
        if(!time) {return ''; }
        const date = new Date(time);
        return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    }
}
