import storageService from '@/service/storageService';
import userServices from '../../service/userServices';

const userModule = {
  namespaced: true,
  state: {
    token: storageService.get(storageService.USER_TOKEN),
    // eslint-disable-next-line max-len
    userInfo: storageService.get(storageService.USER_INFO) ? JSON.parse(storageService.get(storageService.USER_INFO)) : null,
  },
  mutations: {
    SET_TOKEN(state, token) {
      console.log(token);
      // 更新本地缓存
      storageService.set(storageService.USER_TOKEN, token);
      // 更新state
      state.token = token;
    },
    SET_USERINFO(state, userInfo) {
      storageService.set(storageService.USER_INFO, JSON.stringify(userInfo));
      state.userInfo = userInfo;
    },
  },
  actions: {
    register(context, { name, telephone, password }) {
        return new Promise((resolve, reject) => {
          userServices.register({ name, telephone, password }).then((res) => {
            // 保存token
            context.commit('SET_TOKEN', res.data.data.token);
            return userServices.info();
          }).then((res) => {
            // 保存用户信息
            context.commit('SET_USERINFO', res.data.data.user);
              resolve(res);
          }).catch((err) => {
              reject(err);
          });
        });
    },
    login(context, { telephone, password }) {
      return new Promise((resolve, reject) => {
        userServices.login({ telephone, password }).then((res) => {
          // 保存token
          context.commit('SET_TOKEN', res.data.data.token);
          return userServices.info();
        }).then((res) => {
          // 保存用户信息
          context.commit('SET_USERINFO', res.data.data.user);
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    logout({ commit }) {
      commit('SET_TOKEN', '');
      storageService.set(storageService.USER_TOKEN, '');
      commit('SET_USERINFO', '');
      storageService.set(storageService.USER_INFO, '');
      window.location.reload();
    },
  },
};

export default userModule;
