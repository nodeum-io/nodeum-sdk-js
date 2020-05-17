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
    factory(root.expect, root.NodeumApi);
  }
}(this, function(expect, NodeumApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NodeumApi.BySecondaryStorageFacet();
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

  describe('BySecondaryStorageFacet', function() {
    it('should create an instance of BySecondaryStorageFacet', function() {
      // uncomment below and update the code to test BySecondaryStorageFacet
      //var instane = new NodeumApi.BySecondaryStorageFacet();
      //expect(instance).to.be.a(NodeumApi.BySecondaryStorageFacet);
    });

    it('should have the property count (base name: "count")', function() {
      // uncomment below and update the code to test the property count
      //var instane = new NodeumApi.BySecondaryStorageFacet();
      //expect(instance).to.be();
    });

    it('should have the property filesCount (base name: "files_count")', function() {
      // uncomment below and update the code to test the property filesCount
      //var instane = new NodeumApi.BySecondaryStorageFacet();
      //expect(instance).to.be();
    });

    it('should have the property fileSizeSum (base name: "file_size_sum")', function() {
      // uncomment below and update the code to test the property fileSizeSum
      //var instane = new NodeumApi.BySecondaryStorageFacet();
      //expect(instance).to.be();
    });

    it('should have the property cost (base name: "cost")', function() {
      // uncomment below and update the code to test the property cost
      //var instane = new NodeumApi.BySecondaryStorageFacet();
      //expect(instance).to.be();
    });

    it('should have the property onSecondaryNas (base name: "on_secondary_nas")', function() {
      // uncomment below and update the code to test the property onSecondaryNas
      //var instane = new NodeumApi.BySecondaryStorageFacet();
      //expect(instance).to.be();
    });

    it('should have the property onSecondaryPublicCloud (base name: "on_secondary_public_cloud")', function() {
      // uncomment below and update the code to test the property onSecondaryPublicCloud
      //var instane = new NodeumApi.BySecondaryStorageFacet();
      //expect(instance).to.be();
    });

    it('should have the property onSecondaryObjectCloud (base name: "on_secondary_object_cloud")', function() {
      // uncomment below and update the code to test the property onSecondaryObjectCloud
      //var instane = new NodeumApi.BySecondaryStorageFacet();
      //expect(instance).to.be();
    });

    it('should have the property onSecondaryTape (base name: "on_secondary_tape")', function() {
      // uncomment below and update the code to test the property onSecondaryTape
      //var instane = new NodeumApi.BySecondaryStorageFacet();
      //expect(instance).to.be();
    });

    it('should have the property onAnySecondary (base name: "on_any_secondary")', function() {
      // uncomment below and update the code to test the property onAnySecondary
      //var instane = new NodeumApi.BySecondaryStorageFacet();
      //expect(instance).to.be();
    });

    it('should have the property onNoSecondary (base name: "on_no_secondary")', function() {
      // uncomment below and update the code to test the property onNoSecondary
      //var instane = new NodeumApi.BySecondaryStorageFacet();
      //expect(instance).to.be();
    });

  });

}));
