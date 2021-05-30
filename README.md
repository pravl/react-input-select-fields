### Form's Input and Select Element


Demo can be found in the storybook.

#### Setup
- Clone the repo.
- Run `npm install`
- Run `npm storybook`
- This will open up a UI to view details on the components being exported along with their documentations.


#### Usage
- Install the package via npm 
```
npm install react-input-select-fields
```
### Input
Simple input field with allowed types as number and email.

#### Usage

```
<InputElement {...props} />
```

```
Props
    type
    name
    value,
    placeholder,
    maxLength,
    minLength,
    isRequired,
    errorMsg,
    isReadOnly,
    customValidation
    handleOnInputChange
    handleOnInputBlur
    isErrorShow
```

```
ClassName
 input-container
 input
 error-block
```

#### Handlers

- `handleOnInputChange`: Triggered on every input change.
- `handleOnInputBlur`: Triggered when user moves out of the input box. Suggested way to get the final value of input.
- `customValidation`: Triggered on every input. Function receives the current entered text and expects an error string in case of any validation failures else empty string | null | undefined.




### Select
Simple Single Select.

```
<SingleSelect {...props} />
```

#### Usage
```
Props
    defaultValue
    dropDownList
    onSelect
```

```
ClassName
  select-container
  title-box
  title-label
  caret
  select-box
  list-container
  list
```

#### Handlers

- `defaultValue`: if value is already present.
- `onSelect`: Triggered when user select any option, get selected value.
- `dropDownList`: Array of List Array<label, value>.
