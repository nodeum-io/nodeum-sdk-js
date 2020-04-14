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
import TaskCallback from '../model/TaskCallback';
import TaskCallbackCollection from '../model/TaskCallbackCollection';

/**
* TaskCallbacks service.
* @module api/TaskCallbacksApi
* @version 1.85.0
*/
export default class TaskCallbacksApi {

    /**
    * Constructs a new TaskCallbacksApi. 
    * @alias module:api/TaskCallbacksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createTaskCallback operation.
     * @callback module:api/TaskCallbacksApi~createTaskCallbackCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskCallback} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new task callback.
     * **API Key Scope**: task_callbacks / create
     * @param {String} taskId Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
     * @param {module:model/TaskCallback} taskCallbackBody 
     * @param {module:api/TaskCallbacksApi~createTaskCallbackCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskCallback}
     */
    createTaskCallback(taskId, taskCallbackBody, callback) {
      let postBody = taskCallbackBody;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling createTaskCallback");
      }
      // verify the required parameter 'taskCallbackBody' is set
      if (taskCallbackBody === undefined || taskCallbackBody === null) {
        throw new Error("Missing the required parameter 'taskCallbackBody' when calling createTaskCallback");
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
      let returnType = TaskCallback;
      return this.apiClient.callApi(
        '/tasks/{task_id}/task_callbacks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the destroyTaskCallback operation.
     * @callback module:api/TaskCallbacksApi~destroyTaskCallbackCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Destroys a specific task callback.
     * **API Key Scope**: task_callbacks / destroy
     * @param {String} taskId Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
     * @param {Number} taskCallbackId Numeric ID of task callback.
     * @param {module:api/TaskCallbacksApi~destroyTaskCallbackCallback} callback The callback function, accepting three arguments: error, data, response
     */
    destroyTaskCallback(taskId, taskCallbackId, callback) {
      let postBody = null;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling destroyTaskCallback");
      }
      // verify the required parameter 'taskCallbackId' is set
      if (taskCallbackId === undefined || taskCallbackId === null) {
        throw new Error("Missing the required parameter 'taskCallbackId' when calling destroyTaskCallback");
      }

      let pathParams = {
        'task_id': taskId,
        'task_callback_id': taskCallbackId
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
        '/tasks/{task_id}/task_callbacks/{task_callback_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the indexTaskCallbacks operation.
     * @callback module:api/TaskCallbacksApi~indexTaskCallbacksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskCallbackCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all task callbacks.
     * **API Key Scope**: task_callbacks / index
     * @param {String} taskId Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of items to display for pagination.
     * @param {Number} opts.offset The number of items to skip for pagination.
     * @param {Array.<String>} opts.sortBy Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
     * @param {String} opts.id Filter on id
     * @param {String} opts.type Filter on type
     * @param {String} opts.script Filter on task callback script
     * @param {module:api/TaskCallbacksApi~indexTaskCallbacksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskCallbackCollection}
     */
    indexTaskCallbacks(taskId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling indexTaskCallbacks");
      }

      let pathParams = {
        'task_id': taskId
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sort_by': this.apiClient.buildCollectionParam(opts['sortBy'], 'pipe'),
        'id': opts['id'],
        'type': opts['type'],
        'script': opts['script']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TaskCallbackCollection;
      return this.apiClient.callApi(
        '/tasks/{task_id}/task_callbacks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the showTaskCallback operation.
     * @callback module:api/TaskCallbacksApi~showTaskCallbackCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskCallback} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Displays a specific task callback.
     * **API Key Scope**: task_callbacks / show
     * @param {String} taskId Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
     * @param {Number} taskCallbackId Numeric ID of task callback.
     * @param {module:api/TaskCallbacksApi~showTaskCallbackCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskCallback}
     */
    showTaskCallback(taskId, taskCallbackId, callback) {
      let postBody = null;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling showTaskCallback");
      }
      // verify the required parameter 'taskCallbackId' is set
      if (taskCallbackId === undefined || taskCallbackId === null) {
        throw new Error("Missing the required parameter 'taskCallbackId' when calling showTaskCallback");
      }

      let pathParams = {
        'task_id': taskId,
        'task_callback_id': taskCallbackId
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
      let returnType = TaskCallback;
      return this.apiClient.callApi(
        '/tasks/{task_id}/task_callbacks/{task_callback_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTaskCallback operation.
     * @callback module:api/TaskCallbacksApi~updateTaskCallbackCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskCallback} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a specific task callback.
     * **API Key Scope**: task_callbacks / update
     * @param {String} taskId Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
     * @param {Number} taskCallbackId Numeric ID of task callback.
     * @param {module:model/TaskCallback} taskCallbackBody 
     * @param {module:api/TaskCallbacksApi~updateTaskCallbackCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskCallback}
     */
    updateTaskCallback(taskId, taskCallbackId, taskCallbackBody, callback) {
      let postBody = taskCallbackBody;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling updateTaskCallback");
      }
      // verify the required parameter 'taskCallbackId' is set
      if (taskCallbackId === undefined || taskCallbackId === null) {
        throw new Error("Missing the required parameter 'taskCallbackId' when calling updateTaskCallback");
      }
      // verify the required parameter 'taskCallbackBody' is set
      if (taskCallbackBody === undefined || taskCallbackBody === null) {
        throw new Error("Missing the required parameter 'taskCallbackBody' when calling updateTaskCallback");
      }

      let pathParams = {
        'task_id': taskId,
        'task_callback_id': taskCallbackId
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
      let returnType = TaskCallback;
      return this.apiClient.callApi(
        '/tasks/{task_id}/task_callbacks/{task_callback_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
