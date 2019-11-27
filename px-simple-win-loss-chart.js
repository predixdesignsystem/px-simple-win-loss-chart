/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/**

### Usage

  <px-simple-win-loss-chart chart-data="[1,-2,3]"></px-simple-win-loss-chart>

### Styling
The following custom properties are available for styling:

Custom property | Description
:----------------|:-------------
`--px-win-loss-border-color` | Border color for the chart
`--px-win-loss-background-color` | Background color for the chart
`--px-win-loss-positive-fill-color` | Fill color for positive bars
`--px-win-loss-negative-fill-color` | Fill color for negative bars

@element px-simple-win-loss-chart
@blurb A simple win-loss chart for displaying in KPI dashboards
@homepage index.html
@demo demo.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-simple-chart-common-behavior/px-simple-chart-common-behavior.js';
import './css/px-simple-win-loss-chart-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import 'es6-promise/es6-promise.min.js';
import 'd3/d3.js';

Polymer({
  _template: html`
    <style include="px-simple-win-loss-chart-styles"></style>
    <svg class="px-simple-win-loss-chart-svg"></svg>
`,

  is: 'px-simple-win-loss-chart',
  behaviors: [PxSimpleChartCommonBehavior.common],

  properties: {
    /**
    * Width of the chart. Numeric or "auto".
    * @prop width
    * @type String
    */
    width: {
      type: String,
      value: "300"
    },
    /**
    * Height of the chart. Numeric or "auto".
    * @prop height
    * @type String
    */
    height: {
      type: String,
      value: "50"
    },
    /**
    * This attribute defines the series data to be charted. It needs to be passed in as an array.
    * @prop chartData
    * @type Array
    */
    chartData: {
      type: Array,
      observer: '_drawChart',
      value: function() {
      return [2,6,-5,4,-3,2,7];
      }
    }
  },

  _drawChartDebounced: function() {
    var that = this;

    if(this.chartData && this.chartData.length > 0) {
      // clear the svg element
      this._clearSVG(this.svg);
      this._setDimensions();
      var setSizesPromise = this._getSetSizesPromise();
      setSizesPromise.then (function (){
        that._setScales();
        that._drawBars();
        // add css class to svg elements using method from pxD3Util
        that._addStyleScope(that.svg);
      });
    } else {
      var timeout = setTimeout(function(){
        that._drawChartDebounced();
      }, 100);
    }
  },

  _getSetSizesPromise: function() {
    var that = this;
    return new Promise (function (resolve, reject){
      that.gridColumns = (that.chartData.length * 2) - 1;
      that.gridWidth = Math.round(that.widthValue / that.gridColumns);
      that.chartWidth = that.gridWidth * that.gridColumns;
      that.widthRemainder = that.widthValue % that.gridWidth;
      that.chartHeight = that.heightValue;
      that.svg
          .attr("width", that.chartWidth)
          .attr("height", that.heightValue);
      resolve(true);
    });
  },

  _setScales: function() {
    // no xscale necessary
    this.yScale = d3.scale
      .linear()
      .domain([d3.min(this.chartData) > 0 ? 0 : d3.min(this.chartData), d3.max(this.chartData)])
      .range([this.chartHeight, 0]);
  },

  _drawBars: function() {
    var that = this;
    this.chartData.forEach(function(value, i) {
    var x = (that.gridWidth*2) * i,
      y = value < 0 ? that.yScale(0) : that.yScale(value),
      barHeight = Math.abs(that.yScale(value) - that.yScale(0)),
      colorClass = value < 0 ? "px-negative-fill" : "px-positive-fill"
    that._drawBar(x, y, that.gridWidth, barHeight, colorClass);
    });
    this.svg
      .append("line")
      .attr("class", "px-simple-win-loss-chart bar-chart-bottom-line")
      .attr("x1", 0)
      .attr("y1", this.yScale(0))
      .attr("x2", this.chartWidth)
      .attr("y2", this.yScale(0));
  },

  _drawBar: function(x, y, width, height, colorClass) {
    this.svg
      .append("rect")
      .attr("class", "bar " + colorClass)
      .attr("x", x)
      .attr("y", y)
      .attr("width", width)
      .attr("height", height)
  }
});
