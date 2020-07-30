
var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var url = require('url');
var querystring = require('querystring');
var _ = require('underscore');


http.createServer(function(req, res){
   
  res.render = function(filename, tplData) {

    fs.readFile(filename, function(err, data) {
      if (err) {
        res.writeHead(404, 'Not Found', { 'Content-Type': 'text/html;charset=utf-8' });
        res.end('404, not found.');
        return;
      }
    
      if (tplData) {
        // 如果用户传递了模板数据，表示要进行模板替换
        var fn = _.template(data.toString('utf8'));
        data = fn(tplData);
      }

      res.setHeader('Content-Type', mime.getType(filename));
      res.end(data);
    });
  };


  req.url = req.url.toLowerCase();
  req.method = req.method.toLowerCase();

  // 通过 url 模块，调用 url.parse() 方法解析用户请求的 url（req.url）
  var urlObj = url.parse(req.url, true);

  // 先根据用户请求的路径（路由），将对应的HTML页面显示出来
  if (req.url === '/' || req.url === '/index' && req.method === 'get') {

    // 1. 读取 data.json 文件中的数据，并将读取到的数据转换为 list 数组
    fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf8', function(err, data) {
      if (err && err.code !== 'ENOENT') {
        throw err;
      }
      // 读取到的新闻数据
      var list_news = JSON.parse(data || '[]');

      // 2. 在服务器端使用模板引擎，将 list 中的数据和 index.html 文件中的内容结合 渲染给客户端
      // 读取 index.html
      res.render(path.join(__dirname, 'views', 'index.html'), { list: list_news });

    });

  } else if (req.url === '/submit' && req.method === 'get') {
    // 读取 submit.html 并返回
    res.render(path.join(__dirname, 'views', 'submit.html'));
  } else if (urlObj.pathname === '/item' && req.method === 'get') {
    // 1. 获取当前用户请求的新闻的 id
    // urlObj.query.id 
    // 2. 读取 data.json 文件中的数据，根据 id 找到对应新闻
    fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf8', function(err, data) {
      if (err && err.code !== 'ENOENT') {
        throw err;
      }
      // 读取到的新闻数据
      var list_news = JSON.parse(data || '[]');
      var model = null;

      // 循环 list_news 中的数据，找到和 id 值相等的数据
      for (var i = 0; i < list_news.length; i++) {

        // 判断集合中是否有与用户提交的 id 相等的新闻
        if (list_news[i].id.toString() === urlObj.query.id) {
          // 如果找到了相等的新闻，则将其记录下来
          model = list_news[i];
          break;
        }
      }

      if (model) {
        // 3. 调用 res.render() 函数进行模板引擎的渲染
        res.render(path.join(__dirname, 'views', 'details.html'), { item: model });
      } else {
        res.end('No Such Item');
      }

    });

  } else if (req.url.startsWith('/add') && req.method === 'get') {

    // 此处，读取文件的时候可以直接写一个 utf8 编码，这样的话，回调函数中的 data 就是一个字符串了
    fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf8', function(err, data) {

      // "[{"title":"xxx","url":"ffff","text":"dddd"}]"
      console.log('--------------' + data);
      // 因为第一次访问网站， data.json 文件本身就不存在，所以肯定是有错误的
      // 但是这种错误，我们并不认为是网站出错了，所以不需要抛出异常
      if (err && err.code !== 'ENOENT') {
        throw err;
      }

      // 如果读取到数据了，那么就把读取到的数据 data，转换为 list数组
      // 如果没有读取到数据，那么就把 '[]' 转换为数组
      var list = JSON.parse(data || '[]');

      // 在把 新闻 添加到 list 之前，为新闻增加一个 id 属性
      urlObj.query.id = list.length;

      // 向数组对象 list 中 push 一条新闻
      list.push(urlObj.query);


      // 2. 把用户提交的新闻数据保存到 data.json 文件中
      // 把 list 数组中的数据写入到 data.json 文件中
      fs.writeFile(path.join(__dirname, 'data', 'data.json'), JSON.stringify(list), function(err) {
        if (err) {
          throw err;
        }

        console.log('ok');
        // 设置响应报文头，通过响应报文头告诉浏览器，执行一次页面跳转操作
        // 3. 跳转到新闻列表页
        // 重定向
        res.statusCode = 302;
        res.statusMessage = 'Found';
        res.setHeader('Location', '/');

        res.end();
      });
    });

  } else if (req.url === '/add' && req.method === 'post') {

    // 表示 post 方法提交一条新闻
    // 1. 读取 data.json 文件中的数据
    fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf8', function(err, data) {
      if (err && err.code !== 'ENOENT') {
        throw err;
      }
      var list = JSON.parse(data || '[]');

      // 2. 获取用户 post 提交的数据
      // 因为 post 提交数据的时候，数据量可能比较大，所以会分多次进行提交，每次提交一部分数据
      // 此时要想在服务器中获取用户提交的所有数据，就必须监听 request 事件 的 data 事件（因为每次浏览器提交一部分数据到服务器就会触发一次 data 事件）
      // 那么，什么时候才表示浏览器把所有数据都提交到服务器了呢？就是当 request 对象的 end 事件被触发的时候。

      // 监听 request 的对象的 data 事件 和 end 事件代码如下：
      // 声明一个数组，用来保存用户每次提交过来的数据
      var array = [];
      req.on('data', function(chunk) {
        // 此处的 chunk 参数，就是浏览器本次提交过来的一部分数据
        // chunk 的数据类型是 Buffer（chunk就是一个Buffer对象）
        array.push(chunk);
      });

      // 监听 request 对象的 end 事件
      // 当 end 事件被触发的时候，表示上所有数据都已经提交完毕了
      req.on('end', function() {
        // 在这个事件中只要把 array 中的所有数据汇总起来就好了
        // 把 array 中的每个 buffer 对象，集合起来转换为一个 buffer 对象
        // title=fffffff&url=ffffff&text=ffffff
        // {title: 'fffff', url: 'fffff', text: 'ffffff'}
        // JSON.parse();
        var postBody = Buffer.concat(array);
        // console.log(postBody);
        // 把 获取到的 buffer 对象转换为一个字符串
        postBody = postBody.toString('utf8');

        // 把 post 请求的查询字符串，转换为一个 json 对象
        postBody = querystring.parse(postBody);
        // console.log(postBody);

        // 在把 新闻 添加到 list 之前，为新闻增加一个 id 属性
        postBody.id = list.length;

        // 将用户提交的新闻 push 到 list 中
        list.push(postBody);


        // 将新的 list 数组，在写入到 data.json 文件中
        fs.writeFile(path.join(__dirname, 'data', 'data.json'), JSON.stringify(list), function(err) {
          if (err) {
            throw err;
          }

          console.log('ok');
          // 设置响应报文头，通过响应报文头告诉浏览器，执行一次页面跳转操作
          // 3. 跳转到新闻列表页
          // 重定向
          res.statusCode = 302;
          res.statusMessage = 'Found';
          res.setHeader('Location', '/');

          res.end();
        });

      });

    });


    // 2. 将读取到的数据转换为 list 数组

    // 3. 向 list 数组中 push 一条新闻


    // 4. 把 list 数组转换为字符串重新写入到 data.json 文件中

    // 5. 重定向


  } else if (req.url.startsWith('/resources') && req.method === 'get') {
    // 如果用户请求是以 /resources 开头，并且是 get 请求，就认为用户是要请求静态资源
    // /resources/images/s.gif
    res.render(path.join(__dirname, req.url));
  } else {
    res.writeHead(404, 'Not Found', {
      'Content-Type': 'text/html; charset=utf-8'
    });
    res.end('404, Page Not Found.');
  }

}).listen(9090, function() {
  console.log('http://localhost:9090');
});