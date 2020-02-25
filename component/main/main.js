// component/main/main.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      todayNow:{//实时温度
        type:String,
        value:'12',
      },
      todayInfo:{
        type:Object,
        value:{}
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    todayMin: '',//今天最高温度
    todayMax: '',//今天最高温度
    todayWetherType: ''//今天的天气类型
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  observers:{
    'todayInfo'(oldvalue,newvalue){
      if (!oldvalue) return ''
      let type=oldvalue.type;
      if(!type) return '';
      if (type.includes('阴')) {
        wx.setNavigationBarColor({
          frontColor: '#ffffff',
          backgroundColor: '#aed3f9',
          animation: {
            duration: 400,
            timingFunc: 'easeIn'
          }
        })
      } else if (type.includes('雨')) {
        wx.setNavigationBarColor({
          frontColor: '#ffffff',
          backgroundColor: '#67bcff',
          animation: {
            duration: 400,
            timingFunc: 'easeIn'
          }
        })
      } else if (type.includes('晴')) {
        wx.setNavigationBarColor({
          frontColor: '#ffffff',
          backgroundColor: '#efb629',
          animation: {
            duration: 400,
            timingFunc: 'easeIn'
          }
        })
      } else if (type.includes('雪')) {
        wx.setNavigationBarColor({
          frontColor: '#ffffff',
          backgroundColor: '#9aa3c7',
          animation: {
            duration: 400,
            timingFunc: 'easeIn'
          }
        })
      } else if (type.includes('风')) {
        wx.setNavigationBarColor({
          frontColor: '#ffffff',
          backgroundColor: '#ebd5ac',
          animation: {
            duration: 400,
            timingFunc: 'easeIn'
          }
        })
      } else if (type.includes('云')) {
        wx.setNavigationBarColor({
          frontColor: '#ffffff',
          backgroundColor: '#3ab9f1',
          animation: {
            duration: 400,
            timingFunc: 'easeIn'
          }
        })
      } else if (type.includes('雾')) {
        wx.setNavigationBarColor({
          frontColor: '#ffffff',
          backgroundColor: '#9caab3',
          animation: {
            duration: 400,
            timingFunc: 'easeIn'
          }
        })
      }
    }
  }
})
