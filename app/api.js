import {Buffer} from 'buffer';
import {DOMParser} from 'xmldom';

let API = null;
const SERVER_ADDRESS = 'http://localhost:8888/prestashop/api/';
const REST = {
    CMS: 'content_management_system'
};
const token = 'XGRCBUW745EH4SPHCU92MKL4RGNVPYXY';
const AuthorizationString = 'Basic ' + new Buffer(token + ':').toString('Base64');

try {
    fetch(SERVER_ADDRESS, {
        method: 'GET',
        headers: {
            'Authorization': AuthorizationString
        }
    }).then(function (response) {
        response.text().then(function (text) {
            API = new DOMParser().parseFromString(text);
        });
    });
} catch (e) {
    alert(e);
}


async function getResources(name) {
    try {
        let response = await fetch(SERVER_ADDRESS + name, {
            method: 'GET',
            headers: {
                'Authorization': AuthorizationString
            }
        });
        let xml = await response.text();
        let dom = new DOMParser().parseFromString(xml);
        console.log(dom.childNodes.toString());
        return dom.childNodes.toString();
    } catch (e) {
        console.error(error);
        return '';
    }
}

async function getHomePageSlidersHrefs() {
    return await getResources(REST.CMS).then(function (val) {
        return val.match(/http[^\"]*content_management_system[^\"]*/g);
    });
    //匹配双引号之间的url链接
}

export {
    getHomePageSlidersHrefs
}