// pages/demo18/demo18.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   * 发送异步请求，初始化页面数据
   */
  onLoad: function (options) {
     console.log(" Page  ----  onLoad")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载 通过超链接来演示 
   * 
   */
  onUnload: function () {
    console.log("onUnload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   * 页面的数据 或者效果  重新 刷新
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh")
  },

  /**
   * 页面上拉触底事件的处理函数
   * 需要页面的滚动才行  滑动到底就出现哦
   * 上啦加载下一页数据 
   * 
   */
  onReachBottom: function () {
    console.log("onReachBottom")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage")
  },
  // 页面滚动就可以触发
  onPageScroll(){
    console.log("onPageScroll")
  },
  //页面吃春发送改变的时候 
  // 小程序发生了横屏和竖屏 切换的时候触发  模拟器可以模拟横屏和竖屏
  onResize(){
    console.log("onResize")
  },
   
  // 要求当前的页面 也是tabbar的页面
  // 点击自己的tab才会触发
  onTabItemTap(){
    console.log("onTabItemTap")
  }


})