/**
 * Nodeum API
 * The Nodeum API makes it easy to tap into the digital data mesh that runs across your organisation. Make requests to our API endpoints and we’ll give you everything you need to interconnect your business workflows with your storage.  All production API requests are made to:  http://nodeumhostname/api/  The current production version of the API is v1.   **REST** The Nodeum API is a RESTful API. This means that the API is designed to allow you to get, create, update, & delete objects with the HTTP verbs GET, POST, PUT, PATCH, & DELETE.  **JSON** The Nodeum API speaks exclusively in JSON. This means that you should always set the Content-Type header to application/json to ensure that your requests are properly accepted and processed by the API.  **Authentication** All API calls require user-password authentication.   **Cross-Origin Resource Sharing** The Nodeum API supports CORS for communicating from Javascript for these endpoints. You will need to specify an Origin URI when creating your application to allow for CORS to be whitelisted for your domain.   **Pagination** Some endpoints such as File Listing return a potentially lengthy array of objects. In order to keep the response sizes manageable the API will take advantage of pagination. Pagination is a mechanism for returning a subset of the results for a request and allowing for subsequent requests to “page” through the rest of the results until the end is reached. Paginated endpoints follow a standard interface that accepts two query parameters, limit and offset, and return a payload that follows a standard form. These parameters names and their behavior are borrowed from SQL LIMIT and OFFSET keywords.  **Versioning** The Nodeum API is constantly being worked on to add features, make improvements, and fix bugs. This means that you should expect changes to be introduced and documented.   However, there are some changes or additions that are considered backwards-compatible and your applications should be flexible enough to handle them. These include:  - Adding new endpoints to the API - Adding new attributes to the response of an existing endpoint - Changing the order of attributes of responses (JSON by definition is an object of unordered key/value pairs)  **Filter parameters** When browsing a list of items, multiple filter parameters may be applied. Some operators can be added to the value as a prefix:  - `=` value is equal. Default operator, may be omitted  - `!=` value is different  - `>` greater than  - `>=` greater than or equal  - `<` lower than  - `>=` lower than or equal  - `><` included in list, items should be separated by `|`  - `!><` not included in list, items should be separated by `|`  - `~` pattern matching, may include `%` (any characters) and `_` (one character)  - `!~` pattern not matching, may include `%` (any characters) and `_` (one character)  
 *
 * The version of the OpenAPI document: 2.1.0
 * Contact: info@nodeum.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NodeumSdk);
  }
}(this, function(expect, NodeumSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NodeumSdk.BySizeFacet();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('BySizeFacet', function() {
    it('should create an instance of BySizeFacet', function() {
      // uncomment below and update the code to test BySizeFacet
      //var instane = new NodeumSdk.BySizeFacet();
      //expect(instance).to.be.a(NodeumSdk.BySizeFacet);
    });

    it('should have the property count (base name: "count")', function() {
      // uncomment below and update the code to test the property count
      //var instane = new NodeumSdk.BySizeFacet();
      //expect(instance).to.be();
    });

    it('should have the property fileSizeSum (base name: "file_size_sum")', function() {
      // uncomment below and update the code to test the property fileSizeSum
      //var instane = new NodeumSdk.BySizeFacet();
      //expect(instance).to.be();
    });

    it('should have the property less100Kb (base name: "less_100_kb")', function() {
      // uncomment below and update the code to test the property less100Kb
      //var instane = new NodeumSdk.BySizeFacet();
      //expect(instance).to.be();
    });

    it('should have the property less1Mb (base name: "less_1_mb")', function() {
      // uncomment below and update the code to test the property less1Mb
      //var instane = new NodeumSdk.BySizeFacet();
      //expect(instance).to.be();
    });

    it('should have the property less10Mb (base name: "less_10_mb")', function() {
      // uncomment below and update the code to test the property less10Mb
      //var instane = new NodeumSdk.BySizeFacet();
      //expect(instance).to.be();
    });

    it('should have the property less100Mb (base name: "less_100_mb")', function() {
      // uncomment below and update the code to test the property less100Mb
      //var instane = new NodeumSdk.BySizeFacet();
      //expect(instance).to.be();
    });

    it('should have the property less1Gb (base name: "less_1_gb")', function() {
      // uncomment below and update the code to test the property less1Gb
      //var instane = new NodeumSdk.BySizeFacet();
      //expect(instance).to.be();
    });

    it('should have the property less10Gb (base name: "less_10_gb")', function() {
      // uncomment below and update the code to test the property less10Gb
      //var instane = new NodeumSdk.BySizeFacet();
      //expect(instance).to.be();
    });

    it('should have the property less100Gb (base name: "less_100_gb")', function() {
      // uncomment below and update the code to test the property less100Gb
      //var instane = new NodeumSdk.BySizeFacet();
      //expect(instance).to.be();
    });

    it('should have the property more100Gb (base name: "more_100_gb")', function() {
      // uncomment below and update the code to test the property more100Gb
      //var instane = new NodeumSdk.BySizeFacet();
      //expect(instance).to.be();
    });

  });

}));
