import React from 'react';


import Input from "./Input.jsx"


export default {
    title: 'Input ',
    component: Input,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };

const Template = (args) => <Input {...args} />;


export const InputEmail = Template.bind({});
InputEmail.args = {
    type : "email",
    name : "email",
    placeholder : "enter email",
    isRequired :true,
}

export const InputNumber = Template.bind({});
InputNumber.args = {
    type : "number",
    name : "number",
    placeholder : "enter number",
    isRequired :true,
    maxLength:20,
    minLength:3,
}
