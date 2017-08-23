/**
 * Created by 乐园 on 2017/8/22.
 */
requirejs.config({
    paths:{
        jquery :"jquery-1.12.4"
    }
});
define(["jquery"],function ($) {

    function Carousel(settings) {
        this.$container = $('<div class="carousel-container"></div>');
        this.$tabs = $('<ul class="carousel-tabs"></ul>');
        this.$imgs = $('<div class="carousel-imgs"></div>');
        this.$arrows = $('<div class="carousel-arrows"></div>');
        this.$prev = $('<span class="carousel-prev">&lt;</span>');
        this.$next =$('<span class="carousel-next">&gt;</span>')
        this.defaultSettings = {
            selector:document.body,
            imgArr:[],
            speed:1000,
            btnStyle:"square",
            arrowPos:"bottom"
        };
        $.extend(this.defaultSettings,settings);
    }
    Carousel.prototype.init = function () {
        this.$container.append(this.$tabs).append(this.$imgs).append(this.$arrows);
        this.$arrows.append(this.$prev).append(this.$next);
        for(var i=0;i<this.defaultSettings.imgArr.length;i++){
            var $li = $('<li></li>').html(i+1);
            this.$tabs.append($li);
            var $img = $('<img />').attr('src',this.defaultSettings.imgArr[i]);
            this.$imgs.append($img);

        }
        $(this.defaultSettings.selector).append(this.$container);

    };
    return Carousel;
});
/*<div class="carousel-container">
    <ul class="carousel-tabs">
    <li class="selected">1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    </ul>
    <div class="carousel-imgs">
    <img class="selected" src="img/1.jpg" alt="">
    <img src="img/2.jpg" alt="">
    <img src="img/3.jpg" alt="">
    <img src="img/4.jpg" alt="">
    </div>
    <div class="carousel-arrows">
    <span class="carousel-prev">&lt;</span>
    <span class="carousel-next">&gt;</span>
    </div>
    </div*/