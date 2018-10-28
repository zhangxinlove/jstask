Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["","",""], //展示的数据
    queryResults1:"",
    queryResults2:"",
    queryResults3:"", 
    slideOffset: 0,//指示器每次移动的距离
    activeIndex: 0,//当前展示的Tab项索引
    sliderWidth: 96,//指示器的 宽度,计算得到
    contentHeight: 0,//页面除去头部Tabbar后，内容区的总高度，计算得到
    result:{
      web:["2星","1星","2年","百度","op入学门槛低，经常玩Linux会好些","10k"],
      Android:["3星","2星","3年","新浪","我不知道写什么","20k"],
      ios:["1星","2星","2年","搜狐","我也不知道说什么","30k"],
      op: [ "1星", "1星", "0年", "网页", "我也不知道说什么","5k"],
      pm: [ "4星", "4星", "1年", "腾讯", "我也不知道说什么","3k"],
      ui: [ "1星", "2星", "0年", "京东", "我也不知道说什么","2k"],
      java: [ "5星", "5星", "2年", "阿里", "我也不知道说什么","1k"]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({//获取系统信息
      success: function (res) {//接口调用成功的回调
        that.setData({
          //计算相关宽度
          //windowWidth可使用的窗口的宽度
          sliderWidth: res.windowWidth / that.data.tabs.length,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex,
          contentHeight: res.windowHeight - res.windowWidth / 750 * 68//计算内容区高度，rpx -> px计算
        });
      }
    });
    wx.getStorage({
      key: 'cargo',
      success: function (res) {
        that.setData({
          "tabs[0]": res.data[0],
          "tabs[1]": res.data[1],
          "tabs[2]": res.data[2],
          "queryResults1":res.data[0],
          "queryResults2":res.data[1],
          "queryResults3":res.data[2]
        })
      }
    })
  },

  bindChange: function (e) {
    var current = e.detail.current;
    this.setData({
      activeIndex: current,
      sliderOffset: this.data.sliderWidth * current
    });
  },

  navTabClick: function (e) {
    this.setData({
       sliderOffset: e.currentTarget.offsetLeft,
       activeIndex: e.currentTarget.id
    });
  }
})