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
import ByDateFacet from './ByDateFacet';
import FileFacet from './FileFacet';
import SizeToDateFacets from './SizeToDateFacets';

/**
 * The BySizeFacet model module.
 * @module model/BySizeFacet
 * @version 1.85.0
 */
class BySizeFacet {
    /**
     * Constructs a new <code>BySizeFacet</code>.
     * @alias module:model/BySizeFacet
     * @implements module:model/FileFacet
     * @implements module:model/SizeToDateFacets
     */
    constructor() { 
        FileFacet.initialize(this);SizeToDateFacets.initialize(this);
        BySizeFacet.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BySizeFacet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BySizeFacet} obj Optional instance to populate.
     * @return {module:model/BySizeFacet} The populated <code>BySizeFacet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BySizeFacet();
            FileFacet.constructFromObject(data, obj);
            SizeToDateFacets.constructFromObject(data, obj);

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('file_size_sum')) {
                obj['file_size_sum'] = ApiClient.convertToType(data['file_size_sum'], 'Number');
            }
            if (data.hasOwnProperty('less_100_kb')) {
                obj['less_100_kb'] = ByDateFacet.constructFromObject(data['less_100_kb']);
            }
            if (data.hasOwnProperty('less_1_mb')) {
                obj['less_1_mb'] = ByDateFacet.constructFromObject(data['less_1_mb']);
            }
            if (data.hasOwnProperty('less_10_mb')) {
                obj['less_10_mb'] = ByDateFacet.constructFromObject(data['less_10_mb']);
            }
            if (data.hasOwnProperty('less_100_mb')) {
                obj['less_100_mb'] = ByDateFacet.constructFromObject(data['less_100_mb']);
            }
            if (data.hasOwnProperty('less_1_gb')) {
                obj['less_1_gb'] = ByDateFacet.constructFromObject(data['less_1_gb']);
            }
            if (data.hasOwnProperty('less_10_gb')) {
                obj['less_10_gb'] = ByDateFacet.constructFromObject(data['less_10_gb']);
            }
            if (data.hasOwnProperty('less_100_gb')) {
                obj['less_100_gb'] = ByDateFacet.constructFromObject(data['less_100_gb']);
            }
            if (data.hasOwnProperty('more_100_gb')) {
                obj['more_100_gb'] = ByDateFacet.constructFromObject(data['more_100_gb']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} count
 */
BySizeFacet.prototype['count'] = undefined;

/**
 * @member {Number} file_size_sum
 */
BySizeFacet.prototype['file_size_sum'] = undefined;

/**
 * @member {module:model/ByDateFacet} less_100_kb
 */
BySizeFacet.prototype['less_100_kb'] = undefined;

/**
 * @member {module:model/ByDateFacet} less_1_mb
 */
BySizeFacet.prototype['less_1_mb'] = undefined;

/**
 * @member {module:model/ByDateFacet} less_10_mb
 */
BySizeFacet.prototype['less_10_mb'] = undefined;

/**
 * @member {module:model/ByDateFacet} less_100_mb
 */
BySizeFacet.prototype['less_100_mb'] = undefined;

/**
 * @member {module:model/ByDateFacet} less_1_gb
 */
BySizeFacet.prototype['less_1_gb'] = undefined;

/**
 * @member {module:model/ByDateFacet} less_10_gb
 */
BySizeFacet.prototype['less_10_gb'] = undefined;

/**
 * @member {module:model/ByDateFacet} less_100_gb
 */
BySizeFacet.prototype['less_100_gb'] = undefined;

/**
 * @member {module:model/ByDateFacet} more_100_gb
 */
BySizeFacet.prototype['more_100_gb'] = undefined;


// Implement FileFacet interface:
/**
 * @member {Number} count
 */
FileFacet.prototype['count'] = undefined;
/**
 * @member {Number} file_size_sum
 */
FileFacet.prototype['file_size_sum'] = undefined;
// Implement SizeToDateFacets interface:
/**
 * @member {module:model/ByDateFacet} less_100_kb
 */
SizeToDateFacets.prototype['less_100_kb'] = undefined;
/**
 * @member {module:model/ByDateFacet} less_1_mb
 */
SizeToDateFacets.prototype['less_1_mb'] = undefined;
/**
 * @member {module:model/ByDateFacet} less_10_mb
 */
SizeToDateFacets.prototype['less_10_mb'] = undefined;
/**
 * @member {module:model/ByDateFacet} less_100_mb
 */
SizeToDateFacets.prototype['less_100_mb'] = undefined;
/**
 * @member {module:model/ByDateFacet} less_1_gb
 */
SizeToDateFacets.prototype['less_1_gb'] = undefined;
/**
 * @member {module:model/ByDateFacet} less_10_gb
 */
SizeToDateFacets.prototype['less_10_gb'] = undefined;
/**
 * @member {module:model/ByDateFacet} less_100_gb
 */
SizeToDateFacets.prototype['less_100_gb'] = undefined;
/**
 * @member {module:model/ByDateFacet} more_100_gb
 */
SizeToDateFacets.prototype['more_100_gb'] = undefined;




export default BySizeFacet;
