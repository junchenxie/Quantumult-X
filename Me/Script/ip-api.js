var endpoint = 'http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,reverse,mobile,proxy,hosting,query';

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var response = JSON.parse(this.responseText);
		if(response.status !== 'success') {
			console.log('query failed: ' + response.message);
			return
		}
		// Redirect
		if(response.countryCode == "US") {
			window.location.replace("https://google.com/");
		}
		if(response.countryCode == "CA") {
			window.location.replace("https://google.ca/");
		}
	}
};
xhr.open('GET', endpoint, true);
xhr.send();