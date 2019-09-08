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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _arrayWithHoles; });\nfunction _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _iterableToArrayLimit; });\nfunction _iterableToArrayLimit(arr, i) {\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _nonIterableRest; });\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _slicedToArray; });\n/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js\");\n/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js\");\n/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js\");\n\n\n\nfunction _slicedToArray(arr, i) {\n  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/slicedToArray.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var csv_parse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! csv-parse */ \"csv-parse\");\n/* harmony import */ var csv_parse__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(csv_parse__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\nvar _jsxFileName = \"/Users/makeensabree/dev-new/tableau-data-source-updater/server/index.js\";\n\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\n\nconst convertToSurveyFormat = (csvMatrix = []) => {\n  const CSV_HEADER_TEXTUAL_QUESTIONS = ['product name', 'product feature 1', 'product feature 2', 'product feature 3', 'product feature 4', 'product feature 5'];\n  const CSV_HEADER_IMAGE_QUESTIONS = ['hero image', 'secondary image 1', 'secondary image 2', 'secondary image 3', 'secondary image 4', 'secondary image 5', 'secondary image 6'];\n  const pages = [];\n  let lastLabelValue = '';\n  let questionType = '';\n\n  for (let i = 2; i < csvMatrix.length; i++) {\n    let questions = [];\n    let scrapeDate = csvMatrix[2][0];\n    let product = csvMatrix[2][1];\n\n    for (let j = 2; j < csvMatrix[i].length; j++) {\n      let columnHeader = csvMatrix[1][j];\n\n      if (CSV_HEADER_TEXTUAL_QUESTIONS.indexOf(columnHeader.trim().toLowerCase()) !== -1) {\n        questionType = 'text';\n        lastLabelValue = csvMatrix[i][j];\n      } else if (CSV_HEADER_IMAGE_QUESTIONS.indexOf(columnHeader.trim().toLowerCase()) !== -1) {\n        questionType = 'image';\n        lastLabelValue = csvMatrix[i][j];\n      } else {\n        // We are on a field where we should create a question\n        questions.push({\n          question: columnHeader,\n          type: questionType,\n          text: questionType === 'text' ? lastLabelValue : '',\n          image: questionType === 'image' ? lastLabelValue : '',\n          matrixUpdateLocation: [i, j]\n        });\n      }\n    }\n\n    pages.push({\n      questions,\n      scrapeDate,\n      product\n    });\n  }\n\n  return pages;\n};\n\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static('./build'));\napp.get('/', (req, res) => {\n  const app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75\n    },\n    __self: undefined\n  }));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', (err, data) => {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(app, \"</div>\")));\n  });\n});\napp.get('/csv', (req, res) => {\n  var fs = __webpack_require__(/*! fs */ \"fs\"),\n      path = __webpack_require__(/*! path */ \"path\"),\n      filePath = path.join(__dirname, 'test.csv');\n\n  console.log(filePath);\n  console.log(__dirname);\n  fs.readFile(filePath, {\n    encoding: 'utf-8'\n  }, function (err, data) {\n    if (!err) {\n      csv_parse__WEBPACK_IMPORTED_MODULE_5___default()(data, {}, function (err, csvArray) {\n        res.send({\n          data: convertToSurveyFormat(csvArray)\n        });\n      });\n    } else {\n      console.log(err);\n    }\n  });\n});\napp.post('/csv', (req, res) => {\n  console.log(req.body);\n  res.send(req.body);\n});\napp.listen(PORT, () => {\n  console.log(\"\\uD83D\\uDE0E Server is listening on port \".concat(PORT));\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ \"./src/Home.js\");\nvar _jsxFileName = \"/Users/makeensabree/dev-new/tableau-data-source-updater/src/App.js\";\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    name: \"Alligator\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5\n    },\n    __self: undefined\n  });\n});\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SwitchListSecondary; });\n/* harmony import */ var _Users_makeensabree_dev_new_tableau_data_source_updater_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ \"lodash/get\");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/debounce */ \"lodash/debounce\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ \"@material-ui/core/Container\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/List */ \"@material-ui/core/List\");\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItem */ \"@material-ui/core/ListItem\");\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ \"@material-ui/core/ListItemSecondaryAction\");\n/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItemText */ \"@material-ui/core/ListItemText\");\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ \"@material-ui/core/ListSubheader\");\n/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Divider */ \"@material-ui/core/Divider\");\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/ButtonGroup */ \"@material-ui/core/ButtonGroup\");\n/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/FormControl */ \"@material-ui/core/FormControl\");\n/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ \"@material-ui/core/FormControlLabel\");\n/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Radio */ \"@material-ui/core/Radio\");\n/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ \"@material-ui/core/RadioGroup\");\n/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/CardMedia */ \"@material-ui/core/CardMedia\");\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_19__);\n\nvar _jsxFileName = \"/Users/makeensabree/dev-new/tableau-data-source-updater/src/Home.js\";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"makeStyles\"])(theme => ({\n  root: {\n    width: '100%',\n    backgroundColor: theme.palette.background.paper\n  },\n  listItem: {\n    marginBottom: 40\n  },\n  card: {\n    maxWidth: 345,\n    marginRight: 20\n  },\n  media: {\n    height: 200,\n    width: 200\n  }\n}));\nfunction SwitchListSecondary() {\n  const UPDATE_CSV_DEBOUNCE = 5000;\n  const classes = useStyles();\n\n  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n        _useState2 = Object(_Users_makeensabree_dev_new_tableau_data_source_updater_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n        data = _useState2[0],\n        setData = _useState2[1];\n\n  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n        _useState4 = Object(_Users_makeensabree_dev_new_tableau_data_source_updater_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState3, 2),\n        productIndex = _useState4[0],\n        setProductIndex = _useState4[1];\n\n  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n        _useState6 = Object(_Users_makeensabree_dev_new_tableau_data_source_updater_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState5, 2),\n        updatesMap = _useState6[0],\n        setUpdatesMap = _useState6[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    fetch('http://localhost:3006/csv').then(function (response) {\n      return response.json();\n    }).then(function (res) {\n      setData(res.data);\n    });\n  }, []);\n\n  const updateCsv = () => {\n    fetch('http://localhost:3006/csv', {\n      method: 'POST',\n      body: updatesMap\n    }).then(function (response) {\n      return response.json();\n    }).then(function (res) {\n      setData(res.data);\n    });\n  };\n\n  const getQuestionView = (objQuestion = {}) => {\n    if (objQuestion.type === 'image') {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 73\n        },\n        __self: this\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        className: classes.listItem,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74\n        },\n        __self: this\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_18___default.a, {\n        className: classes.card,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75\n        },\n        __self: this\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_19___default.a, {\n        className: classes.media,\n        image: objQuestion.image,\n        title: \"Image\",\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76\n        },\n        __self: this\n      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        className: \"question\",\n        secondary: objQuestion.question,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82\n        },\n        __self: this\n      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 83\n        },\n        __self: this\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_14___default.a, {\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 84\n        },\n        __self: this\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_17___default.a, {\n        \"aria-label\": \"Yes | No\",\n        name: \"questionRadio\",\n        className: classes.group,\n        onChange: event => {\n          updatesMap[objQuestion.matrixUpdateLocation] = {\n            value: event.target.value\n          };\n          setUpdatesMap(updatesMap);\n          console.log(updatesMap);\n        },\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 85\n        },\n        __self: this\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_15___default.a, {\n        value: \"Yes\",\n        control: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_16___default.a, {\n          color: \"primary\",\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 92\n          },\n          __self: this\n        }),\n        label: \"Yes\",\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92\n        },\n        __self: this\n      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_15___default.a, {\n        value: \"No\",\n        control: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_16___default.a, {\n          color: \"primary\",\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 93\n          },\n          __self: this\n        }),\n        label: \"No\",\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93\n        },\n        __self: this\n      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11___default.a, {\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 98\n        },\n        __self: this\n      }));\n    }\n\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      className: classes.listItem,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9___default.a, {\n      className: \"question\",\n      secondary: objQuestion.question,\n      primary: objQuestion.text,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105\n      },\n      __self: this\n    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_8___default.a, {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 106\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_14___default.a, {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 107\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_17___default.a, {\n      \"aria-label\": \"Yes | No\",\n      name: \"questionRadio\",\n      className: classes.group,\n      onChange: event => {\n        updatesMap[objQuestion.matrixUpdateLocation] = {\n          value: event.target.value\n        };\n        setUpdatesMap(updatesMap);\n        console.log(updatesMap);\n      },\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 108\n      },\n      __self: this\n    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_15___default.a, {\n      value: \"Yes\",\n      control: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_16___default.a, {\n        color: \"primary\",\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 115\n        },\n        __self: this\n      }),\n      label: \"Yes\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 115\n      },\n      __self: this\n    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_15___default.a, {\n      value: \"No\",\n      control: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_16___default.a, {\n        color: \"primary\",\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 116\n        },\n        __self: this\n      }),\n      label: \"No\",\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 116\n      },\n      __self: this\n    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11___default.a, {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 121\n      },\n      __self: this\n    }));\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    maxWidth: \"lg\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128\n    },\n    __self: this\n  }, lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(data, [productIndex, 'product'], ''), \" \", data.length > 0 ? \"(Product \".concat(productIndex + 1, \" of \").concat(data.length, \")\") : ''), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    subheader: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_10___default.a, {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 131\n      },\n      __self: this\n    }, \"Scrape Date: \".concat(lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(data, [productIndex, 'scrapeDate'], ''))),\n    className: classes.root,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131\n    },\n    __self: this\n  }, lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(data, [productIndex, 'questions'], []).map((question, index) => {\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n      key: \"\".concat(productIndex, \" - \").concat(index),\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 135\n      },\n      __self: this\n    }, getQuestionView(question));\n  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_13___default.a, {\n    size: \"small\",\n    \"aria-label\": \"small outlined button group\",\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144\n    },\n    __self: this\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default.a, {\n    disabled: productIndex === 0,\n    onClick: () => {\n      setProductIndex(productIndex - 1);\n    },\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145\n    },\n    __self: this\n  }, \"Previous\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default.a, {\n    disabled: productIndex === data.length - 1,\n    onClick: () => {\n      setProductIndex(productIndex + 1);\n    },\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148\n    },\n    __self: this\n  }, \"Next\")));\n}\n\n//# sourceURL=webpack:///./src/Home.js?");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Button%22?");

/***/ }),

/***/ "@material-ui/core/ButtonGroup":
/*!************************************************!*\
  !*** external "@material-ui/core/ButtonGroup" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ButtonGroup\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ButtonGroup%22?");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Card\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Card%22?");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardMedia\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardMedia%22?");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Container\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Container%22?");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Divider\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Divider%22?");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/FormControl\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/FormControl%22?");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/FormControlLabel\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/FormControlLabel%22?");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/List\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/List%22?");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItem\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItem%22?");

/***/ }),

/***/ "@material-ui/core/ListItemSecondaryAction":
/*!************************************************************!*\
  !*** external "@material-ui/core/ListItemSecondaryAction" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItemSecondaryAction\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItemSecondaryAction%22?");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItemText\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItemText%22?");

/***/ }),

/***/ "@material-ui/core/ListSubheader":
/*!**************************************************!*\
  !*** external "@material-ui/core/ListSubheader" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListSubheader\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListSubheader%22?");

/***/ }),

/***/ "@material-ui/core/Radio":
/*!******************************************!*\
  !*** external "@material-ui/core/Radio" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Radio\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Radio%22?");

/***/ }),

/***/ "@material-ui/core/RadioGroup":
/*!***********************************************!*\
  !*** external "@material-ui/core/RadioGroup" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/RadioGroup\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/RadioGroup%22?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/styles%22?");

/***/ }),

/***/ "csv-parse":
/*!****************************!*\
  !*** external "csv-parse" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"csv-parse\");\n\n//# sourceURL=webpack:///external_%22csv-parse%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "lodash/debounce":
/*!**********************************!*\
  !*** external "lodash/debounce" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash/debounce\");\n\n//# sourceURL=webpack:///external_%22lodash/debounce%22?");

/***/ }),

/***/ "lodash/get":
/*!*****************************!*\
  !*** external "lodash/get" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash/get\");\n\n//# sourceURL=webpack:///external_%22lodash/get%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });