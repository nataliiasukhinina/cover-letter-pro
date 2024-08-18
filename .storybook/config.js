import { configire } from "@storybook/angular";

function loadStories() {
  const req = require.context("../stories", true, /\.stories\.js$/);
  req.keys().forEach((filename) => req(filename));
}

configire(loadStories, module);
