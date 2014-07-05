//Jaxson Van Doorn, 2014

var pauseMenu = {};

pauseMenu = function(game){};

pauseMenu.prototype =
{
	pauseScreen : function()
	{      
		// Paused
		if (game.paused)
		{
			// Unpause
			if (pauseButton.isDown && !keyPress.esc)
			{
				game.paused = false;
				keyPress.esc = true;

				pauseScreen.destroy();
			}
		}

		// Keydebouncing
		if (!pauseButton.isDown)
		{
			keyPress.esc = false;
		}

		// Refreshs function 60 times a second
		setTimeout(pauseMenu.prototype.pauseScreen, 16);
	},

	pauseGame: function ()
	{
		// Pause
		if (pauseButton.isDown && !keyPress.esc)
		{
			pauseScreen = game.add.image(0, 0, 'pauseScreen');
			pauseScreen.fixedToCamera = true;
			keyPress.esc = true;
			game.paused = true;
		}
	}
};

//Jaxson C. Van Doorn, 2014
