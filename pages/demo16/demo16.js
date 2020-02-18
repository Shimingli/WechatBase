// pages/demo16/demo16.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[
      {
        id:0,
        name:"苹果",
        value:"apple"
      },
      {
        id:1,
        name:"菠萝",
        value:"grape"
      },
      {
        id:2,
        name:"香蕉",
        value:"bananer"
      }
    ],
    checkedList:[]


  },
  handelItemChange(e){
    console.log(e)
    //let 声明的变量只在 let 命令所在的代码块内有效。

// const 声明一个只读的常量，一旦声明，常量的值就不能改变
    const checkedList=e.detail.value;

    this.setData({
      checkedList
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