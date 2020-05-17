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
import TapeLibraryAllOf from './TapeLibraryAllOf';
import TapeLibraryDevice from './TapeLibraryDevice';

/**
 * The TapeLibrary model module.
 * @module model/TapeLibrary
 * @version 1.86.0
 */
class TapeLibrary {
    /**
     * Constructs a new <code>TapeLibrary</code>.
     * @alias module:model/TapeLibrary
     * @extends module:model/TapeLibraryDevice
     * @implements module:model/TapeLibraryDevice
     * @implements module:model/TapeLibraryAllOf
     */
    constructor() { 
        TapeLibraryDevice.initialize(this);TapeLibraryAllOf.initialize(this);
        TapeLibrary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TapeLibrary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TapeLibrary} obj Optional instance to populate.
     * @return {module:model/TapeLibrary} The populated <code>TapeLibrary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TapeLibrary();
            TapeLibraryDevice.constructFromObject(data, obj);
            TapeLibraryDevice.constructFromObject(data, obj);
            TapeLibraryAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
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
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
TapeLibrary.prototype['id'] = undefined;

/**
 * @member {String} name
 */
TapeLibrary.prototype['name'] = undefined;

/**
 * @member {String} comment
 */
TapeLibrary.prototype['comment'] = undefined;

/**
 * @member {String} libso
 */
TapeLibrary.prototype['libso'] = undefined;

/**
 * @member {module:model/TapeLibrary.StatusEnum} status
 */
TapeLibrary.prototype['status'] = undefined;

/**
 * @member {String} price
 */
TapeLibrary.prototype['price'] = undefined;


// Implement TapeLibraryDevice interface:
/**
 * @member {String} serial
 */
TapeLibraryDevice.prototype['serial'] = undefined;
/**
 * @member {module:model/TapeLibraryDevice.ProtocolEnum} protocol
 */
TapeLibraryDevice.prototype['protocol'] = undefined;
/**
 * @member {String} vendor
 */
TapeLibraryDevice.prototype['vendor'] = undefined;
/**
 * @member {String} product
 */
TapeLibraryDevice.prototype['product'] = undefined;
/**
 * @member {String} firmware
 */
TapeLibraryDevice.prototype['firmware'] = undefined;
/**
 * @member {String} device
 */
TapeLibraryDevice.prototype['device'] = undefined;
/**
 * @member {Number} acs
 */
TapeLibraryDevice.prototype['acs'] = undefined;
/**
 * @member {Number} storage_slots
 */
TapeLibraryDevice.prototype['storage_slots'] = undefined;
/**
 * @member {Number} storage_slots_address
 */
TapeLibraryDevice.prototype['storage_slots_address'] = undefined;
/**
 * @member {Number} io_slots
 */
TapeLibraryDevice.prototype['io_slots'] = undefined;
/**
 * @member {Number} io_slots_address
 */
TapeLibraryDevice.prototype['io_slots_address'] = undefined;
// Implement TapeLibraryAllOf interface:
/**
 * @member {Number} id
 */
TapeLibraryAllOf.prototype['id'] = undefined;
/**
 * @member {String} name
 */
TapeLibraryAllOf.prototype['name'] = undefined;
/**
 * @member {String} comment
 */
TapeLibraryAllOf.prototype['comment'] = undefined;
/**
 * @member {String} libso
 */
TapeLibraryAllOf.prototype['libso'] = undefined;
/**
 * @member {module:model/TapeLibraryAllOf.StatusEnum} status
 */
TapeLibraryAllOf.prototype['status'] = undefined;
/**
 * @member {String} price
 */
TapeLibraryAllOf.prototype['price'] = undefined;



/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
TapeLibrary['StatusEnum'] = {

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



export default TapeLibrary;

