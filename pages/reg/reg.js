// pages/reg/reg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: null,
    pswd: null,
    tel: null,
    token: null,
    different:false,
  },
  back: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  register: function () {
    console.log('register...');
    console.log('user: ' + this.data.user);
    console.log('pswd: ' + this.data.pswd);
    console.log('tel:  ' + this.data.tel);
    console.log('token:' + this.data.token);
    wx.showToast({
      title: '注册中',
      icon: 'loading',
      duration: 2000,
    });
    setTimeout(this.f,2000);
  },
  f: function() {
    var result = this.confirm(this.data.user, this.data.pswd, this.data.tel, this.data.token);
    if (result) {
      wx.showToast({
        title: '注册成功',
        icon: 'success',
        duration: 500,
        complete: setTimeout(function () {
          wx.redirectTo({
            url: 'success',
          });
        }, 500)
      });
    } else {
      wx.showToast({
        title: '注册失败',
        icon: 'success',
        duration: 2000
      });
    }
  },
  confirm: function (user, pswd, tel, token) {
    if (user && pswd && tel && token) {
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
  pswdInput2: function (e) {
    var input = e.detail.value;
    if(this.data.pswd != input){
      this.setData({
        different: true
      })
    }else{
      this.setData({
        different: false
      })
    }
  },
  telInput: function (e) {
    this.setData({
      tel: e.detail.value
    })
  },
  tokenInput: function (e) {
    this.setData({
      token: e.detail.value
    })
  },
  getToken: function () {
    var tk = Math.round(Math.random() * 1000000);
    this.setData({
      token: tk
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