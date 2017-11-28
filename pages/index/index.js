//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    user: null,
    olderList: [],
    alertList: [
      { pic: '../../images/icon/user.png', name: '老大', desc: '摔倒了！' },
      { pic: '../../images/icon/user.png', name: '老二', desc: '摔倒了！' },
    ],
  },
  //事件处理函数
  bindUser: function () {
    wx.navigateTo({
      url: '../bindUser/bindUser'
    })
  },
  deleteUser: function () {
    wx.navigateTo({
      url: '../deleteUser/deleteUser'
    })
  },
  refresh: function () {
    this.getOlderList();
    this.getAlertList();
  },

  onLoad: function () {
    this.getOlderList();
    this.getAlertList();
  },
  getOlderList: function (param) {
    this.setData({
      olderList: app.globalData.olderList
    })
  },
  getAlertList: function (param) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady...');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow...');
    this.getOlderList();
    this.getAlertList();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide...');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload...');
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
