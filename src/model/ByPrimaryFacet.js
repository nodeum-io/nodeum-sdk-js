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
import ByDateFacetBuckets from './ByDateFacetBuckets';
import ByPrimaryFacetAllOf from './ByPrimaryFacetAllOf';
import FileFacet from './FileFacet';

/**
 * The ByPrimaryFacet model module.
 * @module model/ByPrimaryFacet
 * @version 1.86.0
 */
class ByPrimaryFacet {
    /**
     * Constructs a new <code>ByPrimaryFacet</code>.
     * @alias module:model/ByPrimaryFacet
     * @extends module:model/FileFacet
     * @implements module:model/FileFacet
     * @implements module:model/ByPrimaryFacetAllOf
     */
    constructor() { 
        FileFacet.initialize(this);ByPrimaryFacetAllOf.initialize(this);
        ByPrimaryFacet.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ByPrimaryFacet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ByPrimaryFacet} obj Optional instance to populate.
     * @return {module:model/ByPrimaryFacet} The populated <code>ByPrimaryFacet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ByPrimaryFacet();
            FileFacet.constructFromObject(data, obj);
            FileFacet.constructFromObject(data, obj);
            ByPrimaryFacetAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('prim_name_s')) {
                obj['prim_name_s'] = ByDateFacetBuckets.constructFromObject(data['prim_name_s']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ByDateFacetBuckets} prim_name_s
 */
ByPrimaryFacet.prototype['prim_name_s'] = undefined;


// Implement FileFacet interface:
/**
 * @member {Number} count
 */
FileFacet.prototype['count'] = undefined;
/**
 * @member {Number} files_count
 */
FileFacet.prototype['files_count'] = undefined;
/**
 * @member {Number} file_size_sum
 */
FileFacet.prototype['file_size_sum'] = undefined;
/**
 * @member {Number} cost
 */
FileFacet.prototype['cost'] = undefined;
// Implement ByPrimaryFacetAllOf interface:
/**
 * @member {module:model/ByDateFacetBuckets} prim_name_s
 */
ByPrimaryFacetAllOf.prototype['prim_name_s'] = undefined;




export default ByPrimaryFacet;

