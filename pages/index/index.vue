<template>
	<view class="container">
		<view class="search clearfix">
			<input class="search-input" value="" type="text" placeholder="搜索" />
			<image class="search-img" src="../../static/image/disk.png"></image>
		</view>
		<view class="banner">
			<swiper class="swiper-banner" indicator-dots="true" indicator-color="rgba(255,255,255,1)" indicator-active-color="rgba(237,28,36,1)" autoplay="true" interval="5000">
				<swiper-item v-for="(item,index) in bannerList" :key="index">
					<image :src="item.imgUrl"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="func">
			<view class="func-item">
				<view class="item-img">
				<image src="../../static/image/fine.png"></image>
					
				</view>
				<text>推荐</text>
			</view>
			<view class="func-item">
				<view class="item-img">
				<image src="../../static/image/program.png"></image>
					
				</view>
				<text>歌单</text>
			</view>
			<view class="func-item">
				<view class="item-img">
				<image src="../../static/image/rank.png"></image>
					
				</view>
				<text>排行</text>
			</view>
		</view>
	</view>
</template>

<script>
	// const API = require('../../api/api.js')
	import { getSong } from '../../api/api.js'
	export default {
		data() {
			return {
				bannerList: [
					{
						imgUrl: 'http://p1.music.126.net/TyU5TARnkrwteUoZubPVbg==/109951164999404052.jpg?imageView&quality=89'
					},
					{
						imgUrl: 'http://p1.music.126.net/qMvuUK-g-SkgJnxmzf_yjg==/109951164998924320.jpg?imageView&quality=89'
					},
					{
						imgUrl: 'http://p1.music.126.net/YcKJT3ATrRMzlyq6bIDQ1Q==/109951164999148481.jpg?imageView&quality=89'
					},
					{
						imgUrl: 'http://p1.music.126.net/rrxKHpEeXzc1C_C4nSdpQg==/109951164998922781.jpg?imageView&quality=89'
					}
				]
			}
		},
		methods: {
			onLoad() {
				let data = getSong({
					id: 6452
				})
			}
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}

	/* .search {
		
	} */
	.clearfix:after {
		content: "";
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;
	}

	.clearfix {
		zoom: 1;
	}

	.search-input {
		width: 85%;
		height: 50rpx;
		text-align: center;
		float: left;
		background-color: #eee;
		border-radius: 50rpx;
	}

	.search-img {
		height: 50rpx;
		width: 50rpx;
		border-radius: 50%;
		float: right;
	}
	.banner {
		margin-top: 30rpx;
		border-radius: 20rpx;
	}
	.banner image {
		width: 100%;
		height: 100%;
		border-radius: 20rpx;
	}
	.func {
		display: flex;
		justify-content: space-around;
		margin-top: 30rpx;
		/* border: 1rpx solid red; */
		text-align: center;
	}
	.item-img {
		width: 80rpx;
		height: 80rpx;
		/* border: 1rpx solid red; */
		background-color: red;
		border-radius: 50%;
	}
	.item-img image {
		width: 60%;
		height: 60%;
		position: relative;
		top: 50%;
		/* left: 50%; */
		transform: translateY(-50%);
	}
	.func-item {
		/* align-items: center; */
		/* width: 150rpx; */
		/* text-align: center; */
	}
</style>
