# js-Swiper轮播图插件
[预览](https://lw1995.github.io/js-Swiper/)

### 先引入css文件swiper.css

<pre>
  <link rel="stylesheet" type="text/css" href="css/swiper.css" />
</pre>

### 然后再引入js文件swiper.js

<pre>
  <script src="js/swiper.js" type="text/javascript" charset="utf-8"></script>
</pre>

### JS代码：

<pre>
                 <script type="text/javascript">
			new Swiper({
				width: 1200, //宽度
				height: 500, //高度
				time: 3000, //自动切换时间
				showSwiperDots: true, //是否显示面板指示点
				showSwiperBtn: true //是否显示导航按钮
			});
                 </script>
</pre>

### HTML代码：

<pre>
    <code>
        	<div class="swiper-container" id="swiper-container">
			<div id="swiper-wrapper">
				<a href="http://pic1.win4000.com/wallpaper/2019-08-26/5d63a0b14ad1c.jpg" target="_blank">
					<img src="http://pic1.win4000.com/wallpaper/2019-08-26/5d63a0b14ad1c.jpg" />
				</a>
				<a href="http://pic1.win4000.com/wallpaper/2019-08-26/5d63a0b3137c8.jpg" target="_blank">
					<img src="http://pic1.win4000.com/wallpaper/2019-08-26/5d63a0b3137c8.jpg" />
				</a>
				<a href="http://pic1.win4000.com/wallpaper/2019-08-26/5d63a0b527c38.jpg" target="_blank">
					<img src="http://pic1.win4000.com/wallpaper/2019-08-26/5d63a0b527c38.jpg" />
				</a>
				<a href="http://pic1.win4000.com/wallpaper/2019-08-26/5d63a0b7350c7.jpg" target="_blank">
					<img src="http://pic1.win4000.com/wallpaper/2019-08-26/5d63a0b7350c7.jpg" />
				</a>

			</div>
			<!-- 导航按钮 -->
			<div id="swiper-Btn"></div>
			<!-- 面板指示点 -->
			<div id="swiper-dots"></div>
		</div>
    </code>
</pre>


