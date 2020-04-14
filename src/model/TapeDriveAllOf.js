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
 * The TapeDriveAllOf model module.
 * @module model/TapeDriveAllOf
 * @version 1.85.1
 */
class TapeDriveAllOf {
    /**
     * Constructs a new <code>TapeDriveAllOf</code>.
     * @alias module:model/TapeDriveAllOf
     */
    constructor() { 
        
        TapeDriveAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TapeDriveAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TapeDriveAllOf} obj Optional instance to populate.
     * @return {module:model/TapeDriveAllOf} The populated <code>TapeDriveAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TapeDriveAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('tape_library_id')) {
                obj['tape_library_id'] = ApiClient.convertToType(data['tape_library_id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('libso')) {
                obj['libso'] = ApiClient.convertToType(data['libso'], 'String');
            }
            if (data.hasOwnProperty('acs')) {
                obj['acs'] = ApiClient.convertToType(data['acs'], 'Number');
            }
            if (data.hasOwnProperty('lsm')) {
                obj['lsm'] = ApiClient.convertToType(data['lsm'], 'Number');
            }
            if (data.hasOwnProperty('panel')) {
                obj['panel'] = ApiClient.convertToType(data['panel'], 'Number');
            }
            if (data.hasOwnProperty('transport')) {
                obj['transport'] = ApiClient.convertToType(data['transport'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('full')) {
                obj['full'] = ApiClient.convertToType(data['full'], 'Number');
            }
            if (data.hasOwnProperty('mount_count')) {
                obj['mount_count'] = ApiClient.convertToType(data['mount_count'], 'Number');
            }
            if (data.hasOwnProperty('use_to')) {
                obj['use_to'] = ApiClient.convertToType(data['use_to'], 'String');
            }
            if (data.hasOwnProperty('use_by')) {
                obj['use_by'] = ApiClient.convertToType(data['use_by'], 'String');
            }
            if (data.hasOwnProperty('barcode')) {
                obj['barcode'] = ApiClient.convertToType(data['barcode'], 'String');
            }
            if (data.hasOwnProperty('task_id')) {
                obj['task_id'] = ApiClient.convertToType(data['task_id'], 'Number');
            }
            if (data.hasOwnProperty('use_file_processed_size')) {
                obj['use_file_processed_size'] = ApiClient.convertToType(data['use_file_processed_size'], 'Number');
            }
            if (data.hasOwnProperty('use_file_size_to_process')) {
                obj['use_file_size_to_process'] = ApiClient.convertToType(data['use_file_size_to_process'], 'Number');
            }
            if (data.hasOwnProperty('use_file_name_processed')) {
                obj['use_file_name_processed'] = ApiClient.convertToType(data['use_file_name_processed'], 'String');
            }
            if (data.hasOwnProperty('bandwidth')) {
                obj['bandwidth'] = ApiClient.convertToType(data['bandwidth'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
TapeDriveAllOf.prototype['id'] = undefined;

/**
 * @member {Number} tape_library_id
 */
TapeDriveAllOf.prototype['tape_library_id'] = undefined;

/**
 * @member {String} name
 */
TapeDriveAllOf.prototype['name'] = undefined;

/**
 * @member {String} comment
 */
TapeDriveAllOf.prototype['comment'] = undefined;

/**
 * @member {String} libso
 */
TapeDriveAllOf.prototype['libso'] = undefined;

/**
 * @member {Number} acs
 */
TapeDriveAllOf.prototype['acs'] = undefined;

/**
 * @member {Number} lsm
 */
TapeDriveAllOf.prototype['lsm'] = undefined;

/**
 * @member {Number} panel
 */
TapeDriveAllOf.prototype['panel'] = undefined;

/**
 * @member {Number} transport
 */
TapeDriveAllOf.prototype['transport'] = undefined;

/**
 * @member {module:model/TapeDriveAllOf.StatusEnum} status
 */
TapeDriveAllOf.prototype['status'] = undefined;

/**
 * @member {Number} full
 */
TapeDriveAllOf.prototype['full'] = undefined;

/**
 * @member {Number} mount_count
 */
TapeDriveAllOf.prototype['mount_count'] = undefined;

/**
 * @member {String} use_to
 */
TapeDriveAllOf.prototype['use_to'] = undefined;

/**
 * @member {String} use_by
 */
TapeDriveAllOf.prototype['use_by'] = undefined;

/**
 * @member {String} barcode
 */
TapeDriveAllOf.prototype['barcode'] = undefined;

/**
 * @member {Number} task_id
 */
TapeDriveAllOf.prototype['task_id'] = undefined;

/**
 * @member {Number} use_file_processed_size
 */
TapeDriveAllOf.prototype['use_file_processed_size'] = undefined;

/**
 * @member {Number} use_file_size_to_process
 */
TapeDriveAllOf.prototype['use_file_size_to_process'] = undefined;

/**
 * @member {String} use_file_name_processed
 */
TapeDriveAllOf.prototype['use_file_name_processed'] = undefined;

/**
 * @member {Number} bandwidth
 */
TapeDriveAllOf.prototype['bandwidth'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
TapeDriveAllOf['StatusEnum'] = {

    /**
     * value: "offline"
     * @const
     */
    "offline": "offline",

    /**
     * value: "online"
     * @const
     */
    "online": "online"
};



export default TapeDriveAllOf;

