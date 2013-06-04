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
		
		// calculate a floored time based on interval for time
		getTimeKey: function(time){
			
			// note: is floor always right or should it round? or perhaps ceiling?
			
			return Math.floor( time / this.settings.interval) * this.settings.interval;
		},
		
		run: function(){
			
			// set start to the closest past even time based on interval
			var lastRun = this.getTimeKey((new Date()).getTime());
			
			this.runIncrement(lastRun);
			
		},
		
		runIncrement: function(lastRun){
			
			
			var thisref = this;
			
			var now = (new Date()).getTime(),
				nextRunTime = lastRun + thisref.settings.interval,
				timeUntilNextRun = nextRunTime - now,
				delay = timeUntilNextRun > 0 ? timeUntilNextRun : 0;			
				

			setTimeout(function(){
							
				// run events for current time
				var execTime = thisref.runEvents(nextRunTime);
	
	
				console.log('execTime: ' + execTime +', nextRunTime: ' + nextRunTime  + ', now: ' + (new Date()).getTime() + ', nowKey: ' + thisref.getTimeKey( (new Date()).getTime()) );
	
				if(execTime > thisref.settings.interval)
				{
					console.log('warning: execTime exceeds interval. execTime: ' +  execTime + ', diff: ' + execTime - thisref.settings.interval);
				}
						
						
				//console.log('execTime: ' + execTime);
	
				// schedule next
				thisref.runIncrement(nextRunTime);
				
			}, delay);
				
				
			
		},
		
		
		// Run events for specific time
		// returns the run time
		runEvents: function(time){
			
			var preExecTime = (new Date()).getTime();
			
			
			// exec actual events
			
			if(time in this.events){			
				
				$.each(this.events[time], function(i, func){
				
					func();
				
				});
				
				// remove old callback to release memory
				delete this.events[time];
				
			}
			
			$(this).trigger('time', [time]);
			
			// return execution time			
			return (new Date()).getTime() - preExecTime;

		},
		
		
		// add an event on a specific time
		add: function(time, callback){
		
			var key = this.getTimeKey(time);
			
			console.log('adding event at ' + key );
			
			
			if(!(key in this.events)){
				this.events[key] = new Array();	
			}
			
			this.events[key].push(callback);
	
			
		}
		
		
	});
	
	
});