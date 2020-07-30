window.onload=function(){
    // console.log("你好啊")
    //这是了解的部分
    //!!!调用有顺序，有顺序！！

    //这是了解变量
    let rules=document.querySelector('.rules');
    let rule=document.querySelector('.rule');
    let timer=null;
    //这是登录变量
    const link=document.querySelector('.link')
    const link2=document.querySelector('.link2')
    let login=document.querySelector('.login');
    let mask=document.querySelector('.login-bg');
    let closeBtn=document.querySelector('#closeBtn');
    let closeBtn2=document.querySelector('#closeBtn');
    let title=document.querySelector('#title');
    let title2=document.querySelector('#title');
    //这里开始对图表的操作
    var option1={
        chart: {
            type:"bar",//柱状图
            backgroundColor: 'rgba(0,0,0,0)'
        },
        credits: {
            enabled: false//不显示LOGO链接
        },
        exporting: {
            enabled:false//去掉导出
        },
        title: {
            text: "每日关注点事件分布",
            useHTML: true,
            style: {
                color: 'rgba(255,255,255,0.82)',      //字体颜色
                "fontSize": "15px",   //字体大小
                fontWeight: 'bold'
            }
        },
        subtitle:{
            text:'该数据来源每周根据实际情况自动更新'
        },
        xAxis: {
            title: {
                text: '关注点',

            },
            categories: ["个人空间", "好友圈", "音乐", "游戏", "影视","其他"],
        },
        yAxis:{
            title:{
                text:'每日时长'
            }
        },
        series: [
            {
                name: "游客",
                data:[2,6,4,5,3,7]
            },{

                name: "微浪",
                data: [3,5,3,6,4,8]
            }
        ],

    }
    var option2={
        chart:{
            type:"spline",//曲线图
            backgroundColor: 'rgba(0,0,0,0)'
        },
        credits: {
            enabled: false//不显示LOGO
        },
        exporting: {
            enabled:false//去掉导出
        },
        title:{
            text:'每周访客统计',
            useHTML: true,
            style: {
                color: 'rgba(255,255,255,0.82)',      //字体颜色
                "fontSize": "15px",   //字体大小
                fontWeight: 'bold'
            }
        },
        subtitle:{
            text:'每周日自动更新'
        },
        xAxis:{
            title:'2020年6月20日-28日统计结果',
            categories:["6月22日","6月23日","6月24日","6月25日","6月26日","6月27日","6月28日"]
        },
        yAxis: {
            labels: {
                enable: true,
                formatter: function () {//自定义竖标题
                    return this.value + '万'
                },
                step: 1
            },
            title: {
                text: null,
            },
        },
        series:[
            {
                name:'该日数据',
                data:[170,223,921,537,343,654,296]
            }
        ]

    }
    //下面这三个是后面的图表特效
    $('#tubiao2').highcharts(option1);
    $('#tubiao4').highcharts(option2);
    Highcharts.chart('tubiao5', {
        chart: {
            type: 'packedbubble',
            height: '95%',
            backgroundColor: 'rgba(0,0,0,0)'
        },
        credits: {
            enabled: false//不显示LOGO
        },
        title: {
            text:null,
        },
        exporting:{
            enabled:false //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
        },
        tooltip: {
            useHTML: true,
            pointFormat: '<b>{point.name}:</b> {point.value}万访问量',

        },

        plotOptions: {
            packedbubble: {
                minSize: '40%',
                maxSize: '130%',
                zMin: 0,
                zMax: 1000,
                layoutAlgorithm: {
                    splitSeries: false,
                    gravitationalConstant: 0.02
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                    filter: {
                        property: 'y',
                        operator: '>',
                        value: 250
                    },
                    style: {
                        color: 'black',
                        textOutline: 'none',
                        fontWeight: 'normal'
                    }
                }
            }
        },
        series: [{
            name: '个人空间',
            data: [{
                name: '收藏',
                value: 982.1
            }, {
                name: '我的赞',
                value: 20.7
            },
                {
                    name: "同事",
                    value: 97.2
                },
                {
                    name: "动漫",
                    value: 111.7
                },
                {
                    name: "特别关注",
                    value: 158.1
                },
                {
                    name: "同学",
                    value: 241.6
                },
                {
                    name: "同事",
                    value: 249.1
                },
                {
                    name: '我的赞',
                    value: 20.7
                },
                {
                    name: "同事",
                    value: 97.2
                },
                {
                    name: "动漫",
                    value: 111.7
                },
                {
                    name: "特别关注",
                    value: 158.1
                },
                {
                    name: "同学",
                    value: 241.6
                },
                {
                    name: "同事",
                    value: 249.1
                },{
                    name: "我的赞",
                    value: 249.1
                },{
                    name: "我的赞",
                    value: 249.1
                },{
                    name: "我的赞",
                    value: 249.1
                } ]
        }, {
            name: '电影',
            data: [{
                name: "战狼3",
                value: 999
            },{
                name: "唐人街探案2",
                value: 9.2
            },
                {
                    name: "万有引力",
                    value: 13.1
                },
                {
                    name: "祖宗十九代",
                    value: 14.1
                },
                {
                    name: "奇门遁甲",
                    value: 14.1
                },
                {
                    name: "密战",
                    value: 17.3
                },
                {
                    name: "谜巢",
                    value: 24.3
                },
                {
                    name: "我说的都是真的",
                    value: 25
                },
                {
                    name: "西游记之大圣归来",
                    value: 50.6
                },
                {
                    name: "僵尸至尊",
                    value: 7.3
                },
                {
                    name: "逃出无人岛",
                    value: 60.7
                },
                {
                    name: "奇门遁甲",
                    value: 14.1
                },
                {
                    name: "密战",
                    value: 17.3
                },
                {
                    name: "谜巢",
                    value: 24.3
                },
                {
                    name: "我说的都是真的",
                    value: 25
                },
                {
                    name: "西游记之大圣归来",
                    value: 50.6
                },
                {
                    name: "僵尸至尊",
                    value: 7.3
                },
                {
                    name: "逃出无人岛",
                    value: 60.7
                }]
        }, {
            name: '音乐',
            data: [{
                name: "天地无疆",
                value: 409.4
            },
                {
                    name: "混沌",
                    value: 34.1
                },
                {
                    name: "绿袖子",
                    value: 7.1
                },{
                    name: "凉凉",
                    value: 409.4
                },
                {
                    name: "混沌",
                    value: 34.1
                },
                {
                    name: "绿袖子",
                    value: 7.1
                }]
        }, {
            name: '游戏',
            data: [{
                name: "合金弹头",
                value: 660
            },
                {
                    name: "摩尔庄园",
                    value: 8.4
                },
                {
                    name: "奥比岛",
                    value: 8.3
                },
                {
                    name: "黑暗基地2",
                    value: 10.2
                },
                {
                    name: "QQ三国",
                    value: 12
                },
                {
                    name: "摩尔庄园",
                    value: 8.4
                },
                {
                    name: "奥比岛",
                    value: 8.3
                },
                {
                    name: "黑暗基地2",
                    value: 10.2
                },
                {
                    name: "QQ三国",
                    value: 12
                }]
        },{
            name: '相册',
            data: [{
                name: "往事如烟",
                value: 782
            },{
                name: "静月最好",
                value: 8.1
            },
                {
                    name: "童年时光",
                    value: 17.8
                },
                {
                    name: "展望未来",
                    value: 34
                },
                {
                    name: "青春岁月",
                    value: 43
                },{
                    name: "静月最好",
                    value: 8.1
                },
                {
                    name: "童年时光",
                    value: 17.8
                },
                {
                    name: "展望未来",
                    value: 34
                },
                {
                    name: "青春岁月",
                    value: 43
                }]
        }]
    });
    //这是了解操作，也就是个选项卡操作
    rules.addEventListener('mouseover', function(){
        clearTimeout(timer);
        rule.style.display="block";
        // console.log("已送达");
    })
    rules.addEventListener('mouseout',function(){
        // rule.style.display='none';
        timer=setTimeout(function () {
            rule.style.display='none';
        },500);
    })
    rule.addEventListener('mouseover', function(){
        clearTimeout(timer);
        rule.style.display="block";
        // console.log("已经移入");
    })
    rule.addEventListener('mouseout',function(){
        // rule.style.display='none';
        timer=setTimeout(function () {
            rule.style.display='none';
        },500);
    })
//    这是登录操作
    link.addEventListener('click', function(){
        console.log("已点击");
        mask.style.display='block';
        login.style.display='block';

    });
    closeBtn.addEventListener('click', function(){
        mask.style.display='none';
        login.style.display='none';

    });
// 鼠标按下，获取鼠标在盒子内的坐标,核心部分。
    title.addEventListener('mousedown',function(e){
        var x=e.pageX-login.offsetLeft;
        var y=e.pageY-login.offsetTop;
// console.log(x);
// console.log(y);
        document.addEventListener('mousemove',move)
        function move(e){
            login.style.left=e.pageX-x+'px';
            login.style.top=e.pageY-y+'px';

        }
        document.addEventListener('mouseup',function(){
            document.removeEventListener('mousemove',move)
        })
    });
    //获取元素
    link2.addEventListener('click', function(){
        console.log("已点击");
        mask.style.display='block';
        login.style.display='block';

    });
    closeBtn2.addEventListener('click', function(){
        mask.style.display='none';
        login.style.display='none';

    });
// 鼠标按下，获取鼠标在盒子内的坐标,核心部分。
    title2.addEventListener('mousedown',function(e){
        var x=e.pageX-login.offsetLeft;
        var y=e.pageY-login.offsetTop;
// console.log(x);
// console.log(y);
        document.addEventListener('mousemove',move)
        function move(e){
            login.style.left=e.pageX-x+'px';
            login.style.top=e.pageY-y+'px';

        }
        document.addEventListener('mouseup',function(){
            document.removeEventListener('mousemove',move)
        })
    });
}
$(function () {
    $("#tubiao1").highcharts({
        chart:{
            type:"pie",//饼型图
            backgroundColor: 'rgba(0,0,0,0)'

        },
        credits: {
            enabled: false//不显示LOGO链接
        },
        exporting: {
            enabled:false//去掉导出
        },
        title:{
            text:"该平台最关注的对象",
            useHTML: true,
            style: {
                color: 'rgba(255,255,255,0.82)',      //字体颜色
                "fontSize": "18px",   //字体大小
                fontWeight: 'bold'
            }
        },
        series:[{
            name: '该平台最关注对象所占百分比',
            data:[
                ['个人空间',30],
                ['好友圈',25],
                ['音乐',15],
                ['游戏',15],
                ['相册',10],
                ['其他',5]

            ]
        }]
    });

    const rand = function (from, to) {
        return Math.round(from + Math.random() * (to - from));
    };
    const chart = Highcharts.chart('tubiao3', {
        chart: {
            credits: {
                enabled: false//不显示LOGO
            },
            type: 'column',
            backgroundColor: 'rgba(0,0,0,0)',
            options3d: {
                enabled: true,
                alpha: 20,
                beta: 30,
                depth: 400, // Set deph
                viewDistance: 5,
                frame: {
                    bottom: {
                        size: 1,
                        color: 'rgba(0,0,0,0.05)'
                    }
                }
            }
        },
        credits: {
            enabled: false//不显示LOGO链接
        },
        exporting: {
            enabled:false//去掉导出
        },
        title: {
            text: '主要城市使用该平台具体图',
        },
        subtitle: {
            text: ''
        },
        yAxis: {
            min: 0,
            max: 10,
            title: {
                text:"每周人数（万）",
            },
        },
        xAxis: {
            min: 0, // Set min on xAxis
            max: 3,
            gridLineWidth: 1,
            categories:["微博","微浪","冲浪","推特"]
        },
        zAxis: {
            min: 0,
            max: 3,
            categories: ['一线城市', '二线城市', '三线城市','其他'],
            labels: {
                y: 5,
                rotation: 18
            }
        },
        plotOptions: {
            series: {
                groupZPadding: 10,
                depth: 100,
                groupPadding: 0,
                grouping: false,
            }
        },
        series: [{
            stack: 0,
            data: [...Array(4)].map((v, i) => ({ x: i, y: rand(0, 10) }))
        }, {
            stack: 1,
            data: [...Array(4)].map((v, i) => ({ x: i, y: rand(0, 10) }))
        }, {
            stack: 2,
            data: [...Array(4)].map((v, i) => ({ x: i, y: rand(0, 10) }))
        },{
            stack: 3,
            data: [...Array(4)].map((v, i) => ({ x: i, y: rand(0, 10) }))
        }]
    });
    // Add mouse events for rotation
    $(chart.container).on('mousedown.hc touchstart.hc', function(eStart) {
        eStart = chart.pointer.normalize(eStart);
        var posX = eStart.pageX,
            posY = eStart.pageY,
            alpha = chart.options.chart.options3d.alpha,
            beta = chart.options.chart.options3d.beta,
            newAlpha,
            newBeta,
            sensitivity = 1; // lower is more sensitive
        $(document).on({
            'mousemove.hc touchdrag.hc': function(e) {
                // Run beta
                newBeta = beta + (posX - e.pageX) / sensitivity;
                chart.options.chart.options3d.beta = newBeta;
                // Run alpha
                newAlpha = alpha + (e.pageY - posY) / sensitivity;
                chart.options.chart.options3d.alpha = newAlpha;
                chart.redraw(false);
            },
            'mouseup touchend': function() {
                $(document).off('.hc');
            }
        });
    });

})

