// Jaxson Van Doorn, 2014

var woofers = {
					isWoofers: false,
					readyToTransform: false,
					isTransforming: false,
					isAnim: false,
					tileCheck: null,
					speed: 450,
					jump: 550,
					control: false
				};

var keyPress = {
					left: false,
					right: false,
					up: false,
					down: false,
					esc: false
				};

var map = {
				level: 1
			};

// Node Webbkit Import
var gui = require('nw.gui');
var win = gui.Window.get();

// Jaxson Van Doorn, 2014
