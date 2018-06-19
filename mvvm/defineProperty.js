// var o = {};//空的对象字面量
// o.step = 1;
// var bvalue = 1;
// Object.defineProperty(o,'a',{
//     get:function(){
//         console.log('get');
//         return bvalue;
//     },
//     set:function(val){
//         console.log('设置了新的值')
//         bvalue = val;
//     }
//     //先执行set  再执行get 
// });
// o.a= 2;
// console.log(o.a);
// (function(){
//     // 严格模式
//     'use strict';
//     console.log(this);

// var o ={};
// Object.defineProperty(o,'a',{
// value:7,
// writable:false

// });
// console.log(o.a);
// // o.a=25; 若有这个会报错，只读属性
// console.log(o.a)
// })();

// var o = {};
// Object.defineProperty(o,'a',{
//     value:1,
//     enumerable:true,
// });
// Object.defineProperty(o,'b',{
//     value:2,
//     enumerable:false,
// });
// Object.defineProperty(o,'c',{
//     value:3,
//     // enumerable:true,
// });

// o.d=4;
// console.log(Object.keys(o));
// for(let key in o){
//     console.log(key,o[key]);
// }
// console.log(o.b);
// console.log(o.c);
// console.log(o.propertyIsEnumerable('b'));

'use strict'  // 不能删出属性
var o = {};
Object.defineProperty(o,'a',{
    configurable:false,
    get:function(){
        return 1;

    }

});
console.log(o.a);
// delete o.a;
console.log(o.a);
function Archiver(){
    var temperature = null;
    var Archiver = [];
    Object.defineProperty(this,'temperature',{
        get:function(){
            console.log('get')
            return temperature;
        },
        set:function(value){
            temperature = value;
        }
    })
}
//     var data = {
//         age:19,
//         name:'zk',
//     }
//     for (let key in data){
//         Object.defineProperty(data,key,{
//             get:function(){
//                 console.log('get');
//                 return data[key];

//             },
//             set:function(newVal){
//                 console.log('set!');
//                 data[key] = newVal;
//             }
//         })
//     }
// }
var arc = new Archiver();
arc.temperature = 35;
console.log(arc.temperature);
arc.temperature = 38;
console.log(arc.temperature);


