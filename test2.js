var data = hexo.route.get('./index.html');
var dest = fs.createWriteStream('test2o.txt');

data.pipe(dest);