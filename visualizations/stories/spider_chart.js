import React from 'react';
import { storiesOf } from '@storybook/react';
import SpiderChart from '../src/spider_chart/spider_chart';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
  color,
  object
} from "@storybook/addon-knobs";

const stories = storiesOf('SpiderChart', module)
stories.addDecorator(withKnobs);

stories
  .add('main', () => {
    const config = {
      chart_fill: select(
        'Chart Fill',
        {
          Line: 'line',
          Area: 'area'
        },
        'area',
        'Style'
      ),
      value_colors: object(
        'Value Color',
        [
          "#3EB0D5",
          "#B1399E",
          "#C2DD67",
          "#592EC2",
          "#4276BE",
          "#72D16D",
          "#FFD95F",
          "#B32F37",
          "#9174F0",
          "#E57947",
          "#75E2E2",
          "#FBB555"
        ],
        'Series'
      ),
      value_labels: boolean('Display Value Labels', true, 'Series'),

      hide_axis_values: boolean('Hide Axis Values', false, 'Axis'),
      hide_axis_gridlines: boolean('Hide Gridlines', false, 'Axis'),
    };
      
    return (
      <SpiderChart
        config={config}
        legendValues={['Cancelled', 'Complete', 'Processing']}
        data={[
          [
            { area: 'Average Sale Price', value: 600 },
            { area: 'Median Sale Price', value: 500 },
            { area: 'Total Sale Price', value: 350 },
            { area: 'Spent per User', value: 500 },
            { area: 'Sales Margin', value: 70 },
            { area: 'Sales Margin Margin', value: 70 },
          ],
          [
            { area: 'Average Sale Price', value: 400 },
            { area: 'Median Sale Price', value: 380 },
            { area: 'Total Sale Price', value: 250 },
            { area: 'Spent per User', value: 245 },
            { area: 'Sales Margin', value: 180 },
            { area: 'Sales Margin Margin', value: 180 },
          ],
          [
            { area: 'Average Sale Price', value: 130 },
            { area: 'Median Sale Price', value: 540 },
            { area: 'Total Sale Price', value: 750 },
            { area: 'Spent per User', value: 200 },
            { area: 'Sales Margin', value: 250 },
            { area: 'Sales Margin Margin', value: 250 },
          ]
        ]}
      />
    )})