module.exports = function(app) {
    
	app.get('/', function(req, res){
        title = "David Ranich";
        res.render('index', { 
          title: title
      });
    });

// work

    app.get('/flappy', function(req, res){
        title = "Flappy Box";
        res.render('flappy-box', {
            title: title
        });
    });

    app.get('/weather', function(req, res){
        title = "Weather Zip!";
        res.render('weather', {
            title: title
        });
    });

// 404 error page

    app.use(function(request, response, next) {
        response.status(404);
        response.render('404');
    });
}
