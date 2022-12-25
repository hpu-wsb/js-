//写入cookie
const set = (name, value, { maxAge, domain, path, secure } = {}) => {
    let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    if (typeof maxAge === 'number') {
        cookieText += `;max-age=${maxAge}`;
    }
    if (domain) {
        cookieText += `;domain=${maxAge};`
    }
    if (path) {
        cookieText += `;path=${maxAge};`
    }
    if (secure) {
        cookieText += `;secure;`
    }

    document.cookie = cookieText;

    // document.cookie='username=alex;max-age=5;domain='
};
export { set };