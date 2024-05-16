import request from "./request";

// 获取首页信息
export const getHomePageData = () => request.get("/homepage/block/page");

// 获取轮播图及图标
export const getDragonball = () => request.post("/homepage/dragon/ball");

// 获取推荐歌单
export const recommendSong = (params) =>
  request.get("/personalized", { params });

// 获取新碟
export const newSong = (params) => request.get("/album/new", { params });

// 获取排行榜内容
export const theCharts = () => request.get("/toplist/detail");

// 获取排行榜详情
export const theChartsList = (params) =>
  request.get("/playlist/track/all", { params });

// 获取音乐日历
export const musicDate = (params) => request.get("/calendar", { params });

// 二维码生成接口
export const getLoginImageKey = () => request.get("/login/qr/key");

// 二维码编码
export const getLoginImage = (params) =>
  request.get("/login/qr/create", { params });

// 二维码扫码状态接口
export const getStatusImage = (params) =>
  request.get("/login/qr/check", { params });
// 获取热搜详情
export const getHotList = () => request.get("/search/hot/detail");

// 获取MV排行
export const getMvCharts = (params) => request.get("/top/mv", { params });

// 获取视频
export const getVidoeUrl = (params) => request.get("/mv/url", { params });

// 推荐歌单作者
export const getRecommendArter = (params) =>
  request.get("/playlist/detail", { params });

// 获取歌单里所有的歌
export const getAllSongsById = (params) =>
  request.get("/playlist/track/all", { params });

// 获取音乐url
export const getMusicUrl = (params) => request.get("/song/url/v1", { params });

// 获取歌词
export const musicWords = (params) => request.get("/lyric", { params });

// 获取登录状态
export const getLoginStatus = (params) =>
  request.get("/login/status", { params });

// 获取账号信息
export const getUserInfo = (params) => request.get("/user/account", { params });

// 获取用户信息
export const getUserList = (params) => request.get("/user/detail", { params });

// 获取用户等级信息
export const getUserLevel = (params) => request.get("/user/level", { params });

// 获取用户关注
export const getUserFocus = (params) =>
  request.get("/user/follows", { params });

// 获取用户粉丝
export const getUserFans = (params) =>
  request.get("/user/followeds", { params });

// 获取用户歌单
export const getUserSongs = (params) =>
  request.get("/user/playlist", { params });
