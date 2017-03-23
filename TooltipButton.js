import React from 'react'
import { Button } from 'react-bootstrap'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import './TooltipButton.sass'

// button that, if disabled, shows a tooltip explaining why it's disabled
// by default, this component will render the button and disable it if prop disabled is set
// but optionally, a rendered button can be passed as prop renderedButton (the caller must then disable it themselves)

export default function({disabled = false, title = '', tooltipText, tooltipId, tooltipPlacement='bottom', renderedButton, ...props}) {
	if (!disabled) return renderedButton? renderedButton : (<Button {...props}>{title}</Button>);
	return (
    <OverlayTrigger placement={tooltipPlacement} delayHide={150}
      overlay={<Tooltip id={tooltipId}>{tooltipText}</Tooltip>}>
      <div className="tooltip-button-helper">
        {renderedButton? renderedButton : (<Button {...props} disabled>{title}</Button>)}
      </div>
    </OverlayTrigger>
  );
}