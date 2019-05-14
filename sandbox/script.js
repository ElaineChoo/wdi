console.log("hello world");

/*var lightsabers = function(num) {
    console.log('I have ' + num + ' lightsabers.');
}

lightsabers(2);

var myLightsaberCollection = {
    blue: 1,
    green: 3
}

var lightsabers = function(lightsaberCollection) {
    //code here
    for (var i in myLightsaberCollection) {
    	if (myLightsaberCollection[i] === 1){
    	console.log('I have ' + myLightsaberCollection[i] + ' ' + i + ' lightsaber');	
    	} else
    	console.log('I have ' + myLightsaberCollection[i] + ' ' + i + ' lightsabers');
    }
}

lightsabers(myLightsaberCollection);*/

// Output
// I have 1 blue lightsaber
// I have 3 green lightsabers

var doMaths = function(a,b){
	var result = 0
	result = a + b;
	result = result + b + b + 3; //when break point is here, this function is not run yet.
}

for( var i=0; i<5; i++ ){
	doMaths(i, 2);
}