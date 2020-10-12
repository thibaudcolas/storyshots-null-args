import initStoryshots, { renderOnly } from "@storybook/addon-storyshots";
import { render } from "@testing-library/react";

initStoryshots({
  configPath: ".storybook",
  test: renderOnly,
  renderer: render,
});
