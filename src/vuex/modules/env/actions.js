
import * as api from '@/api/user';

export async function initUserInfo({ commit }) {
    let userInfo = await api.getUserInfo();
    commit('SET_USER_INFO', userInfo);
}
