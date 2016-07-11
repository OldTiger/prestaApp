import {Buffer} from 'buffer';
import {DOMParser} from 'xmldom';
let API = null;
try {
    fetch('http://localhost:8888/prestashop/api', {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + new Buffer('XGRCBUW745EH4SPHCU92MKL4RGNVPYXY:').toString('Base64')
        }
    }).then(function (response) {
        response.text().then(function (text) {
            API = new DOMParser().parseFromString(text);
        });
    });
} catch (e) {
    alert(e);
}
export function getResources(name) {
    let tag = API.getElementsByTagName(name)[0];
    if (tag)
        return tag.getAttribute('xlink:href');
}
