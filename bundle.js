/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configs */ \"./src/js/configs.js\");\n/* harmony import */ var _components_Keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Keyboard */ \"./src/js/components/Keyboard.js\");\n/* harmony import */ var _components_Textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Textarea */ \"./src/js/components/Textarea.js\");\n\n\n\nvar language = _configs__WEBPACK_IMPORTED_MODULE_0__[\"LANGUAGES\"].EN;\n\nvar changeLanguageHandler = function changeLanguageHandler(event) {\n  var newLanguage = event.detail;\n  language = newLanguage;\n};\n\nvar loadHandler = function loadHandler() {\n  if (localStorage.getItem('currentLanguage')) {\n    language = localStorage.getItem('currentLanguage');\n  }\n\n  var keyboard = new _components_Keyboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_configs__WEBPACK_IMPORTED_MODULE_0__[\"KEYBOARD_CONFIG\"], +language).render();\n  var textarea = new _components_Textarea__WEBPACK_IMPORTED_MODULE_2__[\"default\"]().render();\n  document.body.prepend(keyboard);\n  document.body.prepend(textarea);\n};\n\nvar unloadHandler = function unloadHandler() {\n  localStorage.setItem('currentLanguage', language);\n};\n\ndocument.addEventListener('changeLanguage', changeLanguageHandler);\nwindow.addEventListener('load', loadHandler);\nwindow.addEventListener('unload', unloadHandler);\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/components/Keyboard.js":
/*!***************************************!*\
  !*** ./src/js/components/Keyboard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Keyboard; });\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ \"./src/js/utils/utils.js\");\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs */ \"./src/js/configs.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Keyboard =\n/*#__PURE__*/\nfunction () {\n  function Keyboard(config, language) {\n    _classCallCheck(this, Keyboard);\n\n    this.config = config;\n    this.charMap = this.getCharMap();\n    this.keyboard = null;\n    this.state = {\n      pressedChar: null,\n      pressedAltOrCtrl: false,\n      register: false,\n      currentLanguage: language,\n      isPressCaps: false\n    };\n    this.pressKey = this.pressKey.bind(this);\n    this.keyDownHandler = this.keyDownHandler.bind(this);\n    this.keyUpHandler = this.keyUpHandler.bind(this);\n    this.clickHandler = this.clickHandler.bind(this);\n    this.mouseUpHandler = this.mouseUpHandler.bind(this);\n    this.moudeDownHandler = this.moudeDownHandler.bind(this);\n  }\n\n  _createClass(Keyboard, [{\n    key: \"getCharMap\",\n    value: function getCharMap() {\n      var map = {};\n      this.config.forEach(function (row) {\n        row.forEach(function (_char) {\n          var _char2 = _slicedToArray(_char, 3),\n              code = _char2[0],\n              languages = _char2[1],\n              writable = _char2[2];\n\n          if (writable) {\n            var alternativeOutput = languages[_configs__WEBPACK_IMPORTED_MODULE_1__[\"LANGUAGES\"].RU][2];\n\n            if (alternativeOutput) {\n              map[code] = [[alternativeOutput, alternativeOutput], [alternativeOutput, alternativeOutput]];\n            } else {\n              map[code] = languages;\n            }\n          }\n        });\n      });\n      return map;\n    }\n  }, {\n    key: \"updateChar\",\n    value: function updateChar() {\n      var _this = this;\n\n      var currentLanguage = this.state.currentLanguage;\n\n      var rows = _toConsumableArray(this.keyboard.children);\n\n      rows.forEach(function (row, rowIndex) {\n        var items = _toConsumableArray(row.children);\n\n        items.forEach(function (button, collIndex) {\n          var _char3 = _this.config[rowIndex][collIndex];\n\n          var _char4 = _slicedToArray(_char3, 2),\n              languages = _char4[1];\n\n          button.textContent = languages[currentLanguage][_this.state.register ? _configs__WEBPACK_IMPORTED_MODULE_1__[\"REGISTER\"].UPPER : _configs__WEBPACK_IMPORTED_MODULE_1__[\"REGISTER\"].LOWER];\n        });\n      });\n    }\n  }, {\n    key: \"addActiveClass\",\n    value: function addActiveClass(code) {\n      var button = this.keyboard.querySelector(\"[data-code=\\\"\".concat(code, \"\\\"]\"));\n\n      if (button) {\n        button.classList.add('keyboard__button--active');\n      }\n    }\n  }, {\n    key: \"removeActiveClass\",\n    value: function removeActiveClass(code) {\n      var button = this.keyboard.querySelector(\"[data-code=\\\"\".concat(code, \"\\\"]\"));\n\n      if (button && button.classList.contains('keyboard__button--active')) {\n        button.classList.remove('keyboard__button--active');\n      }\n    }\n  }, {\n    key: \"pressKey\",\n    value: function pressKey(code, event) {\n      if (code in this.charMap) {\n        event.preventDefault();\n        var currentLanguage = this.state.currentLanguage;\n        var languages = this.charMap[code];\n        var _char5 = languages[currentLanguage][this.state.register ? _configs__WEBPACK_IMPORTED_MODULE_1__[\"REGISTER\"].UPPER : _configs__WEBPACK_IMPORTED_MODULE_1__[\"REGISTER\"].LOWER];\n        Keyboard.cellKeypressEvent(_char5);\n      }\n    }\n  }, {\n    key: \"toggleCapsLock\",\n    value: function toggleCapsLock(code) {\n      this.state.isPressCaps = !this.state.isPressCaps;\n      this.state.register = this.state.isPressCaps;\n      this.updateChar();\n\n      if (this.state.isPressCaps) {\n        this.addActiveClass(code);\n      } else {\n        this.removeActiveClass(code);\n      }\n    }\n  }, {\n    key: \"changeLanguage\",\n    value: function changeLanguage() {\n      this.state.currentLanguage = this.state.currentLanguage === _configs__WEBPACK_IMPORTED_MODULE_1__[\"LANGUAGES\"].RU ? _configs__WEBPACK_IMPORTED_MODULE_1__[\"LANGUAGES\"].EN : _configs__WEBPACK_IMPORTED_MODULE_1__[\"LANGUAGES\"].RU;\n      var keyPressEvent = new CustomEvent('changeLanguage', {\n        detail: this.state.currentLanguage\n      });\n      document.dispatchEvent(keyPressEvent);\n      this.updateChar();\n    }\n  }, {\n    key: \"clickHandler\",\n    value: function clickHandler(event) {\n      var element = event.target;\n\n      if (element.nodeName === 'BUTTON') {\n        var code = element.dataset.code;\n        var isChangeLanguage = code === 'ControlLeft' && this.state.pressedChar === 'AltLeft' || code === 'AltLeft' && this.state.pressedChar === 'ControlLeft';\n\n        if (code === 'Backspace') {\n          Keyboard.cellKeypressEvent('Backspace');\n        } else if (code === 'Delete') {\n          Keyboard.cellKeypressEvent('Delete');\n        } else if (isChangeLanguage) {\n          this.changeLanguage();\n          return;\n        } else if (code === 'CapsLock') {\n          this.toggleCapsLock(code);\n          return;\n        }\n\n        this.pressKey(code, event);\n      }\n    }\n  }, {\n    key: \"keyDownHandler\",\n    value: function keyDownHandler(event) {\n      var code = event.code;\n\n      if (code === 'AltLeft' || code === 'AltRight') {\n        event.preventDefault();\n      }\n\n      if (code === 'CapsLock') {\n        if (this.state.pressedChar !== code) {\n          this.toggleCapsLock(code);\n        }\n\n        return;\n      }\n\n      var isChangeLanguage = code === 'ControlLeft' && event.altKey || code === 'AltLeft' && event.ctrlKey || code === 'ControlLeft' && this.state.pressedAltOrCtrl === 'AltLeft' || code === 'AltLeft' && this.state.pressedAltOrCtrl === 'ControlLeft';\n\n      if (isChangeLanguage) {\n        if (this.state.pressedChar !== code) {\n          this.changeLanguage();\n        }\n      }\n\n      var isChangeRegister = code === 'ShiftRight' || code === 'ShiftLeft';\n\n      if (isChangeRegister) {\n        if (this.state.pressedChar !== code) {\n          this.state.register = !this.state.register;\n          this.updateChar();\n        }\n      }\n\n      this.state.pressedChar = code;\n      this.pressKey(code, event);\n      this.addActiveClass(code);\n    }\n  }, {\n    key: \"keyUpHandler\",\n    value: function keyUpHandler(event) {\n      var code = event.code;\n      this.state.pressedChar = null;\n\n      if (code === 'CapsLock') {\n        return;\n      }\n\n      if (event.code === 'ShiftRight' || event.code === 'ShiftLeft') {\n        this.state.register = !this.state.register;\n        this.updateChar();\n      }\n\n      this.removeActiveClass(code);\n    }\n  }, {\n    key: \"moudeDownHandler\",\n    value: function moudeDownHandler(event) {\n      var elem = event.target;\n\n      if (elem.nodeName === 'BUTTON') {\n        var code = elem.dataset.code;\n\n        if (code === 'ControlLeft' || code === 'AltLeft') {\n          this.state.pressedAltOrCtrl = code;\n        }\n      }\n    }\n  }, {\n    key: \"mouseUpHandler\",\n    value: function mouseUpHandler(event) {\n      var elem = event.target;\n      var code = elem.dataset.code;\n      var isChangeLanguage = code === 'ControlLeft' && this.state.pressedAltOrCtrl === 'AltLeft' || code === 'AltLeft' && this.state.pressedAltOrCtrl === 'ControlLeft';\n\n      if (elem.nodeName === 'BUTTON' && isChangeLanguage) {\n        this.changeLanguage();\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      this.keyboard = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', ['keyboard']);\n      var currentLanguage = this.state.currentLanguage;\n\n      var createButton = function createButton(_char6) {\n        var _char7 = _slicedToArray(_char6, 4),\n            code = _char7[0],\n            languages = _char7[1],\n            size = _char7[3];\n\n        var classList = ['keyboard__button'];\n        classList = size ? [].concat(_toConsumableArray(classList), [\"keyboard__button--\".concat(size)]) : classList;\n        var keyboardButton = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', classList);\n        keyboardButton.innerHTML = languages[currentLanguage][_this2.state.register ? _configs__WEBPACK_IMPORTED_MODULE_1__[\"REGISTER\"].UPPER : _configs__WEBPACK_IMPORTED_MODULE_1__[\"REGISTER\"].LOWER];\n        keyboardButton.dataset.code = code;\n        return keyboardButton;\n      };\n\n      this.config.forEach(function (row) {\n        var keyboardRowElement = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', ['keyboard__row']);\n        row.forEach(function (item) {\n          keyboardRowElement.append(createButton(item));\n        });\n\n        _this2.keyboard.append(keyboardRowElement);\n      });\n      document.addEventListener('keydown', this.keyDownHandler);\n      document.addEventListener('keyup', this.keyUpHandler);\n      document.addEventListener('mousedown', this.moudeDownHandler);\n      document.addEventListener('mouseup', this.mouseUpHandler);\n      this.keyboard.addEventListener('click', this.clickHandler);\n      return this.keyboard;\n    }\n  }], [{\n    key: \"cellKeypressEvent\",\n    value: function cellKeypressEvent(_char8) {\n      var keyPressEvent = new CustomEvent('keyPress', {\n        detail: _char8\n      });\n      document.dispatchEvent(keyPressEvent);\n    }\n  }]);\n\n  return Keyboard;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/components/Keyboard.js?");

/***/ }),

/***/ "./src/js/components/Textarea.js":
/*!***************************************!*\
  !*** ./src/js/components/Textarea.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Textarea; });\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ \"./src/js/utils/utils.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Textarea =\n/*#__PURE__*/\nfunction () {\n  function Textarea() {\n    _classCallCheck(this, Textarea);\n\n    this.textarea = null;\n    this.keyPressHandler = this.keyPressHandler.bind(this);\n  }\n\n  _createClass(Textarea, [{\n    key: \"printChar\",\n    value: function printChar(string, selectionStart, selectionEnd, _char) {\n      var newString = \"\".concat(string.substr(0, selectionStart)).concat(_char).concat(string.substr(selectionEnd));\n      this.textarea.value = newString;\n      this.textarea.selectionEnd = selectionStart + 1;\n    }\n  }, {\n    key: \"deleteChar\",\n    value: function deleteChar(string, selectionStart, selectionEnd) {\n      if (selectionStart === selectionEnd) {\n        var newString = \"\".concat(string.substr(0, selectionStart)).concat(string.substr(selectionEnd + 1));\n        this.textarea.value = newString;\n        this.textarea.selectionEnd = selectionEnd;\n      } else {\n        var _newString = \"\".concat(string.substr(0, selectionStart)).concat(string.substr(selectionEnd));\n\n        this.textarea.value = _newString;\n        this.textarea.selectionStart = selectionStart;\n        this.textarea.selectionEnd = selectionStart;\n      }\n    }\n  }, {\n    key: \"backspace\",\n    value: function backspace(string, selectionStart, selectionEnd) {\n      if (selectionStart === selectionEnd) {\n        if (selectionStart === 0) {\n          return;\n        }\n\n        var newString = \"\".concat(string.substr(0, selectionStart - 1)).concat(string.substr(selectionEnd));\n        this.textarea.value = newString;\n        this.textarea.selectionEnd = selectionStart - 1;\n      } else {\n        var _newString2 = \"\".concat(string.substr(0, selectionStart)).concat(string.substr(selectionEnd));\n\n        this.textarea.value = _newString2;\n        this.textarea.selectionEnd = selectionStart;\n      }\n    }\n  }, {\n    key: \"keyPressHandler\",\n    value: function keyPressHandler(event) {\n      var _this$textarea = this.textarea,\n          selectionStart = _this$textarea.selectionStart,\n          selectionEnd = _this$textarea.selectionEnd;\n      var string = this.textarea.value;\n      var pressedChar = event.detail;\n\n      if (pressedChar === 'Backspace') {\n        this.backspace(string, selectionStart, selectionEnd);\n      } else if (pressedChar === 'Delete') {\n        this.deleteChar(string, selectionStart, selectionEnd);\n      } else {\n        this.printChar(string, selectionStart, selectionEnd, pressedChar);\n      }\n\n      this.textarea.focus();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.textarea = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('textarea', ['textarea']);\n      document.addEventListener('keyPress', this.keyPressHandler);\n      return this.textarea;\n    }\n  }]);\n\n  return Textarea;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/components/Textarea.js?");

/***/ }),

/***/ "./src/js/configs.js":
/*!***************************!*\
  !*** ./src/js/configs.js ***!
  \***************************/
/*! exports provided: KEYBOARD_CONFIG, LANGUAGES, REGISTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KEYBOARD_CONFIG\", function() { return KEYBOARD_CONFIG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LANGUAGES\", function() { return LANGUAGES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REGISTER\", function() { return REGISTER; });\nvar KEYBOARD_CONFIG = [[['Backquote', [['ё', 'Ё'], ['`', '~']], true], ['Digit1', [['1', '!'], ['1', '!']], true], ['Digit2', [['2', '\"'], ['2', '@']], true], ['Digit3', [['3', '№'], ['3', '#']], true], ['Digit4', [['4', ';'], ['4', '$']], true], ['Digit5', [['5', '%'], ['5', '%']], true], ['Digit6', [['6', ':'], ['6', '^']], true], ['Digit7', [['7', '?'], ['7', '&']], true], ['Digit8', [['8', '*'], ['8', '*']], true], ['Digit9', [['9', '('], ['9', '(']], true], ['Digit0', [['0', ')'], ['0', ')']], true], ['Minus', [['-', '_'], ['-', '_']], true], ['Equal', [['=', '+'], ['=', '+']], true], ['Backslash', [['\\\\', '/'], ['\\\\', '|']], true], ['Backspace', [['', ''], ['', '']], false, 'backspace']], [['Tab', [['Tab', 'Tab', '\\t'], ['Tab', 'Tab', '\\t']], true, 'big'], ['KeyQ', [['й', 'Й'], ['q', 'Q']], true], ['KeyW', [['ц', 'Ц'], ['w', 'W']], true], ['KeyE', [['у', 'У'], ['e', 'E']], true], ['KeyR', [['к', 'К'], ['r', 'R']], true], ['KeyT', [['е', 'Е'], ['t', 'T']], true], ['KeyY', [['н', 'Н'], ['y', 'Y']], true], ['KeyU', [['г', 'Г'], ['u', 'U']], true], ['KeyI', [['ш', 'Ш'], ['i', 'I']], true], ['KeyO', [['щ', 'Щ'], ['o', 'O']], true], ['KeyP', [['з', 'З'], ['p', 'P']], true], ['BracketLeft', [['х', 'Х'], ['[', '{']], true], ['BracketRight', [['ъ', 'Ъ'], [']', '}']], true], ['Delete', [['Del', 'Del'], ['Del', 'Del']], false, 'big']], [['CapsLock', [['CapsLock', 'CapsLock'], ['CapsLock', 'CapsLock']], false, 'large'], ['KeyA', [['ф', 'Ф'], ['a', 'A']], true], ['KeyS', [['ы', 'Ы'], ['s', 'S']], true], ['KeyD', [['в', 'В'], ['d', 'D']], true], ['KeyF', [['а', 'А'], ['f', 'F']], true], ['KeyG', [['п', 'П'], ['g', 'G']], true], ['KeyH', [['р', 'Р'], ['h', 'H']], true], ['KeyJ', [['о', 'О'], ['j', 'J']], true], ['KeyK', [['л', 'Л'], ['k', 'K']], true], ['KeyL', [['д', 'Д'], ['l', 'L']], true], ['Semicolon', [['ж', 'Ж'], [';', ';']], true], ['Quote', [['э', 'Э'], ['\\'', '\"']], true], ['Enter', [['Enter', 'Enter', '\\n'], ['Enter', 'Enter', '\\n']], true, 'large']], [['ShiftLeft', [['Shift', 'Shift'], ['Shift', 'Shift']], false, 'largest'], ['KeyZ', [['я', 'Я'], ['z', 'Z']], true], ['KeyX', [['ч', 'Ч'], ['x', 'X']], true], ['KeyC', [['с', 'С'], ['c', 'C']], true], ['KeyV', [['м', 'М'], ['v', 'V']], true], ['KeyB', [['и', 'И'], ['b', 'B']], true], ['KeyN', [['т', 'Т'], ['n', 'N']], true], ['KeyM', [['ь', 'Ь'], ['m', 'M']], true], ['Comma', [['б', 'Б'], [',', '<']], true], ['Period', [['ю', 'Ю'], ['.', '>']], true], ['Slash', [['.', ','], ['/', '?']], true], ['ShiftRight', [['Shift', 'Shift'], ['Shift', 'Shift']], false, 'largest']], [['ControlLeft', [['Ctrl', 'Ctrl'], ['Ctrl', 'Ctrl']], false, 'bigger'], ['AltLeft', [['Alt', 'Alt'], ['Alt', 'Alt']], false, 'bigger'], ['Space', [[' ', ' '], [' ', ' ']], true, 'greater'], ['AltRight', [['Alt', 'Alt'], ['Alt', 'Alt']], false, 'bigger'], ['ControlRight', [['Ctrl', 'Ctrl'], ['Ctrl', 'Ctrl']], false, 'bigger']]];\nvar LANGUAGES = {\n  RU: 0,\n  EN: 1\n};\nvar REGISTER = {\n  LOWER: 0,\n  UPPER: 1\n};\n\n\n//# sourceURL=webpack:///./src/js/configs.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/js/app.js\");\n\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/utils/utils.js":
/*!*******************************!*\
  !*** ./src/js/utils/utils.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (tagName) {\n  var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n  var element = document.createElement(tagName);\n  classes.forEach(function (className) {\n    element.classList.add(className);\n  });\n  return element;\n});\n\n//# sourceURL=webpack:///./src/js/utils/utils.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });