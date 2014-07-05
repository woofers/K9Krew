// Jaxson Van Doorn, 2014

var level1 = {};

level1 = function (game) {};

level1.prototype =
{
	preload: function ()
	{
		// Pause Screen
		game.load.image('pauseScreen', 'assets/images/ui/pause.png');
		
		// Tilemap
		game.load.tilemap('tilemap', 'assets/levels/level1/level.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('tiles', 'assets/levels/level1/tiles.png');

		// Woofers & Ponton
		game.load.atlasXML('woofers', 'assets/images/sprites/k9.png', 'assets/images/sprites/k9.xml');

		// Info Text
		game.load.atlasXML('infotext', 'assets/images/ui/text/text.png', 'assets/images/ui/text/text.xml');
	},

	create: function ()
	{
		// Start Physics
		game.physics.startSystem(Phaser.Physics.ARCADE);
		
		// Turn On FPS Caluation
		game.time.advancedTiming = true;

		// Tilemap
		map = game.add.tilemap('tilemap');
		map.addTilesetImage('tiles', 'tiles');
		mapLayer = map.createLayer('collisionLayer');
		map.setCollisionBetween(3, 24);

		// Fixies Clipping
		game.physics.arcade.TILE_BIAS = 64;
		
		// Add Text
		infotext = game.add.sprite(10, 963, 'infotext');

		player.prototype.load();
		
		// Define States
		infotext.animations.add('woofers0', Phaser.Animation.generateFrameNames('woofers', 0, 0, '', 4), 10, false);
		infotext.animations.add('woofers1', Phaser.Animation.generateFrameNames('woofers', 1, 1, '', 4), 10, false);
		infotext.animations.add('woofers2', Phaser.Animation.generateFrameNames('woofers', 2, 2, '', 4), 10, false);
		infotext.animations.add('ponton0', Phaser.Animation.generateFrameNames('ponton', 0, 0, '', 4), 10, false);
		infotext.animations.add('ponton1', Phaser.Animation.generateFrameNames('ponton', 1, 1, '', 4), 10, false);

		// Set camera boundaries
		camera = game.world.setBounds(0.5, 0, 5760, 1080);

		//Camera follow player
		cameraFollow = game.camera.follow(woofers);

		// Controls
		leftButton = game.input.keyboard.addKey(Phaser.Keyboard.A);
		rightButton = game.input.keyboard.addKey(Phaser.Keyboard.D);
		jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		pauseButton = game.input.keyboard.addKey(Phaser.Keyboard.ESC);

		pauseMenu.prototype.pauseScreen();
	},

	update: function ()
	{	
		// Collide
		game.physics.arcade.collide(woofers, mapLayer);

		// Player
		player.prototype.movement();
		player.prototype.transformation();

		// Pause Game
		pauseMenu.prototype.pauseGame();

		// Tutorial Text
		if (woofers.body.blocked.down && !woofers.isTransforming && woofers.x < 4800)
		{
			infotext.alpha = 1;
			
			// Wofers Text
			if (woofers.isWoofers)
			{
				if (woofers.x < 932)
				{
					infotext.animations.play('woofers0');
					infotext.x = 10;
					infotext.y = 963;
				}
				else if (woofers.x < 2839 && woofers.x > 1950)
				{
					infotext.animations.play('woofers1');
					infotext.x = 2100;
					infotext.y = 700;
				}
				else if (woofers.x < 4800 && woofers.x > 3840)
				{
					infotext.animations.play('woofers2');
					infotext.x = 4025;
					infotext.y = 700;
				}
			}
			
			// Ponton Text
			else
			{
				if (woofers.x < 1950 && woofers.x > 932)
				{
					infotext.animations.play('ponton0');
					infotext.x = 1446;
					infotext.y = 963;
				}
				else if (woofers.x < 3840 && woofers.x > 2839)
				{
					infotext.animations.play('ponton1');
					infotext.x = 3070;
					infotext.y = 500;
				}
			}
		}
		else
		{
			infotext.alpha = 0;
		}
	},

	render: function ()
	{
		game.debug.text('FPS: ' + game.time.fps, 32, 96);
		game.debug.text('isWoofers: ' + woofers.isWoofers, 32, 128);
		game.debug.text('isTransforming: ' + woofers.isTransforming, 32, 160);
		game.debug.text('X Speed: ' + woofers.body.velocity.x, 32, 196);
		game.debug.text('Y Speed: ' + woofers.body.velocity.y, 32, 228);
		game.debug.text('Gravity: ' + woofers.body.gravity.y, 32, 250);
		game.debug.spriteInfo(woofers, 32, 282);
		//game.debug.body(woofers);
	},

	quitGame: function ()
	{
		game.state.start('mainMenu');
	}
};

// Jaxson Van Doorn, 2014
