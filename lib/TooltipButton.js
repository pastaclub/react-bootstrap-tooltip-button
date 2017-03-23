'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (_ref) {
  var _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === undefined ? false : _ref$disabled,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? '' : _ref$title,
      tooltipText = _ref.tooltipText,
      tooltipId = _ref.tooltipId,
      _ref$tooltipPlacement = _ref.tooltipPlacement,
      tooltipPlacement = _ref$tooltipPlacement === undefined ? 'bottom' : _ref$tooltipPlacement,
      renderedButton = _ref.renderedButton,
      props = _objectWithoutProperties(_ref, ['disabled', 'title', 'tooltipText', 'tooltipId', 'tooltipPlacement', 'renderedButton']);

  if (!disabled) return renderedButton ? renderedButton : _react2.default.createElement(
    _reactBootstrap.Button,
    props,
    title
  );
  return _react2.default.createElement(
    _reactBootstrap.OverlayTrigger,
    { placement: tooltipPlacement, delayHide: 150,
      overlay: _react2.default.createElement(
        _reactBootstrap.Tooltip,
        { id: tooltipId },
        tooltipText
      ) },
    _react2.default.createElement(
      'div',
      { className: 'tooltip-button-helper' },
      renderedButton ? renderedButton : _react2.default.createElement(
        _reactBootstrap.Button,
        _extends({}, props, { disabled: true }),
        title
      )
    )
  );
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

require('./TooltipButton.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// button that, if disabled, shows a tooltip explaining why it's disabled
// by default, this component will render the button and disable it if prop disabled is set
// but optionally, a rendered button can be passed as prop renderedButton (the caller must then disable it themselves)