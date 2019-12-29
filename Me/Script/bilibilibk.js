/*
BiliBili blacklist

^https:\/\/app\.bilibili\.com\/x\/v2\/(rank|(feed\/index\?access_key|show\/popular\/index\?access_key)) url script-response-body bilibilibk.js
*/
let blacklist=['共青团中央','广东共青团','浙江共青团','山东共青团','安徽共青团','河南共青团','央视频','徐大sao','翔翔大作战','徐大虾咯','科技美学','敬汉卿','NathanRich火锅大王','千户长生']

const path1 = "/feed/index\?access_key/";
const path2 = "/show\/popular\/index\?";
const path3 = "/x\/v2\/rank";

var body = $response.body;
var url = $request.url;

if (url.indexOf(path1) != -1){
let obj = $response.body
body=JSON.parse(obj)
obj['data']['items'].forEach((element, index)=> {
   if(element.hasOwnProperty('ad_info')||element.hasOwnProperty('banner_item')||element['card_type']!='small_cover_v2'||blacklist.includes(element['args']['up_name'])){ 
obj['data']['items'].splice(index,1)  
    }
});
body=JSON.stringify(obj);
};

if (url.indexOf(path2) != -1){
let body = $response.body;
body=JSON.parse(body);
body['data'].forEach((element, index)=> {
   if(blacklist.includes(element['name'])){ 
         body['data'].splice(index,1)  
    }
});
body=JSON.stringify(body);
};

if (url.indexOf(path3) != -1){
let body = $response.body
body=JSON.parse(body)
body['data'].forEach((element, index)=> {
if(blacklist.includes(element['right_desc_1'])||element["card_type"] !== "small_cover_v5"){ 
         body['data'].splice(index,1)  
    }
})
body=JSON.stringify(body)
};
$done({body})