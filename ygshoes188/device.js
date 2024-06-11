function IsPC() { var userAgentInfo = navigator.userAgent; var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"]; var flag = true; for (var v = 0; v < Agents.length; v++) { if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; } } return flag; }

var PC = IsPC(); 

let url=location.href

let ism=url.indexOf('ygshoes188/m.html')>0

let param=getQueryParams(url)

function getQueryParams(url) {
    const regExp = /[?&]([^=#]+)=([^&#]*)/g;
    const queryParams = {};
    let match;
 
    while (match = regExp.exec(url)) {
        queryParams[decodeURIComponent(match[1])] = decodeURIComponent(match[2]);
    }
 
    return queryParams;
}
let p=param.p

if (PC && ism) { 
    location.href = "/ygshoes188/zz.html?p="+p; 
}

if(!PC && !ism){
    location.href = "/ygshoes188/m.html?p="+p; 
}


