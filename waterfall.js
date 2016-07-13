(function($, window, docuemnt, undefined){

	var Water = function( parent, url, childWidth){

		if (url === undefined || typeof url !== 'string'){
			throw new Error ( "url is undefined or not a sting" );
		}

		var _parent 	= 	$(parent),
			_page 		=	1,
			_nowNode 	= 	[],
			_childWidth = 	childWidth,
			_requestable = true;


		var data  = {'img':[
		{ 'src':"/Uploads/Picture/2016-05-18/573c06664afb6.jpg", 'text':"2-3-B17套房全景图", 'url':"/home/article/detail/id/90.html", 'width':"300", 'height':"202" },{ 'src':"/Uploads/Picture/2016-05-18/573c068b49eb9.jpg", 'text':"2-3-B18样板间实景体验", 'url':"/home/article/detail/id/91.html", 'width':"300", 'height':"200" },{ 'src':"/Uploads/Picture/2016-05-25/574502715b138.jpg", 'text':"2-3-B19样板间实景体验", 'url':"/home/article/detail/id/92.html", 'width':"300", 'height':"450" },{ 'src':"/Uploads/Picture/2016-05-18/573c07894a054.jpg", 'text':"2-3-C07样板间实景体验", 'url':"/home/article/detail/id/93.html", 'width':"300", 'height':"200" },{ 'src':"/Uploads/Picture/2016-05-18/573c06ec45168.jpg", 'text':"2-3-B20样板间实景体验", 'url':"/home/article/detail/id/94.html", 'width':"300", 'height':"206" },{ 'src':"/Uploads/Picture/2016-05-25/574500c5cc6a6.jpg", 'text':"2-3-C09样板间实景体验", 'url':"/home/article/detail/id/96.html", 'width':"300", 'height':"450" },{ 'src':"/Uploads/Picture/2016-05-25/57451d43ca416.jpg", 'text':"2-3-C15样板间实景体验", 'url':"/home/article/detail/id/97.html", 'width':"300", 'height':"455" },{ 'src':"/Uploads/Picture/2016-05-18/573c08824b1da.jpg", 'text':"2-3-C16样板间实景体验", 'url':"/home/article/detail/id/98.html", 'width':"300", 'height':"200" },{ 'src':"/Uploads/Picture/2016-05-18/573c089e4fa89.jpg", 'text':"2-3-C17样板间实景体验", 'url':"/home/article/detail/id/99.html", 'width':"300", 'height':"200" },{ 'src':"/Uploads/Picture/2016-05-18/573c098a47f3c.jpg", 'text':"2-3-D09样板间实景体验", 'url':"/home/article/detail/id/100.html", 'width':"300", 'height':"198" },{ 'src':"/Uploads/Picture/2016-05-18/573c09aa4584a.jpg", 'text':"2-3-D10样板间实景体验", 'url':"/home/article/detail/id/101.html", 'width':"300", 'height':"199" },{ 'src':"/Uploads/Picture/2016-05-18/573c09d44608d.jpg", 'text':"2-3-D11样板间实景体验", 'url':"/home/article/detail/id/102.html", 'width':"300", 'height':"200" },{ 'src':"/Uploads/Picture/2016-05-25/57451dd8c6e5b.jpg", 'text':"2-3-D12样板间实景体验", 'url':"/home/article/detail/id/103.html", 'width':"300", 'height':"450" },{ 'src':"/Uploads/Picture/2016-05-18/573c0a2b4a277.jpg", 'text':"2-3-D13样板间实景体验", 'url':"/home/article/detail/id/105.html", 'width':"300", 'height':"200" },{ 'src':"/Uploads/Picture/2016-05-25/57451f6cc5897.jpg", 'text':"2-3-D15套件全景图", 'url':"/home/article/detail/id/106.html", 'width':"300", 'height':"450" },{ 'src':"/Uploads/Picture/2016-05-26/5746d34e08ae3.jpg", 'text':"2-3-D17样板间实景体验", 'url':"/home/article/detail/id/107.html", 'width':"300", 'height':"450" },{ 'src':"/Uploads/Picture/2016-05-27/5747f9b5812c9.jpg", 'text':"2-3-D19样板间实景体验", 'url':"/home/article/detail/id/108.html", 'width':"300", 'height':"450" },{ 'src':"/Uploads/Picture/2016-05-18/573c0ab148688.jpg", 'text':"2-3-D20样板间实景体验", 'url':"/home/article/detail/id/109.html", 'width':"300", 'height':"203" },{ 'src':"/Uploads/Picture/2016-05-18/573c0bb64d1f7.jpg", 'text':"2-3-F01样板间实景体验", 'url':"/home/article/detail/id/110.html", 'width':"300", 'height':"200" },{ 'src':"/Uploads/Picture/2016-05-18/573c0be14d3d3.jpg", 'text':"2-3-F02样板间实景体验", 'url':"/home/article/detail/id/111.html", 'width':"300", 'height':"198" },{ 'src':"/Uploads/Picture/2016-05-18/573c0bf943b29.jpg", 'text':"2-3-F04样板间实景体验", 'url':"/home/article/detail/id/112.html", 'width':"300", 'height':"200" },{ 'src':"/Uploads/Picture/2016-05-18/573c0c2948440.jpg", 'text':"2-3-F05样板间实景体验", 'url':"/home/article/detail/id/113.html", 'width':"300", 'height':"212" },{ 'src':"/Uploads/Picture/2016-05-18/573c055445f08.jpg", 'text':"2-3-B03样板间实景体验", 'url':"/home/article/detail/id/114.html", 'width':"300", 'height':"198" },{ 'src':"/Uploads/Picture/2016-05-18/573c057351197.jpg", 'text':"2-3-B04样板间实景体验", 'url':"/home/article/detail/id/115.html", 'width':"300", 'height':"213" },{ 'src':"/Uploads/Picture/2016-05-28/57490a8b09d97.jpg", 'text':"2-3-C01样板间实景体验", 'url':"/home/article/detail/id/116.html", 'width':"300", 'height':"451" },{ 'src':"/Uploads/Picture/2016-05-18/573c073151ff1.jpg", 'text':"2-3-C02样板间实景体验", 'url':"/home/article/detail/id/117.html", 'width':"300", 'height':"197" },{ 'src':"/Uploads/Picture/2016-05-18/573c075f4899d.jpg", 'text':"2-3-C03样板间实景体验", 'url':"/home/article/detail/id/118.html", 'width':"300", 'height':"199" },{ 'src':"/Uploads/Picture/2016-05-18/573c07eb47fcb.jpg", 'text':"2-3-C10样板间实景体验", 'url':"/home/article/detail/id/119.html", 'width':"300", 'height':"196" },{ 'src':"/Uploads/Picture/2016-05-18/573c081b4b196.jpg", 'text':"2-3-C11样板间实景体验", 'url':"/home/article/detail/id/120.html", 'width':"300", 'height':"196" },{ 'src':"/Uploads/Picture/2016-05-18/573c083c4a44f.jpg", 'text':"2-3-C12样板间实景体验", 'url':"/home/article/detail/id/121.html", 'width':"300", 'height':"199" },{ 'src':"/Uploads/Picture/2016-05-18/573c08b748a70.jpg", 'text':"2-3-D01样板间实景体验", 'url':"/home/article/detail/id/122.html", 'width':"300", 'height':"200" },{ 'src':"/Uploads/Picture/2016-05-25/5745016fdaa9d.jpg", 'text':"2-3-D02样板间实景体验", 'url':"/home/article/detail/id/123.html", 'width':"300", 'height':"451" },{ 'src':"/Uploads/Picture/2016-05-18/573c09154585f.jpg", 'text':"2-3-D04样板间实景体验", 'url':"/home/article/detail/id/124.html", 'width':"300", 'height':"196" },{ 'src':"/Uploads/Picture/2016-05-18/573c09374fbcd.jpg", 'text':"2-3-D06样板间实景体验", 'url':"/home/article/detail/id/125.html", 'width':"300", 'height':"199" },{ 'src':"/Uploads/Picture/2016-05-27/5747ebee8aac1.jpg", 'text':"2-4-A06样板间实景体验", 'url':"/home/article/detail/id/126.html", 'width':"300", 'height':"198" },{ 'src':"/Uploads/Picture/2016-05-27/5747f886850c1.jpg", 'text':"2-4-A08样板间实景体验", 'url':"/home/article/detail/id/127.html", 'width':"300", 'height':"451" },{ 'src':"/Uploads/Picture/2016-05-27/5747f0518dfd2.jpg", 'text':"2-4-B01样板间实景体验", 'url':"/home/article/detail/id/128.html", 'width':"300", 'height':"204" },{ 'src':"/Uploads/Picture/2016-05-27/5747f066853e2.jpg", 'text':"2-4-B02样板间实景体验", 'url':"/home/article/detail/id/129.html", 'width':"300", 'height':"199" },{ 'src':"/Uploads/Picture/2016-05-27/5747f09d9fccb.jpg", 'text':"2-4-B05样板间实景体验", 'url':"/home/article/detail/id/130.html", 'width':"300", 'height':"449" },{ 'src':"/Uploads/Picture/2016-06-24/576cc2730fa8c.jpg", 'text':"2-4-B06样板间实景体验", 'url':"/home/article/detail/id/131.html", 'width':"300", 'height':"199" },{ 'src':"/Uploads/Picture/2016-04-07/5705c6259a225.jpg", 'text':"2-4-B08样板间实景体验", 'url':"/home/article/detail/id/132.html", 'width':"300", 'height':"451" },{ 'src':"/Uploads/Picture/2016-05-27/5747f1bb883a9.jpg", 'text':"2-4-B09样板间实景体验", 'url':"/home/article/detail/id/133.html", 'width':"300", 'height':"196" },{ 'src':"/Uploads/Picture/2016-05-25/57451fd5c4cc1.jpg", 'text':"2-4-B10样板间实景体验", 'url':"/home/article/detail/id/134.html", 'width':"300", 'height':"205" },{ 'src':"/Uploads/Picture/2016-04-07/5705c65beff1d.jpg", 'text':"2-4-B11样板间实景体验", 'url':"/home/article/detail/id/135.html", 'width':"451", 'height':"300" },{ 'src':"/Uploads/Picture/2016-04-07/5705c5f5871d1.jpg", 'text':"2-4-B03样板间实景体验", 'url':"/home/article/detail/id/136.html", 'width':"451", 'height':"300" },{ 'src':"/Uploads/Picture/2016-05-27/5747f82e8838f.jpg", 'text':"2-4-B13样板间实景体验", 'url':"/home/article/detail/id/137.html", 'width':"300", 'height':"369" },{ 'src':"/Uploads/Picture/2016-05-25/57452056c44ac.jpg", 'text':"2-4-B14样板间实景体验", 'url':"/home/article/detail/id/138.html", 'width':"300", 'height':"199" },{ 'src':"/Uploads/Picture/2016-04-07/5705c676a6163.jpg", 'text':"2-4-B15样板间实景体验", 'url':"/home/article/detail/id/139.html", 'width':"300", 'height':"451" },{ 'src':"/Uploads/Picture/2016-05-27/5747f2768308d.jpg", 'text':"2-4-B17样板间实景体验", 'url':"/home/article/detail/id/140.html", 'width':"300", 'height':"195" },{ 'src':"/Uploads/Picture/2016-05-27/5747f28b85dd4.jpg", 'text':"2-4-B18样板间实景体验", 'url':"/home/article/detail/id/141.html", 'width':"300", 'height':"179" }]};

		function getData (){

			if (_requestable){
					_requestable  = false;
					// $.ajax({
					// 	url : url,
					// 	type : "post",
					// 	success : function( data ){
					// _page++;
					// 		return data;
					// 	},
					// 	error : function( msg ){
					// 		alert(msg);
					// 	}
					// })
					
					return data.img;
				}else {
					return false;
				}
			};

			function getCols(){

				return Math.floor($(window).width()/_childWidth);
			};
		
			function addChild(data){

				$.each(data, function(i, v){

					var height = (_childWidth/v.width)*v.height;
					var child = $("<div class='waterfall_box'><a class='img_box' href='"+v.url+"'><img height='"+height+"' src='http://www.bayibolan.com"+v.src+"'/><h4 class='waterfall_title' href='"+v.url+"'>"+v.text+"</h4></a></div>");
					_parent.append(child);

				});
				layout();
								
			};
			
			function changeParentWidth(){

				var cols = getCols();

				_parent.width(cols * _childWidth).css({margin:'0 auto'});

			};
			
			function layout(){
				
				var cols = getCols();
				var top = [];
				var child = _parent.children();
				for(var i = 0, len = child.length; i < len; i++){
					
					if (i < cols){
						child.eq(i).css({'float':'left','position':'static'});
						top.push(child.eq(i).height());
						
					}else {
						var topMin = Math.min.apply(null, top);
						var topMinIndex = $.inArray(topMin, top);
						child.eq(i).css({
							position:"absolute",
							top:topMin,
							left:child.eq(topMinIndex).position().left

						});
						top[topMinIndex] += child.eq(i).height();
						var max = Math.max.apply(null, top);
						_parent.height(max);
					}

				};

				_requestable = true;

			};

			function refersh(){

				$(window).resize(function(){
					changeParentWidth();
					layout();
				});

			};

			function loadMore(){

				$(window).scroll(function(){
					if(checkHeight()){
						addChild(getData());
						changeParentWidth();
					}
				});
			};

			function checkHeight(){

				var top = _parent.position().top;
				var scrollTop = $(window).scrollTop();
				var _parentHeight = _parent.height();
				var windowHeight = $(window).height();

				return (scrollTop - top > _parentHeight - 50 - windowHeight) ? true : false; 
			};

			return function(){
				this.init = function(){
					addChild(getData());
					changeParentWidth();
					refersh();
					loadMore();
					return this;
				}
					
			};

	}


	$.fn.waterfall = function(url, cw){
		var water = Water(this, url, cw);
		return new water().init();
	}

})(jQuery, window, document);
