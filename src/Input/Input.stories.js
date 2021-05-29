import React, { useState, useEffect } from 'react';


import InputElement from "./Input.jsx"


export default {
    title: 'Input ',
    component: InputElement,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };

  
const Template = (args) => <InputElement {...args} />;


export const Test = Template.bind({});
Test.args = {};

