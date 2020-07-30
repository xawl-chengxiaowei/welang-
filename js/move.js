window.onload=function () {

    var beijin = document.querySelector('#beijing');
    var img = document.querySelector(".qiehuan");

    var images = ["dianying1.jpg", "dianying2.jpg", "dianying3.jpg"];

    var i = 0;
    setInterval(function () {
        i++;
        i = i % 3;
        console.log(i);
        img.src = "images/" + images[i];


    }, 10000);
//    设置图片特效
    var zhanshi1 = document.querySelector('.zhanshi1');
    var zhanshi2 = document.querySelector('.zhanshi2');
    var zhanshi3 = document.querySelector('.zhanshi3');

    var lvjindaohang1 = document.querySelector('.lvjindaohang1');
    var lvjindaohang2 = document.querySelector('.lvjindaohang2');
    var lvjindaohang3 = document.querySelector('.lvjindaohang3');

    zhanshi1.addEventListener('click', function () {

        lvjindaohang1.style.display = "block";
        lvjindaohang2.style.display = "none";
        lvjindaohang3.style.display = "none";

    });
    zhanshi2.addEventListener('click', function () {
        lvjindaohang1.style.display = "none";
        lvjindaohang2.style.display = "block";
        lvjindaohang3.style.display = "none";

    });
    zhanshi3.addEventListener('click', function () {

        lvjindaohang1.style.display = "none";
        lvjindaohang2.style.display = "none";
        lvjindaohang3.style.display = "block";

    });
    //电影拍行榜！
    paixingxiansshi = document.querySelector('.paixingxiansshi')
    paixingxiansshi2 = document.querySelector('.paixingxiansshi2')
    paixingxiansshi3 = document.querySelector('.paixingxiansshi3')
    paixingxiansshi4 = document.querySelector('.paixingxiansshi4')
    paixingxiansshi5 = document.querySelector('.paixingxiansshi5')
    paixingxiansshi6 = document.querySelector('.paixingxiansshi6')
    var move2 = document.querySelector('.move2');

    var li = move2.querySelectorAll('li');

    li[0].addEventListener('mouseover',function () {

        paixingxiansshi.style.display=('block');
    });
    li[0].addEventListener('mouseout',function () {

        paixingxiansshi.style.display=('none');
    });

    li[1].addEventListener('mouseover',function () {
        paixingxiansshi2.style.display=('block');
    });
    li[1].addEventListener('mouseout',function () {
        paixingxiansshi2.style.display=('none');
    });

    li[2].addEventListener('mouseover',function () {
        paixingxiansshi3.style.display=('block');
    });
    li[2].addEventListener('mouseout',function () {
        paixingxiansshi3.style.display=('none');
    });

    li[3].addEventListener('mouseover',function () {
        paixingxiansshi4.style.display=('block');
    });
    li[3].addEventListener('mouseout',function () {
        paixingxiansshi4.style.display=('none');
    });

    li[4].addEventListener('mouseover',function () {
        paixingxiansshi5.style.display=('block');
    });
    li[4].addEventListener('mouseout',function () {
        paixingxiansshi5.style.display=('none');
    });

    li[5].addEventListener('mouseover',function () {
        paixingxiansshi6.style.display=('block');
    });
    li[5].addEventListener('mouseout',function () {
        paixingxiansshi6.style.display=('none');
    });






    // 开始的是简单日历的布局

    var  aData=["囧妈2020年1月电影院不见不散","比得兔2(2020)2月大电影超前观影","三月觅法奇程精彩巨献","四月速度与激情9重回激情岁月"
        ,"五月哥斯拉大战金刚精彩纷呈",
        "六月绿灯军团期待你我","七月小黄人大眼萌2萌动你❤","八月毒液2大战屠杀","九月的内容","10月黑色" +
        "假面疑点重重","11月巨人国历险记奇幻之旅",
        "12月阿凡达3重磅出击"]

    var oDiv=document.getElementById('tab');
    var oUl=oDiv.getElementsByTagName('ul')[0];
    var aBtn=oUl.getElementsByTagName('li');
    var oTxt=oDiv.getElementsByTagName('div')[0];

    var i=0;

    for(i=0;i<aBtn.length;i++)
    {
        aBtn[i].index=i;
        aBtn[i].onmouseover=function ()
        {
            for(i=0;i<aBtn.length;i++)
            {
                aBtn[i].className='';
            }
            this.className='active';
            oTxt.innerHTML='<h2>'+(this.index+1)+'月活动</h2><p>'+aData[this.index]+'</p>';
        };
    }
}