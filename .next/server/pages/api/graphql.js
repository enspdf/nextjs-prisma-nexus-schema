module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/graphql.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/graphql.ts":
/*!******************************!*\
  !*** ./pages/api/graphql.ts ***!
  \******************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ \"apollo-server-micro\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/schema */ \"./src/schema.ts\");\n/* harmony import */ var src_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/context */ \"./src/context.ts\");\n\n\n\nconst server = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__[\"ApolloServer\"]({\n  schema: src_schema__WEBPACK_IMPORTED_MODULE_1__[\"schema\"],\n  context: src_context__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"],\n  tracing: true\n});\nconst handler = server.createHandler({\n  path: \"/api/graphql\"\n});\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ3JhcGhxbC50cz8xNjZiIl0sIm5hbWVzIjpbInNlcnZlciIsIkFwb2xsb1NlcnZlciIsInNjaGVtYSIsImNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidHJhY2luZyIsImhhbmRsZXIiLCJjcmVhdGVIYW5kbGVyIiwicGF0aCIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyxnRUFBSixDQUFpQjtBQUM5QkMsMkRBRDhCO0FBRTlCQyxTQUFPLEVBQUVDLHlEQUZxQjtBQUc5QkMsU0FBTztBQUh1QixDQUFqQixDQUFmO0FBS0EsTUFBTUMsT0FBTyxHQUFHTixNQUFNLENBQUNPLGFBQVAsQ0FBcUI7QUFBRUMsTUFBSSxFQUFFO0FBQVIsQ0FBckIsQ0FBaEI7QUFFTyxNQUFNQyxNQUFNLEdBQUc7QUFDcEJDLEtBQUcsRUFBRTtBQUNIQyxjQUFVLEVBQUU7QUFEVDtBQURlLENBQWY7QUFNUUwsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ3JhcGhxbC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb1NlcnZlciB9IGZyb20gXCJhcG9sbG8tc2VydmVyLW1pY3JvXCI7XG5pbXBvcnQgeyBzY2hlbWEgfSBmcm9tIFwic3JjL3NjaGVtYVwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJzcmMvY29udGV4dFwiO1xuXG5jb25zdCBzZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcbiAgc2NoZW1hLFxuICBjb250ZXh0OiBjcmVhdGVDb250ZXh0LFxuICB0cmFjaW5nOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiLFxufSk7XG5jb25zdCBoYW5kbGVyID0gc2VydmVyLmNyZWF0ZUhhbmRsZXIoeyBwYXRoOiBcIi9hcGkvZ3JhcGhxbFwiIH0pO1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBhcGk6IHtcbiAgICBib2R5UGFyc2VyOiBmYWxzZSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/graphql.ts\n");

/***/ }),

/***/ "./src/context.ts":
/*!************************!*\
  !*** ./src/context.ts ***!
  \************************/
/*! exports provided: createContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createContext\", function() { return createContext; });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"PrismaClient\"]({\n  log: [\"query\"]\n});\nfunction createContext() {\n  return {\n    prisma\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC50cz9hZTE1Il0sIm5hbWVzIjpbInByaXNtYSIsIlByaXNtYUNsaWVudCIsImxvZyIsImNyZWF0ZUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxNQUFNLEdBQUcsSUFBSUMsMkRBQUosQ0FBaUI7QUFBRUMsS0FBRyxFQUFFLENBQUMsT0FBRDtBQUFQLENBQWpCLENBQWY7QUFNTyxTQUFTQyxhQUFULEdBQWtDO0FBQ3ZDLFNBQU87QUFBRUg7QUFBRixHQUFQO0FBQ0QiLCJmaWxlIjoiLi9zcmMvY29udGV4dC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KHsgbG9nOiBbXCJxdWVyeVwiXSB9KTtcblxuZXhwb3J0IGludGVyZmFjZSBDb250ZXh0IHtcbiAgcHJpc21hOiBQcmlzbWFDbGllbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250ZXh0KCk6IENvbnRleHQge1xuICByZXR1cm4geyBwcmlzbWEgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context.ts\n");

/***/ }),

/***/ "./src/schema.ts":
/*!***********************!*\
  !*** ./src/schema.ts ***!
  \***********************/
/*! exports provided: schema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"schema\", function() { return schema; });\n/* harmony import */ var _nexus_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nexus/schema */ \"@nexus/schema\");\n/* harmony import */ var _nexus_schema__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nexus_schema__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nexus_plugin_prisma_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nexus-plugin-prisma/schema */ \"nexus-plugin-prisma/schema\");\n/* harmony import */ var nexus_plugin_prisma_schema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nexus_plugin_prisma_schema__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Company = Object(_nexus_schema__WEBPACK_IMPORTED_MODULE_0__[\"objectType\"])({\n  name: \"Company\",\n\n  definition(t) {\n    t.model.id();\n    t.model.symbol();\n    t.model.name();\n    t.model.description();\n  }\n\n});\nconst Query = Object(_nexus_schema__WEBPACK_IMPORTED_MODULE_0__[\"queryType\"])({\n  definition(t) {\n    t.crud.company({\n      resolve: (_root, args, ctx) => {\n        return ctx.prisma.company.findOne({\n          where: {\n            id: args.where.id\n          }\n        });\n      }\n    });\n    t.crud.companies({\n      pagination: true,\n      filtering: true\n    }); // t.field(\"company\", {\n    //   type: Company,\n    //   nullable: true,\n    //   args: {\n    //     id: idArg(),\n    //   },\n    //   resolve: (_root, { id }, ctx) => {\n    //     return ctx.prisma.company.findOne({ where: { id: Number(id) } });\n    //   },\n    // });\n  }\n\n});\nconst Mutation = Object(_nexus_schema__WEBPACK_IMPORTED_MODULE_0__[\"mutationType\"])({\n  definition(t) {\n    t.crud.createOneCompany();\n  }\n\n});\nconst schema = Object(_nexus_schema__WEBPACK_IMPORTED_MODULE_0__[\"makeSchema\"])({\n  types: {\n    Query,\n    Company,\n    Mutation\n  },\n  plugins: [Object(nexus_plugin_prisma_schema__WEBPACK_IMPORTED_MODULE_1__[\"nexusSchemaPrisma\"])({\n    experimentalCRUD: true\n  })],\n  outputs: {\n    schema: path__WEBPACK_IMPORTED_MODULE_2___default.a.join(process.cwd(), \"schema.graphql\"),\n    typegen: path__WEBPACK_IMPORTED_MODULE_2___default.a.join(process.cwd(), \"nexus.ts\")\n  },\n  typegenAutoConfig: {\n    contextType: \"Context.Context\",\n    sources: [{\n      source: \"@prisma/client\",\n      alias: \"prisma\"\n    }, {\n      source: /*require.resolve*/(/*! ./context */ \"./src/context.ts\"),\n      alias: \"Context\"\n    }]\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hLnRzPzc4ZGMiXSwibmFtZXMiOlsiQ29tcGFueSIsIm9iamVjdFR5cGUiLCJuYW1lIiwiZGVmaW5pdGlvbiIsInQiLCJtb2RlbCIsImlkIiwic3ltYm9sIiwiZGVzY3JpcHRpb24iLCJRdWVyeSIsInF1ZXJ5VHlwZSIsImNydWQiLCJjb21wYW55IiwicmVzb2x2ZSIsIl9yb290IiwiYXJncyIsImN0eCIsInByaXNtYSIsImZpbmRPbmUiLCJ3aGVyZSIsImNvbXBhbmllcyIsInBhZ2luYXRpb24iLCJmaWx0ZXJpbmciLCJNdXRhdGlvbiIsIm11dGF0aW9uVHlwZSIsImNyZWF0ZU9uZUNvbXBhbnkiLCJzY2hlbWEiLCJtYWtlU2NoZW1hIiwidHlwZXMiLCJwbHVnaW5zIiwibmV4dXNTY2hlbWFQcmlzbWEiLCJleHBlcmltZW50YWxDUlVEIiwib3V0cHV0cyIsInBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsInR5cGVnZW4iLCJ0eXBlZ2VuQXV0b0NvbmZpZyIsImNvbnRleHRUeXBlIiwic291cmNlcyIsInNvdXJjZSIsImFsaWFzIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUVBLE1BQU1BLE9BQU8sR0FBR0MsZ0VBQVUsQ0FBQztBQUN6QkMsTUFBSSxFQUFFLFNBRG1COztBQUV6QkMsWUFBVSxDQUFDQyxDQUFELEVBQUk7QUFDWkEsS0FBQyxDQUFDQyxLQUFGLENBQVFDLEVBQVI7QUFDQUYsS0FBQyxDQUFDQyxLQUFGLENBQVFFLE1BQVI7QUFDQUgsS0FBQyxDQUFDQyxLQUFGLENBQVFILElBQVI7QUFDQUUsS0FBQyxDQUFDQyxLQUFGLENBQVFHLFdBQVI7QUFDRDs7QUFQd0IsQ0FBRCxDQUExQjtBQVVBLE1BQU1DLEtBQUssR0FBR0MsK0RBQVMsQ0FBQztBQUN0QlAsWUFBVSxDQUFDQyxDQUFELEVBQUk7QUFDWkEsS0FBQyxDQUFDTyxJQUFGLENBQU9DLE9BQVAsQ0FBZTtBQUNiQyxhQUFPLEVBQUUsQ0FBQ0MsS0FBRCxFQUFRQyxJQUFSLEVBQWNDLEdBQWQsS0FBc0I7QUFDN0IsZUFBT0EsR0FBRyxDQUFDQyxNQUFKLENBQVdMLE9BQVgsQ0FBbUJNLE9BQW5CLENBQTJCO0FBQUVDLGVBQUssRUFBRTtBQUFFYixjQUFFLEVBQUVTLElBQUksQ0FBQ0ksS0FBTCxDQUFXYjtBQUFqQjtBQUFULFNBQTNCLENBQVA7QUFDRDtBQUhZLEtBQWY7QUFNQUYsS0FBQyxDQUFDTyxJQUFGLENBQU9TLFNBQVAsQ0FBaUI7QUFBRUMsZ0JBQVUsRUFBRSxJQUFkO0FBQW9CQyxlQUFTLEVBQUU7QUFBL0IsS0FBakIsRUFQWSxDQVFaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7O0FBbkJxQixDQUFELENBQXZCO0FBc0JBLE1BQU1DLFFBQVEsR0FBR0Msa0VBQVksQ0FBQztBQUM1QnJCLFlBQVUsQ0FBQ0MsQ0FBRCxFQUFJO0FBQ1pBLEtBQUMsQ0FBQ08sSUFBRixDQUFPYyxnQkFBUDtBQUNEOztBQUgyQixDQUFELENBQTdCO0FBTU8sTUFBTUMsTUFBTSxHQUFHQyxnRUFBVSxDQUFDO0FBQy9CQyxPQUFLLEVBQUU7QUFBRW5CLFNBQUY7QUFBU1QsV0FBVDtBQUFrQnVCO0FBQWxCLEdBRHdCO0FBRS9CTSxTQUFPLEVBQUUsQ0FBQ0Msb0ZBQWlCLENBQUM7QUFBRUMsb0JBQWdCLEVBQUU7QUFBcEIsR0FBRCxDQUFsQixDQUZzQjtBQUcvQkMsU0FBTyxFQUFFO0FBQ1BOLFVBQU0sRUFBRU8sMkNBQUksQ0FBQ0MsSUFBTCxDQUFVQyxPQUFPLENBQUNDLEdBQVIsRUFBVixFQUF5QixnQkFBekIsQ0FERDtBQUVQQyxXQUFPLEVBQUVKLDJDQUFJLENBQUNDLElBQUwsQ0FBVUMsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsVUFBekI7QUFGRixHQUhzQjtBQU8vQkUsbUJBQWlCLEVBQUU7QUFDakJDLGVBQVcsRUFBRSxpQkFESTtBQUVqQkMsV0FBTyxFQUFFLENBQ1A7QUFDRUMsWUFBTSxFQUFFLGdCQURWO0FBRUVDLFdBQUssRUFBRTtBQUZULEtBRE8sRUFLUDtBQUNFRCxZQUFNLEVBQUVFLG1CQUFBLENBQWdCLG1DQUFoQixDQURWO0FBRUVELFdBQUssRUFBRTtBQUZULEtBTE87QUFGUTtBQVBZLENBQUQsQ0FBekIiLCJmaWxlIjoiLi9zcmMvc2NoZW1hLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgbWFrZVNjaGVtYSxcbiAgcXVlcnlUeXBlLFxuICBvYmplY3RUeXBlLFxuICBpZEFyZyxcbiAgbXV0YXRpb25UeXBlLFxufSBmcm9tIFwiQG5leHVzL3NjaGVtYVwiO1xuaW1wb3J0IHsgbmV4dXNTY2hlbWFQcmlzbWEgfSBmcm9tIFwibmV4dXMtcGx1Z2luLXByaXNtYS9zY2hlbWFcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmNvbnN0IENvbXBhbnkgPSBvYmplY3RUeXBlKHtcbiAgbmFtZTogXCJDb21wYW55XCIsXG4gIGRlZmluaXRpb24odCkge1xuICAgIHQubW9kZWwuaWQoKTtcbiAgICB0Lm1vZGVsLnN5bWJvbCgpO1xuICAgIHQubW9kZWwubmFtZSgpO1xuICAgIHQubW9kZWwuZGVzY3JpcHRpb24oKTtcbiAgfSxcbn0pO1xuXG5jb25zdCBRdWVyeSA9IHF1ZXJ5VHlwZSh7XG4gIGRlZmluaXRpb24odCkge1xuICAgIHQuY3J1ZC5jb21wYW55KHtcbiAgICAgIHJlc29sdmU6IChfcm9vdCwgYXJncywgY3R4KSA9PiB7XG4gICAgICAgIHJldHVybiBjdHgucHJpc21hLmNvbXBhbnkuZmluZE9uZSh7IHdoZXJlOiB7IGlkOiBhcmdzLndoZXJlLmlkIH0gfSk7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIFxuICAgIHQuY3J1ZC5jb21wYW5pZXMoeyBwYWdpbmF0aW9uOiB0cnVlLCBmaWx0ZXJpbmc6IHRydWUgfSk7XG4gICAgLy8gdC5maWVsZChcImNvbXBhbnlcIiwge1xuICAgIC8vICAgdHlwZTogQ29tcGFueSxcbiAgICAvLyAgIG51bGxhYmxlOiB0cnVlLFxuICAgIC8vICAgYXJnczoge1xuICAgIC8vICAgICBpZDogaWRBcmcoKSxcbiAgICAvLyAgIH0sXG4gICAgLy8gICByZXNvbHZlOiAoX3Jvb3QsIHsgaWQgfSwgY3R4KSA9PiB7XG4gICAgLy8gICAgIHJldHVybiBjdHgucHJpc21hLmNvbXBhbnkuZmluZE9uZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIoaWQpIH0gfSk7XG4gICAgLy8gICB9LFxuICAgIC8vIH0pO1xuICB9LFxufSk7XG5cbmNvbnN0IE11dGF0aW9uID0gbXV0YXRpb25UeXBlKHtcbiAgZGVmaW5pdGlvbih0KSB7XG4gICAgdC5jcnVkLmNyZWF0ZU9uZUNvbXBhbnkoKTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2NoZW1hID0gbWFrZVNjaGVtYSh7XG4gIHR5cGVzOiB7IFF1ZXJ5LCBDb21wYW55LCBNdXRhdGlvbiB9LFxuICBwbHVnaW5zOiBbbmV4dXNTY2hlbWFQcmlzbWEoeyBleHBlcmltZW50YWxDUlVEOiB0cnVlIH0pXSxcbiAgb3V0cHV0czoge1xuICAgIHNjaGVtYTogcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwic2NoZW1hLmdyYXBocWxcIiksXG4gICAgdHlwZWdlbjogcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwibmV4dXMudHNcIiksXG4gIH0sXG4gIHR5cGVnZW5BdXRvQ29uZmlnOiB7XG4gICAgY29udGV4dFR5cGU6IFwiQ29udGV4dC5Db250ZXh0XCIsXG4gICAgc291cmNlczogW1xuICAgICAge1xuICAgICAgICBzb3VyY2U6IFwiQHByaXNtYS9jbGllbnRcIixcbiAgICAgICAgYWxpYXM6IFwicHJpc21hXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzb3VyY2U6IHJlcXVpcmUucmVzb2x2ZShcIi4vY29udGV4dFwiKSxcbiAgICAgICAgYWxpYXM6IFwiQ29udGV4dFwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/schema.ts\n");

/***/ }),

/***/ "@nexus/schema":
/*!********************************!*\
  !*** external "@nexus/schema" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@nexus/schema\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmV4dXMvc2NoZW1hXCI/ZjAxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbmV4dXMvc2NoZW1hLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5leHVzL3NjaGVtYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@nexus/schema\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@prisma/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiP2UwMDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHByaXNtYS9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@prisma/client\n");

/***/ }),

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server-micro\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyLW1pY3JvXCI/MjM2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhcG9sbG8tc2VydmVyLW1pY3JvLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1taWNyb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-server-micro\n");

/***/ }),

/***/ "nexus-plugin-prisma/schema":
/*!*********************************************!*\
  !*** external "nexus-plugin-prisma/schema" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nexus-plugin-prisma/schema\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh1cy1wbHVnaW4tcHJpc21hL3NjaGVtYVwiPzQwMjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dXMtcGx1Z2luLXByaXNtYS9zY2hlbWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh1cy1wbHVnaW4tcHJpc21hL3NjaGVtYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///nexus-plugin-prisma/schema\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ })

/******/ });