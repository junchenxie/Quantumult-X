/*
XiaoXiaoYingShi unlock Vip
QX:
https:\/\/ios\.xiaoxiaoapps\.com\/(vod\/reqplay\/|ucp/index|getGlobalData) url script-response-body xxys.js

MITM = ios.xiaoxiaoapps.com
*/

const path1 = "/ucp/index";
const path2 = "/vod/reqplay/";
const path3 = "/getGlobalData";
var body = $response.body;
var url = $request.url;
if (url.indexOf(path1) != -1){
	let obj = JSON.parse(body);
	obj.data.uinfo["down_daily_remainders"] = "666";
	obj.data.uinfo["play_daily_remainders"] = "666";
	obj.data.user["goldcoin"] = "999";
	obj.data.uinfo["next_upgrade_need"] = "0";
	obj.data.uinfo["curr_group"] = "5";
	obj.data.user["isvip"] = "1";
   obj.data.user["mobi"] = "123456789"
	obj.data.user["goldcoin"] = "666";
	obj.data.user["gicon"] = "V5";
	obj.data.user["gid"] = "5";
	body = JSON.stringify(obj);
}
if (url.indexOf(path2) != -1){
	let obj = JSON.parse(body); 
	obj.retcode = "0";
	obj.data.lastplayindex = "1";
 	if(obj.data.hasOwnProperty("httpurl_preview")){
		var playurl = obj.data["httpurl_preview"];
		obj.data["httpurl"] = playurl;
	};
	body = JSON.stringify(obj);
}

if (url.indexOf(path3) != -1){
	let obj = JSON.parse(body); 
      obj.data.adgroups = "";
   body = JSON.stringify(obj);
   }
$done({body});

