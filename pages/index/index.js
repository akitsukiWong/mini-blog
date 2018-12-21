import { api } from "../../utils/api.js"
const apiData = new api
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    // blogList:api.posts
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取github博客上的json数据
    apiData.getApi().then(res=>{
      this.setData({ blogList: res.data.posts})
      this.setData({ title: res.data.meta.title })
      // 设置标题
      wx.setNavigationBarTitle({
        title: this.data.title
      })
    })
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
    
  },

  toDetail(res){
    let index = res.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../detail/detail?id='+index,
    })
  }
})