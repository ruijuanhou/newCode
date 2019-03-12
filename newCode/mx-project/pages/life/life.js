const app = getApp()

Page({
  data:{
    lifes:['life','liii'],
    imgsArr:[
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'https://static.youplus.net.cn/00554a333c8256ba15eb334aff027e86',
      'https://static.youplus.net.cn/005f2c1a707539360ac8d0ce701a0d90',
      'https://static.youplus.net.cn/00884d58c822d9764436372b430e7b84'
    ],
    latitude:null,
    longitude:null,
    indicatorDots:false,
    autoplay:true,
    interval: 3000,
    duration: 500,
    nodes:[{
        name:'div',
        attrs:{
            class: 'div_class',
            style: 'line-height: 60px; color: red;'
        },
        children: [{
            type: 'text',
            text: 'Hello&nbsp;World!'
        }]
    }]
  },
  markertap:function(){
      wx.getLocation({
          type:'wgs84',
          success: (res)=>{
              this.setData({
                latitude:res.latitude,
                longitude:res.longitude
              })
          }
      })
  },
  richtap(){
      console.log('tap')
  }
})