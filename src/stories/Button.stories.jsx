import React from "react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
};

// const colors = {
//   Red: "firebrick",
//   Orange: "tomato",
//   Yellow: "gold",
//   Green: "teal",
//   Blue: "steelblue",
//   Indigo: "indigo",
//   Violet: "darkorchid",
// };
// export default {
//   title: "Example/Button",
//   component: Button,
//   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     primary: {
//       name: "Primary or Secondary?",
//       description: "Which one?",
//       table: {
//         category: "Styles",
//       },
//       options: ["Primary", "Secondary"],
//       mapping: {
//         Primary: true,
//         Secondary: false,
//       },
//       control: "select",
//     },
//     size: {
//       name: "Size",
//       table: {
//         category: "Styles",
//       },
//       control: "select",
//     },
//     backgroundColor: {
//       name: "Background Color",
//       description: "Choose from these ugly colors only",
//       table: {
//         category: "Styles",
//       },
//       options: Object.keys(colors),
//       mapping: colors,
//       control: {
//         type: "radio",
//         labels: {
//           Red: "r",
//           Orange: "o",
//           Yellow: "y",
//           Green: "g",
//           Blue: "b",
//           Indigo: "i",
//           Violet: "v",
//         },
//       },
//     },
//     onClick: {
//       table: {
//         category: "Callbacks",
//       },
//       action: "i been clicked",
//     },
//     label: {
//       name: "Label",
//       table: {
//         category: "Text Stuff",
//       },
//     },
//     isRandomColor: {
//       name: "Is Random Color",
//       description: "When true, is random color.",
//       control: "boolean",
//     },
//   },
//   parameters: {
//     actions: {
//       handles: ["mouseover"],
//     },
//   },
// };
const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = ({ isRandomColor, backgroundColor, ...args }) => {
  return (
    <Button
      backgroundColor={isRandomColor ? getRandomColor() : backgroundColor}
      {...args}
    />
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
