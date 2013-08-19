mainView = {};

mainView.open = function(config)
{
	Ti.include(config.viewPath+'UIComp.js');
	mainView.mainWin(config);
};

mainView.mainWin = function(config)
{
	var win = UIComp.window('white',true);
	win.setTitle('Main Window');
	var mainView = UIComp.view('white',0,0,Ti.UI.FILL, Ti.UI.FILL);
	var searchBar = UIComp.searchBar(0,Ti.UI.SIZE, true);
	mainView.add(searchBar);
	Ti.include(config.modelPath+'model.js');
	var data = model.getMainTableData(config);
	var tblMainView = UIComp.tableView(data,Ti.UI.iPhone.TableViewStyle.GROUPED);
	tblMainView.top=43;
	mainView.add(tblMainView);
	if(config.osname == 'android')
	{
		win.add(mainView);
	}
	else
	{
		var mainWin = UIComp.window('white',true);	
		mainWin.add(mainView);
		var navGroup = UIComp.navGroup(mainWin);
		win.navBarHidden = true;
		win.add(navGroup);
	}
	win.open({modal: true});
};