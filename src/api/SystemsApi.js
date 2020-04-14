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
import Reset from '../model/Reset';

/**
* Systems service.
* @module api/SystemsApi
* @version 1.85.0
*/
export default class SystemsApi {

    /**
    * Constructs a new SystemsApi. 
    * @alias module:api/SystemsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the downloadResetVars operation.
     * @callback module:api/SystemsApi~downloadResetVarsCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a YAML file with selected tables and downloads it
     * @param {module:model/Reset} resetForm 
     * @param {module:api/SystemsApi~downloadResetVarsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    downloadResetVars(resetForm, callback) {
      let postBody = resetForm;
      // verify the required parameter 'resetForm' is set
      if (resetForm === undefined || resetForm === null) {
        throw new Error("Missing the required parameter 'resetForm' when calling downloadResetVars");
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
      let accepts = ['application/x-yaml'];
      let returnType = File;
      return this.apiClient.callApi(
        '/systems/reset/generate_vars', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the resultDownloadTraces operation.
     * @callback module:api/SystemsApi~resultDownloadTracesCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check result of a download traces job.
     * **API Key Scope**: systems / download_traces
     * @param {String} jobId ID of active job
     * @param {module:api/SystemsApi~resultDownloadTracesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    resultDownloadTraces(jobId, callback) {
      let postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling resultDownloadTraces");
      }

      let pathParams = {
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
      let accepts = ['application/json', 'application/tar+gzip', 'queued', 'working', 'failed', ];
      let returnType = File;
      return this.apiClient.callApi(
        '/systems/download_traces', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the triggerDownloadTraces operation.
     * @callback module:api/SystemsApi~triggerDownloadTracesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActiveJobStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Trigger a download traces request.
     * **API Key Scope**: systems / download_traces
     * @param {module:model/String} type Type of traces to download
     * @param {module:api/SystemsApi~triggerDownloadTracesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActiveJobStatus}
     */
    triggerDownloadTraces(type, callback) {
      let postBody = null;
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling triggerDownloadTraces");
      }

      let pathParams = {
      };
      let queryParams = {
        'type': type
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
        '/systems/download_traces', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
