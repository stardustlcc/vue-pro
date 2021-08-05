// eslint-disable-next-line quoter
// 本地缓存服务

const PREFIX = 'go-vue-cc_';

// USER  模块
const USER_PREFIX = `${PREFIX}user_`;
const USER_TOKEN = `${USER_PREFIX}token`;
const USER_INFO = `${USER_PREFIX}info`;

// 存储
const set = (key, data) => {
    localStorage.setItem(key, data);
};

// 读取
const get = (key) => localStorage.getItem(key);

export default {
  get,
  set,
  USER_INFO,
  USER_TOKEN,
};
