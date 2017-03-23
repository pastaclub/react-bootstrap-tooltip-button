react-bootstrap-tooltip-button
==============================

React component allowing you to place a tooltip on a button when the button is disabled. This can be helpful for example to inform the user of the reason why a button is disabled.

It is usually not possible to put a tooltip on a disabled button, because browser behavior is defined in such a way that disabled elements don't throw the events needed to trigger the tooltip. A widely suggested work-around is to place the disabled button in a `<div>` and have the div trigger the tooltip. This however breaks Bootstrap's styling in many cases (in order to display corners and margins correctly, Bootstrap relies on buttons being direct children of button toolbars or button groups or direct siblings of other buttons). This component brings custom CSS to build on Bootstrap's and fix all those issues, so the component behaves really just like you would expect a bootstrap button to behave.

Installing
----------

    npm install --save react-bootstrap-tooltip-button

How to use
----------

    import TooltipButton from 'react-bootstrap-tooltip-button';

In your render function:

    <TooltipButton
      title='Button Text'
      onClick={handleClick}
      disabled={true}
      tooltipText='You need to be logged in to use this button'
      tooltipId='tt1'
    />

Props
-----

- `disabled`: if true, renders a disabled button, otherwise a regular button
- `title`: the text to appear on the button
- `tooltipText`: the text to appear in the tooltip
- `tooltipId`: an ID for the tooltip element. This is needed for screen readers and other accessibility tools
- `tooltipPlacement`: specifies where to put the tooltip, relative to the button. Can be `top`, `bottom`, `left` or `right`, default is `bottom`
- `renderedButton`: use this prop if you DON'T want `react-bootstrap-tooltip-button` to render a button for you and you prefer to render the button yourself and pass it as a prop. See example in the next section
- You can apply any other props that you would apply to a `react-bootstrap` button and they will be passed on to the button. Some examples:
  - `onClick`
  - `bsStyle`
  - ...

Providing your own pre-rendered button
--------------------------------------

In some cases you may want to render your own button and not have it rendered by `react-bootstrap-tooltip-button`. That would typically be the case when you need more flexibility in customizing the button, such as adding a glyphicon or a dropdown. This is also possible with `react-bootstrap-tooltip-button` by using the prop `renderedButton`:

    <TooltipButton
      disabled={isDisabled}
      tooltipText='You need to be logged in to use this button'
      tooltipId='tt1'
      renderedButton={(
        <DropdownButton bsStyle="link" title="Button Text" id="my-dropdown" disabled={(isDisabled)}>
          <MenuItem>Menu item 1</MenuItem>
          <MenuItem>Menu item 2</MenuItem>
        </DropdownButton>
      )}
    />

Note that if you provide a pre-rendered button, it is your responsibility to correctly set the `disabled` prop also on that button, since `react-bootstrap-tooltip-button` can only do it on buttons it renders itself.

Development
-----------

If you want to fork and improve this component

- Clone this repo and run `npm install`
- `npm run compile` will compile JSX/ES6 into ES5 and SASS into CSS
