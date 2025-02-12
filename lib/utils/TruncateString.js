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

//import {Button,OverlayTrigger,Popover} from 'react-bootstrap';

var TruncateString = (function (_React$Component) {
    _inherits(TruncateString, _React$Component);

    function TruncateString() {
        _classCallCheck(this, TruncateString);

        _get(Object.getPrototypeOf(TruncateString.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(TruncateString, [{
        key: 'render',
        value: function render() {
            var n = this.props.length || 20;
            var s = this.props.value;
            if (s === undefined) return _react2['default'].createElement('span', null);

            if (!(typeof s === 'string' || s instanceof String)) {
                s = JSON.stringify(s);
            }

            var truncated = s.length > n;
            var text = truncated ? s.substr(0, n - 1) : s;

            //var text,component;
            //if (typeof s === 'string' || s instanceof String){
            //    component = {s};
            //    text =  truncated? s.substr(0, n - 1):s;
            //}
            //else{
            //
            //    component = <pre>{JSON.stringify(s,null,2)}</pre>;
            //    text = truncated?JSON.stringify(s).substr(0,n-1):JSON.stringify(s);
            //}
            if (truncated) return _react2['default'].createElement(
                'span',
                null,
                text,
                '...'
            );
            return _react2['default'].createElement(
                'span',
                null,
                text
            );

            //return (<OverlayTrigger trigger='hover' placement='left' overlay={<Popover title='Popover left'>{component}</Popover>}>
            //    <Button bsStyle='link'>{text}...</Button>
            //</OverlayTrigger>)
        }
    }]);

    return TruncateString;
})(_react2['default'].Component);

exports['default'] = TruncateString;
;
module.exports = exports['default'];