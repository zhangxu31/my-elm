import axios from 'axios';


let test = 'http://api.xingkong.stat.sankuai.com/api/dashboards';

export async function getUserInfo() {
    return await axios.get(test);
}
