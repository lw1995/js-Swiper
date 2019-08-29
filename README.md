# js-Swiper

先引入css文件
<link rel="stylesheet" type="text/css" href="css/swiper.css" />

然后再引入js文件
	<script src="js/swiper.js" type="text/javascript" charset="utf-8"></script>
  
		<script type="text/javascript">
			new Swiper({
				width: 1200, //宽度
				height: 500, //高度
				time: 3000, //自动切换时间
				showSwiperDots: true, //是否显示面板指示点
				showSwiperBtn: true //是否显示导航按钮
			});
		</script>
