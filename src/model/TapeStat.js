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
 * The TapeStat model module.
 * @module model/TapeStat
 * @version 1.87.0
 */
class TapeStat {
    /**
     * Constructs a new <code>TapeStat</code>.
     * @alias module:model/TapeStat
     */
    constructor() { 
        
        TapeStat.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TapeStat</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TapeStat} obj Optional instance to populate.
     * @return {module:model/TapeStat} The populated <code>TapeStat</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TapeStat();

            if (data.hasOwnProperty('log_time')) {
                obj['log_time'] = ApiClient.convertToType(data['log_time'], 'String');
            }
            if (data.hasOwnProperty('barcode')) {
                obj['barcode'] = ApiClient.convertToType(data['barcode'], 'String');
            }
            if (data.hasOwnProperty('mounts')) {
                obj['mounts'] = ApiClient.convertToType(data['mounts'], 'Number');
            }
            if (data.hasOwnProperty('datasets_written')) {
                obj['datasets_written'] = ApiClient.convertToType(data['datasets_written'], 'Number');
            }
            if (data.hasOwnProperty('datasets_read')) {
                obj['datasets_read'] = ApiClient.convertToType(data['datasets_read'], 'Number');
            }
            if (data.hasOwnProperty('recovered_write_data_errors')) {
                obj['recovered_write_data_errors'] = ApiClient.convertToType(data['recovered_write_data_errors'], 'Number');
            }
            if (data.hasOwnProperty('unrecovered_write_data_errors')) {
                obj['unrecovered_write_data_errors'] = ApiClient.convertToType(data['unrecovered_write_data_errors'], 'Number');
            }
            if (data.hasOwnProperty('write_servo_errors')) {
                obj['write_servo_errors'] = ApiClient.convertToType(data['write_servo_errors'], 'Number');
            }
            if (data.hasOwnProperty('unrecovered_write_servo_errors')) {
                obj['unrecovered_write_servo_errors'] = ApiClient.convertToType(data['unrecovered_write_servo_errors'], 'Number');
            }
            if (data.hasOwnProperty('recovered_read_errors')) {
                obj['recovered_read_errors'] = ApiClient.convertToType(data['recovered_read_errors'], 'Number');
            }
            if (data.hasOwnProperty('unrecovered_read_errors')) {
                obj['unrecovered_read_errors'] = ApiClient.convertToType(data['unrecovered_read_errors'], 'Number');
            }
            if (data.hasOwnProperty('last_mount_unrecovered_write_errors')) {
                obj['last_mount_unrecovered_write_errors'] = ApiClient.convertToType(data['last_mount_unrecovered_write_errors'], 'Number');
            }
            if (data.hasOwnProperty('last_mount_unrecovered_read_errors')) {
                obj['last_mount_unrecovered_read_errors'] = ApiClient.convertToType(data['last_mount_unrecovered_read_errors'], 'Number');
            }
            if (data.hasOwnProperty('last_mount_mbytes_written')) {
                obj['last_mount_mbytes_written'] = ApiClient.convertToType(data['last_mount_mbytes_written'], 'Number');
            }
            if (data.hasOwnProperty('last_mount_mbytes_read')) {
                obj['last_mount_mbytes_read'] = ApiClient.convertToType(data['last_mount_mbytes_read'], 'Number');
            }
            if (data.hasOwnProperty('lifetime_mbytes_written')) {
                obj['lifetime_mbytes_written'] = ApiClient.convertToType(data['lifetime_mbytes_written'], 'Number');
            }
            if (data.hasOwnProperty('lifetime_mbytes_read')) {
                obj['lifetime_mbytes_read'] = ApiClient.convertToType(data['lifetime_mbytes_read'], 'Number');
            }
            if (data.hasOwnProperty('last_load_write_compression_ratio')) {
                obj['last_load_write_compression_ratio'] = ApiClient.convertToType(data['last_load_write_compression_ratio'], 'Number');
            }
            if (data.hasOwnProperty('last_load_read_compression_ratio')) {
                obj['last_load_read_compression_ratio'] = ApiClient.convertToType(data['last_load_read_compression_ratio'], 'Number');
            }
            if (data.hasOwnProperty('medium_mount_time')) {
                obj['medium_mount_time'] = ApiClient.convertToType(data['medium_mount_time'], 'Number');
            }
            if (data.hasOwnProperty('medium_ready_time')) {
                obj['medium_ready_time'] = ApiClient.convertToType(data['medium_ready_time'], 'Number');
            }
            if (data.hasOwnProperty('total_native_capacity')) {
                obj['total_native_capacity'] = ApiClient.convertToType(data['total_native_capacity'], 'Number');
            }
            if (data.hasOwnProperty('total_used_native_capacity')) {
                obj['total_used_native_capacity'] = ApiClient.convertToType(data['total_used_native_capacity'], 'Number');
            }
            if (data.hasOwnProperty('write_protect')) {
                obj['write_protect'] = ApiClient.convertToType(data['write_protect'], 'Number');
            }
            if (data.hasOwnProperty('worm')) {
                obj['worm'] = ApiClient.convertToType(data['worm'], 'Number');
            }
            if (data.hasOwnProperty('beginning_of_medium_passes')) {
                obj['beginning_of_medium_passes'] = ApiClient.convertToType(data['beginning_of_medium_passes'], 'Number');
            }
            if (data.hasOwnProperty('middle_of_tape_passes')) {
                obj['middle_of_tape_passes'] = ApiClient.convertToType(data['middle_of_tape_passes'], 'Number');
            }
            if (data.hasOwnProperty('read_compression_ratio')) {
                obj['read_compression_ratio'] = ApiClient.convertToType(data['read_compression_ratio'], 'Number');
            }
            if (data.hasOwnProperty('write_compression_ratio')) {
                obj['write_compression_ratio'] = ApiClient.convertToType(data['write_compression_ratio'], 'Number');
            }
            if (data.hasOwnProperty('mbytes_transferred_to_app_client')) {
                obj['mbytes_transferred_to_app_client'] = ApiClient.convertToType(data['mbytes_transferred_to_app_client'], 'Number');
            }
            if (data.hasOwnProperty('bytes_transferred_to_app_client')) {
                obj['bytes_transferred_to_app_client'] = ApiClient.convertToType(data['bytes_transferred_to_app_client'], 'Number');
            }
            if (data.hasOwnProperty('mbytes_read_from_medium')) {
                obj['mbytes_read_from_medium'] = ApiClient.convertToType(data['mbytes_read_from_medium'], 'Number');
            }
            if (data.hasOwnProperty('bytes_read_from_medium')) {
                obj['bytes_read_from_medium'] = ApiClient.convertToType(data['bytes_read_from_medium'], 'Number');
            }
            if (data.hasOwnProperty('mbytes_transferred_from_app_client')) {
                obj['mbytes_transferred_from_app_client'] = ApiClient.convertToType(data['mbytes_transferred_from_app_client'], 'Number');
            }
            if (data.hasOwnProperty('bytes_transferred_from_app_client')) {
                obj['bytes_transferred_from_app_client'] = ApiClient.convertToType(data['bytes_transferred_from_app_client'], 'Number');
            }
            if (data.hasOwnProperty('mbytes_written_to_medium')) {
                obj['mbytes_written_to_medium'] = ApiClient.convertToType(data['mbytes_written_to_medium'], 'Number');
            }
            if (data.hasOwnProperty('bytes_written_to_medium')) {
                obj['bytes_written_to_medium'] = ApiClient.convertToType(data['bytes_written_to_medium'], 'Number');
            }
            if (data.hasOwnProperty('data_compression_enabled')) {
                obj['data_compression_enabled'] = ApiClient.convertToType(data['data_compression_enabled'], 'Number');
            }
            if (data.hasOwnProperty('write_retries')) {
                obj['write_retries'] = ApiClient.convertToType(data['write_retries'], 'Number');
            }
            if (data.hasOwnProperty('write_perms')) {
                obj['write_perms'] = ApiClient.convertToType(data['write_perms'], 'Number');
            }
            if (data.hasOwnProperty('suspended_writes')) {
                obj['suspended_writes'] = ApiClient.convertToType(data['suspended_writes'], 'Number');
            }
            if (data.hasOwnProperty('fatal_suspended_writes')) {
                obj['fatal_suspended_writes'] = ApiClient.convertToType(data['fatal_suspended_writes'], 'Number');
            }
            if (data.hasOwnProperty('read_retries')) {
                obj['read_retries'] = ApiClient.convertToType(data['read_retries'], 'Number');
            }
            if (data.hasOwnProperty('read_perms')) {
                obj['read_perms'] = ApiClient.convertToType(data['read_perms'], 'Number');
            }
            if (data.hasOwnProperty('suspended_reads')) {
                obj['suspended_reads'] = ApiClient.convertToType(data['suspended_reads'], 'Number');
            }
            if (data.hasOwnProperty('fatal_suspended_reads')) {
                obj['fatal_suspended_reads'] = ApiClient.convertToType(data['fatal_suspended_reads'], 'Number');
            }
            if (data.hasOwnProperty('partition_0_remaining_capacity')) {
                obj['partition_0_remaining_capacity'] = ApiClient.convertToType(data['partition_0_remaining_capacity'], 'Number');
            }
            if (data.hasOwnProperty('partition_1_remaining_capacity')) {
                obj['partition_1_remaining_capacity'] = ApiClient.convertToType(data['partition_1_remaining_capacity'], 'Number');
            }
            if (data.hasOwnProperty('partition_0_maximum_capacity')) {
                obj['partition_0_maximum_capacity'] = ApiClient.convertToType(data['partition_0_maximum_capacity'], 'Number');
            }
            if (data.hasOwnProperty('partition_1_maximum_capacity')) {
                obj['partition_1_maximum_capacity'] = ApiClient.convertToType(data['partition_1_maximum_capacity'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} log_time
 */
TapeStat.prototype['log_time'] = undefined;

/**
 * @member {String} barcode
 */
TapeStat.prototype['barcode'] = undefined;

/**
 * @member {Number} mounts
 */
TapeStat.prototype['mounts'] = undefined;

/**
 * @member {Number} datasets_written
 */
TapeStat.prototype['datasets_written'] = undefined;

/**
 * @member {Number} datasets_read
 */
TapeStat.prototype['datasets_read'] = undefined;

/**
 * @member {Number} recovered_write_data_errors
 */
TapeStat.prototype['recovered_write_data_errors'] = undefined;

/**
 * @member {Number} unrecovered_write_data_errors
 */
TapeStat.prototype['unrecovered_write_data_errors'] = undefined;

/**
 * @member {Number} write_servo_errors
 */
TapeStat.prototype['write_servo_errors'] = undefined;

/**
 * @member {Number} unrecovered_write_servo_errors
 */
TapeStat.prototype['unrecovered_write_servo_errors'] = undefined;

/**
 * @member {Number} recovered_read_errors
 */
TapeStat.prototype['recovered_read_errors'] = undefined;

/**
 * @member {Number} unrecovered_read_errors
 */
TapeStat.prototype['unrecovered_read_errors'] = undefined;

/**
 * @member {Number} last_mount_unrecovered_write_errors
 */
TapeStat.prototype['last_mount_unrecovered_write_errors'] = undefined;

/**
 * @member {Number} last_mount_unrecovered_read_errors
 */
TapeStat.prototype['last_mount_unrecovered_read_errors'] = undefined;

/**
 * @member {Number} last_mount_mbytes_written
 */
TapeStat.prototype['last_mount_mbytes_written'] = undefined;

/**
 * @member {Number} last_mount_mbytes_read
 */
TapeStat.prototype['last_mount_mbytes_read'] = undefined;

/**
 * @member {Number} lifetime_mbytes_written
 */
TapeStat.prototype['lifetime_mbytes_written'] = undefined;

/**
 * @member {Number} lifetime_mbytes_read
 */
TapeStat.prototype['lifetime_mbytes_read'] = undefined;

/**
 * @member {Number} last_load_write_compression_ratio
 */
TapeStat.prototype['last_load_write_compression_ratio'] = undefined;

/**
 * @member {Number} last_load_read_compression_ratio
 */
TapeStat.prototype['last_load_read_compression_ratio'] = undefined;

/**
 * @member {Number} medium_mount_time
 */
TapeStat.prototype['medium_mount_time'] = undefined;

/**
 * @member {Number} medium_ready_time
 */
TapeStat.prototype['medium_ready_time'] = undefined;

/**
 * @member {Number} total_native_capacity
 */
TapeStat.prototype['total_native_capacity'] = undefined;

/**
 * @member {Number} total_used_native_capacity
 */
TapeStat.prototype['total_used_native_capacity'] = undefined;

/**
 * @member {Number} write_protect
 */
TapeStat.prototype['write_protect'] = undefined;

/**
 * @member {Number} worm
 */
TapeStat.prototype['worm'] = undefined;

/**
 * @member {Number} beginning_of_medium_passes
 */
TapeStat.prototype['beginning_of_medium_passes'] = undefined;

/**
 * @member {Number} middle_of_tape_passes
 */
TapeStat.prototype['middle_of_tape_passes'] = undefined;

/**
 * @member {Number} read_compression_ratio
 */
TapeStat.prototype['read_compression_ratio'] = undefined;

/**
 * @member {Number} write_compression_ratio
 */
TapeStat.prototype['write_compression_ratio'] = undefined;

/**
 * @member {Number} mbytes_transferred_to_app_client
 */
TapeStat.prototype['mbytes_transferred_to_app_client'] = undefined;

/**
 * @member {Number} bytes_transferred_to_app_client
 */
TapeStat.prototype['bytes_transferred_to_app_client'] = undefined;

/**
 * @member {Number} mbytes_read_from_medium
 */
TapeStat.prototype['mbytes_read_from_medium'] = undefined;

/**
 * @member {Number} bytes_read_from_medium
 */
TapeStat.prototype['bytes_read_from_medium'] = undefined;

/**
 * @member {Number} mbytes_transferred_from_app_client
 */
TapeStat.prototype['mbytes_transferred_from_app_client'] = undefined;

/**
 * @member {Number} bytes_transferred_from_app_client
 */
TapeStat.prototype['bytes_transferred_from_app_client'] = undefined;

/**
 * @member {Number} mbytes_written_to_medium
 */
TapeStat.prototype['mbytes_written_to_medium'] = undefined;

/**
 * @member {Number} bytes_written_to_medium
 */
TapeStat.prototype['bytes_written_to_medium'] = undefined;

/**
 * @member {Number} data_compression_enabled
 */
TapeStat.prototype['data_compression_enabled'] = undefined;

/**
 * @member {Number} write_retries
 */
TapeStat.prototype['write_retries'] = undefined;

/**
 * @member {Number} write_perms
 */
TapeStat.prototype['write_perms'] = undefined;

/**
 * @member {Number} suspended_writes
 */
TapeStat.prototype['suspended_writes'] = undefined;

/**
 * @member {Number} fatal_suspended_writes
 */
TapeStat.prototype['fatal_suspended_writes'] = undefined;

/**
 * @member {Number} read_retries
 */
TapeStat.prototype['read_retries'] = undefined;

/**
 * @member {Number} read_perms
 */
TapeStat.prototype['read_perms'] = undefined;

/**
 * @member {Number} suspended_reads
 */
TapeStat.prototype['suspended_reads'] = undefined;

/**
 * @member {Number} fatal_suspended_reads
 */
TapeStat.prototype['fatal_suspended_reads'] = undefined;

/**
 * @member {Number} partition_0_remaining_capacity
 */
TapeStat.prototype['partition_0_remaining_capacity'] = undefined;

/**
 * @member {Number} partition_1_remaining_capacity
 */
TapeStat.prototype['partition_1_remaining_capacity'] = undefined;

/**
 * @member {Number} partition_0_maximum_capacity
 */
TapeStat.prototype['partition_0_maximum_capacity'] = undefined;

/**
 * @member {Number} partition_1_maximum_capacity
 */
TapeStat.prototype['partition_1_maximum_capacity'] = undefined;






export default TapeStat;

