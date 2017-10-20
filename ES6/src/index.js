/**
 * Created by 乐园 on 2017/10/20.
 */

var p1 = new Promise((resolve,reject)=>{
        setTimeout(function(){
            reject(111111);
        },1000);
});
var p2 = new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve(22222);
        },200);
});
var p3 = new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log(4444444);
            reject(333333);
        },2000);
});
//
//    Promise.all([p1,p2,p3])
//        .then(function(data){
//            console.log(data);
//        },function(data){
//            console.log(data);
//        })


Promise.race([p1,p2,p3])
    .then(function(data){
        console.log(data);
    },function(data){
        console.log(data);
    })
