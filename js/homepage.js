window.onload=function () {
    paixingxiansshi=document.querySelector('.paixingxiansshi')
    var move2=document.querySelector('.move2');
    var  li=move2.querySelector('li');
    li.addEventListener('mouseover',function () {

        paixingxiansshi.style.display=('block');
    });
    li.addEventListener('mouseout',function () {

        paixingxiansshi.style.display=('none');
    });

      //下面是选项卡的简单操作
      var qiehuan=document.querySelector(".enter-top");
      //querySelective不能取button，div等按键
      var btn=qiehuan.getElementsByClassName("hp-anniu");
      var div=qiehuan.getElementsByClassName("hp-xw");
      for (var i=0;i<btn.length;i++){

          btn[i].index=i;
// alert("nihao")
          btn[i].onclick=function () {

              for (var i=0;i<btn.length;i++){

                  div[i].style.display="none";

              }
             div[this.index].style.display='block';
          }
      }
  }
$(function(){

    //这里是动漫排行榜
    $(function () {

        $(".move2>li").hover(function () {
            $(this).addClass("current");
        }, function () {
            $(this).removeClass("current");
        });
    });

    //propertychange事件，是input值发生变化时，时时触发的事件
    // cheng事件，是当input值发生 变化后，失去焦点才会触发事件
    $('body').on('input propertychang','.comment',function(){

        // 该事件是在input值变化时触发
        // val（）返回或设置被选的值,这里是返回window属性
        if($(this).val().length >0){

            // 按钮可用,prop() 方法用于检索属性值
            $('.send').prop('disabled',false);

        }else{

            // 按钮不可用
            $('.send').prop('disabled',true);

        }

    });
    // 监听按钮的点击,事件委托
    $('.send').click(function(){

        // 拿到用户的输入的内容

        var $text=$('.comment').val();
        //根据内容创造节点。
        var $weibo=creatEle($text);
        //插入微博
        $('.messageList').prepend($weibo);

    });
    $('body').on('click',".infoTop",function () {
        //	点击添加按钮
        // 	alert("top");this指的是body啊。
        // 	console.log(this);
        $(this).text(parseInt($(this).text())+1);
    });
    $('body').on('click',".infoDown",function () {

        $(this).text(parseInt($(this).text()) + 1);
    });
    $('body').on('click',".delete",function () {
        //	点击添加按钮,找祖先元素。
        $(this).parents(".info").remove();

    });

    // 创造节点方法
    function creatEle(text){
        var $weibo=$("<div class=\"info\">\n" +
            "\t\t\t\t<p class=\"infoText\">"+text+"</p>\n" +
            "\t\t\t\t<p class=\"infoOperation\">\n" +
            "\t\t\t    <span class=\"infoTime\">"+timeDate()+"</span>\n" +
            "\t\t\t\n" +
            "\t\t\t\t<span class=\"infoHandle\">\n" +
            "\t\t\t\t\t<a href=\"javascript:;\" class='infoTop'>0</a>\n" +
            "\t\t\t\t\t<a href=\"javascript:;\" class='infoDown'>0</a>\n" +
            "\t\t\t\t\t<a href=\"javascript:;\" class='delete'>删除</a>\n" +
            "\t\t\t\t</span>\n" +
            "\n" +
            "\t\t\t\t</p>\n" +
            "\t\t\t</div>");
        return  $weibo;

    }
//   创建时间节点
    function timeDate() {
        var date=new Date();

        var arr = [date.getFullYear() + "-",
            date.getMonth() + 1 + "-",
            date.getDate() + " ",
            date.getHours() + ":",
            date.getMinutes() + ":",
            date.getSeconds()];
        return arr.join('');
    }
})