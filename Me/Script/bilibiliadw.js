/*
bilibili home page module customization whitelist. 

QX:
^https://app.bilibili.com/x/(resource/show/tab|(v2/reply\/main|v2/view))\?access_key url script-response-body bilibiliadw.js

Surge & QX MITM = app.bilibili.com
*/
var body = $response.body;
var url = $request.url;
const path1 = "/resource/show/tab";
const path2 = "/v2/reply\/main\?";
const path3 = "/v2/view\?";

if (url.indexOf(path1) != -1){
let whitelist=['追番','推荐','直播','热门','影视']

let body = $response.body;
body=JSON.parse(body);

body['data']['tab'].forEach((element, index) => {
if(!(whitelist.includes(element['name']))) body['data']['tab'].splice(index,1)  
});

body['data']['bottom'].forEach((element, index)=> {
    if(element['pos']==4){      
       body['data']['bottom'].splice(index,1)  
    }
});

body=JSON.stringify(body);
};
if (url.indexOf(path2) != -1){
let body = $response.body
body=JSON.parse(body)
delete body['data']['notice']
body=JSON.stringify(body);
};

if (url.indexOf(path3) != -1){
let body = $response.body;
body=JSON.parse(body);
body['data']['relates'].forEach((element, index)=> {
   if(element.hasOwnProperty('is_ad')||!element.hasOwnProperty('aid')){      
      body['data']['relates'].splice(index,1)  
    }
});
delete body['data']['cms'];
body=JSON.stringify(body);

};

$done({body}) 