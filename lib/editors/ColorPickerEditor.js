'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcColorPicker = require('rc-color-picker');

var _rcColorPicker2 = _interopRequireDefault(_rcColorPicker);

var _utilsEmptyValue = require('../utils/EmptyValue');

var _utilsEmptyValue2 = _interopRequireDefault(_utilsEmptyValue);

var DEFAULT_COLOR = "#ff0a0a";

var ColorPickerEditor = (function (_React$Component) {
    _inherits(ColorPickerEditor, _React$Component);

    function ColorPickerEditor() {
        _classCallCheck(this, ColorPickerEditor);

        _get(Object.getPrototypeOf(ColorPickerEditor.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ColorPickerEditor, [{
        key: 'unset',
        value: function unset() {
            this.props.onUpdated(undefined);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;

            var noValueComp = _react2['default'].createElement(
                'a',
                { onClick: function () {
                        _this.props.onUpdated({ color: DEFAULT_COLOR });
                    }, className: 'jsonNovalue' },
                'No value'
            );
            if (this.props.value === undefined) return noValueComp;

            var value = this.props.value || {};
            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(_rcColorPicker2['default'], { animation: 'slide-up', color: value.color || DEFAULT_COLOR, alpha: value.alpha, onChange: this.props.onUpdated })
            );
        }
    }]);

    return ColorPickerEditor;
})(_react2['default'].Component);

exports['default'] = ColorPickerEditor;
module.exports = exports['default'];