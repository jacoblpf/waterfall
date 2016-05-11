(function ($, window, document, undefined) {
	var $window = $(window);
	var Wtaerfall = function(c, s){
		this.$c = $(c); //瀑布流父容器
		this.s = s; //子元素类名
		this.imgDefault = "./Default.png"; //缺省图片
		this.isImgLoad = true;	//图片是否加载完成
		this.setTime;	//图片检查定时器
		this.time = 1;	//请求次数
		this.isLoad = true; //是否可以请求
	}

	Wtaerfall.prototype = {

		constructor:Wtaerfall,

		request:function(p){ 
			var _this = this;
			// $.ajax({
			// 	url:'',
			// 	type:'post',
			// 	success:function(data){
			// 		if (data.length == 0){
			// 			alert("抱歉，没有图片了！")
			// 			return false;
			// 		}
			// 		if (!_this.isLoad) {
			// 			return false;
			// 		}
			// 		_this.isLoad = false;
			// 		_this.time++;
			// 		_this.creat(data);
			// 	},
			// 	error:function(){

			// 	}
			// });		
			var data = [
						{ 'src':"http://vi4.6rooms.com/live/2016/04/20/00/1002v1461084954136538551_b.jpg"},
						{ 'src':"http://vi4.6rooms.com/live/2016/04/20/00/1002v1461084952952566974_b.jpg"},
						{ 'src':"http://vi4.6rooms.com/live/2016/04/20/00/1002v1461084951971473636_b.jpg"},
						{ 'src':"http://vi5.6rooms.com/live/2016/04/20/00/1002v1461084950671513358_b.jpg"},
						{ 'src':"http://vi1.6rooms.com/live/2016/04/20/00/1002v1461084949836229511_b.jpg"},
						{ 'src':"http://vi4.6rooms.com/live/2016/04/20/00/1002v1461084948028713930_b.jpg"},
						{ 'src':"http://vi3.6rooms.com/live/2016/04/20/00/1002v1461084947495461237_b.jpg"},
						{ 'src':"http://vi3.6rooms.com/live/2016/04/20/00/1002v1461084946171490635_b.jpg"},
						{ 'src':"http://vi3.6rooms.com/live/2016/04/20/00/1002v1461084945223654292_b.jpg"},
						{ 'src':"http://vi3.6rooms.com/live/2016/04/20/00/1002v1461084944119328303_b.jpg"},
						{ 'src':"http://vi3.6rooms.com/live/2016/04/20/00/1002v1461084943148577578_b.jpg"},
						{ 'src':"http://vi3.6rooms.com/live/2016/04/20/00/1002v1461084942015473002_b.jpg"},
						{ 'src':"http://vi2.6rooms.com/live/2016/04/20/00/1002v1461084939566338326_b.jpg"},
						{ 'src':"http://vi5.6rooms.com/live/2016/04/20/00/1002v1461084938802490856_b.jpg"},
						{ 'src':"http://vi1.6rooms.com/live/2016/04/20/00/1002v1461084937804067873_b.jpg"},
						{'src':"http://vi4.6rooms.com/live/2016/04/20/00/1002v1461084937333079090_b.jpg"},
						{'src':"http://vi1.6rooms.com/live/2016/04/20/01/1002v1461086272445344813_b.jpg"},
						{ 'src':"http://vi1.6rooms.com/live/2016/04/20/01/1002v1461086271898269600_b.jpg"},
						{ 'src':"http://vi4.6rooms.com/live/2016/04/20/01/1002v1461086271456931316_b.jpg"},
						{ 'src':"http://vi0.6rooms.com/live/2016/04/20/01/1002v1461086271093521082_b.jpg"},
						{ 'src':"http://vi3.6rooms.com/live/2016/04/20/01/1002v1461086270590585936_b.jpg"},
						{ 'src':"http://vi2.6rooms.com/live/2016/04/20/01/1002v1461086270087373076_b.jpg"},
						{ 'src':"http://vi1.6rooms.com/live/2016/04/20/01/1002v1461086269549682663_b.jpg"},
						{ 'src':"http://vi3.6rooms.com/live/2016/04/20/01/1002v1461086268684693475_b.jpg"},
						{ 'src':"http://vi0.6rooms.com/live/2016/04/20/01/1002v1461086268102313627_b.jpg"},
						{ 'src':"http://vi1.6rooms.com/live/2016/04/20/01/1002v1461086267518491910_b.jpg"},
						{ 'src':"http://vi3.6rooms.com/live/2016/04/20/01/1002v1461086267076584889_b.jpg"},
						{ 'src':"http://vi2.6rooms.com/live/2016/04/20/01/1002v1461086266675462898_b.jpg"},
						{ 'src':"http://vi2.6rooms.com/live/2016/04/20/01/1002v1461086266132014500_b.jpg"},
						{ 'src':"http://vi1.6rooms.com/live/2016/04/20/01/1002v1461086265449230395_b.jpg"},
						{ 'src':"http://vi5.6rooms.com/live/2016/04/20/01/1002v1461086264791695649_b.jpg"},
						{ 'src':"http://vi3.6rooms.com/live/2016/04/20/01/1002v1461086263865266059_b.jpg"},
						{ 'src':"http://vi0.6rooms.com/live/2016/04/20/01/1002v1461086263209616701_b.jpg"},
						{ 'src':"http://vi0.6rooms.com/live/2016/04/20/01/1002v1461086262697350423_b.jpg"},
						{ 'src':"http://vi4.6rooms.com/live/2016/04/20/01/1002v1461086239400158722_b.jpg"},
						{ 'src':"http://vi3.6rooms.com/live/2016/04/20/01/1002v1461086238990684634_b.jpg"},
						{ 'src':"http://vi5.6rooms.com/live/2016/04/20/01/1002v1461086238417082176_b.jpg"},
						{ 'src':"http://vi2.6rooms.com/live/2016/04/20/01/1002v1461086237968836797_b.jpg"},
						{ 'src':"http://vi2.6rooms.com/live/2016/04/20/01/1002v1461086237390478529_b.jpg"},
						{ 'src':"http://vi1.6rooms.com/live/2016/04/20/01/1002v1461086236111894784_b.jpg"},
						{ 'src':"http://vi5.6rooms.com/live/2016/04/20/01/1002v1461086235479887801_b.jpg"},
						{ 'src':"http://vi3.6rooms.com/live/2016/04/20/01/1002v1461086234828253227_b.jpg"},
						{ 'src':"http://vi5.6rooms.com/live/2016/04/20/01/1002v1461086234010834134_b.jpg"},
						{ 'src':"http://vi2.6rooms.com/live/2016/04/20/01/1002v1461086233214093384_b.jpg"},
						{ 'src':"http://vi0.6rooms.com/live/2016/04/20/01/1002v1461086232645710996_b.jpg"},
						{ 'src':"http://vi5.6rooms.com/live/2016/04/20/01/1002v1461086231964010406_b.jpg"},
						{ 'src':"http://vi0.6rooms.com/live/2016/04/20/01/1002v1461086231334347651_b.jpg"},
						{ 'src':"http://vi1.6rooms.com/live/2016/04/20/01/1002v1461086230921981204_b.jpg"},
						{ 'src':"http://vi1.6rooms.com/live/2016/04/20/01/1002v1461086230466624999_b.jpg"},
						{ 'src':"http://vi3.6rooms.com/live/2016/04/20/01/1002v1461086229903960617_b.jpg"},
						{ 'src':"http://vi0.6rooms.com/live/2016/04/20/01/1002v1461086229130360369_b.jpg"},
						{ 'src':"http://vi5.6rooms.com/live/2016/04/20/01/1002v1461086228408856440_b.jpg"},
						{ 'src':"http://vi0.6rooms.com/live/2016/04/20/01/1002v1461086226941784556_b.jpg"},
						{ 'src':"http://vi5.6rooms.com/live/2016/04/20/01/1002v1461086226308455503_b.jpg"},
						{ 'src':"http://vi0.6rooms.com/live/2016/04/20/01/1002v1461086225460776922_b.jpg"},
						{ 'src':"http://vi5.6rooms.com/live/2016/04/20/01/1002v1461086224878567245_b.jpg"},
						{ 'src':"http://vi2.6rooms.com/live/2016/04/20/01/1002v1461086223703571764_b.jpg"},
						{ 'src':"http://vi3.6rooms.com/live/2016/04/20/01/1002v1461086223143911124_b.jpg"},
						{ 'src':"http://vi4.6rooms.com/live/2016/04/20/00/1002v1461084954136538551_b.jpg"},
						{ 'src':"http://vi4.6rooms.com/live/2016/04/20/00/1002v1461084952952566974_b.jpg"}
		
					];

					var data1 = data.slice((_this.time-1)*10, _this.time*10);

					if (data1.length == 0){
						// console.log("抱歉，没有图片了！")
						// return false;
						_this.time = 1;
						data1 = data.slice((_this.time-1)*10, _this.time*10);
					}
					if (!_this.isLoad) {
						return false;
					}
					_this.isLoad = false;
					_this.time++;
					_this.creat(data1);
		
		},
		creat:function(data){
			var _this = this;
			var imgs = [];
			_this.$c.css({'position':'relative'});
			$.each(data, function(i, v){
				if (v == null){
					return false;
				}
				if (v.src == ""){
					v.src = _this.imgDefault;
				}
				var box = $("<div class='"+_this.s+"'></div>").css({'opacity':0,'float':'left'});				
				var img = $("<img src='"+v.src+"'/>").appendTo(box);
				_this.$c.append(box);
				imgs.push(img);
			});
			_this.checkImg(imgs);
		},
		checkImg:function(imgs){
			var _this = this;
			$.each(imgs, function(i, v){
				
				if (!$(v).get(0).complete){
					_this.isImgLoad = false;
				}
				return false;
			});
			if (_this.isImgLoad){
				_this.layout();
			}else {
				_this.isImgLoad = true;
				setTime = setTimeout(function(){
					_this.checkImg(imgs);
				},500);
			}
		},
		layout:function(){
			var _this = this;
			var boxs = _this.$c.find("."+_this.s);
			var colH = [];
			var ew = _this.$c.width();	//父容器宽度 
			var sw = boxs.width();
			var cols = Math.floor(ew/sw);
			$.when($.each(boxs, function(i, v){
				if (i < cols){
					colH.push($(v).height()+20);
				}else {
					var minColH = Math.min.apply(null, colH);
					var minColI = $.inArray(minColH, colH);
					$(v).css({
						'position' : 'absolute',
						'top' : minColH,
						'left' : boxs.eq(minColI).position().left
					});
					colH[minColI] += (20+$(v).height());
					_this.$c.height(Math.max.apply(null, colH));
				}
				// if (i == boxs.length-1){
				// 	alert("布局完毕");
				// }
			})).then(function(){
					boxs.animate({'opacity' : '1'},300,'swing');_this.isLoad = true;_this.docH();
			});
			// setTimeout(function(){boxs.animate({'opacity' : '1'},500,'swing');_this.isLoad = true;_this.docH();},500);
			//boxs.animate({'opacity' : '1'},1000,'swing');_this.isLoad = true;_this.docH();
			// alert("显示完成");
			
		},
		docH:function(){
			var _this =this;
			
			if ((_this.$c.height()+_this.$c.position().top) -50 < $(window).height()){
				_this.request(_this.time);
			}
		},
		scroll:function () {
			var _this = this;
			
			$window.scroll(function(){
				if (_this.checkH()){
					_this.request(_this.time);
				}
			});	
		},
		checkH:function(){
			var _this = this;
			var $aPin = $("."+_this.s);
		    var lastPinH = $aPin.last().get(0).offsetTop + Math.floor($aPin.last().height());//创建【触发添加块框函数waterfall()】的高度：最后一个块框的距离网页顶部+自身高的一半(实现未滚到底就开始加载)
		    var scrollTop = $( window ).scrollTop()//注意解决兼容性
		    var documentH = $( window ).height();//页面高度
		    return (lastPinH - 50 < scrollTop + documentH ) ? true : false;//到达指定高度后 返回true，触发waterfall()函数
		},
		init:function(){			
			this.request(this.time);
			this.scroll();
			this.docH();
		}
		
	}

	$.fn.waterfall = function(s){
		return new Wtaerfall(this, s).init();
	}

	
})(jQuery, window, document);
