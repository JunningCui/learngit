var scrollComponent = (function (id){
	var scrollEle =function (){
		return new m.fn.init(a,b);
	};
	scrollEle.fn = scrollEle.prototype = {
		init : function (options){
			this.setOptions(options);
			this.copyfile(id); 
		},
		copyfile: function(id){
				document.getElementById(id).innerHTML += '<br style="clear: both" />' + document.getElementById(id).innerHTML.innerHTML;
		},
		setOptions: function (){
			this.options  = options || {};
			this.anndelay = options.anndelay;
			this.stopdelay  =options.stopdelay ;
			this.anncount  = options.anncount;
			this.annheight  = options.annheight;
			this.annst  = options.annst;
			this._offsetHeight = options._offsetHeight;
		},
		announcementScroll:function (argument) {
			
		}
	}
})
