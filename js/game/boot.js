// Jaxson Van Doorn, 2014

var game = new Phaser.Game(1920, 1080, Phaser.AUTO, 'canvasdiv');

window.onload = function() {

	// Show Dev Tools
	win.showDevTools();

	// Max Scale
	game.scale.maxWidth = 1920;
	game.scale.maxHeight = 1080;

	// Auto Scale
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.scale.setScreenSize();

	// Create Game States
	game.state.add('menu', mainMenu);
	game.state.add('game', mainGame);

	// Load Menu State
	game.state.start('menu');
};

// Jaxson Van Doorn, 2014
