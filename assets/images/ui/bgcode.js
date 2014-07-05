		game.load.atlasXML('moviebgKey', 'assets/images/ui/movingbg.png', 'assets/images/ui/movingbg.xml');
		moviebg = game.add.sprite(0, 0, 'moviebgKey');
		moviebg.animations.add('loop', Phaser.Animation.generateFrameNames('bg', 0, 19, '', 4), 8, true);
		moviebg.scale.x = 192;
		moviebg.scale.y = 1080;
		moviebg.animations.play('loop');
		moviebg.smoothed = false;