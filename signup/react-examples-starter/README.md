# Example Starter

This is the starter project used for all examples. It has features, such as Redux, that are not used in all examples. This makes it easier/faster for me to create examples. The readme for each example will define where the example code is.

## Main Project Features
- [Redux](https://redux.js.org/)
- [JSS integration with React](https://cssinjs.org/react-jss)
- Custom theme system (just started / primitive but useful)
- Breakpoint system largly borrowed from [Material UI](https://material-ui.com/)
- Module imports using absolute paths
- ES6/7/8
- Custom color logging for browser console
- uses [normalize-jss](https://www.npmjs.com/package/normalize-jss)
- [Picturefill](http://scottjehl.github.io/picturefill/)

## Project Structure
From /src
- /elements - reusable react components
- /logger - custom color logging for browser console
- /media - location of all media. Not always the best practice but works well for examples
- /redux - Redux configuration. There are separate folders for actions, reducers and selectors
- /theme - Theme implementation. /theme/theme.js contains the theme definition which can be customized
- /ui - Unique UI components
- /Wraper.jsx - Injecting a few global styles
- /App/AppContainer - Connected (i.e., connected to Redux) container for /App/App.jsx
- /App/App - Routes + Header, Footer & other top level UI elements

## Using Included Components
There are a variety of built-in components that you may use and/or modify. You can (and likely will) also create your own. This section will use the <Section> & <Text> components to describe how they work

Properties are set in two forms
### Boolean values
Boolean values are used as often as possible to minimize the amount of code you need to typed. The CSS property values associated with the boolean value are defined in /src/theme/theme.js
<Code>Section</Code> has values: default, light, medium & dark and is used as below.

```js
<Section dark>
...
</Section>
```
or
```js
<Section light>
...
</Section>
```


### Name / value pairs
To create a named / value pair you will need to modify the related component. <Code>Section</Code> already has an example as shown below. Checkout its IMPLEMENTATION to learn how to modify components in this way.
```js
<Section color='blue'>
 ...
</Section>
```




- sectionColor:
You can define 4 section colors each having a background and font color. They do not need to be unique (but all 4) must be defined.

- default: Properties for the default section background and font color.
- light:  properties for the default section background and font color
- medium:  properties for the default section background and font color
- dark:  properties for the default section background and font color
</Section>
