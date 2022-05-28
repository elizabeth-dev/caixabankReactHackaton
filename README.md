# NeoBanks

PoC multi-platform application developed for the [CaixaBank Tech Hackathon](https://nuwe.io/event/caixabank-tech-hackathon) using React Native, React Native Web, and some other well-known libraries.

## Usage

The app's package.json contains all the scripts needed to run both the web and the native app. You'll need to setup your dev environment according to the [React Native Guide](https://reactnative.dev/docs/environment-setup) (choose the "React Native CLI Quickstart" option).

**Note: The native app should work correctly on iOS devices, however, as a Mac computer is required to develop on iOS, and I don't have one, I've been unable to test it on that platform.**

* **start**: Starts the Metro packager listening on port 8081. The packager needs to be running to launch the app on any platform.
* **ios**: Starts the app on a iOS emulator on development mode. As said above, this has not been tested.
* **android**: Starts the app on a Android emulator, or on a physical device if it's connected via ADB.
* **web**: Starts the app on a web browser.

In order to generate a minified and production-ready native build, the official React Native guide for each platform ([Android](https://reactnative.dev/docs/signed-apk-android), [iOS](https://reactnative.dev/docs/publishing-to-app-store)) needs to be followed.

## Chosen solution

According to the challenge description, the goal was to build a multi-platform application for a fintech, which requires an agile development workflow and the capability to reuse any implemented functionality on as many platforms as possible. 

React Native is a really useful tool to develop in this kind of situation, as it enables the developer to make the most of their code, and has a flatter learning curve than developing a native application in each vendor framework. This was clearly the correct option to start developing, however, React Native has two frameworks to develop applications: **Expo** and the **React Native CLI**.

Expo is the mostly used option among React Native devs, because it's really easy to setup and get running, however, it locks the developer in a really simple sandbox, which limits the complexity the application can reach. For this reason, and having my past experiences with React Native in mind, I decided to drop Expo and choose the React Native CLI, as it exposes the native code of the application, and makes it possible to implement functionality at a lower level if ever needed and access some of the native platofrm APIs via **Native Modules**. Considering this is a banking-related application, this can be really useful in the future, as some of the functionality may be too critical to be developed in a higher level and shared between platforms.

React Native CLI provides out-of-the-box support for Android and iOS, but not for Web Browsers, so I had to workaround the integration with React Native Web, a library that transpiles the React Native components and code to run with React DOM. Setting this up generated a bit of friction and difficulty at first, specially as I never tried to use RN on a web browser before, but after investigating a bit about how React Native Web and the Metro packager work internally, I got it working properly.
 
