// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: null,
    pswd: null,
  },
  register: function () {
    wx.navigateTo({
      url: '../reg/reg'
    })
  },
  login: function (e) {
    console.log('login...');
    console.log('user: ' + this.data.user);
    console.log('pswd: ' + this.data.pswd);
    wx.showToast({
      title: '登录中',
      icon: 'loading',
      duration: 1000
    });
    setTimeout(this.f, 1000);
  },
  f: function () {
    var result = this.confirm(this.data.user, this.data.pswd);
    if (result) {
      wx.switchTab({
        url: '../index/index',
        
      });
    } else {
      wx.showToast({
        title: '登录失败',
        icon: 'success',
        duration: 2000
      });
    }
  },
  confirm: function (user, pswd) {
    if (user && pswd) {
      return true;
    } else {
      return false;
    }
  },
  userInput: function (e) {
    this.setData({
      user: e.detail.value
    })
  },
  pswdInput: function (e) {
    this.setData({
      pswd: e.detail.value
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