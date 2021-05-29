import React from 'react';


import Select from "./Select.jsx"


export default {
    title: 'Select',
    component: Select,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };

  
const Template = (args) => <Select {...args} />;


export const SelectBox = Template.bind({});
SelectBox.args = {};

