[This has moved to](https://github.com/wuilmerj24/nativescript-plugins)

- [@arepa/country-code](packages/country-code/README.md)
- [@arepa/gallery-view](packages/gallery-view/README.md)
- [@arepa/launch-navigator](packages/launch-navigator/README.md)
- [@arepa/localdb](packages/localdb/README.md)
- [@arepa/mapbox-navigations](packages/mapbox-navigations/README.md)
- [@arepa/screen-orientation](packages/screen-orientation/README.md)
- [@arepa/signal-r](packages/signal-r/README.md)
- [@arepa/store-update](packages/store-update/README.md)
- [@arepa/time-range](packages/time-range/README.md)

# How to use?

This workspace manages the suite of plugins listed above. 

In general, when in doubt with what to do, just `npm start`.

## How to add a new package to workspace?

```
npm run add
```

At the prompt, enter the name of the new package.

- This adds a plugin harness in `packages` with the necessary boilerplate to just start developing
- Updates all demo app flavors to support demoing the new package
- Adds shared code in `tools/demo` where you can write demo code **once** and share across all demo flavors
- Updates build tooling to support the new package
- Updates the `npm start` interactive display
- Updates the README here to list the new package

## How to add Angular compatibility to a package

```
npm run add-angular
```

At the prompt, enter the name of the package to add an `angular` folder to it with the necessary boilerplate to provide Angular support to the package.

## How to focus on just 1 package to develop in isolation

```
npm start
```

- Choose the focus commands for the package you wish to focus on and hit enter.
- All the demo app's will be updated to isolate that 1 package and for supported IDE's (currently VS Code), the source code will also become isolated in the workspace.

Note: *good to always clean the demo you plan to run after focusing. (You can clean any demo from `npm start` as well)*

## How to publish packages?

```
npm run publish-packages
```

- You will be prompted for the package names to publish. Leaving blank and hitting enter will publish them all.
- You will then be prompted for the version to use. Leaving blank will auto bump the patch version (it also handles prerelease types like alpha, beta, rc, etc. - It even auto tags the corresponding prelease type on npm).
- You will then be given a brief sanity check 🧠😊

<h3 align="center">Made with ❤️</h3>  -->


Do you need custom plugins for your NativeScript project? We're here to help! 😊

**What We Offer:**

This repository is your source for custom plugins for NativeScript. If you can't find what you need, don't hesitate to reach out. We're ready to create solutions tailored to your requirements.

**Contact Us:**

If you have any questions, requests, or just want to chat about NativeScript, send us a message! We're here to collaborate with you on your projects.

Thank you for visiting and trusting us with your NativeScript development needs!

