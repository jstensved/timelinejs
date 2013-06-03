define('timeline', ['jquery'], function($){
	
	
	TimelineJS = function(opts){
		this.init(opts);
	}
	
	$.extend(TimelineJS.prototype, {
		
		settings: {
			interval: 1000,
		},
		
		events: [],
		
		init: function(opts){
		
			this.settings = $.extend({}, opts, this.settings);

		},
		
		
		run: function(){
			
			// tod add auto adjustment to correct millisecond
			
			var thisref = this;
			
			var current = Math.floor((new Date()).getTime() / 1000) * 1000,
				timer = null;
				
			
			// todo
			/*
			 set time til next runt to next interval time.
			 if there's been a glitch and a second has been skipped. run without pause until up to current time and on track.
			*/
			
			var timeTilNextRun = 0;
			
			while(true){
				
			
				setTimeout(function(){
					
					
					
					console.log('currentSec: ' + current);
					
					current += thisref.settings.interval;
					
				}, timeTilNextRun);
				
				
			}
		
		},
		
		
		addTimedEvent: function(time, callback){
		
		
			
		}
		
		
	});
	
	
});