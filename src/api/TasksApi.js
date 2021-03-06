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
import Error from '../model/Error';
import Task from '../model/Task';
import TaskCollection from '../model/TaskCollection';

/**
* Tasks service.
* @module api/TasksApi
* @version 1.88.0
*/
export default class TasksApi {

    /**
    * Constructs a new TasksApi. 
    * @alias module:api/TasksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createTask operation.
     * @callback module:api/TasksApi~createTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Task} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new task.
     * **API Key Scope**: tasks / create 
     * @param {module:model/Task} taskBody 
     * @param {module:api/TasksApi~createTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Task}
     */
    createTask(taskBody, callback) {
      let postBody = taskBody;
      // verify the required parameter 'taskBody' is set
      if (taskBody === undefined || taskBody === null) {
        throw new Error("Missing the required parameter 'taskBody' when calling createTask");
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
      let returnType = Task;
      return this.apiClient.callApi(
        '/tasks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the destroyTask operation.
     * @callback module:api/TasksApi~destroyTaskCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Destroys a specific task.
     * **API Key Scope**: tasks / destroy
     * @param {String} taskId Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
     * @param {module:api/TasksApi~destroyTaskCallback} callback The callback function, accepting three arguments: error, data, response
     */
    destroyTask(taskId, callback) {
      let postBody = null;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling destroyTask");
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
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/tasks/{task_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the indexTasks operation.
     * @callback module:api/TasksApi~indexTasksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all tasks.
     * **API Key Scope**: tasks / index
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of items to display for pagination.
     * @param {Number} opts.offset The number of items to skip for pagination.
     * @param {Array.<String>} opts.sortBy Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
     * @param {String} opts.id Filter on id
     * @param {String} opts.name Filter on name
     * @param {String} opts.comment Filter on comment
     * @param {String} opts.workflowType Filter on task workflow type
     * @param {String} opts.workflowAction Filter on task workflow action
     * @param {String} opts.sourceType Filter on task source type
     * @param {String} opts.destinationType Filter on task destination type
     * @param {String} opts.priority Filter on priority
     * @param {String} opts.conflictResolution Filter on conflict resolution
     * @param {String} opts.action Filter on action
     * @param {String} opts.activate Filter on activate
     * @param {String} opts.creationDate Filter on creation date
     * @param {String} opts.creationUsername Filter on creation username
     * @param {String} opts.modificationDate Filter on modification date
     * @param {String} opts.modificationUsername Filter on modification username
     * @param {String} opts.jobStarted Filter on job started
     * @param {String} opts.jobFinished Filter on job finished
     * @param {String} opts.status Filter on status
     * @param {String} opts.processedSize Filter on processed size
     * @param {String} opts.toProcessSize Filter on to process size
     * @param {String} opts.sourcePoolId Filter on task source pool id
     * @param {String} opts.sourcePoolName Filter on task source pool name
     * @param {String} opts.sourceTapeId Filter on task source tape id
     * @param {String} opts.sourceTapeBarcode Filter on task source tape barcode
     * @param {String} opts.destinationPoolId Filter on task destination pool id
     * @param {String} opts.destinationPoolName Filter on task destination pool name
     * @param {String} opts.destinationTapeId Filter on task destination tape id
     * @param {String} opts.destinationTapeBarcode Filter on task destination tape barcode
     * @param {module:api/TasksApi~indexTasksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskCollection}
     */
    indexTasks(opts, callback) {
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
        'workflow_type': opts['workflowType'],
        'workflow_action': opts['workflowAction'],
        'source_type': opts['sourceType'],
        'destination_type': opts['destinationType'],
        'priority': opts['priority'],
        'conflict_resolution': opts['conflictResolution'],
        'action': opts['action'],
        'activate': opts['activate'],
        'creation_date': opts['creationDate'],
        'creation_username': opts['creationUsername'],
        'modification_date': opts['modificationDate'],
        'modification_username': opts['modificationUsername'],
        'job_started': opts['jobStarted'],
        'job_finished': opts['jobFinished'],
        'status': opts['status'],
        'processed_size': opts['processedSize'],
        'to_process_size': opts['toProcessSize'],
        'source_pool_id': opts['sourcePoolId'],
        'source_pool_name': opts['sourcePoolName'],
        'source_tape_id': opts['sourceTapeId'],
        'source_tape_barcode': opts['sourceTapeBarcode'],
        'destination_pool_id': opts['destinationPoolId'],
        'destination_pool_name': opts['destinationPoolName'],
        'destination_tape_id': opts['destinationTapeId'],
        'destination_tape_barcode': opts['destinationTapeBarcode']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TaskCollection;
      return this.apiClient.callApi(
        '/tasks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the pauseTask operation.
     * @callback module:api/TasksApi~pauseTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActiveJobStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Pause a task.
     * **API Key Scope**: tasks / action
     * @param {String} taskId Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
     * @param {module:api/TasksApi~pauseTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActiveJobStatus}
     */
    pauseTask(taskId, callback) {
      let postBody = null;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling pauseTask");
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
      let contentTypes = [];
      let accepts = ['application/json', 'queued', 'working', 'failed'];
      let returnType = ActiveJobStatus;
      return this.apiClient.callApi(
        '/tasks/{task_id}/action/pause', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the pauseTaskResult operation.
     * @callback module:api/TasksApi~pauseTaskResultCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActiveJobStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check result of a task pause request.
     * **API Key Scope**: tasks / action
     * @param {String} taskId Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
     * @param {String} jobId ID of active job
     * @param {module:api/TasksApi~pauseTaskResultCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActiveJobStatus}
     */
    pauseTaskResult(taskId, jobId, callback) {
      let postBody = null;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling pauseTaskResult");
      }
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling pauseTaskResult");
      }

      let pathParams = {
        'task_id': taskId
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
      let accepts = ['application/json', 'queued', 'working', 'failed'];
      let returnType = ActiveJobStatus;
      return this.apiClient.callApi(
        '/tasks/{task_id}/action/pause', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the resumeTask operation.
     * @callback module:api/TasksApi~resumeTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActiveJobStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resume a task.
     * **API Key Scope**: tasks / action
     * @param {String} taskId Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
     * @param {module:api/TasksApi~resumeTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActiveJobStatus}
     */
    resumeTask(taskId, callback) {
      let postBody = null;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling resumeTask");
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
      let contentTypes = [];
      let accepts = ['application/json', 'queued', 'working', 'failed'];
      let returnType = ActiveJobStatus;
      return this.apiClient.callApi(
        '/tasks/{task_id}/action/resume', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the resumeTaskResult operation.
     * @callback module:api/TasksApi~resumeTaskResultCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActiveJobStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check result of a task resume request.
     * **API Key Scope**: tasks / action
     * @param {String} taskId Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
     * @param {String} jobId ID of active job
     * @param {module:api/TasksApi~resumeTaskResultCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActiveJobStatus}
     */
    resumeTaskResult(taskId, jobId, callback) {
      let postBody = null;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling resumeTaskResult");
      }
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling resumeTaskResult");
      }

      let pathParams = {
        'task_id': taskId
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
      let accepts = ['application/json', 'queued', 'working', 'failed'];
      let returnType = ActiveJobStatus;
      return this.apiClient.callApi(
        '/tasks/{task_id}/action/resume', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the runTask operation.
     * @callback module:api/TasksApi~runTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActiveJobStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Run a task.
     * **API Key Scope**: tasks / action
     * @param {String} taskId Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
     * @param {module:api/TasksApi~runTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActiveJobStatus}
     */
    runTask(taskId, callback) {
      let postBody = null;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling runTask");
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
      let contentTypes = [];
      let accepts = ['application/json', 'queued', 'working', 'failed'];
      let returnType = ActiveJobStatus;
      return this.apiClient.callApi(
        '/tasks/{task_id}/action/run', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the runTaskResult operation.
     * @callback module:api/TasksApi~runTaskResultCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActiveJobStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check result of a task run request.
     * **API Key Scope**: tasks / action
     * @param {String} taskId Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
     * @param {String} jobId ID of active job
     * @param {module:api/TasksApi~runTaskResultCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActiveJobStatus}
     */
    runTaskResult(taskId, jobId, callback) {
      let postBody = null;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling runTaskResult");
      }
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling runTaskResult");
      }

      let pathParams = {
        'task_id': taskId
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
      let accepts = ['application/json', 'queued', 'working', 'failed'];
      let returnType = ActiveJobStatus;
      return this.apiClient.callApi(
        '/tasks/{task_id}/action/run', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the showTask operation.
     * @callback module:api/TasksApi~showTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Task} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Displays a specific task.
     * **API Key Scope**: tasks / show
     * @param {String} taskId Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
     * @param {module:api/TasksApi~showTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Task}
     */
    showTask(taskId, callback) {
      let postBody = null;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling showTask");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Task;
      return this.apiClient.callApi(
        '/tasks/{task_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the stopTask operation.
     * @callback module:api/TasksApi~stopTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActiveJobStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Stop a task.
     * **API Key Scope**: tasks / action
     * @param {String} taskId Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
     * @param {module:api/TasksApi~stopTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActiveJobStatus}
     */
    stopTask(taskId, callback) {
      let postBody = null;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling stopTask");
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
      let contentTypes = [];
      let accepts = ['application/json', 'queued', 'working', 'failed'];
      let returnType = ActiveJobStatus;
      return this.apiClient.callApi(
        '/tasks/{task_id}/action/stop', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the stopTaskResult operation.
     * @callback module:api/TasksApi~stopTaskResultCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActiveJobStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check result of a task stop request.
     * **API Key Scope**: tasks / action
     * @param {String} taskId Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
     * @param {String} jobId ID of active job
     * @param {module:api/TasksApi~stopTaskResultCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActiveJobStatus}
     */
    stopTaskResult(taskId, jobId, callback) {
      let postBody = null;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling stopTaskResult");
      }
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling stopTaskResult");
      }

      let pathParams = {
        'task_id': taskId
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
      let accepts = ['application/json', 'queued', 'working', 'failed'];
      let returnType = ActiveJobStatus;
      return this.apiClient.callApi(
        '/tasks/{task_id}/action/stop', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTask operation.
     * @callback module:api/TasksApi~updateTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Task} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a specific task.
     * **API Key Scope**: tasks / update
     * @param {String} taskId Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
     * @param {module:model/Task} taskBody 
     * @param {module:api/TasksApi~updateTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Task}
     */
    updateTask(taskId, taskBody, callback) {
      let postBody = taskBody;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling updateTask");
      }
      // verify the required parameter 'taskBody' is set
      if (taskBody === undefined || taskBody === null) {
        throw new Error("Missing the required parameter 'taskBody' when calling updateTask");
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
      let returnType = Task;
      return this.apiClient.callApi(
        '/tasks/{task_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
