// component/list/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      listArr:{
        type:Array,
        value:[]
      }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  observers: {
    'listArr'(oldvalue, newvalue) {
      console.log('listArr-oldvalue', oldvalue, 'listArr-newvalue', newvalue)
    }
  }
})
