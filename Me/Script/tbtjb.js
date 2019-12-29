/* 淘宝特价版开屏广告 
QX：
^https?:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.taobao\.jnpiter\.bakkhos\.festival\.get\/1\.0\?.+Splash%22%7D url script-response-body tbtjb.js
保存到本地Script文件夹下，在[rewrite_local]下添加以上链接
Surge & QX MITM = guide-acs.m.taobao.com
*/
　　let obj = JSON.parse($response.body);
             obj.data["times"]="0";
             obj.data["targetUrl"]= "";
             obj.data["gmtEndMs"]="";
             obj.data["durationTime"]="0";
　　          obj.data["imageUrlForiOSX"]="";
             obj.data["imageUrlForiOSXR"]="";
　　          obj.data["imageUrlForiOSNormal"]="";
             obj.data["imageUrlForAndroidLong"]="";
             obj.data["imageUrlForAndroidNormal"]="";
　　$done({body: JSON.stringify(obj)});

