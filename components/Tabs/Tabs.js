// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   * 里面存放的是从父组件接受的数据
   */
  properties: {
    //要接受的数据名称
    aaa: {
      // type  要接受的数据的类型 String 大写
      type:String,
      // value 默认值
      value: ""
    },
    tabs:{
      type:Array,
      value:[]
    }



  },

  /**
   * 组件的初始数据
   */
  data: {
    // 注意这个tabs 从哪里来的 父组件传递过来的 

    // tabs: [
    //   {
    //     id: 0,
    //     name: "首页",
    //     isActive: true
    //   },
    //   {
    //     id: 1,
    //     name: "原创",
    //     isActive: false
    //   },
    //   {
    //     id: 2,
    //     name: "分类",
    //     isActive: false
    //   },
    //   {
    //     id: 3,
    //     name: "关于",
    //     isActive: false
    //   }

    // ]
  },

  /**
   * 组件的方法列表 
   * 组件的方法 在methods处理
   */
  methods: {
    handelTap(e) {

      console.log(e)
      // 1------------------
      // 获取点击中的索引 获取元数组 进行循环
      //  对每一个循环项
      //点击的角标是从 wxss中获取的 注意传递参数的过程

      const { index } = e.currentTarget.dataset;

      // 其实这种方法对复杂的结构类型 仅仅是复制一份  变量的引用而已
      // 相当于  let tabs=this.data.tabs; 
      // let { tabs } = this.data;

      // // 最严谨的写法是 深拷贝
      // let tabss = JSON.parse(JSON.stringify(this.data.tabs))

      // // 数组的循环
      // // [].forEach 遍历数组的时候，修改了v的时候，原数组也会被修改
      // tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);

      // this.setData({
      //   tabs
      // })

      //  2-------------------------------

      // 点击事件触发的时候，触发父组件中自定义事件，同时传递给父组件
      //  this.triggerEvetn("父组件自定义事件的名称",要传递的参数)

      this.triggerEvent("itemChange",{index})
    }
  }
})
