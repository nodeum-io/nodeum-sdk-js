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
 * The Tape model module.
 * @module model/Tape
 * @version 1.88.0
 */
class Tape {
    /**
     * Constructs a new <code>Tape</code>.
     * @alias module:model/Tape
     */
    constructor() { 
        
        Tape.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Tape</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Tape} obj Optional instance to populate.
     * @return {module:model/Tape} The populated <code>Tape</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Tape();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('tape_library_id')) {
                obj['tape_library_id'] = ApiClient.convertToType(data['tape_library_id'], 'Number');
            }
            if (data.hasOwnProperty('pool_id')) {
                obj['pool_id'] = ApiClient.convertToType(data['pool_id'], 'Number');
            }
            if (data.hasOwnProperty('barcode')) {
                obj['barcode'] = ApiClient.convertToType(data['barcode'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('locked')) {
                obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
            }
            if (data.hasOwnProperty('scratch')) {
                obj['scratch'] = ApiClient.convertToType(data['scratch'], 'Boolean');
            }
            if (data.hasOwnProperty('cleaning')) {
                obj['cleaning'] = ApiClient.convertToType(data['cleaning'], 'Boolean');
            }
            if (data.hasOwnProperty('write_protect')) {
                obj['write_protect'] = ApiClient.convertToType(data['write_protect'], 'Boolean');
            }
            if (data.hasOwnProperty('mounted')) {
                obj['mounted'] = ApiClient.convertToType(data['mounted'], 'Boolean');
            }
            if (data.hasOwnProperty('ejected')) {
                obj['ejected'] = ApiClient.convertToType(data['ejected'], 'Boolean');
            }
            if (data.hasOwnProperty('known')) {
                obj['known'] = ApiClient.convertToType(data['known'], 'Boolean');
            }
            if (data.hasOwnProperty('mount_count')) {
                obj['mount_count'] = ApiClient.convertToType(data['mount_count'], 'Number');
            }
            if (data.hasOwnProperty('date_in')) {
                obj['date_in'] = ApiClient.convertToType(data['date_in'], 'String');
            }
            if (data.hasOwnProperty('date_move')) {
                obj['date_move'] = ApiClient.convertToType(data['date_move'], 'String');
            }
            if (data.hasOwnProperty('free')) {
                obj['free'] = ApiClient.convertToType(data['free'], 'Number');
            }
            if (data.hasOwnProperty('max')) {
                obj['max'] = ApiClient.convertToType(data['max'], 'Number');
            }
            if (data.hasOwnProperty('last_size_update')) {
                obj['last_size_update'] = ApiClient.convertToType(data['last_size_update'], 'String');
            }
            if (data.hasOwnProperty('last_maintenance')) {
                obj['last_maintenance'] = ApiClient.convertToType(data['last_maintenance'], 'String');
            }
            if (data.hasOwnProperty('last_repack')) {
                obj['last_repack'] = ApiClient.convertToType(data['last_repack'], 'String');
            }
            if (data.hasOwnProperty('repack_status')) {
                obj['repack_status'] = ApiClient.convertToType(data['repack_status'], 'Boolean');
            }
            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('force_import_type')) {
                obj['force_import_type'] = ApiClient.convertToType(data['force_import_type'], 'Boolean');
            }
            if (data.hasOwnProperty('need_to_check')) {
                obj['need_to_check'] = ApiClient.convertToType(data['need_to_check'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Tape.prototype['id'] = undefined;

/**
 * @member {Number} tape_library_id
 */
Tape.prototype['tape_library_id'] = undefined;

/**
 * @member {Number} pool_id
 */
Tape.prototype['pool_id'] = undefined;

/**
 * @member {String} barcode
 */
Tape.prototype['barcode'] = undefined;

/**
 * @member {String} location
 */
Tape.prototype['location'] = undefined;

/**
 * @member {module:model/Tape.TypeEnum} type
 */
Tape.prototype['type'] = undefined;

/**
 * @member {Boolean} locked
 */
Tape.prototype['locked'] = undefined;

/**
 * @member {Boolean} scratch
 */
Tape.prototype['scratch'] = undefined;

/**
 * @member {Boolean} cleaning
 */
Tape.prototype['cleaning'] = undefined;

/**
 * @member {Boolean} write_protect
 */
Tape.prototype['write_protect'] = undefined;

/**
 * @member {Boolean} mounted
 */
Tape.prototype['mounted'] = undefined;

/**
 * @member {Boolean} ejected
 */
Tape.prototype['ejected'] = undefined;

/**
 * @member {Boolean} known
 */
Tape.prototype['known'] = undefined;

/**
 * @member {Number} mount_count
 */
Tape.prototype['mount_count'] = undefined;

/**
 * @member {String} date_in
 */
Tape.prototype['date_in'] = undefined;

/**
 * @member {String} date_move
 */
Tape.prototype['date_move'] = undefined;

/**
 * @member {Number} free
 */
Tape.prototype['free'] = undefined;

/**
 * @member {Number} max
 */
Tape.prototype['max'] = undefined;

/**
 * @member {String} last_size_update
 */
Tape.prototype['last_size_update'] = undefined;

/**
 * @member {String} last_maintenance
 */
Tape.prototype['last_maintenance'] = undefined;

/**
 * @member {String} last_repack
 */
Tape.prototype['last_repack'] = undefined;

/**
 * @member {Boolean} repack_status
 */
Tape.prototype['repack_status'] = undefined;

/**
 * @member {String} hash
 */
Tape.prototype['hash'] = undefined;

/**
 * @member {Boolean} force_import_type
 */
Tape.prototype['force_import_type'] = undefined;

/**
 * @member {Boolean} need_to_check
 */
Tape.prototype['need_to_check'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Tape['TypeEnum'] = {

    /**
     * value: "unknown"
     * @const
     */
    "unknown": "unknown",

    /**
     * value: "data"
     * @const
     */
    "data": "data",

    /**
     * value: "cleaning"
     * @const
     */
    "cleaning": "cleaning",

    /**
     * value: "diagnostic"
     * @const
     */
    "diagnostic": "diagnostic",

    /**
     * value: "data_lto1"
     * @const
     */
    "data_lto1": "data_lto1",

    /**
     * value: "data_lto2"
     * @const
     */
    "data_lto2": "data_lto2",

    /**
     * value: "data_lto3"
     * @const
     */
    "data_lto3": "data_lto3",

    /**
     * value: "data_lto4"
     * @const
     */
    "data_lto4": "data_lto4",

    /**
     * value: "data_lto5"
     * @const
     */
    "data_lto5": "data_lto5",

    /**
     * value: "data_lto6"
     * @const
     */
    "data_lto6": "data_lto6",

    /**
     * value: "data_lto7"
     * @const
     */
    "data_lto7": "data_lto7",

    /**
     * value: "data_lto8"
     * @const
     */
    "data_lto8": "data_lto8",

    /**
     * value: "data_lto9"
     * @const
     */
    "data_lto9": "data_lto9",

    /**
     * value: "data_lto10"
     * @const
     */
    "data_lto10": "data_lto10",

    /**
     * value: "data_lto11"
     * @const
     */
    "data_lto11": "data_lto11",

    /**
     * value: "data_lto12"
     * @const
     */
    "data_lto12": "data_lto12"
};



export default Tape;

