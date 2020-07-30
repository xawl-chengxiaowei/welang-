window.onload=function () {
    // 开始photowall部分的内容
    //获得多少的图片，传入id。
    imgLocation("container", "box");
    //用json字符串模拟数据。
    var imgData={"data":[
            {"src":"a.jpg"},
            {"src":"b.jpg"},
            {"src":"c.jpg"},
            {"src":"d.jpg"},
            {"src":"e.jpg"},
            {"src":"f.jpg"},
            {"src":"g.jpg"},
            {"src":"h.jpg"},
            {"src":"i.jpg"},
            {"src":"pw-xs01.jpg"},
            {"src":"k.jpg"},
            {"src":"pw-xs03.jpg"},
            {"src":"pw-xs04.jpg"},
        ]}

    //监听滚动条
    window.onscroll = function () {
        // changeFLag();,加载数据条。
        if(changeFLag()){
            //下面这些都是模拟数据！，创建一个图片的过程。
            var cparent=document.getElementById("container");//重载数据，创建
            for( var i=0;i<imgData.data.length;i++){
                var ccontent=document.createElement("div");
                ccontent.className="box";
                cparent.appendChild(ccontent);
                var boximg=document.createElement("div");
                boximg.className="box_img";
                ccontent.appendChild(boximg);
                var img=document.createElement("img");
                img.src="images/"+imgData.data[i].src;
                boximg.appendChild(img);
            }
            imgLocation("container", "box");
        }

    }
}
//加载数据，学习！
function changeFLag() {
    var cparent = document.getElementById("container");
    var ccontent = getChildElement(cparent, "box");

    var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;//计算最后一个内容高度！
    // console.log(lastContentHeight);
    var scroolTop = document.documentElement.scrollTop || document.body.scrollTop;//后面的考虑兼容性问题。
    // console.log(scroolTop);下面是获取页面的高度
    var pageHeight=document.documentElement.clientHeight||document.body.clientHeight;
    //下面这是判断是否滚动，将每一列图像的高度保存在数组中，当页面的最后一个图片的高度小于scrool滚动放入的高度加上当前
    // 页面page中Heigth的高度时。判断需要滚动啦！
    if(lastContentHeight<scroolTop+pageHeight){
        return true;
    }
}
//获得多少个图片，第一个参数，父级，第二个内容
function imgLocation(parent, content) {
    //将parent下所有的content全部取出
    var cparent = document.getElementById(parent);
    var ccontent = getChildElement(cparent, content);
    //获取一个图片的宽度
    var imgWidth = ccontent[0].offsetWidth;//offsetWidth是每个照片的宽度。
    //获取当前页面的宽度所能承载的图像个数，即：获取当前的页面宽度然后除以一个图片的
    // 宽度，前面我们已经将一个图片的宽度设置为150px固定值啦！
    var num = Math.floor(document.documentElement.clientWidth / imgWidth);
    //将图片居中
    cparent.style.cssText = "width:" + imgWidth *num + "px;margin:0 auto";

    //定义数组承载每一列图像的高度每一列的下标就代表着数组的下标！
    var BoxHeigthArr = [];
    for (var i = 0; i < ccontent.length; i++) {
        if (i < num) {
            BoxHeigthArr[i] = ccontent[i].offsetHeight;

        } else {
            //; Math.min 可以实现得到数组中最小的一项 Math.min.apply(null,arr)其中第一个参数null，
            //这个是因为没有对象去调用这个方法，所以直接传递null过去
            var minheight = Math.min.apply(null, BoxHeigthArr)//四舍五入取得盒子的最小高度。
            //下面是获取一个图片的高度
            var minindex = getminheightLocation(BoxHeigthArr, minheight);
            ccontent[i].style.position = "absolute";
            //重新设置列数组的高度！当下一个行加载的图片的高度需将自身的高度加上他的上面的图片的高度！，向左边的距离也是这样。
            ccontent[i].style.top = minheight + "px";//设置高度
            ccontent[i].style.left = ccontent[minindex].offsetLeft + "px";
            BoxHeigthArr[minindex] = BoxHeigthArr[minindex] + ccontent[i].offsetHeight;
        }
    }
}

//一排位置后另一个照片找最佳位置函数
//将下一行的图片(遍历)找上一行最小高度的图片，即找最佳的位置！返回下标。
function getminheightLocation(BoxHeigthArr, minHeight) {
    for (var i in BoxHeigthArr){

        //if (BoxHeigthArr[i] === minHeight)
        if (BoxHeigthArr[i] === minHeight) {
            return i;
        }
    }
}

//这里是找一个父控件里面所有的子控件，将其存放在数组中！
//！！注意，绝对不是将一行的数存放在里面，而是有一步的操作是将所有的图片都存放在容器中，
//上面有一个是用来判断每一列所能承载的个数，所以只需要用容器里面一个图片的额高度就可以了！
function getChildElement(parent, content) {
    var contentArr = [];
    var allcontent = parent.getElementsByTagName("*");
    for (var i = 0; i < allcontent.length; i++) {

        //下面的content需要看看前面调用该子控件的名称(class),你就明白了！！
        //if (allcontent[i].className == content)
        if (allcontent[i].className === content) {
            contentArr.push(allcontent[i]);

        }
    }
    return contentArr;

}


