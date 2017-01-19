
$(function(){
    $('#dowebok').fullpage({
        //设置背景颜色
        sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
        //滚动到某一屏后的回调函数
        afterLoad:function(anchorLink ,index){
            console.log(index);
            // 当前页面添加current类名
            $('.section').removeClass('current');
            setTimeout(function(){
                $('.section').eq(index-1).addClass('current');
            },100);

        }

    });
});

