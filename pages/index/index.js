//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    selectedLocationIndex: 3,
    deliveryLocations: [
      "Lowflyinghawk",
      "Oscar",
      "Alexandria",
      "Blackfoot",
      "Port99",
      "Doppler",
      "Day1",
      "Dawson",
      "Ruby",
      "Brazil",
      "Bigfoot",
      "Blueshift",
      "Rufus",
      "自取",
      "NP5"
    ],
    menuData: [
      {
        "name": "葱爆牛腱",
        "img": "https://www.jotform.com/uploads/foodtimes/form_files/A49C2D4E-BE0B-4B6B-B95D-0217A78B66B7.5c40391f006a54.62973044.jpeg"
      },
      {
        "name": "葱爆牛腱糙米便当",
        "img": "https://www.jotform.com/uploads/foodtimes/form_files/A49C2D4E-BE0B-4B6B-B95D-0217A78B66B7.5c40391f006a54.62973044.jpeg"
      },
      {
        "name": "黄豆焖猪脚便当",
        "img": "https://www.jotform.com/uploads/foodtimes/form_files/29DA808A-46FA-4815-9270-63965E41FE59.5c40394a72ffc0.15907439.jpeg"
      },
      {
        "name": "黄豆焖猪脚便当 糙米",
        "img": "https://www.jotform.com/uploads/foodtimes/form_files/29DA808A-46FA-4815-9270-63965E41FE59.5c40394a72ffc0.15907439.jpeg"
      },
      {
        "name": "油焖大虾",
        "img": "https://www.jotform.com/uploads/foodtimes/form_files/2EB174C1-EDC0-416D-996B-114F5BBAFA6E.5c40e23f3f4bc8.37492841.jpeg"
      },
      {
        "name": "油焖大虾糙米",
        "img": "https://www.jotform.com/uploads/foodtimes/form_files/8398676B-0632-4D8B-B36B-CEDF974AD0B6.5c40e25eeb4c87.22021277.jpeg"
      },
      {
        "name": "芋儿鸡便当",
        "img": "https://www.jotform.com/uploads/foodtimes/form_files/B666BA4D-718A-4491-B861-2DDF45A00F0E.5c40e29dcc4be8.76583615.jpeg"
      },
      {
        "name": "芋儿鸡糙米",
        "img": "https://www.jotform.com/uploads/foodtimes/form_files/B1B1CBCF-56EE-44C1-9BDC-605842AE9CF6.5c40e2b52c1f26.02321027.jpeg"
      },
      {
        "name": "卤肉饭（不包括在定3次送free饮品里哦）",
        "img": "https://www.jotform.com/uploads/foodtimes/form_files/3C6B691B-6044-43D8-B08C-2FA287C4F173.5bd55bb4cbcb27.96620655.jpeg"
      }
    ]
    
  },
  bindDeliveryLocationChange: function(e) {
    this.setData({selectedLocationIndex: e.detail.value})
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
