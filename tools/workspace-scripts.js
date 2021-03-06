const npsUtils = require('nps-utils');

module.exports = {
	message: 'NativeScript Plugins ~ made with โค๏ธ  Choose a command to start...',
	pageSize: 32,
	scripts: {
		default: 'nps-i',
		nx: {
			script: 'nx',
			description: 'Execute any command with the @nrwl/cli',
		},
		format: {
			script: 'nx format:write',
			description: 'Format source code of the entire workspace (auto-run on precommit hook)',
		},
		'๐ง': {
			script: `npx cowsay "NativeScript plugin demos make developers ๐"`,
			description: '_____________  Apps to demo plugins with  _____________',
		},
		// demos
		apps: {
			'...Vanilla...': {
				script: `npx cowsay "Nothing wrong with vanilla ๐ฆ"`,
				description: ` ๐ป Vanilla`,
			},
			demo: {
				clean: {
					script: 'nx run demo:clean',
					description: 'โ  Clean  ๐งน',
				},
				ios: {
					script: 'nx run demo:ios',
					description: 'โ  Run iOS  ๏ฃฟ',
				},
				android: {
					script: 'nx run demo:android',
					description: 'โ  Run Android  ๐ค',
				},
			},
			'...Angular...': {
				script: `npx cowsay "Test all the Angles!"`,
				description: ` ๐ป Angular`,
			},
			'demo-angular': {
				clean: {
					script: 'nx run demo-angular:clean',
					description: 'โ  Clean  ๐งน',
				},
				ios: {
					script: 'nx run demo-angular:ios',
					description: 'โ  Run iOS  ๏ฃฟ',
				},
				android: {
					script: 'nx run demo-angular:android',
					description: 'โ  Run Android  ๐ค',
				},
			},
		},
		'โ๏ธ': {
			script: `npx cowsay "@developerwym/* packages will keep your โ๏ธ cranking"`,
			description: '_____________  @developerwym/*  _____________',
		},
		// packages
		// build output is always in dist/packages
		'@developerwym': {
			// @developerwym/ns-screen-orientacion
			'ns-screen-orientacion': {
				build: {
					script: 'nx run ns-screen-orientacion:build.all',
					description: '@developerwym/ns-screen-orientacion: Build',
				},
			},
			// @developerwym/ns-store-update
			'ns-store-update': {
				build: {
					script: 'nx run ns-store-update:build.all',
					description: '@developerwym/ns-store-update: Build',
				},
			},
			// @developerwym/navigator
			'navigator': {
				build: {
					script: 'nx run navigator:build.all',
					description: '@developerwym/navigator: Build',
				},
			},
			// @developerwym/ns-ar
			'ns-ar': {
				build: {
					script: 'nx run ns-ar:build.all',
					description: '@developerwym/ns-ar: Build',
				},
			},
			// @developerwym/ns-ar
			'ns-ar': {
				build: {
					script: 'nx run ns-ar:build.all',
					description: '@developerwym/ns-ar: Build',
				},
			},
			// @developerwym/ns-country-code
			'ns-country-code': {
				build: {
					script: 'nx run ns-country-code:build.all',
					description: '@developerwym/ns-country-code: Build',
				},
			},
			// @developerwym/ns-signalr
			'ns-signalr': {
				build: {
					script: 'nx run ns-signalr:build.all',
					description: '@developerwym/ns-signalr: Build',
				},
			},
			// @developerwym/ns-timer-ranger-picker
			'ns-timer-ranger-picker': {
				build: {
					script: 'nx run ns-timer-ranger-picker:build.all',
					description: '@developerwym/ns-timer-ranger-picker: Build',
				},
			},
			'build-all': {
				script: 'nx run all:build',
				description: 'Build all packages',
			},
		},
		'โก': {
			script: `npx cowsay "Focus only on source you care about for efficiency โก"`,
			description: '_____________  Focus (VS Code supported)  _____________',
		},
		focus: {
			'ns-screen-orientacion': {
				script: 'nx run ns-screen-orientacion:focus',
				description: 'Focus on @developerwym/ns-screen-orientacion',
			},
			'ns-store-update': {
				script: 'nx run ns-store-update:focus',
				description: 'Focus on @developerwym/ns-store-update',
			},
			'navigator': {
				script: 'nx run navigator:focus',
				description: 'Focus on @developerwym/navigator',
			},
			'ns-ar': {
				script: 'nx run ns-ar:focus',
				description: 'Focus on @developerwym/ns-ar',
			},
			'ns-ar': {
				script: 'nx run ns-ar:focus',
				description: 'Focus on @developerwym/ns-ar',
			},
			'ns-country-code': {
				script: 'nx run ns-country-code:focus',
				description: 'Focus on @developerwym/ns-country-code',
			},
			'ns-signalr': {
				script: 'nx run ns-signalr:focus',
				description: 'Focus on @developerwym/ns-signalr',
			},
			'ns-timer-ranger-picker': {
				script: 'nx run ns-timer-ranger-picker:focus',
				description: 'Focus on @developerwym/ns-timer-ranger-picker',
			},
			reset: {
				script: 'nx run all:focus',
				description: 'Reset Focus',
			}
		},
		'.....................': {
			script: `npx cowsay "That's all for now folks ~"`,
			description: '.....................',
		},
	},
};
