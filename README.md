## React Native - 10 Week Breathing Program

This project implements the exercise proposed on https://github.com/Elite-HRV/react-native-take-home-project

The code has been run and tested using an iOS simulator, but not an Android simulator.

#### Assumptions

- There is no need to save the view currently displayed: when starting the app, we want to restart at the latest of our progression.
- Not sure what the exit button on the designs does, so I did not put it.
- From the design, the app does not follow light/dark theme of the os.
- From the design, the app does not display the status bar (probably to let the person focus?). It has just been given a plain color.

#### Proposed improvements

- Animations: Transition between weeks, movement of the tab selected indicator.
- Customization of the fonts to match the ones used in the design (but not provided with the project).
- Internationalization: It is currently only in English, with no translation mechanism.
- The tab bar (containing the 10 weeks of the program) should auto-scroll to the active week when it changes.
- Status bar background color should be header color.
- Some texts take more than the whole screen in width, and the ellipsis does not work properly.

#### Video

Note: The video has been recorded on a simulator, so please forgive the slugishness and length of the video.

[video](./demo/10_week_program_demo.mp4)