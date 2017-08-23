/**
 * Created by 乐园 on 2017/8/22.
 */
requirejs.config({
    paths:{
        jquery :"jquery-1.12.4"
    }
});
require(["jquery","carousel"],function ($,Carousel) {
   var sittings = {
       selector:"#container",
       imgArr:["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"],
       speed : 1000,
       btnStyle : "square",//circle
       arrowPos : "bottom"//center
   };
   var carousel = new Carousel(sittings);
   carousel.init();
});
