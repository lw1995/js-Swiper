function Swiper(_ref) {
	var width = _ref.width,
		height = _ref.height,
		time = _ref.time,
		showSwiperDots = _ref.showSwiperDots,
		showSwiperBtn = _ref.showSwiperBtn;

	this.time = time;

	var index = 0,
		timing = null,
		idx = 0,
		swiperItem = $("swiper-wrapper").getElementsByTagName("img"),
		swiperContainer = $("swiper-container");


	this.index = index;
	this.timing = timing;
	this.idx = idx;
	this.swiperItem = swiperItem;
	this.swiperContainer = swiperContainer;


	function $(id) {
		return document.getElementById(id);
	}

	swiperContainer.style.width = width + "px";
	swiperContainer.style.height = height + "px";

	for (var i = 0; i < swiperItem.length; i++) {
		swiperItem[i].style.display = "block";
		swiperItem[i].style.width = width + "px";
		swiperItem[i].style.height = height + "px";
	}

	this.init();

	if (showSwiperDots) {
		var swiperDots = $("swiper-dots");
		var span = ''
		for (i = 0; i < swiperItem.length - 1; i++) {
			span = span + '<span></span>'
		}

		swiperDots.innerHTML =
			'<div class="swiper-dots" id="swiper-dots"><span class="active"></span>' + span + '</div>'

		var dots = swiperDots.getElementsByTagName("span");
		this.dots = dots;
		this.showDots()
	}
	if (showSwiperBtn) {
		var swiperBtn = $("swiper-Btn");
		swiperBtn.innerHTML =
			'<div id="swiper-Btn"><a href="javascript:void(0)" class="button prev" id="prev"></a><a href="javascript:void(0)" class="button next" id="next"></a></div>'

		var prev = $("prev"),
			next = $("next");

		this.prev = prev;
		this.next = next;

		this.showBtn()
	}


};


Swiper.prototype = {
	/**版本号**/
	version: '1.0.0',
	/* 轮播图 */
	AutoswiperItem: function AutoswiperItem() {
		var that = this;

		for (i = 0; i < that.swiperItem.length; i++) {
			that.swiperItem[i].style.display = "none";
			that.dots[i].className = "";
		}

		that.swiperItem[that.index].style.display = "block";
		that.dots[that.index].className = "active";
	},

	startAutoPlay: function startAutoPlay() {
		var that = this;
		that.timing = setInterval(function() {
			that.index++;
			if (that.index >= that.swiperItem.length) {
				that.index = 0;
			}
			that.AutoswiperItem();
		}, that.time);
	},

	//面板指示点
	showDots: function showDots() {
		var that = this;

		for (var d = 0; d < that.dots.length; d++) {
			that.dots[d].id = d;
			that.dots[d].onclick = function() {
				that.index = this.id;
				that.AutoswiperItem();
			}
		}
	},
	//导航按钮	
	showBtn: function showBtn() {
		var that = this;

		that.next.onclick = function() {
			that.index++;
			if (that.index >= that.swiperItem.length)
				that.index = 0;
			that.AutoswiperItem();
		}
		that.prev.onclick = function() {
			that.index--;
			if (that.index < 0)
				that.index = that.swiperItem.length - 1;
			that.AutoswiperItem();
		}
	},
	//初始化
	init: function init() {
		var that = this;

		that.swiperContainer.onmouseover = function() {
			clearInterval(that.timing);
		}
		that.swiperContainer.onmouseout = function() {
			that.startAutoPlay();
		}
		that.swiperContainer.onmouseout();
	}

}
