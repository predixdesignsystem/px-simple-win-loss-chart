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
/* Common imports */
/* Common demo imports */
/* Imports for this component */
/* Demo DOM module */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-demo/px-demo-header.js';
import 'px-demo/px-demo-api-viewer.js';
import 'px-demo/px-demo-footer.js';
import 'px-demo/px-demo-configs.js';
import 'px-demo/px-demo-props.js';
import 'px-demo/px-demo-interactive.js';
import 'px-demo/px-demo-component-snippet.js';
import 'px-demo/px-demo-code-editor.js';
import '../px-simple-win-loss-chart.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <!-- Header -->
    <px-demo-header module-name="px-simple-win-loss-chart" description="Use this component to visualize a series of positive &amp; negative values as a bar chart. The series is represented by a sequence of horizontally aligned rectangle bars, the height of each proportionally representing a value.
      Positive values are represented above the x-axis in one color, and negative values are displayed below the axis, in a different color - these two colors are configurable. The width and height of the component are also configurable, or can be set to &quot;auto&quot; for a responsive layout." mobile="" tablet="" desktop="">
    </px-demo-header>

    <!-- Interactive -->
    <px-demo-interactive>
      <!-- Configs -->
      <px-demo-configs slot="px-demo-configs" configs="[[configs]]" props="{{props}}" chosen-config="{{chosenConfig}}"></px-demo-configs>

      <!-- Props -->
      <px-demo-props slot="px-demo-props" props="{{props}}" config="[[chosenConfig]]"></px-demo-props>

      <!-- Code Editor -->
      <px-demo-code-editor slot="px-demo-code-editor" props="{{props}}"></px-demo-code-editor>

      <!-- Component ---------------------------------------------------------->
      <px-demo-component slot="px-demo-component">

        <px-simple-win-loss-chart chart-data="{{props.chartData.value}}" width="{{props.width.value}}" height="{{props.height.value}}">
        </px-simple-win-loss-chart>

      </px-demo-component>
      <!-- END Component ------------------------------------------------------>

      <px-demo-component-snippet slot="px-demo-component-snippet" element-properties="{{props}}" element-name="px-simple-win-loss-chart" scripts-includes="[[scriptsIncludes]]">
      </px-demo-component-snippet>
    </px-demo-interactive>

    <!-- API Viewer -->
    <px-demo-api-viewer source="px-simple-win-loss-chart"></px-demo-api-viewer>

    <!-- Footer -->
    <px-demo-footer></px-demo-footer>
`,

  is: 'px-simple-win-loss-chart-demo',

  properties: {


    props: {
      type: Object,
      value: function(){ return this.demoProps; }
    },

    configs: {
      type: Array,
      value: function(){
        return [
          { configName: "Default",
            configReset: true },
        ]
      }
    },

    scriptsIncludes: {
      type: Array,
      value: ['https://d3js.org/d3.v3.min.js']
    }

  },

  /**
   * A reference for `this.props`. Read the documentation there.
   */
  demoProps: {
    chartData: {
      type: Array,
      defaultValue: [ 2, 6, -5, 4, -3, 2, 7],
      inputType: 'code:JSON'
    },

    width: {
      inputLabel: 'Width (numeric or "auto"):',
      type: String,
      defaultValue: '300',
      inputType: 'text'
    },

    height: {
      inputLabel: 'Height (numeric or "auto"):',
      type: String,
      defaultValue: '50',
      inputType: 'text'
    }

  }
});
