import React from 'react';


import Select from "./Select.jsx"


export default {
    title: 'Select',
    component: Select,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };

  
const Template = (args) => <div><Select {...args} /></div>;


export const SelectBox = Template.bind({});
SelectBox.args = {
  dropDownList: [
    {label: "India",value : 1},
    {label: "America",value : 2},
    {label: "Russia",value : 3},
    {label: "Canada",value : 4},
    {label: "Africa",value : 5},
  ]
};

