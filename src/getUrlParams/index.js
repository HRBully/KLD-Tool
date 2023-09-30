export default function getUrlParams(url) {
    const params = {};
    const urlParts = url.match(/([^?=&]+)(=([^&]*))/g);
    if (urlParts) {
        urlParts.forEach((part) => {
            const [key, value] = part.split('=');
            params[key] = value;
        });
    }
    return params;
}