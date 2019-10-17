import React from "react";
import { storiesOf } from "@storybook/react";
import GaugeChart from "../src/gauge_chart/gauge_chart";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
  color,
  object
} from "@storybook/addon-knobs";

const stories = storiesOf("Gauge Chart", module);
stories.addDecorator(withKnobs);

// Knobs for React props
stories.add("default", () => {
  const config = {
    thickness: number("Ring Width", 100, {}, "Style"),

    range: object("Min/Max Values", [0, 10], "Values"),

    segments: number("Segments", 3, {}, "Values"),

    font_size_arc: number("Font Size Arc Values", 14, {}, "Style"),
    font_size_main: number("Font Size Main Value", 34, {}, "Style"),
    kformatter: boolean("Apply 'k' Formatter for thousands", true, "Style"),
    title_override_2019: text("Title", "Gauge Vis", "Values"),
    title: text("Title", "Gauge Vis", "Values"),
    title_display: boolean("Title Display", true, "Style"),
    font_size_title: number("Font Size Title", 24, {}, "Style"),
    font_size_target: number("Font Size Target", 18, {}, "Style"),
    value_format_display: boolean("Display Format", true, "Style"),
    value_format: text("Format", "$", "Values"),
    value_format_position: select(
      "Format Position",
      {
        before: "before",
        after: "after"
      },
      "before",
      "Style"
    ),
    value_format_spacing: boolean("Format spacing?", false, "Style"),
    color_range: object(
      "Segments Color",
      [
        "#75E2E2",
        "#3EB0D5",
        "#4276BE",
        "#592EC2",
        "#9174F0",
        "#B1399E",
        "#B32F37",
        "#E57947",
        "#FBB555",
        "#FFD95F"
      ],
      "Style"
    ),
    target_display: boolean("Display Target?", true, "Style"),
    target_value: number("Target Value", 5, {}, "Values"),
    target_label: text("Target Label", "", "Style"),
    //target_color: color("Target Label", "#red", "GROUP-ID1"),
    target_color: color("Target Color", "#CCC", "Style"),

    color_by: select(
      "Color By",
      {
        segment: "segment",
        range: "range"
      },
      "range",
      "Style"
    ),

    enable_drilling: boolean("Enable Drilling?", true, "Style")
  };
  return (
    <GaugeChart
      percentage={false}
      size={500}
      width={710}
      height={650}
      config={config}
      colors={config.color_range}
      title={config.title}
      title_display={config.title_display}
      range={config.range}
      target={config.target_value}
      data={[
        {
          label: "Order Count",
          name: "order_items.order_count",
          value: number("Main Value", 5, {}, "Values")
        }
      ]}
    />
  );
});
