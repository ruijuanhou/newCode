//index.js
//获取应用实例
const app = getApp()

Page({
    // 数据
  data: {
    motto: '欢迎来到小猴子的仓库',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  bindShow(){
      wx.navigateTo({url:'/pages/life/detail'})
  },
 
 // 页面加载
  onLoad: function () {
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
  onShow(){
    console.log(this.route)
  },
  
  // 下拉刷新
  onPullDownRefresh(){

  },
  // 上拉触底
  onReachButton(){

  },
  // 滑动事件
  onPageScroll(res){
     if(res.from === 'button'){
         console.log(res.target)
     }
     return {
         title:'小猴子的分享',
         path:''
     }
  },
  // 分享
  onShareAppMessage(){

  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
