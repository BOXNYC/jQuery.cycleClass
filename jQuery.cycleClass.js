(function($){

	$.CYCLE_CLASS_BOUNCE = 'bounce';
	$.CYCLE_CLASS_REWIND = 'rewind';
	$.CYCLE_CLASS_FORWARD = 1;
	$.CYCLE_CLASS_REVERSE = -1;
	
	$.fn.cycleClass = function(classes, options){
		options = $.extend({
			loopType: $.CYCLE_CLASS_REWIND,
			direction: $.CYCLE_CLASS_FORWARD
		}, options);
		var $this = $(this),
				classIndex = -1;
		if(typeof classes === 'string')
			classes = classes
				.replace(/\s{2,}/g, ' ')
				.replace(/^\s*|\s*$/g, '')
				.split(' ');
		$.each(classes, function(i, cl){
			if(!$this.hasClass(cl)) return true;
			$this.removeClass(cl);
			classIndex = i;
		});
		if(classIndex == -1) {
			$this.addClass(classes[0]);
			return $this;
		};
		switch(options.loopType) {
			case $.CYCLE_CLASS_REWIND :
				if(options.direction == $.CYCLE_CLASS_FORWARD)
					classIndex = (classIndex == (classes.length-1) ? 0 : classIndex+1);
				else if(options.direction == $.CYCLE_CLASS_REVERSE)
					classIndex = !classIndex ? classes.length-1 : classIndex-1;
				break;
			case $.CYCLE_CLASS_BOUNCE :
				var direction = $this.data('cycleClassDirection');
				if(typeof direction === 'undefined') {
					direction = options.direction;
					$this.data('cycleClassDirection', options.direction);
				};
				if(classIndex == (classes.length-1) && direction == $.CYCLE_CLASS_FORWARD) {
					direction = $.CYCLE_CLASS_REVERSE;
					$this.data('cycleClassDirection', direction);
				} else if(!classIndex && direction == $.CYCLE_CLASS_REVERSE) {
					direction = $.CYCLE_CLASS_FORWARD;
					$this.data('cycleClassDirection', direction);
				};
				classIndex += direction;
				break;
		};
		$this.addClass(classes[classIndex]);
		return $this;
	};
	
})(jQuery);
