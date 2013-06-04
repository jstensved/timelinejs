require(['timeline'], function() {

	var now = (new Date()).getTime(),
		plus1000 = new Date(now + 5000),
		timeline = new TimelineJS();

	timeline.add(plus1000, function(){
		console.log('plus femtusen callback');
	});
	
	
	$(timeline).on('time', function(e, time){
		
		
		var $p = $('p#now');
		
		
		if($p.length == 0)
		{
			$p = $('<p id="now"></p>').appendTo('body');
		}
		
		$p.text(time);
	
		
	});

	timeline.run();

});