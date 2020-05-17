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
import TaskSourceCollection from '../model/TaskSourceCollection';
import TaskSourceDown from '../model/TaskSourceDown';
import TaskSourceUp from '../model/TaskSourceUp';

/**
* TaskSources service.
* @module api/TaskSourcesApi
* @version 1.86.0
*/
export default class TaskSourcesApi {

    /**
    * Constructs a new TaskSourcesApi. 
    * @alias module:api/TaskSourcesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createTaskSource operation.
     * @callback module:api/TaskSourcesApi~createTaskSourceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskSourceDown} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new task source.
     * **API Key Scope**: task_sources / create
     * @param {String} taskId Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
     * @param {module:model/TaskSourceUp} taskSourceBody 
     * @param {module:api/TaskSourcesApi~createTaskSourceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskSourceDown}
     */
    createTaskSource(taskId, taskSourceBody, callback) {
      let postBody = taskSourceBody;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling createTaskSource");
      }
      // verify the required parameter 'taskSourceBody' is set
      if (taskSourceBody === undefined || taskSourceBody === null) {
        throw new Error("Missing the required parameter 'taskSourceBody' when calling createTaskSource");
      }

      let pathParams = {
        'task_id': taskId
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
      let returnType = TaskSourceDown;
      return this.apiClient.callApi(
        '/tasks/{task_id}/task_sources', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the destroyTaskSource operation.
     * @callback module:api/TaskSourcesApi~destroyTaskSourceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Destroys a specific task source.
     * **API Key Scope**: task_sources / destroy
     * @param {String} taskId Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
     * @param {Number} taskSourceId Numeric ID of task source.
     * @param {module:api/TaskSourcesApi~destroyTaskSourceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    destroyTaskSource(taskId, taskSourceId, callback) {
      let postBody = null;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling destroyTaskSource");
      }
      // verify the required parameter 'taskSourceId' is set
      if (taskSourceId === undefined || taskSourceId === null) {
        throw new Error("Missing the required parameter 'taskSourceId' when calling destroyTaskSource");
      }

      let pathParams = {
        'task_id': taskId,
        'task_source_id': taskSourceId
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
        '/tasks/{task_id}/task_sources/{task_source_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the indexTaskSources operation.
     * @callback module:api/TaskSourcesApi~indexTaskSourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskSourceCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all task sources.
     * **API Key Scope**: task_sources / index
     * @param {String} taskId Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of items to display for pagination.
     * @param {Number} opts.offset The number of items to skip for pagination.
     * @param {Array.<String>} opts.sortBy Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
     * @param {String} opts.id Filter on id
     * @param {String} opts.fileId Filter on file id
     * @param {String} opts.importFileId Filter on import file id
     * @param {String} opts.tapeId Filter on tape id
     * @param {String} opts.poolId Filter on a pool id
     * @param {module:api/TaskSourcesApi~indexTaskSourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskSourceCollection}
     */
    indexTaskSources(taskId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling indexTaskSources");
      }

      let pathParams = {
        'task_id': taskId
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sort_by': this.apiClient.buildCollectionParam(opts['sortBy'], 'pipe'),
        'id': opts['id'],
        'file_id': opts['fileId'],
        'import_file_id': opts['importFileId'],
        'tape_id': opts['tapeId'],
        'pool_id': opts['poolId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TaskSourceCollection;
      return this.apiClient.callApi(
        '/tasks/{task_id}/task_sources', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the showTaskSource operation.
     * @callback module:api/TaskSourcesApi~showTaskSourceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskSourceDown} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Displays a specific task source.
     * **API Key Scope**: task_sources / show
     * @param {String} taskId Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
     * @param {Number} taskSourceId Numeric ID of task source.
     * @param {module:api/TaskSourcesApi~showTaskSourceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskSourceDown}
     */
    showTaskSource(taskId, taskSourceId, callback) {
      let postBody = null;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling showTaskSource");
      }
      // verify the required parameter 'taskSourceId' is set
      if (taskSourceId === undefined || taskSourceId === null) {
        throw new Error("Missing the required parameter 'taskSourceId' when calling showTaskSource");
      }

      let pathParams = {
        'task_id': taskId,
        'task_source_id': taskSourceId
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
      let returnType = TaskSourceDown;
      return this.apiClient.callApi(
        '/tasks/{task_id}/task_sources/{task_source_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTaskSource operation.
     * @callback module:api/TaskSourcesApi~updateTaskSourceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskSourceDown} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a specific task source.
     * **API Key Scope**: task_sources / update
     * @param {String} taskId Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
     * @param {Number} taskSourceId Numeric ID of task source.
     * @param {module:model/TaskSourceUp} taskSourceBody 
     * @param {module:api/TaskSourcesApi~updateTaskSourceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskSourceDown}
     */
    updateTaskSource(taskId, taskSourceId, taskSourceBody, callback) {
      let postBody = taskSourceBody;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling updateTaskSource");
      }
      // verify the required parameter 'taskSourceId' is set
      if (taskSourceId === undefined || taskSourceId === null) {
        throw new Error("Missing the required parameter 'taskSourceId' when calling updateTaskSource");
      }
      // verify the required parameter 'taskSourceBody' is set
      if (taskSourceBody === undefined || taskSourceBody === null) {
        throw new Error("Missing the required parameter 'taskSourceBody' when calling updateTaskSource");
      }

      let pathParams = {
        'task_id': taskId,
        'task_source_id': taskSourceId
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
      let returnType = TaskSourceDown;
      return this.apiClient.callApi(
        '/tasks/{task_id}/task_sources/{task_source_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
