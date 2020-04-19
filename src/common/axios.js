import axios from 'axios'

const params = () => {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
        e = r.exec(q);
    }
    return hashParams;
}

export default axios.create({
    baseURL: 'https://api.spotify.com/v1/me/',
    headers: {
        'Authorization': 'Bearer ' + params().access_token,
    }
});
