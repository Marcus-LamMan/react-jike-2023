// 封存与token相关的工具函数 （存，取，删 token）
const TOKEN_KEY = 'token_key'

function setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
}

function getToken() {
    return localStorage.getItem(TOKEN_KEY) // || '';
}

function removeToken() {
    localStorage.removeItem(TOKEN_KEY);
}

export { setToken, getToken, removeToken }