window.onload = function(e) {
	console.log('window.onload event fired');
	console.log('implicit event parameter: ' + e);
	console.log('stringified event object: ' + JSON.stringify(e));
}