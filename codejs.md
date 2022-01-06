<!-- PS：在页面JS或者全局JS中必须引入icon.wxss -->

<!-- 
customNavBarHeight：转换后的真是状态栏高度=状态栏高度+TabBar
statusbar：获取状态栏高度
navigationbar：真实TabBar高度
winWidth：真实的TabBar可能宽度 
-->
<view style="width: 100%;height: {{customNavBarHeight}}px;position: fixed;top: 0px;left: 0px;background-color: #fff;z-index: 1024;">
  <view style="width: 100%;position: fixed;height: 100%;">
    <view style="width: 100%;height: {{statusbar}}px;"></view>
    <view style="width: 100%;height: {{navigationbar}}px;">
      <view style="width: {{winWidth}}px;height: 30px;margin-top: 6px;display: flex;flex-direction: row;">
        <view style="width: 10%;height: 30px;line-height: 30px;text-align: center;font-size: 20px;" class="iconfont icon-back" bindtap="back"></view>
        <view style="width: 85%;margin-left: 2%;margin-right: 3%;height: 30px;line-height: 30px;border-radius: 50px;border: 0.1px solid #d8d8d8;font-size: 15px;" class="sun-sousuo">
          <image src="/images/biaoqing.png" style="font-size: 18px;margin-left:10px;width: 18px;height: 18px;"></image>
          <input placeholder="请输入" style="width: 85%;margin-left:2%;height: 30px;line-height: 30px;font-size: 14px;" />
        </view>
      </view>
    </view>
  </view>
</view>



<!-- 头部搜索框样式 -->
<view class='sun-label'>
	<view class='sun-saoma-vip' bindtap='sunBtnSaoMa'>
		<icon class='iconfont icon-saoyisao' style='color:#ffffff;width:25px;height:25px;font-size:25px;'></icon>
		<text class='tx' style="text-align: center;margin-top: 5px;">扫一扫</text>
	</view>
	<!-- <image src='/images/ssk.png' class='sun-ssk'></image> -->
	<view style="width:75%;height:58%;border-width:1px;border-color:red;background:#d8d8d8;border-bottom-right-radius:0%;border-top-right-radius:23px;border-bottom-left-radius:23px;border-top-left-radius:23px;opacity:0.6" class="sun-sousuo" bindtap="bindSouSuo">
		<image src="/images/biaoqing.png" style="width:25px;height:25px;margin-left:10px"></image>
		<text style="font-size:13px;color:black;margin-left:5px">iphone X Max</text>
	</view>
	<view class='sun-saoma-vip' bindtap='sunBtnVip'>
		<icon class='iconfont icon-huiyuan' style='color:#ffffff;width:23px;height:23px;font-size:23px;'></icon>
		<text class='tx' style="text-align: center;margin-top: 5px;">会员</text>
	</view>
</view>
<!-- 头部搜索框样式下面的轮播图 -->
<swiper class="screen-swiper round-dot" indicator-dots="true" circular="true" autoplay="true" interval="5000" duration="500" current='{{current}}'>
	<swiper-item wx:for="{{imagesurl}}" bindtap='tapS' wx:for-index="index" data-index="{{index}}" wx:key>
		<image src="{{item}}" mode='aspectFill'></image>
	</swiper-item>
</swiper>


<!-- 广告1 -->
<!-- 
imagesurl：["",""]
current：默认开启的时候的位置
index：下标
item：每一行item的取出来的值 
-->
<view class="layoutOne" style="margin-top:10px">
	<swiper class="pageOne" circular="true" autoplay="true" interval="5000" duration="500" current='{{current}}'>
		<swiper-item wx:for="{{imagesurl}}" bindtap='tapS' wx:for-index="index" data-index="{{index}}" wx:key>
			<image src="{{item}}" mode='aspectFill'></image>
		</swiper-item>
	</swiper>
	<view class="pageTwo">
		<swiper class="sPageOne" circular="true" autoplay="true" interval="5000" duration="500" current='{{current}}' vertical='true'>
			<swiper-item wx:for="{{imagesurl}}" bindtap='tapS' wx:for-index="index" data-index="{{index}}" wx:key>
				<image src="{{item}}" mode='aspectFill'></image>
			</swiper-item>
		</swiper>
		<image class="sPageTwo" src="https://img2.baidu.com/it/u=3101796271,719628680&fm=26&fmt=auto"></image>
	</view>
</view>



<!-- 广告2 -->
<!-- 横向滑动广告位 -->
<!--
Leaf拼购：广告主名称
好友都在拼：广告副名称
pingou：[{
      "programmeId": 1, // id
      "programmeImage": ["https://t7.baidu.com/it/u=1758662225,3275993814&fm=193&f=GIF"], // 图片的url地址
      "programmeName": "韭菜" // 广告位对应名称
    }]
-->
<view class='sun-pingou'>
	<view class='sun-pingou-title'>
		<text class='sun-left-tex'>Leaf拼购</text>
		<text class='sun-rigth-tex'>好友都在拼</text>
	</view>
	<scroll-view scroll-x="true" class='sun-pingou-text'>
		<block wx:for="{{pingou}}" data-index="index" wx:for-index='index' wx:key>
			<view class='sun-pingou-item'>
				<view class='cad'>
					<image src='{{item.programmeImage[0]}}' class='sun-pingou-img'></image>
					<text class='tex'>{{item.programmeName}}</text>
					<text class='tex-price'>{{item.programmeId}}￥</text>
				</view>
			</view>
		</block>
	</scroll-view>
</view>