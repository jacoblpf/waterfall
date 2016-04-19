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
						{ 'src':"http://h.hiphotos.baidu.com/image/h%3D300/sign=2fb4e98192cad1c8cfbbfa274f3c67c4/83025aafa40f4bfbe41767fa044f78f0f636185c.jpg"},
						{ 'src':"http://e.hiphotos.baidu.com/image/h%3D300/sign=37898e6af036afc3110c39658318eb85/908fa0ec08fa513d1251af743a6d55fbb3fbd9a5.jpg"},
						{ 'src':"http://c.hiphotos.baidu.com/image/h%3D300/sign=889f0485b9096b639e1958503c328733/3801213fb80e7becd63ec04b282eb9389a506bb0.jpg"},
						{ 'src':"http://h.hiphotos.baidu.com/image/h%3D300/sign=1655a14ec15c10383b7ec8c28211931c/2cf5e0fe9925bc31a365a0cc59df8db1cb1370ae.jpg"},
						{ 'src':"http://e.hiphotos.baidu.com/image/h%3D360/sign=b795bec28301a18befeb1449ae2e0761/8644ebf81a4c510fe5b8daf46459252dd52aa5db.jpg"},
						{ 'src':"http://g.hiphotos.baidu.com/image/h%3D360/sign=e35617c82c34349b6b066883f9eb1521/91ef76c6a7efce1b5b6d3e18ab51f3deb58f659a.jpg"},
						{ 'src':"http://c.hiphotos.baidu.com/image/h%3D360/sign=38005b020ed162d99aee641a21dea950/b7003af33a87e9500f22e6aa14385343fbf2b43a.jpg"},
						{ 'src':"http://d.hiphotos.baidu.com/image/h%3D360/sign=e0a211de5eafa40f23c6c8db9b65038c/562c11dfa9ec8a13f075f10cf303918fa1ecc0eb.jpg"},
						{ 'src':"http://a.hiphotos.baidu.com/image/h%3D360/sign=e7b5381941a7d933a0a8e2759d4bd194/6f061d950a7b020893f23dec61d9f2d3572cc880.jpg"},
						{ 'src':"http://a.hiphotos.baidu.com/image/h%3D360/sign=0ea01618d209b3def4bfe26efcbe6cd3/5366d0160924ab18cfc5504736fae6cd7a890bea.jpg"},
						{ 'src':"http://e.hiphotos.baidu.com/image/h%3D360/sign=3f9e3d7bf11fbe09035ec5125b610c30/00e93901213fb80e3fb963da35d12f2eb9389456.jpg"},
						{ 'src':"http://c.hiphotos.baidu.com/image/h%3D360/sign=6046523d6963f624035d3f05b745eb32/203fb80e7bec54e7a488c31abb389b504fc26a4a.jpg"},
						{ 'src':"http://h.hiphotos.baidu.com/image/h%3D360/sign=1579c89fa60f4bfb93d09852334e788f/10dfa9ec8a136327f5ab6533938fa0ec08fac768.jpg"},
						{ 'src':"http://h.hiphotos.baidu.com/image/h%3D360/sign=0741752d8418367ab28979db1e738b68/0b46f21fbe096b634134e6540e338744ebf8ac81.jpg"},
						{ 'src':"http://e.hiphotos.baidu.com/image/h%3D360/sign=24aaeafe543d269731d30e5b65fbb24f/64380cd7912397dd25024f305c82b2b7d0a2878f.jpg"},
						{'src':"http://b.hiphotos.baidu.com/image/h%3D360/sign=ff34dff8bd389b5027ffe654b537e5f1/a686c9177f3e670900d880193fc79f3df9dc5578.jpg"},
						{ 'src':"http://c.hiphotos.baidu.com/image/h%3D360/sign=b60c8428d01b0ef473e89e58edc551a1/b151f8198618367ac87ab3db2c738bd4b21ce5c1.jpg"},
						{ 'src':"http://a.hiphotos.baidu.com/image/h%3D360/sign=e93aa7a4f403738dc14a0a24831bb073/08f790529822720e5cc83afe79cb0a46f21fabb4.jpg"},
						{ 'src':"http://e.hiphotos.baidu.com/image/h%3D360/sign=af15bbb1ccea15ce5eeee60f86003a25/9c16fdfaaf51f3de18a16c5091eef01f3a2979f7.jpg"},
						{ 'src':"http://a.hiphotos.baidu.com/image/h%3D360/sign=a6139502aeaf2eddcbf14fefbd100102/bd3eb13533fa828b760476e7ff1f4134970a5a8b.jpg"},
						{ 'src':"http://b.hiphotos.baidu.com/image/h%3D360/sign=f9c9f93f28f5e0fef1188f076c6134e5/d788d43f8794a4c274c8110d0bf41bd5ad6e3928.jpg"},
						{ 'src':"http://a.hiphotos.baidu.com/image/h%3D360/sign=2ecf8457f4246b60640eb472dbf91a35/b90e7bec54e736d1bfe8560c99504fc2d562693f.jpg"},
						{ 'src':"http://e.hiphotos.baidu.com/image/h%3D360/sign=1f4423d9a964034f10cdc4009fc27980/622762d0f703918ff453d0ce533d269759eec430.jpg"},
						{ 'src':"http://c.hiphotos.baidu.com/image/h%3D360/sign=4b4359a4d343ad4bb92e40c6b2035a89/03087bf40ad162d960a3c61d13dfa9ec8a13cd66.jpg"},
						{ 'src':"http://d.hiphotos.baidu.com/image/h%3D360/sign=86aee1fbf1deb48fe469a7d8c01e3aef/b812c8fcc3cec3fd8757dcefd488d43f8794273a.jpg"},
						{ 'src':"http://a.hiphotos.baidu.com/image/h%3D360/sign=291a667b544e9258b93480e8ac82d1d1/38dbb6fd5266d016291d1037952bd40735fa35ac.jpg"},
						{ 'src':"http://h.hiphotos.baidu.com/image/h%3D360/sign=96971cbad343ad4bb92e40c6b2035a89/03087bf40ad162d9bd77830313dfa9ec8a13cd10.jpg"},
						{ 'src':"http://c.hiphotos.baidu.com/image/h%3D360/sign=62701ab9be3eb1355bc7b1bd961fa8cb/7a899e510fb30f24a0ddda52ca95d143ad4b031f.jpg"},
						{ 'src':"http://e.hiphotos.baidu.com/image/h%3D360/sign=4c2e7173af4bd1131bcdb1346aaea488/7af40ad162d9f2d3d397b1efabec8a136327cc28.jpg"},
						{ 'src':"http://b.hiphotos.baidu.com/image/h%3D360/sign=6c08d2c63b01213fd03348da64e736f8/fc1f4134970a304ec40746e5d3c8a786c9175c8c.jpg"},
						{ 'src':"http://g.hiphotos.baidu.com/image/h%3D360/sign=decbbe69770e0cf3bff748fd3a47f23d/adaf2edda3cc7cd9c38927a23c01213fb80e9120.jpg"},
						{ 'src':"http://g.hiphotos.baidu.com/image/h%3D360/sign=caa2d267cfef7609230b9f991edca301/6d81800a19d8bc3e7763d030868ba61ea9d345e5.jpg"},
						{ 'src':"http://a.hiphotos.baidu.com/image/h%3D360/sign=efb6395f0946f21fd6345855c6256b31/8c1001e93901213f8072397857e736d12e2e95d4.jpg"},
						{ 'src':"http://h.hiphotos.baidu.com/image/h%3D360/sign=58ca0a9f9816fdfac76cc0e8848e8cea/cc11728b4710b91237d9074ac6fdfc039245226e.jpg"},
						{ 'src':"http://b.hiphotos.baidu.com/image/h%3D360/sign=70f16f4f3cdbb6fd3a5be3203925aba6/8ad4b31c8701a18ba6fdc9fb9b2f07082838fe74.jpg"},
						{ 'src':"http://f.hiphotos.baidu.com/image/h%3D360/sign=8ad21ef4d300baa1a52c41bd7711b9b1/0b55b319ebc4b7455646640ecdfc1e178b8215d3.jpg"},
						{ 'src':"http://h.hiphotos.baidu.com/image/h%3D360/sign=4e4b139eac014c08063b2ea33a7b025b/359b033b5bb5c9eab2a19dd4d039b6003af3b3b3.jpg"},
						{ 'src':"http://f.hiphotos.baidu.com/image/h%3D360/sign=0ca634ec612762d09f3ea2b990ed0849/5243fbf2b21193131534747f67380cd790238d8e.jpg"},
						{ 'src':"http://f.hiphotos.baidu.com/image/h%3D360/sign=f6007fc08301a18befeb1449ae2d0761/8644ebf81a4c510fa42d1bf66459252dd52aa575.jpg"},
						{ 'src':"http://b.hiphotos.baidu.com/image/h%3D360/sign=d7df3611f8faaf519be387b9bc5594ed/738b4710b912c8fcda0a68faf9039245d688210f.jpg"},
						{ 'src':"http://c.hiphotos.baidu.com/image/h%3D360/sign=09e55879fbdcd100d29cfe27428b47be/78310a55b319ebc4856784ed8126cffc1e1716a2.jpg"},
						{ 'src':"http://c.hiphotos.baidu.com/image/h%3D360/sign=3d6f219c442309f7f86fab14420e0c39/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg"},
						{ 'src':"http://h.hiphotos.baidu.com/image/h%3D360/sign=154a3ec508d162d99aee641a21dfa950/b7003af33a87e9502268836d12385343fbf2b4b7.jpg"},
						{ 'src':"http://f.hiphotos.baidu.com/image/h%3D360/sign=54de42745dee3d6d3dc681cd73146d41/902397dda144ad345c61d654d4a20cf430ad8502.jpg"},
						{ 'src':"http://h.hiphotos.baidu.com/image/h%3D360/sign=6d94a624bb12c8fcabf3f0cbcc0392b4/8326cffc1e178a82a61eaba4f403738da977e890.jpg"},
						{ 'src':"http://d.hiphotos.baidu.com/image/h%3D360/sign=5c9f53c79c2f070840052c06d925b865/d8f9d72a6059252d0f635c8c369b033b5ab5b9c6.jpg"},
						{ 'src':"http://d.hiphotos.baidu.com/image/h%3D360/sign=d2576ff19e82d158a4825fb7b00b19d5/0824ab18972bd40736a43ae279899e510fb30949.jpg"},
						{ 'src':"http://c.hiphotos.baidu.com/image/h%3D360/sign=8bb7ee460afa513d4eaa6ad80d6c554c/cb8065380cd791238de5efeeaf345982b2b78026.jpg"},
						{ 'src':"http://f.hiphotos.baidu.com/image/h%3D360/sign=c3b7da77d309b3def4bfe26efcbe6cd3/5366d0160924ab1802d29c2837fae6cd7a890bec.jpg"},
						{ 'src':"http://a.hiphotos.baidu.com/image/h%3D360/sign=48484717d62a28345ca6300d6bb5c92e/e61190ef76c6a7efe60aff2cfffaaf51f3de668f.jpg"},
						{ 'src':"http://c.hiphotos.baidu.com/image/h%3D360/sign=ee80bc30d01b0ef473e89e58edc451a1/b151f8198618367a90f68bc32c738bd4b31ce5b5.jpg"},
						{ 'src':"http://f.hiphotos.baidu.com/image/h%3D360/sign=8db75637347adab422d01d45bbd5b36b/f31fbe096b63f6241ecedc1c8544ebf81a4ca31a.jpg"},
						{ 'src':"http://f.hiphotos.baidu.com/image/h%3D360/sign=23c9891ebb389b5027ffe654b535e5f1/a686c9177f3e6709dc25d6ff39c79f3df8dc558c.jpg"},
						{ 'src':"http://c.hiphotos.baidu.com/image/h%3D360/sign=8ff8dc7e9058d109dbe3afb4e159ccd0/b7fd5266d0160924f9b41d1bd60735fae6cd3418.jpg"},
						{ 'src':"http://c.hiphotos.baidu.com/image/h%3D360/sign=73eea913df54564efa65e23f83df9cde/80cb39dbb6fd5266eaaca914a918972bd407362e.jpg"},
						{ 'src':"http://d.hiphotos.baidu.com/image/h%3D360/sign=9c02380bba99a90124355d302d950a58/2934349b033b5bb54ad8c4e134d3d539b600bca6.jpg"},
						{ 'src':"http://g.hiphotos.baidu.com/image/h%3D360/sign=74f13fa10a24ab18ff16e73105fbe69a/86d6277f9e2f07080eaff087ea24b899a801f28b.jpg"},
						{ 'src':"http://f.hiphotos.baidu.com/image/h%3D360/sign=d536fb4d523d269731d30e5b65f9b24f/64380cd7912397ddd49e5e835a82b2b7d1a28756.jpg"},
						{ 'src':"http://b.hiphotos.baidu.com/image/h%3D360/sign=c51569eca1cc7cd9e52d32df09002104/32fa828ba61ea8d394a50605950a304e251f582f.jpg"},
						{ 'src':"http://b.hiphotos.baidu.com/image/h%3D360/sign=788437fe39c79f3d90e1e2368aa0cdbc/f636afc379310a5502a0acf5b54543a98226102e.jpg"},
						{ 'src':"http://a.hiphotos.baidu.com/image/h%3D360/sign=ae204919f91f4134ff370378151e95c1/c995d143ad4bd1137bce63c85eafa40f4afb05cc.jpg"},
						{ 'src':"http://c.hiphotos.baidu.com/image/h%3D360/sign=eded408f98504fc2bd5fb603d5dce7f0/c8177f3e6709c93db20cc2709c3df8dcd00054bf.jpg"},
						{ 'src':"http://f.hiphotos.baidu.com/image/h%3D360/sign=1e01fd6661d9f2d33f1122e999ee8a53/3bf33a87e950352aa3a9e78f5043fbf2b3118b69.jpg"}
		
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
			$.each(boxs, function(i, v){
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
			});
			// setTimeout(function(){boxs.animate({'opacity' : '1'},500,'swing');_this.isLoad = true;_this.docH();},500);
			boxs.animate({'opacity' : '1'},1000,'swing');_this.isLoad = true;_this.docH();
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
		    return (lastPinH < scrollTop + documentH ) ? true : false;//到达指定高度后 返回true，触发waterfall()函数
		},
		init:function(){			
			this.request(this.time);
			this.scroll();
		}
		
	}

	$.fn.waterfall = function(s){
		return new Wtaerfall(this, s).init();
	}

	
})(jQuery, window, document);
