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
import Pool from '../model/Pool';
import PoolCollection from '../model/PoolCollection';
import PoolUp from '../model/PoolUp';
import PrimaryScan from '../model/PrimaryScan';

/**
* Pools service.
* @module api/PoolsApi
* @version 1.85.0
*/
export default class PoolsApi {

    /**
    * Constructs a new PoolsApi. 
    * @alias module:api/PoolsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createPool operation.
     * @callback module:api/PoolsApi~createPoolCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pool} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new pool.
     * **API Key Scope**: pools / create
     * @param {module:model/PoolUp} poolBody 
     * @param {module:api/PoolsApi~createPoolCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pool}
     */
    createPool(poolBody, callback) {
      let postBody = poolBody;
      // verify the required parameter 'poolBody' is set
      if (poolBody === undefined || poolBody === null) {
        throw new Error("Missing the required parameter 'poolBody' when calling createPool");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Pool;
      return this.apiClient.callApi(
        '/pools', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createPrimaryScan operation.
     * @callback module:api/PoolsApi~createPrimaryScanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PrimaryScan} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set a new primary pool scan option.
     * **API Key Scope**: primary_scans / create
     * @param {String} poolId Numeric ID, or name of pool.
     * @param {module:model/PrimaryScan} primaryScanBody 
     * @param {module:api/PoolsApi~createPrimaryScanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PrimaryScan}
     */
    createPrimaryScan(poolId, primaryScanBody, callback) {
      let postBody = primaryScanBody;
      // verify the required parameter 'poolId' is set
      if (poolId === undefined || poolId === null) {
        throw new Error("Missing the required parameter 'poolId' when calling createPrimaryScan");
      }
      // verify the required parameter 'primaryScanBody' is set
      if (primaryScanBody === undefined || primaryScanBody === null) {
        throw new Error("Missing the required parameter 'primaryScanBody' when calling createPrimaryScan");
      }

      let pathParams = {
        'pool_id': poolId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PrimaryScan;
      return this.apiClient.callApi(
        '/pools/{pool_id}/primary_scan', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the destroyPool operation.
     * @callback module:api/PoolsApi~destroyPoolCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Destroys a specific tape pool.
     * **API Key Scope**: pools / destroy
     * @param {String} poolId Numeric ID, or name of pool.
     * @param {module:api/PoolsApi~destroyPoolCallback} callback The callback function, accepting three arguments: error, data, response
     */
    destroyPool(poolId, callback) {
      let postBody = null;
      // verify the required parameter 'poolId' is set
      if (poolId === undefined || poolId === null) {
        throw new Error("Missing the required parameter 'poolId' when calling destroyPool");
      }

      let pathParams = {
        'pool_id': poolId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/pools/{pool_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the destroyPrimaryScan operation.
     * @callback module:api/PoolsApi~destroyPrimaryScanCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Disable the primary pool scan.
     * **API Key Scope**: primary_scans / destroy
     * @param {String} poolId Numeric ID, or name of pool.
     * @param {module:api/PoolsApi~destroyPrimaryScanCallback} callback The callback function, accepting three arguments: error, data, response
     */
    destroyPrimaryScan(poolId, callback) {
      let postBody = null;
      // verify the required parameter 'poolId' is set
      if (poolId === undefined || poolId === null) {
        throw new Error("Missing the required parameter 'poolId' when calling destroyPrimaryScan");
      }

      let pathParams = {
        'pool_id': poolId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/pools/{pool_id}/primary_scan', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the indexPools operation.
     * @callback module:api/PoolsApi~indexPoolsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PoolCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all pools.
     * **API Key Scope**: pools / index
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of items to display for pagination.
     * @param {Number} opts.offset The number of items to skip for pagination.
     * @param {Array.<String>} opts.sortBy Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
     * @param {String} opts.id Filter on id
     * @param {String} opts.name Filter on name
     * @param {String} opts.comment Filter on comment
     * @param {String} opts.type Filter on type
     * @param {String} opts.content Filter on content
     * @param {String} opts.primaryId Filter on primary id
     * @param {module:api/PoolsApi~indexPoolsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PoolCollection}
     */
    indexPools(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sort_by': this.apiClient.buildCollectionParam(opts['sortBy'], 'pipe'),
        'id': opts['id'],
        'name': opts['name'],
        'comment': opts['comment'],
        'type': opts['type'],
        'content': opts['content'],
        'primary_id': opts['primaryId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PoolCollection;
      return this.apiClient.callApi(
        '/pools', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the mountPool operation.
     * @callback module:api/PoolsApi~mountPoolCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MountStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mount Pool.
     * **API Key Scope**: pools / mount
     * @param {String} poolId Numeric ID, or name of pool.
     * @param {module:api/PoolsApi~mountPoolCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MountStatus}
     */
    mountPool(poolId, callback) {
      let postBody = null;
      // verify the required parameter 'poolId' is set
      if (poolId === undefined || poolId === null) {
        throw new Error("Missing the required parameter 'poolId' when calling mountPool");
      }

      let pathParams = {
        'pool_id': poolId
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
        '/pools/{pool_id}/mount', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the mountStatusPool operation.
     * @callback module:api/PoolsApi~mountStatusPoolCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MountStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get mount status of Pool.
     * **API Key Scope**: pools / mount_status
     * @param {String} poolId Numeric ID, or name of pool.
     * @param {module:api/PoolsApi~mountStatusPoolCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MountStatus}
     */
    mountStatusPool(poolId, callback) {
      let postBody = null;
      // verify the required parameter 'poolId' is set
      if (poolId === undefined || poolId === null) {
        throw new Error("Missing the required parameter 'poolId' when calling mountStatusPool");
      }

      let pathParams = {
        'pool_id': poolId
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
        '/pools/{pool_id}/mount', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the showPool operation.
     * @callback module:api/PoolsApi~showPoolCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pool} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Displays a specific pool.
     * **API Key Scope**: pools / show
     * @param {String} poolId Numeric ID, or name of pool.
     * @param {module:api/PoolsApi~showPoolCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pool}
     */
    showPool(poolId, callback) {
      let postBody = null;
      // verify the required parameter 'poolId' is set
      if (poolId === undefined || poolId === null) {
        throw new Error("Missing the required parameter 'poolId' when calling showPool");
      }

      let pathParams = {
        'pool_id': poolId
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
      let returnType = Pool;
      return this.apiClient.callApi(
        '/pools/{pool_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the showPrimaryScan operation.
     * @callback module:api/PoolsApi~showPrimaryScanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PrimaryScan} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Displays the primary pool scan status.
     * **API Key Scope**: primary_scans / show
     * @param {String} poolId Numeric ID, or name of pool.
     * @param {module:api/PoolsApi~showPrimaryScanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PrimaryScan}
     */
    showPrimaryScan(poolId, callback) {
      let postBody = null;
      // verify the required parameter 'poolId' is set
      if (poolId === undefined || poolId === null) {
        throw new Error("Missing the required parameter 'poolId' when calling showPrimaryScan");
      }

      let pathParams = {
        'pool_id': poolId
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
      let returnType = PrimaryScan;
      return this.apiClient.callApi(
        '/pools/{pool_id}/primary_scan', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the syncPrimaryPool operation.
     * @callback module:api/PoolsApi~syncPrimaryPoolCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Synchronize a primary after a scan (for internal use only).
     * **API Key Scope**: pools / sync_primary
     * @param {String} poolId Numeric ID, or name of pool.
     * @param {Number} tx New transaction number.
     * @param {module:api/PoolsApi~syncPrimaryPoolCallback} callback The callback function, accepting three arguments: error, data, response
     */
    syncPrimaryPool(poolId, tx, callback) {
      let postBody = null;
      // verify the required parameter 'poolId' is set
      if (poolId === undefined || poolId === null) {
        throw new Error("Missing the required parameter 'poolId' when calling syncPrimaryPool");
      }
      // verify the required parameter 'tx' is set
      if (tx === undefined || tx === null) {
        throw new Error("Missing the required parameter 'tx' when calling syncPrimaryPool");
      }

      let pathParams = {
        'pool_id': poolId
      };
      let queryParams = {
        'tx': tx
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/pools/{pool_id}/sync', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the unmountPool operation.
     * @callback module:api/PoolsApi~unmountPoolCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MountStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unmount Pool.
     * **API Key Scope**: pools / unmount
     * @param {String} poolId Numeric ID, or name of pool.
     * @param {module:api/PoolsApi~unmountPoolCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MountStatus}
     */
    unmountPool(poolId, callback) {
      let postBody = null;
      // verify the required parameter 'poolId' is set
      if (poolId === undefined || poolId === null) {
        throw new Error("Missing the required parameter 'poolId' when calling unmountPool");
      }

      let pathParams = {
        'pool_id': poolId
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
        '/pools/{pool_id}/mount', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePool operation.
     * @callback module:api/PoolsApi~updatePoolCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pool} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a specific pool.
     * **API Key Scope**: pools / update
     * @param {String} poolId Numeric ID, or name of pool.
     * @param {module:model/PoolUp} poolBody 
     * @param {module:api/PoolsApi~updatePoolCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pool}
     */
    updatePool(poolId, poolBody, callback) {
      let postBody = poolBody;
      // verify the required parameter 'poolId' is set
      if (poolId === undefined || poolId === null) {
        throw new Error("Missing the required parameter 'poolId' when calling updatePool");
      }
      // verify the required parameter 'poolBody' is set
      if (poolBody === undefined || poolBody === null) {
        throw new Error("Missing the required parameter 'poolBody' when calling updatePool");
      }

      let pathParams = {
        'pool_id': poolId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Pool;
      return this.apiClient.callApi(
        '/pools/{pool_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePrimaryScan operation.
     * @callback module:api/PoolsApi~updatePrimaryScanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PrimaryScan} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the existing primary pool scan option.
     * **API Key Scope**: primary_scans / update
     * @param {String} poolId Numeric ID, or name of pool.
     * @param {module:model/PrimaryScan} primaryScanBody 
     * @param {module:api/PoolsApi~updatePrimaryScanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PrimaryScan}
     */
    updatePrimaryScan(poolId, primaryScanBody, callback) {
      let postBody = primaryScanBody;
      // verify the required parameter 'poolId' is set
      if (poolId === undefined || poolId === null) {
        throw new Error("Missing the required parameter 'poolId' when calling updatePrimaryScan");
      }
      // verify the required parameter 'primaryScanBody' is set
      if (primaryScanBody === undefined || primaryScanBody === null) {
        throw new Error("Missing the required parameter 'primaryScanBody' when calling updatePrimaryScan");
      }

      let pathParams = {
        'pool_id': poolId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PrimaryScan;
      return this.apiClient.callApi(
        '/pools/{pool_id}/primary_scan', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
