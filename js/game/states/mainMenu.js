// Jaxson Van Doorn, 2014

var mainMenu = {};

mainMenu = function (game) {};

mainMenu.prototype =
{
	preload: function ()
	{
		// Load Menu
		game.load.image('menu', 'assets/images/ui/menu.png');
	},

	create: function ()
	{
		// Display Menu
		menu = game.add.sprite(0, 0, 'menu');

		// Controls
		space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	},

	update: function ()
	{
		// Start Game
		if (space.isDown)
		{
			mainMenu.prototype.startGame();
		}
	},

	startGame: function ()
	{
		menu.destroy();
		
		game.state.start('game');
	}
};

// Jaxson Van Doorn, 2014
