const LOCAL_ACCESS_NAME = 'auth_accessToken';
const LOCAL_REFRESH_NAME = 'auth_refreshToken';
const LOCAL_ACCESS_USERID = 'auth_username';
const LOCAL_ACCESS_EXP = 'auth_accessExp';

function setTokens(access, refresh, rememberMe) {
    let accessData = getJWTPayload(access);
    const storage = rememberMe ? localStorage : sessionStorage;
    storage.setItem(LOCAL_ACCESS_NAME, access);
    storage.setItem(LOCAL_REFRESH_NAME, refresh);
    storage.setItem(LOCAL_ACCESS_USERID, accessData.user_id);
    storage.setItem(LOCAL_ACCESS_EXP, accessData.exp);
}

function cleanTokensData() {
    localStorage.removeItem(LOCAL_ACCESS_NAME);
    localStorage.removeItem(LOCAL_REFRESH_NAME);
    localStorage.removeItem(LOCAL_ACCESS_USERID);
    localStorage.removeItem(LOCAL_ACCESS_EXP);
    sessionStorage.removeItem(LOCAL_ACCESS_NAME);
    sessionStorage.removeItem(LOCAL_REFRESH_NAME);
    sessionStorage.removeItem(LOCAL_ACCESS_USERID);
    sessionStorage.removeItem(LOCAL_ACCESS_EXP);
}

function getAccessToken() {
    return localStorage.getItem(LOCAL_ACCESS_NAME) || sessionStorage.getItem(LOCAL_ACCESS_NAME);
}

function getRefreshToken() {
    return localStorage.getItem(LOCAL_REFRESH_NAME) || sessionStorage.getItem(LOCAL_REFRESH_NAME);
}

function getUserID() {
    return localStorage.getItem(LOCAL_ACCESS_USERID) || sessionStorage.getItem(LOCAL_ACCESS_USERID);
}

function getJWTPayload(token) {
    return parseJWT(token).payload;
}

function parseJWT(token) {
    let parts = token.split('.');
    return {
        header: parsePart(parts[0]),
        payload: parsePart(parts[1]),
        sign: parts[2],
    };
}

function parsePart(str) {
    return JSON.parse(atob(str));
}

export {
    setTokens,
    cleanTokensData,
    getAccessToken,
    getRefreshToken,
    getUserID,
}
