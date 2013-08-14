mainView = {};

mainView.open = function(config)
{
	Ti.include(config.viewPath+'UIComp.js');
	mainWin = UIComp.window('white',true);
	mainWin.setTitle('main win');
	mainWin.open();
}
