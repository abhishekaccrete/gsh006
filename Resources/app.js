config = {
	osname: Ti.Platform.osname,
	resPath: Ti.Filesystem.resourcesDirectory,
	platformWidth: Ti.Platform.displayCaps.platformWidth,
	platformHeight: Ti.Platform.displayCaps.platformHeight,
	viewPath: Ti.Filesystem.resourcesDirectory+'views/',
	modelPath: Ti.Filesystem.resourcesDirectory+'model/',
	imgPath: Ti.Filesystem.resourcesDirectory+'images/'
	//dbPath: Ti.Filesystem.resourcesDirectory+'FieldAgent.db',
	//paint: require('ti.paint'),
	//segmentedControl: require('/views/custTabBar')
};
try
{
	//config.db = Ti.Database.install(config.dbPath,'FieldService');
	Ti.include(config.viewPath+'mainView.js');
	mainView.open(config);
}
catch(e)
{
	alert(e);
}