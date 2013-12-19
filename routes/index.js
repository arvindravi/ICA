
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.contact = function(req, res){
	res.render('contact');
}

exports.donate = function(req, res){
	res.render('donate');
}