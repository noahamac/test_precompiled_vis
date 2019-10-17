import { addParameters, configure } from "@storybook/react";
import looker from "./looker";
function loadStories() {
  require("../stories/grouped_card.js");
  require("../stories/spider_chart.js");
  require("../stories/gauge_chart.js");
  require("../stories/calendar_chart.js");
  require("../stories/multiple_gauge_chart.js");
  require("../stories/bubble_chart.js");
}
// Option defaults.
addParameters({
  viewport: { defaultViewport: "responsive" },
  options: {
    theme: looker
  }
});
configure(loadStories, module);
