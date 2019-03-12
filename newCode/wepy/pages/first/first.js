Page({
  data: {
    title: "first",
    list: [1, 2, 3],
    latitude: null,
    longitude: null
  },
  markertap: function() {
    wx.getLocation({
      type: "wgs84",
      success: res => {
        var latitude = res.latitude; // 经度
        var longitude = res.longitude; // 纬度
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        });
      }
    });

    this.setData({ title: "点击" });
  }
});
