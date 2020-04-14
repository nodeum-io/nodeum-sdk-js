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
import TaskOption from '../model/TaskOption';
import TaskOptionCollection from '../model/TaskOptionCollection';

/**
* TaskOptions service.
* @module api/TaskOptionsApi
* @version 1.85.0
*/
export default class TaskOptionsApi {

    /**
    * Constructs a new TaskOptionsApi. 
    * @alias module:api/TaskOptionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createTaskOption operation.
     * @callback module:api/TaskOptionsApi~createTaskOptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskOption} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new task option.
     * **API Key Scope**: task_options / create
     * @param {String} taskId Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
     * @param {module:model/TaskOption} taskOptionBody 
     * @param {module:api/TaskOptionsApi~createTaskOptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskOption}
     */
    createTaskOption(taskId, taskOptionBody, callback) {
      let postBody = taskOptionBody;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling createTaskOption");
      }
      // verify the required parameter 'taskOptionBody' is set
      if (taskOptionBody === undefined || taskOptionBody === null) {
        throw new Error("Missing the required parameter 'taskOptionBody' when calling createTaskOption");
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
      let returnType = TaskOption;
      return this.apiClient.callApi(
        '/tasks/{task_id}/task_options', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the destroyTaskOption operation.
     * @callback module:api/TaskOptionsApi~destroyTaskOptionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Destroys a specific task option.
     * **API Key Scope**: task_options / destroy
     * @param {String} taskId Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
     * @param {Number} taskOptionId Numeric ID of task option.
     * @param {module:api/TaskOptionsApi~destroyTaskOptionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    destroyTaskOption(taskId, taskOptionId, callback) {
      let postBody = null;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling destroyTaskOption");
      }
      // verify the required parameter 'taskOptionId' is set
      if (taskOptionId === undefined || taskOptionId === null) {
        throw new Error("Missing the required parameter 'taskOptionId' when calling destroyTaskOption");
      }

      let pathParams = {
        'task_id': taskId,
        'task_option_id': taskOptionId
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
        '/tasks/{task_id}/task_options/{task_option_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the indexTaskOptions operation.
     * @callback module:api/TaskOptionsApi~indexTaskOptionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskOptionCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all task options.
     * **API Key Scope**: task_options / index
     * @param {String} taskId Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of items to display for pagination.
     * @param {Number} opts.offset The number of items to skip for pagination.
     * @param {Array.<String>} opts.sortBy Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
     * @param {String} opts.id Filter on id
     * @param {String} opts.type Filter on type
     * @param {String} opts.value Filter on value
     * @param {module:api/TaskOptionsApi~indexTaskOptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskOptionCollection}
     */
    indexTaskOptions(taskId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling indexTaskOptions");
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
        'value': opts['value']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TaskOptionCollection;
      return this.apiClient.callApi(
        '/tasks/{task_id}/task_options', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the showTaskOption operation.
     * @callback module:api/TaskOptionsApi~showTaskOptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskOption} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Displays a specific task option.
     * **API Key Scope**: task_options / show
     * @param {String} taskId Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
     * @param {Number} taskOptionId Numeric ID of task option.
     * @param {module:api/TaskOptionsApi~showTaskOptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskOption}
     */
    showTaskOption(taskId, taskOptionId, callback) {
      let postBody = null;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling showTaskOption");
      }
      // verify the required parameter 'taskOptionId' is set
      if (taskOptionId === undefined || taskOptionId === null) {
        throw new Error("Missing the required parameter 'taskOptionId' when calling showTaskOption");
      }

      let pathParams = {
        'task_id': taskId,
        'task_option_id': taskOptionId
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
      let returnType = TaskOption;
      return this.apiClient.callApi(
        '/tasks/{task_id}/task_options/{task_option_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTaskOption operation.
     * @callback module:api/TaskOptionsApi~updateTaskOptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskOption} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a specific task option.
     * **API Key Scope**: task_options / update
     * @param {String} taskId Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
     * @param {Number} taskOptionId Numeric ID of task option.
     * @param {module:model/TaskOption} taskOptionBody 
     * @param {module:api/TaskOptionsApi~updateTaskOptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskOption}
     */
    updateTaskOption(taskId, taskOptionId, taskOptionBody, callback) {
      let postBody = taskOptionBody;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling updateTaskOption");
      }
      // verify the required parameter 'taskOptionId' is set
      if (taskOptionId === undefined || taskOptionId === null) {
        throw new Error("Missing the required parameter 'taskOptionId' when calling updateTaskOption");
      }
      // verify the required parameter 'taskOptionBody' is set
      if (taskOptionBody === undefined || taskOptionBody === null) {
        throw new Error("Missing the required parameter 'taskOptionBody' when calling updateTaskOption");
      }

      let pathParams = {
        'task_id': taskId,
        'task_option_id': taskOptionId
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
      let returnType = TaskOption;
      return this.apiClient.callApi(
        '/tasks/{task_id}/task_options/{task_option_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
