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

import ApiClient from '../ApiClient';

/**
 * The TaskExecution model module.
 * @module model/TaskExecution
 * @version 1.85.0
 */
class TaskExecution {
    /**
     * Constructs a new <code>TaskExecution</code>.
     * @alias module:model/TaskExecution
     */
    constructor() { 
        
        TaskExecution.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaskExecution</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskExecution} obj Optional instance to populate.
     * @return {module:model/TaskExecution} The populated <code>TaskExecution</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskExecution();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('task_id')) {
                obj['task_id'] = ApiClient.convertToType(data['task_id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('workflow_type')) {
                obj['workflow_type'] = ApiClient.convertToType(data['workflow_type'], 'String');
            }
            if (data.hasOwnProperty('workflow_action')) {
                obj['workflow_action'] = ApiClient.convertToType(data['workflow_action'], 'String');
            }
            if (data.hasOwnProperty('source_type')) {
                obj['source_type'] = ApiClient.convertToType(data['source_type'], 'String');
            }
            if (data.hasOwnProperty('destination_type')) {
                obj['destination_type'] = ApiClient.convertToType(data['destination_type'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('log_time')) {
                obj['log_time'] = ApiClient.convertToType(data['log_time'], 'String');
            }
            if (data.hasOwnProperty('job_started')) {
                obj['job_started'] = ApiClient.convertToType(data['job_started'], 'String');
            }
            if (data.hasOwnProperty('job_finished')) {
                obj['job_finished'] = ApiClient.convertToType(data['job_finished'], 'String');
            }
            if (data.hasOwnProperty('to_process_size')) {
                obj['to_process_size'] = ApiClient.convertToType(data['to_process_size'], 'Number');
            }
            if (data.hasOwnProperty('processed_size')) {
                obj['processed_size'] = ApiClient.convertToType(data['processed_size'], 'Number');
            }
            if (data.hasOwnProperty('to_process_files')) {
                obj['to_process_files'] = ApiClient.convertToType(data['to_process_files'], 'Number');
            }
            if (data.hasOwnProperty('processed_files')) {
                obj['processed_files'] = ApiClient.convertToType(data['processed_files'], 'Number');
            }
            if (data.hasOwnProperty('finalized_files')) {
                obj['finalized_files'] = ApiClient.convertToType(data['finalized_files'], 'Number');
            }
            if (data.hasOwnProperty('estimation_time')) {
                obj['estimation_time'] = ApiClient.convertToType(data['estimation_time'], 'Number');
            }
            if (data.hasOwnProperty('bandwidth')) {
                obj['bandwidth'] = ApiClient.convertToType(data['bandwidth'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
TaskExecution.prototype['id'] = undefined;

/**
 * @member {Number} task_id
 */
TaskExecution.prototype['task_id'] = undefined;

/**
 * @member {String} name
 */
TaskExecution.prototype['name'] = undefined;

/**
 * @member {module:model/TaskExecution.WorkflowTypeEnum} workflow_type
 */
TaskExecution.prototype['workflow_type'] = undefined;

/**
 * @member {module:model/TaskExecution.WorkflowActionEnum} workflow_action
 */
TaskExecution.prototype['workflow_action'] = undefined;

/**
 * @member {module:model/TaskExecution.SourceTypeEnum} source_type
 */
TaskExecution.prototype['source_type'] = undefined;

/**
 * @member {module:model/TaskExecution.DestinationTypeEnum} destination_type
 */
TaskExecution.prototype['destination_type'] = undefined;

/**
 * @member {module:model/TaskExecution.StatusEnum} status
 */
TaskExecution.prototype['status'] = undefined;

/**
 * @member {String} log_time
 */
TaskExecution.prototype['log_time'] = undefined;

/**
 * @member {String} job_started
 */
TaskExecution.prototype['job_started'] = undefined;

/**
 * @member {String} job_finished
 */
TaskExecution.prototype['job_finished'] = undefined;

/**
 * @member {Number} to_process_size
 */
TaskExecution.prototype['to_process_size'] = undefined;

/**
 * @member {Number} processed_size
 */
TaskExecution.prototype['processed_size'] = undefined;

/**
 * @member {Number} to_process_files
 */
TaskExecution.prototype['to_process_files'] = undefined;

/**
 * @member {Number} processed_files
 */
TaskExecution.prototype['processed_files'] = undefined;

/**
 * @member {Number} finalized_files
 */
TaskExecution.prototype['finalized_files'] = undefined;

/**
 * @member {Number} estimation_time
 */
TaskExecution.prototype['estimation_time'] = undefined;

/**
 * @member {Number} bandwidth
 */
TaskExecution.prototype['bandwidth'] = undefined;





/**
 * Allowed values for the <code>workflow_type</code> property.
 * @enum {String}
 * @readonly
 */
TaskExecution['WorkflowTypeEnum'] = {

    /**
     * value: "active_archive"
     * @const
     */
    "active_archive": "active_archive",

    /**
     * value: "offline_archive"
     * @const
     */
    "offline_archive": "offline_archive",

    /**
     * value: "data_exchange"
     * @const
     */
    "data_exchange": "data_exchange",

    /**
     * value: "data_migration"
     * @const
     */
    "data_migration": "data_migration",

    /**
     * value: "maintenance"
     * @const
     */
    "maintenance": "maintenance",

    /**
     * value: "data_enrichment"
     * @const
     */
    "data_enrichment": "data_enrichment"
};


/**
 * Allowed values for the <code>workflow_action</code> property.
 * @enum {String}
 * @readonly
 */
TaskExecution['WorkflowActionEnum'] = {

    /**
     * value: "copy"
     * @const
     */
    "copy": "copy",

    /**
     * value: "move"
     * @const
     */
    "move": "move",

    /**
     * value: "scan"
     * @const
     */
    "scan": "scan",

    /**
     * value: "rehydratation"
     * @const
     */
    "rehydratation": "rehydratation",

    /**
     * value: "format"
     * @const
     */
    "format": "format",

    /**
     * value: "check_consistency"
     * @const
     */
    "check_consistency": "check_consistency",

    /**
     * value: "duplication"
     * @const
     */
    "duplication": "duplication",

    /**
     * value: "cache_cleaning"
     * @const
     */
    "cache_cleaning": "cache_cleaning",

    /**
     * value: "ejection"
     * @const
     */
    "ejection": "ejection",

    /**
     * value: "get_index"
     * @const
     */
    "get_index": "get_index",

    /**
     * value: "full_backup"
     * @const
     */
    "full_backup": "full_backup",

    /**
     * value: "incremental_backup"
     * @const
     */
    "incremental_backup": "incremental_backup"
};


/**
 * Allowed values for the <code>source_type</code> property.
 * @enum {String}
 * @readonly
 */
TaskExecution['SourceTypeEnum'] = {

    /**
     * value: "container"
     * @const
     */
    "container": "container",

    /**
     * value: "primary_nas"
     * @const
     */
    "primary_nas": "primary_nas",

    /**
     * value: "secondary_nas"
     * @const
     */
    "secondary_nas": "secondary_nas",

    /**
     * value: "primary_cloud"
     * @const
     */
    "primary_cloud": "primary_cloud",

    /**
     * value: "secondary_cloud"
     * @const
     */
    "secondary_cloud": "secondary_cloud",

    /**
     * value: "secondary_tape"
     * @const
     */
    "secondary_tape": "secondary_tape"
};


/**
 * Allowed values for the <code>destination_type</code> property.
 * @enum {String}
 * @readonly
 */
TaskExecution['DestinationTypeEnum'] = {

    /**
     * value: "container"
     * @const
     */
    "container": "container",

    /**
     * value: "primary_nas"
     * @const
     */
    "primary_nas": "primary_nas",

    /**
     * value: "secondary_nas"
     * @const
     */
    "secondary_nas": "secondary_nas",

    /**
     * value: "primary_cloud"
     * @const
     */
    "primary_cloud": "primary_cloud",

    /**
     * value: "secondary_cloud"
     * @const
     */
    "secondary_cloud": "secondary_cloud",

    /**
     * value: "secondary_tape"
     * @const
     */
    "secondary_tape": "secondary_tape"
};


/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
TaskExecution['StatusEnum'] = {

    /**
     * value: "not_activated"
     * @const
     */
    "not_activated": "not_activated",

    /**
     * value: "done"
     * @const
     */
    "done": "done",

    /**
     * value: "in_progress"
     * @const
     */
    "in_progress": "in_progress",

    /**
     * value: "error"
     * @const
     */
    "error": "error",

    /**
     * value: "paused"
     * @const
     */
    "paused": "paused",

    /**
     * value: "stopped_by_system"
     * @const
     */
    "stopped_by_system": "stopped_by_system",

    /**
     * value: "in_queue"
     * @const
     */
    "in_queue": "in_queue",

    /**
     * value: "finished_with_warnings"
     * @const
     */
    "finished_with_warnings": "finished_with_warnings",

    /**
     * value: "calculating"
     * @const
     */
    "calculating": "calculating",

    /**
     * value: "stopped_by_user"
     * @const
     */
    "stopped_by_user": "stopped_by_user"
};



export default TaskExecution;

