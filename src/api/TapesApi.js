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


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import MountStatus from '../model/MountStatus';
import Tape from '../model/Tape';
import TapeCollection from '../model/TapeCollection';
import TapeStat from '../model/TapeStat';
import TapeStatCollection from '../model/TapeStatCollection';

/**
* Tapes service.
* @module api/TapesApi
* @version 1.85.0
*/
export default class TapesApi {

    /**
    * Constructs a new TapesApi. 
    * @alias module:api/TapesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the indexTapeStats operation.
     * @callback module:api/TapesApi~indexTapeStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TapeStatCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all tape statistics.
     * **API Key Scope**: tape_stats / index
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of items to display for pagination.
     * @param {Number} opts.offset The number of items to skip for pagination.
     * @param {module:api/TapesApi~indexTapeStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TapeStatCollection}
     */
    indexTapeStats(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TapeStatCollection;
      return this.apiClient.callApi(
        '/tape_stats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the indexTapes operation.
     * @callback module:api/TapesApi~indexTapesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TapeCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all tapes.
     * **API Key Scope**: tapes / index
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of items to display for pagination.
     * @param {Number} opts.offset The number of items to skip for pagination.
     * @param {Array.<String>} opts.sortBy Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
     * @param {String} opts.id Filter on id
     * @param {String} opts.tapeLibraryId Filter on tape library id
     * @param {String} opts.poolId Filter on a pool id
     * @param {String} opts.barcode Filter on barcode
     * @param {String} opts.location Filter on location
     * @param {String} opts.type Filter on type
     * @param {String} opts.locked Filter on locked
     * @param {String} opts.scratch Filter on scratch
     * @param {String} opts.cleaning Filter on cleaning
     * @param {String} opts.writeProtect Filter on write protect
     * @param {String} opts.mounted Filter on mounted
     * @param {String} opts.ejected Filter on ejected
     * @param {String} opts.known Filter on known
     * @param {String} opts.mountCount Filter on mount count
     * @param {String} opts.dateIn Filter on date in
     * @param {String} opts.dateMove Filter on date move
     * @param {String} opts.free Filter on free
     * @param {String} opts.max Filter on max
     * @param {String} opts.lastSizeUpdate Filter on last size update
     * @param {String} opts.lastMaintenance Filter on last maintenance
     * @param {String} opts.lastRepack Filter on last repack
     * @param {String} opts.repackStatus Filter on repack status
     * @param {String} opts.hash Filter on hash
     * @param {String} opts.forceImportType Filter on force import type
     * @param {String} opts.needToCheck Filter on need to check
     * @param {module:api/TapesApi~indexTapesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TapeCollection}
     */
    indexTapes(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sort_by': this.apiClient.buildCollectionParam(opts['sortBy'], 'pipe'),
        'id': opts['id'],
        'tape_library_id': opts['tapeLibraryId'],
        'pool_id': opts['poolId'],
        'barcode': opts['barcode'],
        'location': opts['location'],
        'type': opts['type'],
        'locked': opts['locked'],
        'scratch': opts['scratch'],
        'cleaning': opts['cleaning'],
        'write_protect': opts['writeProtect'],
        'mounted': opts['mounted'],
        'ejected': opts['ejected'],
        'known': opts['known'],
        'mount_count': opts['mountCount'],
        'date_in': opts['dateIn'],
        'date_move': opts['dateMove'],
        'free': opts['free'],
        'max': opts['max'],
        'last_size_update': opts['lastSizeUpdate'],
        'last_maintenance': opts['lastMaintenance'],
        'last_repack': opts['lastRepack'],
        'repack_status': opts['repackStatus'],
        'hash': opts['hash'],
        'force_import_type': opts['forceImportType'],
        'need_to_check': opts['needToCheck']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TapeCollection;
      return this.apiClient.callApi(
        '/tapes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the indexTapesByPool operation.
     * @callback module:api/TapesApi~indexTapesByPoolCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TapeCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all tapes.
     * **API Key Scope**: tapes / index
     * @param {String} poolId Numeric ID, or name of pool.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of items to display for pagination.
     * @param {Number} opts.offset The number of items to skip for pagination.
     * @param {Array.<String>} opts.sortBy Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
     * @param {String} opts.id Filter on id
     * @param {String} opts.tapeLibraryId Filter on tape library id
     * @param {String} opts.barcode Filter on barcode
     * @param {String} opts.location Filter on location
     * @param {String} opts.type Filter on type
     * @param {String} opts.locked Filter on locked
     * @param {String} opts.scratch Filter on scratch
     * @param {String} opts.cleaning Filter on cleaning
     * @param {String} opts.writeProtect Filter on write protect
     * @param {String} opts.mounted Filter on mounted
     * @param {String} opts.ejected Filter on ejected
     * @param {String} opts.known Filter on known
     * @param {String} opts.mountCount Filter on mount count
     * @param {String} opts.dateIn Filter on date in
     * @param {String} opts.dateMove Filter on date move
     * @param {String} opts.free Filter on free
     * @param {String} opts.max Filter on max
     * @param {String} opts.lastSizeUpdate Filter on last size update
     * @param {String} opts.lastMaintenance Filter on last maintenance
     * @param {String} opts.lastRepack Filter on last repack
     * @param {String} opts.repackStatus Filter on repack status
     * @param {String} opts.hash Filter on hash
     * @param {String} opts.forceImportType Filter on force import type
     * @param {String} opts.needToCheck Filter on need to check
     * @param {module:api/TapesApi~indexTapesByPoolCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TapeCollection}
     */
    indexTapesByPool(poolId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'poolId' is set
      if (poolId === undefined || poolId === null) {
        throw new Error("Missing the required parameter 'poolId' when calling indexTapesByPool");
      }

      let pathParams = {
        'pool_id': poolId
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sort_by': this.apiClient.buildCollectionParam(opts['sortBy'], 'pipe'),
        'id': opts['id'],
        'tape_library_id': opts['tapeLibraryId'],
        'barcode': opts['barcode'],
        'location': opts['location'],
        'type': opts['type'],
        'locked': opts['locked'],
        'scratch': opts['scratch'],
        'cleaning': opts['cleaning'],
        'write_protect': opts['writeProtect'],
        'mounted': opts['mounted'],
        'ejected': opts['ejected'],
        'known': opts['known'],
        'mount_count': opts['mountCount'],
        'date_in': opts['dateIn'],
        'date_move': opts['dateMove'],
        'free': opts['free'],
        'max': opts['max'],
        'last_size_update': opts['lastSizeUpdate'],
        'last_maintenance': opts['lastMaintenance'],
        'last_repack': opts['lastRepack'],
        'repack_status': opts['repackStatus'],
        'hash': opts['hash'],
        'force_import_type': opts['forceImportType'],
        'need_to_check': opts['needToCheck']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TapeCollection;
      return this.apiClient.callApi(
        '/pools/{pool_id}/tapes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the indexTapesByTapeLibrary operation.
     * @callback module:api/TapesApi~indexTapesByTapeLibraryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TapeCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all tapes.
     * **API Key Scope**: tapes / index
     * @param {String} tapeLibraryId Numeric ID, serial, or name of tape library.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of items to display for pagination.
     * @param {Number} opts.offset The number of items to skip for pagination.
     * @param {Array.<String>} opts.sortBy Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
     * @param {String} opts.id Filter on id
     * @param {String} opts.poolId Filter on a pool id
     * @param {String} opts.barcode Filter on barcode
     * @param {String} opts.location Filter on location
     * @param {String} opts.type Filter on type
     * @param {String} opts.locked Filter on locked
     * @param {String} opts.scratch Filter on scratch
     * @param {String} opts.cleaning Filter on cleaning
     * @param {String} opts.writeProtect Filter on write protect
     * @param {String} opts.mounted Filter on mounted
     * @param {String} opts.ejected Filter on ejected
     * @param {String} opts.known Filter on known
     * @param {String} opts.mountCount Filter on mount count
     * @param {String} opts.dateIn Filter on date in
     * @param {String} opts.dateMove Filter on date move
     * @param {String} opts.free Filter on free
     * @param {String} opts.max Filter on max
     * @param {String} opts.lastSizeUpdate Filter on last size update
     * @param {String} opts.lastMaintenance Filter on last maintenance
     * @param {String} opts.lastRepack Filter on last repack
     * @param {String} opts.repackStatus Filter on repack status
     * @param {String} opts.hash Filter on hash
     * @param {String} opts.forceImportType Filter on force import type
     * @param {String} opts.needToCheck Filter on need to check
     * @param {module:api/TapesApi~indexTapesByTapeLibraryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TapeCollection}
     */
    indexTapesByTapeLibrary(tapeLibraryId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tapeLibraryId' is set
      if (tapeLibraryId === undefined || tapeLibraryId === null) {
        throw new Error("Missing the required parameter 'tapeLibraryId' when calling indexTapesByTapeLibrary");
      }

      let pathParams = {
        'tape_library_id': tapeLibraryId
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sort_by': this.apiClient.buildCollectionParam(opts['sortBy'], 'pipe'),
        'id': opts['id'],
        'pool_id': opts['poolId'],
        'barcode': opts['barcode'],
        'location': opts['location'],
        'type': opts['type'],
        'locked': opts['locked'],
        'scratch': opts['scratch'],
        'cleaning': opts['cleaning'],
        'write_protect': opts['writeProtect'],
        'mounted': opts['mounted'],
        'ejected': opts['ejected'],
        'known': opts['known'],
        'mount_count': opts['mountCount'],
        'date_in': opts['dateIn'],
        'date_move': opts['dateMove'],
        'free': opts['free'],
        'max': opts['max'],
        'last_size_update': opts['lastSizeUpdate'],
        'last_maintenance': opts['lastMaintenance'],
        'last_repack': opts['lastRepack'],
        'repack_status': opts['repackStatus'],
        'hash': opts['hash'],
        'force_import_type': opts['forceImportType'],
        'need_to_check': opts['needToCheck']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TapeCollection;
      return this.apiClient.callApi(
        '/tape_libraries/{tape_library_id}/tapes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the mountStatusTape operation.
     * @callback module:api/TapesApi~mountStatusTapeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MountStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get mount status of Tape.
     * **API Key Scope**: tapes / mount_status
     * @param {String} tapeId Numeric ID, or barcode of tape.
     * @param {module:api/TapesApi~mountStatusTapeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MountStatus}
     */
    mountStatusTape(tapeId, callback) {
      let postBody = null;
      // verify the required parameter 'tapeId' is set
      if (tapeId === undefined || tapeId === null) {
        throw new Error("Missing the required parameter 'tapeId' when calling mountStatusTape");
      }

      let pathParams = {
        'tape_id': tapeId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MountStatus;
      return this.apiClient.callApi(
        '/tapes/{tape_id}/mount', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the mountStatusTapeByPool operation.
     * @callback module:api/TapesApi~mountStatusTapeByPoolCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MountStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get mount status of Tape.
     * **API Key Scope**: tapes / mount_status
     * @param {String} poolId Numeric ID, or name of pool.
     * @param {String} tapeId Numeric ID, or barcode of tape.
     * @param {module:api/TapesApi~mountStatusTapeByPoolCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MountStatus}
     */
    mountStatusTapeByPool(poolId, tapeId, callback) {
      let postBody = null;
      // verify the required parameter 'poolId' is set
      if (poolId === undefined || poolId === null) {
        throw new Error("Missing the required parameter 'poolId' when calling mountStatusTapeByPool");
      }
      // verify the required parameter 'tapeId' is set
      if (tapeId === undefined || tapeId === null) {
        throw new Error("Missing the required parameter 'tapeId' when calling mountStatusTapeByPool");
      }

      let pathParams = {
        'pool_id': poolId,
        'tape_id': tapeId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MountStatus;
      return this.apiClient.callApi(
        '/pools/{pool_id}/tapes/{tape_id}/mount', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the mountStatusTapeByTapeLibrary operation.
     * @callback module:api/TapesApi~mountStatusTapeByTapeLibraryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MountStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get mount status of Tape.
     * **API Key Scope**: tapes / mount_status
     * @param {String} tapeLibraryId Numeric ID, serial, or name of tape library.
     * @param {String} tapeId Numeric ID, or barcode of tape.
     * @param {module:api/TapesApi~mountStatusTapeByTapeLibraryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MountStatus}
     */
    mountStatusTapeByTapeLibrary(tapeLibraryId, tapeId, callback) {
      let postBody = null;
      // verify the required parameter 'tapeLibraryId' is set
      if (tapeLibraryId === undefined || tapeLibraryId === null) {
        throw new Error("Missing the required parameter 'tapeLibraryId' when calling mountStatusTapeByTapeLibrary");
      }
      // verify the required parameter 'tapeId' is set
      if (tapeId === undefined || tapeId === null) {
        throw new Error("Missing the required parameter 'tapeId' when calling mountStatusTapeByTapeLibrary");
      }

      let pathParams = {
        'tape_library_id': tapeLibraryId,
        'tape_id': tapeId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MountStatus;
      return this.apiClient.callApi(
        '/tape_libraries/{tape_library_id}/tapes/{tape_id}/mount', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the showTape operation.
     * @callback module:api/TapesApi~showTapeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tape} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Displays a specific tape.
     * **API Key Scope**: tapes / show
     * @param {String} tapeId Numeric ID, or barcode of tape.
     * @param {module:api/TapesApi~showTapeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tape}
     */
    showTape(tapeId, callback) {
      let postBody = null;
      // verify the required parameter 'tapeId' is set
      if (tapeId === undefined || tapeId === null) {
        throw new Error("Missing the required parameter 'tapeId' when calling showTape");
      }

      let pathParams = {
        'tape_id': tapeId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Tape;
      return this.apiClient.callApi(
        '/tapes/{tape_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the showTapeByPool operation.
     * @callback module:api/TapesApi~showTapeByPoolCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tape} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Displays a specific tape.
     * **API Key Scope**: tapes / show
     * @param {String} poolId Numeric ID, or name of pool.
     * @param {String} tapeId Numeric ID, or barcode of tape.
     * @param {module:api/TapesApi~showTapeByPoolCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tape}
     */
    showTapeByPool(poolId, tapeId, callback) {
      let postBody = null;
      // verify the required parameter 'poolId' is set
      if (poolId === undefined || poolId === null) {
        throw new Error("Missing the required parameter 'poolId' when calling showTapeByPool");
      }
      // verify the required parameter 'tapeId' is set
      if (tapeId === undefined || tapeId === null) {
        throw new Error("Missing the required parameter 'tapeId' when calling showTapeByPool");
      }

      let pathParams = {
        'pool_id': poolId,
        'tape_id': tapeId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Tape;
      return this.apiClient.callApi(
        '/pools/{pool_id}/tapes/{tape_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the showTapeByTapeLibrary operation.
     * @callback module:api/TapesApi~showTapeByTapeLibraryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tape} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Displays a specific tape.
     * **API Key Scope**: tapes / show
     * @param {String} tapeLibraryId Numeric ID, serial, or name of tape library.
     * @param {String} tapeId Numeric ID, or barcode of tape.
     * @param {module:api/TapesApi~showTapeByTapeLibraryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tape}
     */
    showTapeByTapeLibrary(tapeLibraryId, tapeId, callback) {
      let postBody = null;
      // verify the required parameter 'tapeLibraryId' is set
      if (tapeLibraryId === undefined || tapeLibraryId === null) {
        throw new Error("Missing the required parameter 'tapeLibraryId' when calling showTapeByTapeLibrary");
      }
      // verify the required parameter 'tapeId' is set
      if (tapeId === undefined || tapeId === null) {
        throw new Error("Missing the required parameter 'tapeId' when calling showTapeByTapeLibrary");
      }

      let pathParams = {
        'tape_library_id': tapeLibraryId,
        'tape_id': tapeId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Tape;
      return this.apiClient.callApi(
        '/tape_libraries/{tape_library_id}/tapes/{tape_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the showTapeStat operation.
     * @callback module:api/TapesApi~showTapeStatCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TapeStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Display statistic for a specific tape.
     * **API Key Scope**: tape_stats / show
     * @param {String} tapeId Numeric ID, or barcode of tape.
     * @param {module:api/TapesApi~showTapeStatCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TapeStat}
     */
    showTapeStat(tapeId, callback) {
      let postBody = null;
      // verify the required parameter 'tapeId' is set
      if (tapeId === undefined || tapeId === null) {
        throw new Error("Missing the required parameter 'tapeId' when calling showTapeStat");
      }

      let pathParams = {
        'tape_id': tapeId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TapeStat;
      return this.apiClient.callApi(
        '/tapes/{tape_id}/tape_stat', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the showTapeStatByPool operation.
     * @callback module:api/TapesApi~showTapeStatByPoolCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TapeStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Display statistic for a specific tape.
     * **API Key Scope**: tape_stats / show
     * @param {String} poolId Numeric ID, or name of pool.
     * @param {String} tapeId Numeric ID, or barcode of tape.
     * @param {module:api/TapesApi~showTapeStatByPoolCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TapeStat}
     */
    showTapeStatByPool(poolId, tapeId, callback) {
      let postBody = null;
      // verify the required parameter 'poolId' is set
      if (poolId === undefined || poolId === null) {
        throw new Error("Missing the required parameter 'poolId' when calling showTapeStatByPool");
      }
      // verify the required parameter 'tapeId' is set
      if (tapeId === undefined || tapeId === null) {
        throw new Error("Missing the required parameter 'tapeId' when calling showTapeStatByPool");
      }

      let pathParams = {
        'pool_id': poolId,
        'tape_id': tapeId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TapeStat;
      return this.apiClient.callApi(
        '/pools/{pool_id}/tapes/{tape_id}/tape_stat', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the showTapeStatByTapeLibrary operation.
     * @callback module:api/TapesApi~showTapeStatByTapeLibraryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TapeStat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Display statistic for a specific tape.
     * **API Key Scope**: tape_stats / show
     * @param {String} tapeLibraryId Numeric ID, serial, or name of tape library.
     * @param {String} tapeId Numeric ID, or barcode of tape.
     * @param {module:api/TapesApi~showTapeStatByTapeLibraryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TapeStat}
     */
    showTapeStatByTapeLibrary(tapeLibraryId, tapeId, callback) {
      let postBody = null;
      // verify the required parameter 'tapeLibraryId' is set
      if (tapeLibraryId === undefined || tapeLibraryId === null) {
        throw new Error("Missing the required parameter 'tapeLibraryId' when calling showTapeStatByTapeLibrary");
      }
      // verify the required parameter 'tapeId' is set
      if (tapeId === undefined || tapeId === null) {
        throw new Error("Missing the required parameter 'tapeId' when calling showTapeStatByTapeLibrary");
      }

      let pathParams = {
        'tape_library_id': tapeLibraryId,
        'tape_id': tapeId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TapeStat;
      return this.apiClient.callApi(
        '/tape_libraries/{tape_library_id}/tapes/{tape_id}/tape_stat', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
