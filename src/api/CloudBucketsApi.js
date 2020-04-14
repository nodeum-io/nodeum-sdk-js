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
import ActiveJobStatus from '../model/ActiveJobStatus';
import CloudBucket from '../model/CloudBucket';
import CloudBucketCollection from '../model/CloudBucketCollection';
import CloudBucketSimpleCollection from '../model/CloudBucketSimpleCollection';
import Error from '../model/Error';
import MountStatus from '../model/MountStatus';

/**
* CloudBuckets service.
* @module api/CloudBucketsApi
* @version 1.85.0
*/
export default class CloudBucketsApi {

    /**
    * Constructs a new CloudBucketsApi. 
    * @alias module:api/CloudBucketsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the indexCloudBuckets operation.
     * @callback module:api/CloudBucketsApi~indexCloudBucketsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CloudBucketCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all cloud buckets.
     * **API Key Scope**: cloud_buckets / index
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of items to display for pagination.
     * @param {Number} opts.offset The number of items to skip for pagination.
     * @param {Array.<String>} opts.sortBy Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
     * @param {String} opts.id Filter on id
     * @param {String} opts.cloudConnectorId Filter on cloud connector id
     * @param {String} opts.poolId Filter on a pool id
     * @param {String} opts.name Filter on name
     * @param {String} opts.location Filter on location
     * @param {String} opts.price Filter on price
     * @param {module:api/CloudBucketsApi~indexCloudBucketsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CloudBucketCollection}
     */
    indexCloudBuckets(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sort_by': this.apiClient.buildCollectionParam(opts['sortBy'], 'pipe'),
        'id': opts['id'],
        'cloud_connector_id': opts['cloudConnectorId'],
        'pool_id': opts['poolId'],
        'name': opts['name'],
        'location': opts['location'],
        'price': opts['price']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CloudBucketCollection;
      return this.apiClient.callApi(
        '/cloud_buckets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the indexCloudBucketsByCloudConnector operation.
     * @callback module:api/CloudBucketsApi~indexCloudBucketsByCloudConnectorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CloudBucketCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all cloud buckets.
     * **API Key Scope**: cloud_buckets / index
     * @param {String} cloudConnectorId Numeric ID or name of cloud connector.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of items to display for pagination.
     * @param {Number} opts.offset The number of items to skip for pagination.
     * @param {Array.<String>} opts.sortBy Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
     * @param {String} opts.id Filter on id
     * @param {String} opts.poolId Filter on a pool id
     * @param {String} opts.name Filter on name
     * @param {String} opts.location Filter on location
     * @param {String} opts.price Filter on price
     * @param {module:api/CloudBucketsApi~indexCloudBucketsByCloudConnectorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CloudBucketCollection}
     */
    indexCloudBucketsByCloudConnector(cloudConnectorId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudConnectorId' is set
      if (cloudConnectorId === undefined || cloudConnectorId === null) {
        throw new Error("Missing the required parameter 'cloudConnectorId' when calling indexCloudBucketsByCloudConnector");
      }

      let pathParams = {
        'cloud_connector_id': cloudConnectorId
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sort_by': this.apiClient.buildCollectionParam(opts['sortBy'], 'pipe'),
        'id': opts['id'],
        'pool_id': opts['poolId'],
        'name': opts['name'],
        'location': opts['location'],
        'price': opts['price']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CloudBucketCollection;
      return this.apiClient.callApi(
        '/cloud_connectors/{cloud_connector_id}/cloud_buckets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the indexCloudBucketsByPool operation.
     * @callback module:api/CloudBucketsApi~indexCloudBucketsByPoolCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CloudBucketCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all cloud buckets from pool.
     * **API Key Scope**: cloud_buckets / index
     * @param {String} poolId Numeric ID, or name of pool.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of items to display for pagination.
     * @param {Number} opts.offset The number of items to skip for pagination.
     * @param {Array.<String>} opts.sortBy Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
     * @param {String} opts.id Filter on id
     * @param {String} opts.cloudConnectorId Filter on cloud connector id
     * @param {String} opts.name Filter on name
     * @param {String} opts.location Filter on location
     * @param {String} opts.price Filter on price
     * @param {module:api/CloudBucketsApi~indexCloudBucketsByPoolCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CloudBucketCollection}
     */
    indexCloudBucketsByPool(poolId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'poolId' is set
      if (poolId === undefined || poolId === null) {
        throw new Error("Missing the required parameter 'poolId' when calling indexCloudBucketsByPool");
      }

      let pathParams = {
        'pool_id': poolId
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sort_by': this.apiClient.buildCollectionParam(opts['sortBy'], 'pipe'),
        'id': opts['id'],
        'cloud_connector_id': opts['cloudConnectorId'],
        'name': opts['name'],
        'location': opts['location'],
        'price': opts['price']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CloudBucketCollection;
      return this.apiClient.callApi(
        '/pools/{pool_id}/cloud_buckets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the mountStatusCloudBucket operation.
     * @callback module:api/CloudBucketsApi~mountStatusCloudBucketCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MountStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get mount status of Cloud bucket.
     * **API Key Scope**: cloud_buckets / mount_status
     * @param {String} cloudBucketId Numeric ID or name of cloud bucket.
     * @param {module:api/CloudBucketsApi~mountStatusCloudBucketCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MountStatus}
     */
    mountStatusCloudBucket(cloudBucketId, callback) {
      let postBody = null;
      // verify the required parameter 'cloudBucketId' is set
      if (cloudBucketId === undefined || cloudBucketId === null) {
        throw new Error("Missing the required parameter 'cloudBucketId' when calling mountStatusCloudBucket");
      }

      let pathParams = {
        'cloud_bucket_id': cloudBucketId
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
        '/cloud_buckets/{cloud_bucket_id}/mount', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the mountStatusCloudBucketByCloudConnector operation.
     * @callback module:api/CloudBucketsApi~mountStatusCloudBucketByCloudConnectorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MountStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get mount status of Cloud bucket.
     * **API Key Scope**: cloud_buckets / mount_status
     * @param {String} cloudConnectorId Numeric ID or name of cloud connector.
     * @param {String} cloudBucketId Numeric ID or name of cloud bucket.
     * @param {module:api/CloudBucketsApi~mountStatusCloudBucketByCloudConnectorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MountStatus}
     */
    mountStatusCloudBucketByCloudConnector(cloudConnectorId, cloudBucketId, callback) {
      let postBody = null;
      // verify the required parameter 'cloudConnectorId' is set
      if (cloudConnectorId === undefined || cloudConnectorId === null) {
        throw new Error("Missing the required parameter 'cloudConnectorId' when calling mountStatusCloudBucketByCloudConnector");
      }
      // verify the required parameter 'cloudBucketId' is set
      if (cloudBucketId === undefined || cloudBucketId === null) {
        throw new Error("Missing the required parameter 'cloudBucketId' when calling mountStatusCloudBucketByCloudConnector");
      }

      let pathParams = {
        'cloud_connector_id': cloudConnectorId,
        'cloud_bucket_id': cloudBucketId
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
        '/cloud_connectors/{cloud_connector_id}/cloud_buckets/{cloud_bucket_id}/mount', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the mountStatusCloudBucketByPool operation.
     * @callback module:api/CloudBucketsApi~mountStatusCloudBucketByPoolCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MountStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get mount status of Cloud bucket.
     * **API Key Scope**: cloud_buckets / mount_status
     * @param {String} poolId Numeric ID, or name of pool.
     * @param {String} cloudBucketId Numeric ID or name of cloud bucket.
     * @param {module:api/CloudBucketsApi~mountStatusCloudBucketByPoolCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MountStatus}
     */
    mountStatusCloudBucketByPool(poolId, cloudBucketId, callback) {
      let postBody = null;
      // verify the required parameter 'poolId' is set
      if (poolId === undefined || poolId === null) {
        throw new Error("Missing the required parameter 'poolId' when calling mountStatusCloudBucketByPool");
      }
      // verify the required parameter 'cloudBucketId' is set
      if (cloudBucketId === undefined || cloudBucketId === null) {
        throw new Error("Missing the required parameter 'cloudBucketId' when calling mountStatusCloudBucketByPool");
      }

      let pathParams = {
        'pool_id': poolId,
        'cloud_bucket_id': cloudBucketId
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
        '/pools/{pool_id}/cloud_buckets/{cloud_bucket_id}/mount', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the showCloudBucket operation.
     * @callback module:api/CloudBucketsApi~showCloudBucketCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CloudBucket} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Displays a specific cloud bucket.
     * **API Key Scope**: cloud_buckets / show
     * @param {String} cloudBucketId Numeric ID or name of cloud bucket.
     * @param {module:api/CloudBucketsApi~showCloudBucketCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CloudBucket}
     */
    showCloudBucket(cloudBucketId, callback) {
      let postBody = null;
      // verify the required parameter 'cloudBucketId' is set
      if (cloudBucketId === undefined || cloudBucketId === null) {
        throw new Error("Missing the required parameter 'cloudBucketId' when calling showCloudBucket");
      }

      let pathParams = {
        'cloud_bucket_id': cloudBucketId
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
      let returnType = CloudBucket;
      return this.apiClient.callApi(
        '/cloud_buckets/{cloud_bucket_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the showCloudBucketByCloudConnector operation.
     * @callback module:api/CloudBucketsApi~showCloudBucketByCloudConnectorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CloudBucket} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Displays a specific cloud bucket.
     * **API Key Scope**: cloud_buckets / show
     * @param {String} cloudConnectorId Numeric ID or name of cloud connector.
     * @param {String} cloudBucketId Numeric ID or name of cloud bucket.
     * @param {module:api/CloudBucketsApi~showCloudBucketByCloudConnectorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CloudBucket}
     */
    showCloudBucketByCloudConnector(cloudConnectorId, cloudBucketId, callback) {
      let postBody = null;
      // verify the required parameter 'cloudConnectorId' is set
      if (cloudConnectorId === undefined || cloudConnectorId === null) {
        throw new Error("Missing the required parameter 'cloudConnectorId' when calling showCloudBucketByCloudConnector");
      }
      // verify the required parameter 'cloudBucketId' is set
      if (cloudBucketId === undefined || cloudBucketId === null) {
        throw new Error("Missing the required parameter 'cloudBucketId' when calling showCloudBucketByCloudConnector");
      }

      let pathParams = {
        'cloud_connector_id': cloudConnectorId,
        'cloud_bucket_id': cloudBucketId
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
      let returnType = CloudBucket;
      return this.apiClient.callApi(
        '/cloud_connectors/{cloud_connector_id}/cloud_buckets/{cloud_bucket_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the showCloudBucketByPool operation.
     * @callback module:api/CloudBucketsApi~showCloudBucketByPoolCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CloudBucket} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Displays a specific cloud bucket.
     * **API Key Scope**: cloud_buckets / show
     * @param {String} poolId Numeric ID, or name of pool.
     * @param {String} cloudBucketId Numeric ID or name of cloud bucket.
     * @param {module:api/CloudBucketsApi~showCloudBucketByPoolCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CloudBucket}
     */
    showCloudBucketByPool(poolId, cloudBucketId, callback) {
      let postBody = null;
      // verify the required parameter 'poolId' is set
      if (poolId === undefined || poolId === null) {
        throw new Error("Missing the required parameter 'poolId' when calling showCloudBucketByPool");
      }
      // verify the required parameter 'cloudBucketId' is set
      if (cloudBucketId === undefined || cloudBucketId === null) {
        throw new Error("Missing the required parameter 'cloudBucketId' when calling showCloudBucketByPool");
      }

      let pathParams = {
        'pool_id': poolId,
        'cloud_bucket_id': cloudBucketId
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
      let returnType = CloudBucket;
      return this.apiClient.callApi(
        '/pools/{pool_id}/cloud_buckets/{cloud_bucket_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the syncCloudBuckets operation.
     * @callback module:api/CloudBucketsApi~syncCloudBucketsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActiveJobStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Synchronize internal cloud buckets with their remote equivalent.
     * **API Key Scope**: cloud_buckets / sync
     * @param {String} cloudConnectorId Numeric ID or name of cloud connector.
     * @param {module:api/CloudBucketsApi~syncCloudBucketsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActiveJobStatus}
     */
    syncCloudBuckets(cloudConnectorId, callback) {
      let postBody = null;
      // verify the required parameter 'cloudConnectorId' is set
      if (cloudConnectorId === undefined || cloudConnectorId === null) {
        throw new Error("Missing the required parameter 'cloudConnectorId' when calling syncCloudBuckets");
      }

      let pathParams = {
        'cloud_connector_id': cloudConnectorId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'queued', 'working', 'failed'];
      let returnType = ActiveJobStatus;
      return this.apiClient.callApi(
        '/cloud_connectors/{cloud_connector_id}/cloud_buckets/-/sync', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the syncResultCloudBuckets operation.
     * @callback module:api/CloudBucketsApi~syncResultCloudBucketsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CloudBucketSimpleCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check result of cloud connector sync job.
     * **API Key Scope**: cloud_buckets / sync
     * @param {String} cloudConnectorId Numeric ID or name of cloud connector.
     * @param {String} jobId ID of active job
     * @param {module:api/CloudBucketsApi~syncResultCloudBucketsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CloudBucketSimpleCollection}
     */
    syncResultCloudBuckets(cloudConnectorId, jobId, callback) {
      let postBody = null;
      // verify the required parameter 'cloudConnectorId' is set
      if (cloudConnectorId === undefined || cloudConnectorId === null) {
        throw new Error("Missing the required parameter 'cloudConnectorId' when calling syncResultCloudBuckets");
      }
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling syncResultCloudBuckets");
      }

      let pathParams = {
        'cloud_connector_id': cloudConnectorId
      };
      let queryParams = {
        'job_id': jobId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'queued', 'working', 'failed', ];
      let returnType = CloudBucketSimpleCollection;
      return this.apiClient.callApi(
        '/cloud_connectors/{cloud_connector_id}/cloud_buckets/-/sync', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCloudBucket operation.
     * @callback module:api/CloudBucketsApi~updateCloudBucketCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CloudBucket} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a specific cloud bucket.
     * **API Key Scope**: cloud_buckets / update
     * @param {String} cloudBucketId Numeric ID or name of cloud bucket.
     * @param {module:model/CloudBucket} cloudBucketBody 
     * @param {module:api/CloudBucketsApi~updateCloudBucketCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CloudBucket}
     */
    updateCloudBucket(cloudBucketId, cloudBucketBody, callback) {
      let postBody = cloudBucketBody;
      // verify the required parameter 'cloudBucketId' is set
      if (cloudBucketId === undefined || cloudBucketId === null) {
        throw new Error("Missing the required parameter 'cloudBucketId' when calling updateCloudBucket");
      }
      // verify the required parameter 'cloudBucketBody' is set
      if (cloudBucketBody === undefined || cloudBucketBody === null) {
        throw new Error("Missing the required parameter 'cloudBucketBody' when calling updateCloudBucket");
      }

      let pathParams = {
        'cloud_bucket_id': cloudBucketId
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
      let returnType = CloudBucket;
      return this.apiClient.callApi(
        '/cloud_buckets/{cloud_bucket_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCloudBucketByCloudConnector operation.
     * @callback module:api/CloudBucketsApi~updateCloudBucketByCloudConnectorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CloudBucket} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a specific cloud bucket.
     * **API Key Scope**: cloud_buckets / update
     * @param {String} cloudConnectorId Numeric ID or name of cloud connector.
     * @param {String} cloudBucketId Numeric ID or name of cloud bucket.
     * @param {module:model/CloudBucket} cloudBucketBody 
     * @param {module:api/CloudBucketsApi~updateCloudBucketByCloudConnectorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CloudBucket}
     */
    updateCloudBucketByCloudConnector(cloudConnectorId, cloudBucketId, cloudBucketBody, callback) {
      let postBody = cloudBucketBody;
      // verify the required parameter 'cloudConnectorId' is set
      if (cloudConnectorId === undefined || cloudConnectorId === null) {
        throw new Error("Missing the required parameter 'cloudConnectorId' when calling updateCloudBucketByCloudConnector");
      }
      // verify the required parameter 'cloudBucketId' is set
      if (cloudBucketId === undefined || cloudBucketId === null) {
        throw new Error("Missing the required parameter 'cloudBucketId' when calling updateCloudBucketByCloudConnector");
      }
      // verify the required parameter 'cloudBucketBody' is set
      if (cloudBucketBody === undefined || cloudBucketBody === null) {
        throw new Error("Missing the required parameter 'cloudBucketBody' when calling updateCloudBucketByCloudConnector");
      }

      let pathParams = {
        'cloud_connector_id': cloudConnectorId,
        'cloud_bucket_id': cloudBucketId
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
      let returnType = CloudBucket;
      return this.apiClient.callApi(
        '/cloud_connectors/{cloud_connector_id}/cloud_buckets/{cloud_bucket_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCloudBucketByPool operation.
     * @callback module:api/CloudBucketsApi~updateCloudBucketByPoolCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CloudBucket} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a specific cloud bucket.
     * **API Key Scope**: cloud_buckets / update
     * @param {String} poolId Numeric ID, or name of pool.
     * @param {String} cloudBucketId Numeric ID or name of cloud bucket.
     * @param {module:model/CloudBucket} cloudBucketBody 
     * @param {module:api/CloudBucketsApi~updateCloudBucketByPoolCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CloudBucket}
     */
    updateCloudBucketByPool(poolId, cloudBucketId, cloudBucketBody, callback) {
      let postBody = cloudBucketBody;
      // verify the required parameter 'poolId' is set
      if (poolId === undefined || poolId === null) {
        throw new Error("Missing the required parameter 'poolId' when calling updateCloudBucketByPool");
      }
      // verify the required parameter 'cloudBucketId' is set
      if (cloudBucketId === undefined || cloudBucketId === null) {
        throw new Error("Missing the required parameter 'cloudBucketId' when calling updateCloudBucketByPool");
      }
      // verify the required parameter 'cloudBucketBody' is set
      if (cloudBucketBody === undefined || cloudBucketBody === null) {
        throw new Error("Missing the required parameter 'cloudBucketBody' when calling updateCloudBucketByPool");
      }

      let pathParams = {
        'pool_id': poolId,
        'cloud_bucket_id': cloudBucketId
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
      let returnType = CloudBucket;
      return this.apiClient.callApi(
        '/pools/{pool_id}/cloud_buckets/{cloud_bucket_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
