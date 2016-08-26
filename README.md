#px-simple-win-loss-Chart [![Build Status](https://travis-ci.org/PredixDev/px-simple-win-loss-chart.svg?branch=master)](https://travis-ci.org/PredixDev/px-simple-win-loss-chart)

[![px-simple-win-loss-chart demo](https://predixdev.github.io/px-simple-win-loss-chart/px-simple-win-loss-chart/px-simple-win-loss-chart.png)](https://github.com/PredixDev/px-simple-win-loss-chart)

## Overview

px-simple-win-loss-chart is a Predix UI component.

Use this component to visualize a series of positive & negative values as a bar chart. The series is represented by a sequence of horizontally aligned rectangle bars, the height of each proportionally representing a value.

Positive values are represented above the x-axis in one color, and negative values are displayed below the axis, in a different color - these two colors are configurable. The width and height of the component are also configurable, or can be set to "auto" for a responsive layout.

## Usage

### Prerequisites
1. node.js
2. npm
3. bower
4. [webcomponents-lite.js polyfill](https://github.com/webcomponents/webcomponentsjs)

Node, npm and bower are necessary to install the component and dependencies. webcomponents.js adds support for web components and custom elements to your application.

### Getting Started

First, install the component via bower on the command line.

```
bower install px-simple-win-loss-chart --save
```

Second, import the component to your application with the following tag in your head.

```
<link rel="import" href="/bower_components/px-simple-win-loss-chart/px-simple-win-loss-chart.html"/>
```

Finally, use the component in your application:

```
<px-simple-win-loss-chart chart-data="[1,-2,3]">
</px-simple-win-loss-chart>

```

<br />
<hr />

## Documentation

Read the full API and view the demo [here](https://predixdev.github.io/px-simple-win-loss-chart/).

The documentation in this repository is supplemental to the official Predix documentation, which is continuously updated and maintained by the Predix documentation team. Go to [http://predix.io](http://predix.io)  to see the official Predix documentation.

## Local Development

From the component's directory...

```
$ npm install
$ bower install
$ gulp sass
```

From the component's directory, to start a local server run:

```
$ gulp serve
```

The root of that server (e.g. http://localhost:8080/) will automatically open in your default browser with the API documentation page and interactive working examples.

`gulp serve` also runs `gulp watch` concurrently so that when you make a change to your source files and save them, your preview will be updated in any browsers you have opened and turned on in LiveReload.

### GE Coding Style Guide
[GE JS Developer's Guide](https://github.com/GeneralElectric/javascript)

<br />
<hr />

## Known Issues

Please use [Github Issues](https://github.com/PredixDev/px-simple-win-loss-chart/issues) to submit any bugs you might find.
