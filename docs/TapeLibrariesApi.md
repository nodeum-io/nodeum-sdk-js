# NodeumSdk.TapeLibrariesApi

All URIs are relative to *http://localhost/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTapeLibrary**](TapeLibrariesApi.md#createTapeLibrary) | **POST** /tape_libraries | Creates a new tape library.
[**destroyTapeLibrary**](TapeLibrariesApi.md#destroyTapeLibrary) | **DELETE** /tape_libraries/{tape_library_id} | Destroys a specific tape library.
[**indexTapeLibraries**](TapeLibrariesApi.md#indexTapeLibraries) | **GET** /tape_libraries | Lists all tape libraries.
[**indexTapeLibraryDevices**](TapeLibrariesApi.md#indexTapeLibraryDevices) | **GET** /tape_libraries/-/devices | Lists tape libraries devices.
[**showTapeLibrary**](TapeLibrariesApi.md#showTapeLibrary) | **GET** /tape_libraries/{tape_library_id} | Displays a specific tape library.
[**updateTapeLibrary**](TapeLibrariesApi.md#updateTapeLibrary) | **PUT** /tape_libraries/{tape_library_id} | Updates a specific tape library.



## createTapeLibrary

> TapeLibrary createTapeLibrary(tapeLibraryBody)

Creates a new tape library.

**API Key Scope**: tape_libraries / create

### Example

```javascript
import NodeumSdk from 'nodeum-sdk';
let defaultClient = NodeumSdk.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new NodeumSdk.TapeLibrariesApi();
let tapeLibraryBody = new NodeumSdk.TapeLibrary(); // TapeLibrary | 
apiInstance.createTapeLibrary(tapeLibraryBody, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tapeLibraryBody** | [**TapeLibrary**](TapeLibrary.md)|  | 

### Return type

[**TapeLibrary**](TapeLibrary.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## destroyTapeLibrary

> destroyTapeLibrary(tapeLibraryId)

Destroys a specific tape library.

**API Key Scope**: tape_libraries / destroy

### Example

```javascript
import NodeumSdk from 'nodeum-sdk';
let defaultClient = NodeumSdk.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new NodeumSdk.TapeLibrariesApi();
let tapeLibraryId = "tapeLibraryId_example"; // String | Numeric ID, serial, or name of tape library.
apiInstance.destroyTapeLibrary(tapeLibraryId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tapeLibraryId** | **String**| Numeric ID, serial, or name of tape library. | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## indexTapeLibraries

> TapeLibraryCollection indexTapeLibraries(opts)

Lists all tape libraries.

**API Key Scope**: tape_libraries / index

### Example

```javascript
import NodeumSdk from 'nodeum-sdk';
let defaultClient = NodeumSdk.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new NodeumSdk.TapeLibrariesApi();
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'sortBy': ["null"], // [String] | Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
  'id': "id_example", // String | Filter on id
  'name': "name_example", // String | Filter on name
  'serial': "serial_example", // String | Filter on serial
  'comment': "comment_example", // String | Filter on comment
  'protocol': "protocol_example", // String | Filter on protocol
  'vendor': "vendor_example", // String | Filter on vendor
  'product': "product_example", // String | Filter on product
  'firmware': "firmware_example", // String | Filter on firmware
  'device': "device_example", // String | Filter on device
  'libso': "libso_example", // String | Filter on libso
  'acs': "acs_example", // String | Filter on acs
  'status': "status_example", // String | Filter on status
  'storageSlots': "storageSlots_example", // String | Filter on storage slots
  'storageSlotsAddress': "storageSlotsAddress_example", // String | Filter on storage slots address
  'ioSlots': "ioSlots_example", // String | Filter on io slots
  'ioSlotsAddress': "ioSlotsAddress_example", // String | Filter on io slots address
  'price': "price_example" // String | Filter on price
};
apiInstance.indexTapeLibraries(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The number of items to display for pagination. | [optional] 
 **offset** | **Number**| The number of items to skip for pagination. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort results by attribute.  Can sort on multiple attributes, separated by &#x60;|&#x60;. Order direction can be suffixing the attribute by either &#x60;:asc&#x60; (default) or &#x60;:desc&#x60;. | [optional] 
 **id** | **String**| Filter on id | [optional] 
 **name** | **String**| Filter on name | [optional] 
 **serial** | **String**| Filter on serial | [optional] 
 **comment** | **String**| Filter on comment | [optional] 
 **protocol** | **String**| Filter on protocol | [optional] 
 **vendor** | **String**| Filter on vendor | [optional] 
 **product** | **String**| Filter on product | [optional] 
 **firmware** | **String**| Filter on firmware | [optional] 
 **device** | **String**| Filter on device | [optional] 
 **libso** | **String**| Filter on libso | [optional] 
 **acs** | **String**| Filter on acs | [optional] 
 **status** | **String**| Filter on status | [optional] 
 **storageSlots** | **String**| Filter on storage slots | [optional] 
 **storageSlotsAddress** | **String**| Filter on storage slots address | [optional] 
 **ioSlots** | **String**| Filter on io slots | [optional] 
 **ioSlotsAddress** | **String**| Filter on io slots address | [optional] 
 **price** | **String**| Filter on price | [optional] 

### Return type

[**TapeLibraryCollection**](TapeLibraryCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indexTapeLibraryDevices

> TapeLibraryDeviceCollection indexTapeLibraryDevices(jobId)

Lists tape libraries devices.

**API Key Scope**: tape_libraries / devices

### Example

```javascript
import NodeumSdk from 'nodeum-sdk';
let defaultClient = NodeumSdk.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new NodeumSdk.TapeLibrariesApi();
let jobId = "jobId_example"; // String | ID of active job
apiInstance.indexTapeLibraryDevices(jobId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **String**| ID of active job | 

### Return type

[**TapeLibraryDeviceCollection**](TapeLibraryDeviceCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, queued, working, failed, 


## showTapeLibrary

> TapeLibrary showTapeLibrary(tapeLibraryId)

Displays a specific tape library.

**API Key Scope**: tape_libraries / show

### Example

```javascript
import NodeumSdk from 'nodeum-sdk';
let defaultClient = NodeumSdk.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new NodeumSdk.TapeLibrariesApi();
let tapeLibraryId = "tapeLibraryId_example"; // String | Numeric ID, serial, or name of tape library.
apiInstance.showTapeLibrary(tapeLibraryId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tapeLibraryId** | **String**| Numeric ID, serial, or name of tape library. | 

### Return type

[**TapeLibrary**](TapeLibrary.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTapeLibrary

> TapeLibrary updateTapeLibrary(tapeLibraryId, tapeLibraryBody)

Updates a specific tape library.

**API Key Scope**: tape_libraries / update

### Example

```javascript
import NodeumSdk from 'nodeum-sdk';
let defaultClient = NodeumSdk.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new NodeumSdk.TapeLibrariesApi();
let tapeLibraryId = "tapeLibraryId_example"; // String | Numeric ID, serial, or name of tape library.
let tapeLibraryBody = new NodeumSdk.TapeLibrary(); // TapeLibrary | 
apiInstance.updateTapeLibrary(tapeLibraryId, tapeLibraryBody, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tapeLibraryId** | **String**| Numeric ID, serial, or name of tape library. | 
 **tapeLibraryBody** | [**TapeLibrary**](TapeLibrary.md)|  | 

### Return type

[**TapeLibrary**](TapeLibrary.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

