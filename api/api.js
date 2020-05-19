const API_URL = 'http://music.163.com/api';

const request = (url,data,methods) => {
	let _url = API_URL + url;

	return new Promise((resolve,reject) => {
		uni.request({
			url: _url,
			data: data,
			method: methods,
			header: {
				'content-type': 'application/json',
			},
			success(request) {
				resolve(request.data)
			},
			fail(error) {
				reject(error)
			}
		})
	})
}

// module.exports = {
// 	getSong: (data) => {
// 		return request('/artist/top/song',data,'get')
// 	}
// }
export function getSong(data){
		return request('/artist/top/song',data,'get')
	}
// 获取每日推荐歌曲
export function getRecommendSong(data){
		return request('/recommend/songs',data,'post')
	}