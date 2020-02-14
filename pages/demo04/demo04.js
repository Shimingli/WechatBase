// pages/demo04/demo04.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0

  },
  // 
  handelInput(e){
    //输入不能像 java 一样拼接对象，应该是直接打印需要的对象 e
    console.log("shiming "+e)
    console.log(e)
    console.log(e.detail.value)
    //关键代码
    this.setData({
      num:e.detail.value
  })
  },
  handelPlas(e){
    console.log(e)
    // 获取自定义属性 operation
    const operation=e.currentTarget.dataset.operation;
    console.log(operation)
    this.setData({
      num:this.data.num+operation
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})