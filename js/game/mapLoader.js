// Jaxson Van Doorn, 2014

var mapLoader = {};

mapLoader = function (game) {};

mapLoader.prototype =
{
	preload: function ()
	{
		for (i = 0; i < 3; i++)
		{ 
			game.load.tilemap('level' + (i + 1), 'assets/levels/level' + (i + 1) + '/level.json', null, Phaser.Tilemap.TILED_JSON);
		}
	},

	load: function ()
	{
		// Play Level Start Sound
		levelStartSound.play('', 0, 1, false);

		// Load Map
		map = game.add.tilemap('level' + map.level);
		map.addTilesetImage('tiles', 'tiles');
		mapLayer = map.createLayer('collisionLayer');
		map.setCollisionBetween(6, 24);
		map.wasLoaded = true;
	},

	nextLevel: function ()
	{
		// Change Level
		map.level ++;
		
		// Reset Level
		map.destroy();
		mapLoader.prototype.load();

		// Rest Camera
		mainGame.prototype.updateCamera();
		
		// Rest Player
		player.prototype.varibleRest();
		player.prototype.posRest();
		player.prototype.bringToFront();

		// Kill Text (if any)
		if (infotext)
		{
			infotext.kill();
		}
	}
};

// Jaxson Van Doorn, 2014
