// Jaxson Van Doorn, 2014

var player = {};

player = function (game) {};

player.prototype =
{
	load: function ()
	{
		// Woofers
		woofers = game.add.sprite(465, 938, 'woofers');
		woofers.anchor.set(0.5);

		//Add Physics
		game.physics.arcade.enable(woofers);

		// Physics Properties
		woofers.body.bounce.y = 0.2;
		woofers.body.collideWorldBounds = true;
		player.prototype.varibleRest();

		// Define Animations
		woofers.animations.add('w2p', Phaser.Animation.generateFrameNames('k9', 0, 10, '', 4), 10, false);
		woofers.animations.add('p2w', Phaser.Animation.generateFrameNames('k9', 10, 0, '', 4), 10, false);
	},

	bringToFront: function () 
	{
		woofers.bringToTop();
	},

	posRest: function ()
	{
		woofers.x = 465;
		woofers.y = 938;
	},

	varibleRest: function ()
	{
		woofers.scale.x = -11;
		woofers.scale.y = 11;
		woofers.body.width = 99;
		woofers.body.gravity.y = 700;
		woofers.smoothed = false;
		woofers.isTransforming = false;
		woofers.readyToTransform = true;
		woofers.isWoofers = false;
		woofers.speed = 450;
		woofers.jump = 450;
	},

	movement: function ()
	{
		// Reset Velocity
		woofers.body.velocity.x = 0;

		// Left
		if (leftButton.isDown)
		{
			if (woofers.isWoofers || !woofers.isWoofers && woofers.isTransforming && !woofers.body.blocked.down)
			{
				woofers.body.velocity.x = -woofers.speed * 1.5;
			}
			else
			{
				woofers.body.velocity.x = -woofers.speed;
			}
		}
		
		// Right
		else if (rightButton.isDown)
		{
			if (woofers.isWoofers || !woofers.isWoofers && woofers.isTransforming && !woofers.body.blocked.down)
			{
				woofers.body.velocity.x = woofers.speed * 1.5;
			}
			else
			{
				woofers.body.velocity.x = woofers.speed;
			}
		}
		
		// Still
		else 
		{
		}

		// Runs Tile Checking For Tranformations
		if (leftButton.isDown || rightButton.isDown || !woofers.body.blocked.down)
		{
			player.prototype.checkTile();
		}

		// Jump
		if (jumpButton.isDown && woofers.body.blocked.down)
		{
			jumpSound.play('', 0, 1, false);

			if (woofers.isWoofers)
			{
				woofers.body.velocity.y = -woofers.jump;
			}
			else
			{
				woofers.body.velocity.y = -woofers.jump * 1.6;
			}
		}
	},

	transformation: function ()
	{
		// Ponton to Woofers
		if (!woofers.isTransforming && !woofers.isWoofers && woofers.readyToTransform)
		{
			woofers.animations.play('p2w');
			woofers.isTransforming = true;
			woofers.readyToTransform = false;
			woofers.isWoofers = true;
		}
		// Woofers to Ponton
		else if (!woofers.isTransforming && woofers.isWoofers && woofers.readyToTransform)
		{
			woofers.animations.play('w2p');
			woofers.isTransforming = true;
			woofers.readyToTransform = false;
			woofers.isWoofers = false;
		}
		// End Transformation
		if (woofers.animations.currentAnim.isFinished && woofers.isTransforming)
		{
			woofers.isTransforming = false;
			transformSound.play('', 0, 1, false);

			if (woofers.isWoofers)
			{
				woofers.scale.x = -10;
				woofers.scale.y = 10;
				woofers.body.width = 90;
				woofers.body.gravity.y = 700;
				console.log("Woofers");
			}
			else 
			{
				woofers.scale.x = -11;
				woofers.scale.y = 11;
				woofers.body.width = 99;
				woofers.body.gravity.y = 700 * 1.8;
				console.log("Ponton");
			}
		}
	},

	checkTile: function ()
	{
		woofers.tileCheck = map.getTileWorldXY(woofers.x, woofers.y + 63).index;
		
		if (woofers.isWoofers)
		{
			if (woofers.tileCheck == 1)
			{
				woofers.readyToTransform = true;
				return false;
			}
		}
		else 
		{
			if (woofers.tileCheck == 2)
			{
				woofers.readyToTransform = true;
				return false;
			}
		}

		if (woofers.tileCheck == 3)
		{
			mapLoader.prototype.nextLevel();
			return false;
		}
	}
};

// Jaxson Van Doorn, 2014
