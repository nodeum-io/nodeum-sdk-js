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
 * The Task model module.
 * @module model/Task
 * @version 1.86.0
 */
class Task {
    /**
     * Constructs a new <code>Task</code>.
     * @alias module:model/Task
     */
    constructor() { 
        
        Task.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Task</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Task} obj Optional instance to populate.
     * @return {module:model/Task} The populated <code>Task</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Task();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
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
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
            }
            if (data.hasOwnProperty('conflict_resolution')) {
                obj['conflict_resolution'] = ApiClient.convertToType(data['conflict_resolution'], 'String');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('activate')) {
                obj['activate'] = ApiClient.convertToType(data['activate'], 'Boolean');
            }
            if (data.hasOwnProperty('creation_date')) {
                obj['creation_date'] = ApiClient.convertToType(data['creation_date'], 'String');
            }
            if (data.hasOwnProperty('modification_date')) {
                obj['modification_date'] = ApiClient.convertToType(data['modification_date'], 'String');
            }
            if (data.hasOwnProperty('creation_username')) {
                obj['creation_username'] = ApiClient.convertToType(data['creation_username'], 'String');
            }
            if (data.hasOwnProperty('modification_username')) {
                obj['modification_username'] = ApiClient.convertToType(data['modification_username'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('job_started')) {
                obj['job_started'] = ApiClient.convertToType(data['job_started'], 'String');
            }
            if (data.hasOwnProperty('job_finished')) {
                obj['job_finished'] = ApiClient.convertToType(data['job_finished'], 'String');
            }
            if (data.hasOwnProperty('processed_size')) {
                obj['processed_size'] = ApiClient.convertToType(data['processed_size'], 'Number');
            }
            if (data.hasOwnProperty('to_process_size')) {
                obj['to_process_size'] = ApiClient.convertToType(data['to_process_size'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Task.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Task.prototype['name'] = undefined;

/**
 * @member {String} comment
 */
Task.prototype['comment'] = undefined;

/**
 * @member {module:model/Task.WorkflowTypeEnum} workflow_type
 */
Task.prototype['workflow_type'] = undefined;

/**
 * @member {module:model/Task.WorkflowActionEnum} workflow_action
 */
Task.prototype['workflow_action'] = undefined;

/**
 * @member {module:model/Task.SourceTypeEnum} source_type
 */
Task.prototype['source_type'] = undefined;

/**
 * @member {module:model/Task.DestinationTypeEnum} destination_type
 */
Task.prototype['destination_type'] = undefined;

/**
 * @member {Number} priority
 */
Task.prototype['priority'] = undefined;

/**
 * @member {module:model/Task.ConflictResolutionEnum} conflict_resolution
 */
Task.prototype['conflict_resolution'] = undefined;

/**
 * @member {module:model/Task.ActionEnum} action
 */
Task.prototype['action'] = undefined;

/**
 * @member {Boolean} activate
 */
Task.prototype['activate'] = undefined;

/**
 * @member {String} creation_date
 */
Task.prototype['creation_date'] = undefined;

/**
 * @member {String} modification_date
 */
Task.prototype['modification_date'] = undefined;

/**
 * @member {String} creation_username
 */
Task.prototype['creation_username'] = undefined;

/**
 * @member {String} modification_username
 */
Task.prototype['modification_username'] = undefined;

/**
 * @member {module:model/Task.StatusEnum} status
 */
Task.prototype['status'] = undefined;

/**
 * @member {String} job_started
 */
Task.prototype['job_started'] = undefined;

/**
 * @member {String} job_finished
 */
Task.prototype['job_finished'] = undefined;

/**
 * @member {Number} processed_size
 */
Task.prototype['processed_size'] = undefined;

/**
 * @member {Number} to_process_size
 */
Task.prototype['to_process_size'] = undefined;





/**
 * Allowed values for the <code>workflow_type</code> property.
 * @enum {String}
 * @readonly
 */
Task['WorkflowTypeEnum'] = {

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
Task['WorkflowActionEnum'] = {

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
Task['SourceTypeEnum'] = {

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
Task['DestinationTypeEnum'] = {

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
 * Allowed values for the <code>conflict_resolution</code> property.
 * @enum {String}
 * @readonly
 */
Task['ConflictResolutionEnum'] = {

    /**
     * value: "rename"
     * @const
     */
    "rename": "rename",

    /**
     * value: "overwrite"
     * @const
     */
    "overwrite": "overwrite",

    /**
     * value: "ignore"
     * @const
     */
    "ignore": "ignore"
};


/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
Task['ActionEnum'] = {

    /**
     * value: "noop"
     * @const
     */
    "noop": "noop",

    /**
     * value: "run"
     * @const
     */
    "run": "run",

    /**
     * value: "pause"
     * @const
     */
    "pause": "pause",

    /**
     * value: "stop"
     * @const
     */
    "stop": "stop",

    /**
     * value: "resume"
     * @const
     */
    "resume": "resume"
};


/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Task['StatusEnum'] = {

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



export default Task;

