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
      console.log('oldvalue', oldvalue, 'newvalue', newvalue)
    }
  }
})
