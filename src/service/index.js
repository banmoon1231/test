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
