webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
var _this = undefined,
    _jsxFileName = "/Users/shuhei/Desktop/next-practice/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var fetcher = function fetcher(url) {
  return fetch(url).then(function (r) {
    return r.json();
  });
};

var Index = function Index() {
  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])("/api/randomQuote", fetcher),
      data = _useSWR.data,
      error = _useSWR.error; // const author = data.author;


  console.log(data[1]);
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "Index Page"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.a1928a8cce09d71d6f53.hot-update.js.map