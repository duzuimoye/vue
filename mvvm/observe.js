// 响应式  观察者模式 pub-sub(发布订阅者模式)
function observer(value){
// 严格性校验
    if(!value ||(typeof value !=='object')){
        return;
    }
// 数据 data 里的每个key:value,都需要被defineProperty
    Object.keys(value).forEach((key) => {
        defineReactive(value, key, value[key])
    });
}
function defineReactive(obj,key,val){
    Object.defineProperty(obj, key, {
        enumerable:true,   //属性特性 enumerable 定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举
        configurable:true, //总开关，一旦为false，就不能再设置他的（value，writable，configurable）
        get:function reactiveGetter(){
            return val;
        },
        set: function reactiveSetter(newval){
            if(newval==val) return;
            val = newval;
            cb(newval)
        }
    })
}
function cb(val){
    console.log('视图更新了，新的值应该为'+ val);
}

class Vue{
    constructor(options){
        this._data= options.data;   //_表示私有属性
        observer(this._data);
    }
}
// 发布订阅者模式是vue 数据响应的核心，一对多的关系
let o =new Vue({
  data:{
      test:'I am test',
      name:'zk'
  }  
})

o._data.test = 'hello test';
o._data.test = 'hello test';