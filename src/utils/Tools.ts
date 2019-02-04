/**
 * Tools
 * @author guobin201314@gmail.com on 2019-01-28
 */

export class Tools {
    static formatDate(time: any) {
        if (!time) {
            return '';
        }
        const date = new Date(time);
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    }

    static pagination(data: any, callback: (data: any) => void) {
        return {
            onChange: (current: any) => {
                callback(current)
            },
            current: data.result.page,
            pageSize: data.result.page_size,
            total: data.result.total_count,
            showTotal: () => {
                return `共${data.result.total_count}条`
            },
            showQuickJumper: true
        }
    }
}
