window.onload=function () {

    var submit=document.getElementById('submit');
    var count=0;

    submit.addEventListener('click',function () {
        var password = document.getElementById('password').value;
        var password2 = document.getElementById('password2').value;
        var dianhua = document.getElementById('dianhua').value;
        var youxiang = document.getElementById('youxiang').value;

        var regpassword = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
        var regpassword2 = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
        var regdianhua=/^1[35784]\d{9}$/;
        var regyouxiang=/^\w+@\w+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2,3})?$/;

        if(regpassword.test(password)){
            count++;
            // alert("密码成功");
        }else {
            alert("请输入正确的密码格式");

        }
        if(regpassword2.test(password2)){
            count++;
        }else {
            alert("请输入正确的密码格式");
        }
        if(password===password2){
        }else {
            alert("请保证两次密码书写一致")
        }
        if(regdianhua.test(dianhua)){
            count++;
        }else{
            alert("请注意电话格式正确")
        }
        if(regyouxiang.test(youxiang)){
            count++;
        }else{
            alert("请注意邮箱的正确性")
        }
        if(count===4){
            alert("注册成功！")
        }else{
            alert("填写的信息不全");
        }

    })

    var youxi=document.querySelector('.zuce-youxi');
    var youxi2=document.querySelector('.zuce-youxi');

    var disX=0;
    var disY=0;
    //鼠标触发与键盘触发。
    youxi.addEventListener('mousedown',function (ev) {

        disX=ev.pageX-youxi.offsetLeft;
        disY=ev.pageY-youxi.offsetTop;
        document.addEventListener('mousemove', move)

        function move(ev){
            let l=ev.pageX-disX;
            let t=ev.pageY-disY;

            //下面4个if用来判断不能拖出前后左右4个面。
            if(l<50){

                l=0;
            }
            if(t<50){
                t=0;
            }
            //不能超出可视区的宽度减去div左边距离。
            if(l>document.documentElement.clientWidth-youxi.offsetWidth){
                l=document.documentElement.clientWidth-youxi.offsetWidth;
            }

            youxi.style.left=l+'px';
            youxi.style.top=t+'px';
        }



        document.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove',move)
        })

    });
    document.addEventListener('keydown',function (ev) {
        // alert("触发了");
        // ev.preventDefault();//阻止键盘默认事件。
        switch (ev.keyCode) {
            case 37:
                youxi.style.left=youxi.offsetLeft-10+'px';
                break;
            case 38:
                youxi.style.top=youxi.offsetTop-10+'px';
                break;
            case 39:
                youxi.style.left=youxi.offsetLeft+10+'px';
                break;
            case 40:
                youxi.style.top=youxi.offsetTop+10+'px';
                break;
        }
    });
}