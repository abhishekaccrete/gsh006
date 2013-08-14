mainView = {};

mainView.open = function(config)
{
	Ti.include(config.viewPath+'UIComp.js');
	mainView.mainWin(config);
}

mainView.mainWin = function(config)
{
	var win = UIComp.window('white',true);
	win.setTitle('Main Window');
		
	if(config.osname == 'android')
	{
		
	}
	else
	{
		var mainWin = UIComp.window('white',true);
		var navGroup = UIComp.navGroup(mainWin);
		win.navBarHidden = true;
		win.add(navGroup);
	}
	win.open({modal: true});
}