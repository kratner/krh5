(function (o) {
	console.log('served from module.core.js');
	console.log('note that module.core.js is wrapped in an IIFE before processing');
	console.log('with object "o" passed as parameter of IIFE');
	console.log('stringified value of o as parameter of IIFE in first.js: ' + JSON.stringify(o));
	console.log('logged from first.js: ' + o.prop1);

	}
)({'prop1': 'this is the prop1 test value'});