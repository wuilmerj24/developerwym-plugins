module.exports = {
  message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
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
    '🔧': {
      script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...Vanilla...': {
        script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
        description: ` 🔻 Vanilla`,
      },
      demo: {
        clean: {
          script: 'nx run demo:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo:android',
          description: '⚆  Run Android  🤖',
        },
      },
      '...Angular...': {
        script: `npx cowsay "Test all the Angles!"`,
        description: ` 🔻 Angular`,
      },
      'demo-angular': {
        clean: {
          script: 'nx run demo-angular:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo-angular:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo-angular:android',
          description: '⚆  Run Android  🤖',
        },
      },
    },
    '⚙️': {
      script: `npx cowsay "@arepa/* packages will keep your ⚙️ cranking"`,
      description: '_____________  @arepa/*  _____________',
    },
    // packages
    // build output is always in dist/packages
    '@arepa': {
      // @arepa/time-range
      'time-range': {
        build: {
          script: 'nx run time-range:build.all',
          description: '@arepa/time-range: Build',
        },
      },
      // @arepa/launch-navigator
      'launch-navigator': {
        build: {
          script: 'nx run launch-navigator:build.all',
          description: '@arepa/launch-navigator: Build',
        },
      },
      // @arepa/country-code
      'country-code': {
        build: {
          script: 'nx run country-code:build.all',
          description: '@arepa/country-code: Build',
        },
      },
      // @arepa/country-code
      'country-code': {
        build: {
          script: 'nx run country-code:build.all',
          description: '@arepa/country-code: Build',
        },
      },
      // @arepa/keyboard
      keyboard: {
        build: {
          script: 'nx run keyboard:build.all',
          description: '@arepa/keyboard: Build',
        },
      },
      // @arepa/screen-orientation
      'screen-orientation': {
        build: {
          script: 'nx run screen-orientation:build.all',
          description: '@arepa/screen-orientation: Build',
        },
      },
      // @arepa/statusbar
      statusbar: {
        build: {
          script: 'nx run statusbar:build.all',
          description: '@arepa/statusbar: Build',
        },
      },
      // @arepa/store-update
      'store-update': {
        build: {
          script: 'nx run store-update:build.all',
          description: '@arepa/store-update: Build',
        },
      },
      // @arepa/gallery-view
      'gallery-view': {
        build: {
          script: 'nx run gallery-view:build.all',
          description: '@arepa/gallery-view: Build',
        },
      },
      'build-all': {
        script: 'nx run-many --target=build.all --all',
        description: 'Build all packages',
      },
    },
    '⚡': {
      script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
      description: '_____________  Focus (VS Code supported)  _____________',
    },
    focus: {
      'time-range': {
        script: 'nx run time-range:focus',
        description: 'Focus on @arepa/time-range',
      },
      'launch-navigator': {
        script: 'nx run launch-navigator:focus',
        description: 'Focus on @arepa/launch-navigator',
      },
      'country-code': {
        script: 'nx run country-code:focus',
        description: 'Focus on @arepa/country-code',
      },
      'country-code': {
        script: 'nx run country-code:focus',
        description: 'Focus on @arepa/country-code',
      },
      keyboard: {
        script: 'nx run keyboard:focus',
        description: 'Focus on @arepa/keyboard',
      },
      'screen-orientation': {
        script: 'nx run screen-orientation:focus',
        description: 'Focus on @arepa/screen-orientation',
      },
      statusbar: {
        script: 'nx run statusbar:focus',
        description: 'Focus on @arepa/statusbar',
      },
      'store-update': {
        script: 'nx run store-update:focus',
        description: 'Focus on @arepa/store-update',
      },
      'gallery-view': {
        script: 'nx run gallery-view:focus',
        description: 'Focus on @arepa/gallery-view',
      },
      reset: {
        script: 'nx g @arepa/plugin-tools:focus-packages',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};
