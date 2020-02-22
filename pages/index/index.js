//index.js
//获取应用实例
const app = getApp()
const Amap=require('../../utils/amap-wx.js');
var myAmapFun = new Amap.AMapWX({ key: '60e6b26f44a9cad8fd405d39255bdaf6' });
import {get} from '../../utils/http.js'
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    latitude:'',//维度
    longitude:'',//精度
    city:'',
    nowWendu:'',//现在温度
    listArr:[],
    nowTime:''
  },
  onLoad: function () {
    // 获取地理位置授权
    this.handleGetUserLotion();
   
    
    let nian = new Date().getFullYear();
    let yue = new Date().getMonth() + 1;
    let ri = new Date().getDate();
    let xiaoshi = new Date().getHours()
    let fen = new Date().getMinutes();
    xiaoshi = xiaoshi < 10 ? `0${xiaoshi}` : xiaoshi
    fen = fen < 10 ? `0${fen}` : fen
    this.setData({
      nowTime: `${nian}/${yue}/${ri} ${xiaoshi}:${fen}`
    })
    





    return;



    /**
     * 以下暂时不用
     */
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
   * 获取用户地理位置
   */
  handleGetUserLotion(){
    const that=this;
    wx.getLocation({
      type: 'wgs84',
      altitude: true,
      success: function(res) {
        let { longitude, latitude}=res;
        that.setData({
          longitude:longitude,
          latitude: latitude
        })
        that.handleGetRegeo()
        console.log("回调成功",res)
      },
      fail: function(res) {
        // 修改导航条title
        wx.setNavigationBarTitle({
          title: `北京`
        })
        that.handleGetWetherInfo();
        console.log("回调失败", res)
      },
      complete: function(res) {
      
      },
    })
  },
  /**
   * 获取地理定位
   */
  handleGetRegeo(lo='',la=''){
    const that=this;
    myAmapFun.getRegeo({
      success: function (data) {
        let { regeocodeData: { addressComponent: { district}}}=data[0];
        that.setData({
          city: district
        })
        // 修改导航条title
        wx.setNavigationBarTitle({
          title: `${district}`
        })
        // 获取天气信息
        that.handleGetWetherInfo(district);
        console.log("高德回调成功", district)
      },
      fail: function (info) {
        //失败回调
        console.log('高德回调失败',info)
      }
    })
  },
  handleGetWetherInfo(city='北京'){
    let obj = {
      city
    }
    get('https://pw.crazyming.com/weather_mini', obj)
      .then(res => {
        let { wendu, forecast}=res;
        this.setData({
          nowWendu:wendu,
          listArr: forecast
        })
        console.log("回调成功", res)
      })
      .catch(Error => console.log('请求错误', Error))
  }
})
