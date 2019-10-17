import React from 'react';
import { storiesOf } from '@storybook/react';
import CalendarHM from '../src/calendar_visualization/calendar_chart';
import * as d3 from "d3";
//import CalendarHeatmap from 'reactjs-calendar-heatmap'
//import CalendarHeatmap from '../src/calendar_visualization/reactjs-calendar-heatmap-master/src/calendar-heatmap.component.js'
import {
    withKnobs,
    text,
    boolean,
    number,
    select,
    color,
    object,
    date
  } from "@storybook/addon-knobs";
import moment from "moment";

const stories = storiesOf('CalendarChart', module);
stories.addDecorator(withKnobs);



stories.add('main', () => {
   
  // var data = [{
  //   "date": "2016-01-01",
  //   "total": 17164,
  //   "details": [{
  //     "name": "Project 1",
  //     "date": "2016-01-01 12:30:45",
  //     "value": 9192
  //   }, {
  //     "name": "Project 2",
  //     "date": "2016-01-01 13:37:00",
  //     "value": 6753
  //   }]
  // }]
    
   
    const config = {
    
         title: text("Title", "Calendar heatmap", "Values"),
         font_size_title: number("Font Size Title", 28, {}, "Style"),
         font_size_dates: number("Font Size Dates", 18, {}, "Style"),
        // value_format_display: boolean("Display Format", false, "Style"),
        // value_format: text("Format", "$", "Values"),
        target_overview: select(
          "Time View",
          {year: 'year',
           month: 'month',
           week: 'week',
           day: 'day'
         },'year',"Values"
        ),
        
        startdate: date("Start Date",new Date('Jan 1 2015'),"Values"),
        enddate: date("End Date",new Date('Sep 20 2019'),"Values"),

        
        // target_display: boolean("Display Target?", false, "Style"),
        // target_value: number("Target Value", 50000, {}, "Values"),
        // target_label: text("Target Label", "", "Style"),
        //target_color: color("Target Label", "#red", "GROUP-ID1"),
        target_color: color("Target Color", "black", "Style"),
        target_measure:      text("Measure Used","Events","Values"),
        target_totmeasure:   text("Total Measure Title","Total events recorded","Values"),
        target_sizeonday:    number("Shape Size on Daily View",10,"Values")
      };
    return(  
    <CalendarHM
        config = {config}
        //  color={config.target_color}
        //  overview = {config.target_overview}
        //data={data}
    />)}
  )