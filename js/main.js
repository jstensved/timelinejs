require(['timeline'], function() {

	var now = (new Date()).getTime(),
		plus1000 = new Date(now + 5000),
		timeline = new TimelineJS();

	timeline.addTimedEvent(plus1000, function(){
		console.log('plus femtusen callback');
	});

	timeline.run();

});