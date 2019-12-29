/*
bilibili remove some account modules.

QX:
^https://app.bilibili.com/x/v2/account/(mine|myinfo)\?access_key url script-response-body bilibiliAccount.js

Surge & QX MITM = app.bilibili.com
*/

var body = $response.body;
var url = $request.url;
const path1 = "/account/mine\?";
const path2 = "/account/myinfo\?";

if (url.indexOf(path1) != -1){

let obj = JSON.parse(body);
 obj['data']['sections'].splice(2,1);
 obj["data"]["vip_type"] = 2;
 obj["data"]["vip"]["status"] = 1;
 obj["data"]["level"] = 9;
 obj["data"]["coin"] = 999;
 obj["data"]["bcoin"] = 9999;
 obj["data"]["vip"]["vip_pay_type"] = 1;
 obj["data"]["vip"]["type"] = 2;
 obj["data"]["vip"]["due_date"] = 1669824160;
 body=JSON.stringify(obj);
};
if (url.indexOf(path2) != -1){
let obj = JSON.parse(body);
   obj["data"]["vip"]["type"] = 2;
   obj["data"]["vip"]["status"] = 1;
   obj["data"]["level"] = 9;
   obj["data"]["coins"] = 999;
   obj["data"]["vip"]["vip_pay_type"] = 1;
   obj["data"]["vip"]["due_date"] = 1669824160;
 body=JSON.stringify(obj);
};

$done({body});
