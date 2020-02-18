//app.js
App({
  // 第一次启动触发 
  onLaunch: function () {
    // 获取用户的个人信息，就可以在使用
    console.log("onLaunch")


    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

      //js的方式来跳转 不能触犯onPageNotFound
    //  wx.navigateTo({
    //      url:'/2/2/2'   
    //  });
  },
  globalData: {
    userInfo: null
  },
  // 引用被用户看到 对应用的数据或者页面效果 重置
  onShow(){
     console.log("onShow")
   
  },
  //应用被隐藏  暂停或者是清除定时器
  onHide(){
     console.log("onHide")
  },
  //应用代码发生了错误,就会触发
  // 应用发生代码报错的时候，手机用户的错误信息，通过异步请求 将错误的信息发送到后台去
  onError(err){
    console.log("onError");
    console.log(err)
  },
  //页面找不到，就会触发这个
  // 如果页面不存在的话 通过js的方式来重新跳转页面 重新跳转到第二个首页
  onPageNotFound(){
    console.log("onPageNotFound");
    //不能跳转到tabber页面 
    wx.navigateTo({
      url: '/pages/demo10/demo10'
    });
      
  }


})