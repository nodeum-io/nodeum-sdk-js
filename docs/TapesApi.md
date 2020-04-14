# NodeumApi.TapesApi

All URIs are relative to *http://localhost/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**indexTapeStats**](TapesApi.md#indexTapeStats) | **GET** /tape_stats | List all tape statistics.
[**indexTapes**](TapesApi.md#indexTapes) | **GET** /tapes | Lists all tapes.
[**indexTapesByPool**](TapesApi.md#indexTapesByPool) | **GET** /pools/{pool_id}/tapes | Lists all tapes.
[**indexTapesByTapeLibrary**](TapesApi.md#indexTapesByTapeLibrary) | **GET** /tape_libraries/{tape_library_id}/tapes | Lists all tapes.
[**mountStatusTape**](TapesApi.md#mountStatusTape) | **GET** /tapes/{tape_id}/mount | Get mount status of Tape.
[**mountStatusTapeByPool**](TapesApi.md#mountStatusTapeByPool) | **GET** /pools/{pool_id}/tapes/{tape_id}/mount | Get mount status of Tape.
[**mountStatusTapeByTapeLibrary**](TapesApi.md#mountStatusTapeByTapeLibrary) | **GET** /tape_libraries/{tape_library_id}/tapes/{tape_id}/mount | Get mount status of Tape.
[**showTape**](TapesApi.md#showTape) | **GET** /tapes/{tape_id} | Displays a specific tape.
[**showTapeByPool**](TapesApi.md#showTapeByPool) | **GET** /pools/{pool_id}/tapes/{tape_id} | Displays a specific tape.
[**showTapeByTapeLibrary**](TapesApi.md#showTapeByTapeLibrary) | **GET** /tape_libraries/{tape_library_id}/tapes/{tape_id} | Displays a specific tape.
[**showTapeStat**](TapesApi.md#showTapeStat) | **GET** /tapes/{tape_id}/tape_stat | Display statistic for a specific tape.
[**showTapeStatByPool**](TapesApi.md#showTapeStatByPool) | **GET** /pools/{pool_id}/tapes/{tape_id}/tape_stat | Display statistic for a specific tape.
[**showTapeStatByTapeLibrary**](TapesApi.md#showTapeStatByTapeLibrary) | **GET** /tape_libraries/{tape_library_id}/tapes/{tape_id}/tape_stat | Display statistic for a specific tape.



## indexTapeStats

> TapeStatCollection indexTapeStats(opts)

List all tape statistics.

**API Key Scope**: tape_stats / index

### Example

```javascript
import NodeumApi from 'nodeum_api';
let defaultClient = NodeumApi.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new NodeumApi.TapesApi();
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56 // Number | The number of items to skip for pagination.
};
apiInstance.indexTapeStats(opts, (error, data, response) => {
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

### Return type

[**TapeStatCollection**](TapeStatCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indexTapes

> TapeCollection indexTapes(opts)

Lists all tapes.

**API Key Scope**: tapes / index

### Example

```javascript
import NodeumApi from 'nodeum_api';
let defaultClient = NodeumApi.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new NodeumApi.TapesApi();
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'sortBy': ["null"], // [String] | Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
  'id': "id_example", // String | Filter on id
  'tapeLibraryId': "tapeLibraryId_example", // String | Filter on tape library id
  'poolId': "poolId_example", // String | Filter on a pool id
  'barcode': "barcode_example", // String | Filter on barcode
  'location': "location_example", // String | Filter on location
  'type': "type_example", // String | Filter on type
  'locked': "locked_example", // String | Filter on locked
  'scratch': "scratch_example", // String | Filter on scratch
  'cleaning': "cleaning_example", // String | Filter on cleaning
  'writeProtect': "writeProtect_example", // String | Filter on write protect
  'mounted': "mounted_example", // String | Filter on mounted
  'ejected': "ejected_example", // String | Filter on ejected
  'known': "known_example", // String | Filter on known
  'mountCount': "mountCount_example", // String | Filter on mount count
  'dateIn': "dateIn_example", // String | Filter on date in
  'dateMove': "dateMove_example", // String | Filter on date move
  'free': "free_example", // String | Filter on free
  'max': "max_example", // String | Filter on max
  'lastSizeUpdate': "lastSizeUpdate_example", // String | Filter on last size update
  'lastMaintenance': "lastMaintenance_example", // String | Filter on last maintenance
  'lastRepack': "lastRepack_example", // String | Filter on last repack
  'repackStatus': "repackStatus_example", // String | Filter on repack status
  'hash': "hash_example", // String | Filter on hash
  'forceImportType': "forceImportType_example", // String | Filter on force import type
  'needToCheck': "needToCheck_example" // String | Filter on need to check
};
apiInstance.indexTapes(opts, (error, data, response) => {
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
 **tapeLibraryId** | **String**| Filter on tape library id | [optional] 
 **poolId** | **String**| Filter on a pool id | [optional] 
 **barcode** | **String**| Filter on barcode | [optional] 
 **location** | **String**| Filter on location | [optional] 
 **type** | **String**| Filter on type | [optional] 
 **locked** | **String**| Filter on locked | [optional] 
 **scratch** | **String**| Filter on scratch | [optional] 
 **cleaning** | **String**| Filter on cleaning | [optional] 
 **writeProtect** | **String**| Filter on write protect | [optional] 
 **mounted** | **String**| Filter on mounted | [optional] 
 **ejected** | **String**| Filter on ejected | [optional] 
 **known** | **String**| Filter on known | [optional] 
 **mountCount** | **String**| Filter on mount count | [optional] 
 **dateIn** | **String**| Filter on date in | [optional] 
 **dateMove** | **String**| Filter on date move | [optional] 
 **free** | **String**| Filter on free | [optional] 
 **max** | **String**| Filter on max | [optional] 
 **lastSizeUpdate** | **String**| Filter on last size update | [optional] 
 **lastMaintenance** | **String**| Filter on last maintenance | [optional] 
 **lastRepack** | **String**| Filter on last repack | [optional] 
 **repackStatus** | **String**| Filter on repack status | [optional] 
 **hash** | **String**| Filter on hash | [optional] 
 **forceImportType** | **String**| Filter on force import type | [optional] 
 **needToCheck** | **String**| Filter on need to check | [optional] 

### Return type

[**TapeCollection**](TapeCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indexTapesByPool

> TapeCollection indexTapesByPool(poolId, opts)

Lists all tapes.

**API Key Scope**: tapes / index

### Example

```javascript
import NodeumApi from 'nodeum_api';
let defaultClient = NodeumApi.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new NodeumApi.TapesApi();
let poolId = "poolId_example"; // String | Numeric ID, or name of pool.
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'sortBy': ["null"], // [String] | Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
  'id': "id_example", // String | Filter on id
  'tapeLibraryId': "tapeLibraryId_example", // String | Filter on tape library id
  'barcode': "barcode_example", // String | Filter on barcode
  'location': "location_example", // String | Filter on location
  'type': "type_example", // String | Filter on type
  'locked': "locked_example", // String | Filter on locked
  'scratch': "scratch_example", // String | Filter on scratch
  'cleaning': "cleaning_example", // String | Filter on cleaning
  'writeProtect': "writeProtect_example", // String | Filter on write protect
  'mounted': "mounted_example", // String | Filter on mounted
  'ejected': "ejected_example", // String | Filter on ejected
  'known': "known_example", // String | Filter on known
  'mountCount': "mountCount_example", // String | Filter on mount count
  'dateIn': "dateIn_example", // String | Filter on date in
  'dateMove': "dateMove_example", // String | Filter on date move
  'free': "free_example", // String | Filter on free
  'max': "max_example", // String | Filter on max
  'lastSizeUpdate': "lastSizeUpdate_example", // String | Filter on last size update
  'lastMaintenance': "lastMaintenance_example", // String | Filter on last maintenance
  'lastRepack': "lastRepack_example", // String | Filter on last repack
  'repackStatus': "repackStatus_example", // String | Filter on repack status
  'hash': "hash_example", // String | Filter on hash
  'forceImportType': "forceImportType_example", // String | Filter on force import type
  'needToCheck': "needToCheck_example" // String | Filter on need to check
};
apiInstance.indexTapesByPool(poolId, opts, (error, data, response) => {
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
 **poolId** | **String**| Numeric ID, or name of pool. | 
 **limit** | **Number**| The number of items to display for pagination. | [optional] 
 **offset** | **Number**| The number of items to skip for pagination. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort results by attribute.  Can sort on multiple attributes, separated by &#x60;|&#x60;. Order direction can be suffixing the attribute by either &#x60;:asc&#x60; (default) or &#x60;:desc&#x60;. | [optional] 
 **id** | **String**| Filter on id | [optional] 
 **tapeLibraryId** | **String**| Filter on tape library id | [optional] 
 **barcode** | **String**| Filter on barcode | [optional] 
 **location** | **String**| Filter on location | [optional] 
 **type** | **String**| Filter on type | [optional] 
 **locked** | **String**| Filter on locked | [optional] 
 **scratch** | **String**| Filter on scratch | [optional] 
 **cleaning** | **String**| Filter on cleaning | [optional] 
 **writeProtect** | **String**| Filter on write protect | [optional] 
 **mounted** | **String**| Filter on mounted | [optional] 
 **ejected** | **String**| Filter on ejected | [optional] 
 **known** | **String**| Filter on known | [optional] 
 **mountCount** | **String**| Filter on mount count | [optional] 
 **dateIn** | **String**| Filter on date in | [optional] 
 **dateMove** | **String**| Filter on date move | [optional] 
 **free** | **String**| Filter on free | [optional] 
 **max** | **String**| Filter on max | [optional] 
 **lastSizeUpdate** | **String**| Filter on last size update | [optional] 
 **lastMaintenance** | **String**| Filter on last maintenance | [optional] 
 **lastRepack** | **String**| Filter on last repack | [optional] 
 **repackStatus** | **String**| Filter on repack status | [optional] 
 **hash** | **String**| Filter on hash | [optional] 
 **forceImportType** | **String**| Filter on force import type | [optional] 
 **needToCheck** | **String**| Filter on need to check | [optional] 

### Return type

[**TapeCollection**](TapeCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indexTapesByTapeLibrary

> TapeCollection indexTapesByTapeLibrary(tapeLibraryId, opts)

Lists all tapes.

**API Key Scope**: tapes / index

### Example

```javascript
import NodeumApi from 'nodeum_api';
let defaultClient = NodeumApi.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new NodeumApi.TapesApi();
let tapeLibraryId = "tapeLibraryId_example"; // String | Numeric ID, serial, or name of tape library.
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'sortBy': ["null"], // [String] | Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
  'id': "id_example", // String | Filter on id
  'poolId': "poolId_example", // String | Filter on a pool id
  'barcode': "barcode_example", // String | Filter on barcode
  'location': "location_example", // String | Filter on location
  'type': "type_example", // String | Filter on type
  'locked': "locked_example", // String | Filter on locked
  'scratch': "scratch_example", // String | Filter on scratch
  'cleaning': "cleaning_example", // String | Filter on cleaning
  'writeProtect': "writeProtect_example", // String | Filter on write protect
  'mounted': "mounted_example", // String | Filter on mounted
  'ejected': "ejected_example", // String | Filter on ejected
  'known': "known_example", // String | Filter on known
  'mountCount': "mountCount_example", // String | Filter on mount count
  'dateIn': "dateIn_example", // String | Filter on date in
  'dateMove': "dateMove_example", // String | Filter on date move
  'free': "free_example", // String | Filter on free
  'max': "max_example", // String | Filter on max
  'lastSizeUpdate': "lastSizeUpdate_example", // String | Filter on last size update
  'lastMaintenance': "lastMaintenance_example", // String | Filter on last maintenance
  'lastRepack': "lastRepack_example", // String | Filter on last repack
  'repackStatus': "repackStatus_example", // String | Filter on repack status
  'hash': "hash_example", // String | Filter on hash
  'forceImportType': "forceImportType_example", // String | Filter on force import type
  'needToCheck': "needToCheck_example" // String | Filter on need to check
};
apiInstance.indexTapesByTapeLibrary(tapeLibraryId, opts, (error, data, response) => {
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
 **limit** | **Number**| The number of items to display for pagination. | [optional] 
 **offset** | **Number**| The number of items to skip for pagination. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort results by attribute.  Can sort on multiple attributes, separated by &#x60;|&#x60;. Order direction can be suffixing the attribute by either &#x60;:asc&#x60; (default) or &#x60;:desc&#x60;. | [optional] 
 **id** | **String**| Filter on id | [optional] 
 **poolId** | **String**| Filter on a pool id | [optional] 
 **barcode** | **String**| Filter on barcode | [optional] 
 **location** | **String**| Filter on location | [optional] 
 **type** | **String**| Filter on type | [optional] 
 **locked** | **String**| Filter on locked | [optional] 
 **scratch** | **String**| Filter on scratch | [optional] 
 **cleaning** | **String**| Filter on cleaning | [optional] 
 **writeProtect** | **String**| Filter on write protect | [optional] 
 **mounted** | **String**| Filter on mounted | [optional] 
 **ejected** | **String**| Filter on ejected | [optional] 
 **known** | **String**| Filter on known | [optional] 
 **mountCount** | **String**| Filter on mount count | [optional] 
 **dateIn** | **String**| Filter on date in | [optional] 
 **dateMove** | **String**| Filter on date move | [optional] 
 **free** | **String**| Filter on free | [optional] 
 **max** | **String**| Filter on max | [optional] 
 **lastSizeUpdate** | **String**| Filter on last size update | [optional] 
 **lastMaintenance** | **String**| Filter on last maintenance | [optional] 
 **lastRepack** | **String**| Filter on last repack | [optional] 
 **repackStatus** | **String**| Filter on repack status | [optional] 
 **hash** | **String**| Filter on hash | [optional] 
 **forceImportType** | **String**| Filter on force import type | [optional] 
 **needToCheck** | **String**| Filter on need to check | [optional] 

### Return type

[**TapeCollection**](TapeCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mountStatusTape

> MountStatus mountStatusTape(tapeId)

Get mount status of Tape.

**API Key Scope**: tapes / mount_status

### Example

```javascript
import NodeumApi from 'nodeum_api';
let defaultClient = NodeumApi.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new NodeumApi.TapesApi();
let tapeId = "tapeId_example"; // String | Numeric ID, or barcode of tape.
apiInstance.mountStatusTape(tapeId, (error, data, response) => {
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
 **tapeId** | **String**| Numeric ID, or barcode of tape. | 

### Return type

[**MountStatus**](MountStatus.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mountStatusTapeByPool

> MountStatus mountStatusTapeByPool(poolId, tapeId)

Get mount status of Tape.

**API Key Scope**: tapes / mount_status

### Example

```javascript
import NodeumApi from 'nodeum_api';
let defaultClient = NodeumApi.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new NodeumApi.TapesApi();
let poolId = "poolId_example"; // String | Numeric ID, or name of pool.
let tapeId = "tapeId_example"; // String | Numeric ID, or barcode of tape.
apiInstance.mountStatusTapeByPool(poolId, tapeId, (error, data, response) => {
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
 **poolId** | **String**| Numeric ID, or name of pool. | 
 **tapeId** | **String**| Numeric ID, or barcode of tape. | 

### Return type

[**MountStatus**](MountStatus.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mountStatusTapeByTapeLibrary

> MountStatus mountStatusTapeByTapeLibrary(tapeLibraryId, tapeId)

Get mount status of Tape.

**API Key Scope**: tapes / mount_status

### Example

```javascript
import NodeumApi from 'nodeum_api';
let defaultClient = NodeumApi.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new NodeumApi.TapesApi();
let tapeLibraryId = "tapeLibraryId_example"; // String | Numeric ID, serial, or name of tape library.
let tapeId = "tapeId_example"; // String | Numeric ID, or barcode of tape.
apiInstance.mountStatusTapeByTapeLibrary(tapeLibraryId, tapeId, (error, data, response) => {
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
 **tapeId** | **String**| Numeric ID, or barcode of tape. | 

### Return type

[**MountStatus**](MountStatus.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showTape

> Tape showTape(tapeId)

Displays a specific tape.

**API Key Scope**: tapes / show

### Example

```javascript
import NodeumApi from 'nodeum_api';
let defaultClient = NodeumApi.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new NodeumApi.TapesApi();
let tapeId = "tapeId_example"; // String | Numeric ID, or barcode of tape.
apiInstance.showTape(tapeId, (error, data, response) => {
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
 **tapeId** | **String**| Numeric ID, or barcode of tape. | 

### Return type

[**Tape**](Tape.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showTapeByPool

> Tape showTapeByPool(poolId, tapeId)

Displays a specific tape.

**API Key Scope**: tapes / show

### Example

```javascript
import NodeumApi from 'nodeum_api';
let defaultClient = NodeumApi.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new NodeumApi.TapesApi();
let poolId = "poolId_example"; // String | Numeric ID, or name of pool.
let tapeId = "tapeId_example"; // String | Numeric ID, or barcode of tape.
apiInstance.showTapeByPool(poolId, tapeId, (error, data, response) => {
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
 **poolId** | **String**| Numeric ID, or name of pool. | 
 **tapeId** | **String**| Numeric ID, or barcode of tape. | 

### Return type

[**Tape**](Tape.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showTapeByTapeLibrary

> Tape showTapeByTapeLibrary(tapeLibraryId, tapeId)

Displays a specific tape.

**API Key Scope**: tapes / show

### Example

```javascript
import NodeumApi from 'nodeum_api';
let defaultClient = NodeumApi.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new NodeumApi.TapesApi();
let tapeLibraryId = "tapeLibraryId_example"; // String | Numeric ID, serial, or name of tape library.
let tapeId = "tapeId_example"; // String | Numeric ID, or barcode of tape.
apiInstance.showTapeByTapeLibrary(tapeLibraryId, tapeId, (error, data, response) => {
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
 **tapeId** | **String**| Numeric ID, or barcode of tape. | 

### Return type

[**Tape**](Tape.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showTapeStat

> TapeStat showTapeStat(tapeId)

Display statistic for a specific tape.

**API Key Scope**: tape_stats / show

### Example

```javascript
import NodeumApi from 'nodeum_api';
let defaultClient = NodeumApi.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new NodeumApi.TapesApi();
let tapeId = "tapeId_example"; // String | Numeric ID, or barcode of tape.
apiInstance.showTapeStat(tapeId, (error, data, response) => {
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
 **tapeId** | **String**| Numeric ID, or barcode of tape. | 

### Return type

[**TapeStat**](TapeStat.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showTapeStatByPool

> TapeStat showTapeStatByPool(poolId, tapeId)

Display statistic for a specific tape.

**API Key Scope**: tape_stats / show

### Example

```javascript
import NodeumApi from 'nodeum_api';
let defaultClient = NodeumApi.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new NodeumApi.TapesApi();
let poolId = "poolId_example"; // String | Numeric ID, or name of pool.
let tapeId = "tapeId_example"; // String | Numeric ID, or barcode of tape.
apiInstance.showTapeStatByPool(poolId, tapeId, (error, data, response) => {
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
 **poolId** | **String**| Numeric ID, or name of pool. | 
 **tapeId** | **String**| Numeric ID, or barcode of tape. | 

### Return type

[**TapeStat**](TapeStat.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showTapeStatByTapeLibrary

> TapeStat showTapeStatByTapeLibrary(tapeLibraryId, tapeId)

Display statistic for a specific tape.

**API Key Scope**: tape_stats / show

### Example

```javascript
import NodeumApi from 'nodeum_api';
let defaultClient = NodeumApi.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new NodeumApi.TapesApi();
let tapeLibraryId = "tapeLibraryId_example"; // String | Numeric ID, serial, or name of tape library.
let tapeId = "tapeId_example"; // String | Numeric ID, or barcode of tape.
apiInstance.showTapeStatByTapeLibrary(tapeLibraryId, tapeId, (error, data, response) => {
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
 **tapeId** | **String**| Numeric ID, or barcode of tape. | 

### Return type

[**TapeStat**](TapeStat.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

