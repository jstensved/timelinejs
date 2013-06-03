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
			
			var current = Math.floor((new Date()).getTime() / 1000),
				timer = null;
			
			timer = setInterval(function(){
				
				
				
				console.log('currentSec: ' + currentSec);
				
				current++;
				
			}, this.settings.interval);
			
			
		},
		
		
		addTimedEvent: function(time, callback){
		
		
			
		}
		
		
	});
	
	
});