/* 海豚宝vip 
  https?:\/\/htbapi\.apptodev\.com\/api\/(user\/(getinfo|task))|v2/home/index\/  url script-response-body haitunbao.js
*/
var body = $response.body;
var url = $request.url;
const path2 = "/api/user/task/";
const path1 = "/api/user/getinfo/";
const path3 = "/v2/home/index/";

  if (url.indexOf(path1) != -1){
     let obj = JSON.parse($response.body);
      obj.data["expiretime"] = "1669824000";
      obj.data["experience_val"] = 888;
      obj.data["grade"] = "3";
      obj.data["integral"] = "9999";
      obj.data["mobile"] = "13634562888";
      obj.data["nickname"]= "海豚宝";
      body = JSON.stringify(obj);
}
  if (url.indexOf(path2) != -1){
    let obj = JSON.parse($response.body);
     obj.data["expiretime"] = "1669824000";
     obj.data["experience_val"] = 888;
     obj.data["grade"] = "3";
     obj.data["integral"] = "9999";
    body = JSON.stringify(obj);
}
  if (url.indexOf(path3) != -1){
    let obj = JSON.parse($response.body);
     obj.recserve = [];
     obj.notice_ad = [];
     obj.vipweb_ad = [];
    body = JSON.stringify(obj);
}

$done({body});
