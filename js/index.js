
$(function(){
    $('#dowebok').fullpage({
        //���ñ�����ɫ
        sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
        //������ĳһ����Ļص�����
        afterLoad:function(anchorLink ,index){
            console.log(index);
            // ��ǰҳ�����current����
            $('.section').removeClass('current');
            setTimeout(function(){
                $('.section').eq(index-1).addClass('current');
            },100);

        }

    });
});

