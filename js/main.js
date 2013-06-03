require(['timeline'], function() {

	var now = (new Date()).getTime(),
		plus1000 = new Date(now + 1000),
		timeline = new TimelineJS();

	timeline.addTimedEvent(plus1000, function(){
		console.log('plus tusen callback');
	});

	timeline.run();

});