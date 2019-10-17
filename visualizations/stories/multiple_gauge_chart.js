import React from "react";
import { storiesOf } from "@storybook/react";
import GaugeChart from "../src/gauge_chart/gauge_chart";
import styled from "styled-components";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
  color,
  object
} from "@storybook/addon-knobs";

const stories = storiesOf("Multiple Gauge Chart", module);
stories.addDecorator(withKnobs);

// Knobs for React props
stories.add("default", () => {
  const config = {
    columns: number("Grid Columns", 2, {}, "Style"),
    thickness: number("Ring Width", 40, {}, "Style"),

    value_range: object("Min/Max Values", [0, 100], "Values"),

    segments: number("Segments", 3, {}, "Values"),

    font_size_arc: number("Font Size Arc Values", 14, {}, "Style"),
    font_size_main: number("Font Size Main Value", 34, {}, "Style"),

    font_size_title: number("Font Size Title", 24, {}, "Style"),
    font_size_target: number("Font Size Target", 12, {}, "Style"),
    value_format_display: boolean("Display Label", false, "Style"),
    value_format: text("Value Label", "$", "Values"),
    kformatter: boolean("K Formatter", true, "Style"),
    value_format_position: select(
      "Label Position",
      {
        before: "before",
        after: "after"
      },
      "before",
      "Style"
    ),
    value_format_spacing: boolean("Label spacing?", false, "Style"),

    target_display: boolean("Display Target?", true, "Style"),
    target_color: color("Target Color", "#CCC", "Style"),

    color_by: select(
      "Color By",
      {
        segment: "segment",
        range: "range"
      },
      "range",
      "Style"
    )
  };

  const MultipleGaugeGrid = styled.div`
    text-align: center;
    font-family: "Open Sans", "Noto Sans JP", "Noto Sans", "Noto Sans CJK KR",
      Helvetica, Arial, sans-serif;
    display: grid;
    grid-template-columns: repeat(${props => props.cols}, minmax(350px, 1fr));
    grid-gap: 20px;
    justify-content: center;
  `;

  const data = [
    {
      label: "Order Count",
      name: "order_items.order_count",
      value: number("First Value", 0.33, {}, "Values"),
      color_range: object(
        "First Gauge Color",
        ["#75E2E2", "#3EB0D5", "#4276BE", "#592EC2", "#9174F0"],
        "Style"
      ),
      title: text("First Gauge Title", "2019", "Values"),
      target_value: number("First Gauge Target", 30, {}, "Values")
    },
    {
      label: "Order Count",
      name: "order_items.order_count",
      value: number("Second Value", 0.52, {}, "Values"),
      color_range: object(
        "Second Gauge Color",
        ["#75E2E2", "#3EB0D5", "#4276BE", "#592EC2", "#9174F0"],
        "Style"
      ),
      title: text("Second Gauge Title", "2018", "Values"),
      target_value: number("Second Gauge Target", 45, {}, "Values")
    },
    {
      label: "Order Count",
      name: "order_items.order_count",
      value: number("Third Value", 0.73, {}, "Values"),
      color_range: object(
        "Third Gauge Color",
        ["#75E2E2", "#3EB0D5", "#4276BE", "#592EC2", "#9174F0"],
        "Style"
      ),
      title: text("Third Gauge Title", "2017", "Values"),
      target_value: number("Third Gauge Target", 70, {}, "Values")
    },
    {
      label: "Order Count",
      name: "order_items.order_count",
      value: number("Fourth Value", 0.12, {}, "Values"),
      color_range: object(
        "Fourth Gauge Color",
        ["#75E2E2", "#3EB0D5", "#4276BE", "#592EC2", "#9174F0"],
        "Style"
      ),
      title: text("Fourth Gauge Title", "2016", "Values"),
      target_value: number("Fourth Gauge Target", 44, {}, "Values")
    },
    {
      label: "Order Count",
      name: "order_items.order_count",
      value: number("Fifth Value", 0.22, {}, "Values"),
      color_range: object(
        "Fifth Gauge Color",
        ["#75E2E2", "#3EB0D5", "#4276BE", "#592EC2", "#9174F0"],
        "Style"
      ),
      title: text("Fifth Gauge Title", "2015", "Values"),
      target_value: number("Fifth Gauge Target", 71, {}, "Values")
    }
  ];

  const MultipleGaugeItems = () => (
    <MultipleGaugeGrid cols={config.columns}>
      {data.map((row, index) => {
        return (
          <GaugeChart
            size={800}
            width={710}
            height={450}
            key={index}
            config={config}
            data={[data[index]]}
            colors={row.color_range}
            title={row.title}
            target={row.target_value}
            range={[0, 100]}
          />
        );
      })}
    </MultipleGaugeGrid>
  );

  return <MultipleGaugeItems />;
});
