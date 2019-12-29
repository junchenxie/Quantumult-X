/*　^https?:\/\/.+\.getadv\/ url  script-response-body ali.js 
*/
let obj = JSON.parse($response.body);
             obj.data["place"]="";
             obj.data["content"]= "0";
             obj.data["actionType"]="0";
             obj.data["gmtEndMs"]="";
             obj.data["actionMode"]="0";
             obj.data["viewType"]="0";
　　         　　$done({body: JSON.stringify(obj)});
