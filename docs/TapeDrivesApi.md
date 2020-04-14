# NodeumSdk.TapeDrivesApi

All URIs are relative to *http://localhost/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTapeDriveByTapeLibrary**](TapeDrivesApi.md#createTapeDriveByTapeLibrary) | **POST** /tape_libraries/{tape_library_id}/tape_drives | Creates a new tape drive.
[**destroyTapeDrive**](TapeDrivesApi.md#destroyTapeDrive) | **DELETE** /tape_drives/{tape_drive_id} | Destroys a specific tape drive.
[**destroyTapeDriveByTapeLibrary**](TapeDrivesApi.md#destroyTapeDriveByTapeLibrary) | **DELETE** /tape_libraries/{tape_library_id}/tape_drives/{tape_drive_id} | Destroys a specific tape drive.
[**indexTapeDriveDevices**](TapeDrivesApi.md#indexTapeDriveDevices) | **GET** /tape_libraries/{tape_library_id}/tape_drives/-/devices | Lists tape drives devices.
[**indexTapeDrives**](TapeDrivesApi.md#indexTapeDrives) | **GET** /tape_drives | Lists all tape drives.
[**indexTapeDrivesByTapeLibrary**](TapeDrivesApi.md#indexTapeDrivesByTapeLibrary) | **GET** /tape_libraries/{tape_library_id}/tape_drives | Lists all tape drives.
[**showTapeDrive**](TapeDrivesApi.md#showTapeDrive) | **GET** /tape_drives/{tape_drive_id} | Displays a specific tape drive.
[**showTapeDriveByTapeLibrary**](TapeDrivesApi.md#showTapeDriveByTapeLibrary) | **GET** /tape_libraries/{tape_library_id}/tape_drives/{tape_drive_id} | Displays a specific tape drive.
[**updateTapeDrive**](TapeDrivesApi.md#updateTapeDrive) | **PUT** /tape_drives/{tape_drive_id} | Updates a specific tape drive.
[**updateTapeDriveByTapeLibrary**](TapeDrivesApi.md#updateTapeDriveByTapeLibrary) | **PUT** /tape_libraries/{tape_library_id}/tape_drives/{tape_drive_id} | Updates a specific tape drive.



## createTapeDriveByTapeLibrary

> TapeDrive createTapeDriveByTapeLibrary(tapeLibraryId, tapeDriveBody)

Creates a new tape drive.

**API Key Scope**: tape_drives / create

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

let apiInstance = new NodeumSdk.TapeDrivesApi();
let tapeLibraryId = "tapeLibraryId_example"; // String | Numeric ID, serial, or name of tape library.
let tapeDriveBody = new NodeumSdk.TapeDrive(); // TapeDrive | 
apiInstance.createTapeDriveByTapeLibrary(tapeLibraryId, tapeDriveBody, (error, data, response) => {
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
 **tapeDriveBody** | [**TapeDrive**](TapeDrive.md)|  | 

### Return type

[**TapeDrive**](TapeDrive.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## destroyTapeDrive

> destroyTapeDrive(tapeDriveId)

Destroys a specific tape drive.

**API Key Scope**: tape_drives / destroy

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

let apiInstance = new NodeumSdk.TapeDrivesApi();
let tapeDriveId = "tapeDriveId_example"; // String | Numeric ID, serial, or name of tape drive.
apiInstance.destroyTapeDrive(tapeDriveId, (error, data, response) => {
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
 **tapeDriveId** | **String**| Numeric ID, serial, or name of tape drive. | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## destroyTapeDriveByTapeLibrary

> destroyTapeDriveByTapeLibrary(tapeLibraryId, tapeDriveId)

Destroys a specific tape drive.

**API Key Scope**: tape_drives / destroy

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

let apiInstance = new NodeumSdk.TapeDrivesApi();
let tapeLibraryId = "tapeLibraryId_example"; // String | Numeric ID, serial, or name of tape library.
let tapeDriveId = "tapeDriveId_example"; // String | Numeric ID, serial, or name of tape drive.
apiInstance.destroyTapeDriveByTapeLibrary(tapeLibraryId, tapeDriveId, (error, data, response) => {
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
 **tapeDriveId** | **String**| Numeric ID, serial, or name of tape drive. | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## indexTapeDriveDevices

> TapeDriveDeviceCollection indexTapeDriveDevices(tapeLibraryId, jobId)

Lists tape drives devices.

**API Key Scope**: tape_drives / devices

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

let apiInstance = new NodeumSdk.TapeDrivesApi();
let tapeLibraryId = "tapeLibraryId_example"; // String | Numeric ID, serial, or name of tape library.
let jobId = "jobId_example"; // String | ID of active job
apiInstance.indexTapeDriveDevices(tapeLibraryId, jobId, (error, data, response) => {
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
 **jobId** | **String**| ID of active job | 

### Return type

[**TapeDriveDeviceCollection**](TapeDriveDeviceCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, queued, working, failed, 


## indexTapeDrives

> TapeDriveCollection indexTapeDrives(opts)

Lists all tape drives.

**API Key Scope**: tape_drives / index

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

let apiInstance = new NodeumSdk.TapeDrivesApi();
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'sortBy': ["null"], // [String] | Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
  'id': "id_example", // String | Filter on id
  'tapeLibraryId': "tapeLibraryId_example", // String | Filter on tape library id
  'name': "name_example", // String | Filter on name
  'serial': "serial_example", // String | Filter on serial
  'comment': "comment_example", // String | Filter on comment
  'scsiAddress': "scsiAddress_example", // String | Filter on scsi address
  'vendor': "vendor_example", // String | Filter on vendor
  'product': "product_example", // String | Filter on product
  'firmware': "firmware_example", // String | Filter on firmware
  'device': "device_example", // String | Filter on device
  'sgdevice': "sgdevice_example", // String | Filter on sgdevice
  'libso': "libso_example", // String | Filter on libso
  'acs': "acs_example", // String | Filter on acs
  'lsm': "lsm_example", // String | Filter on lsm
  'panel': "panel_example", // String | Filter on panel
  'transport': "transport_example", // String | Filter on transport
  'status': "status_example", // String | Filter on status
  'full': "full_example", // String | Filter on full
  'mountCount': "mountCount_example", // String | Filter on mount count
  'useTo': "useTo_example", // String | Filter on use to
  'useBy': "useBy_example", // String | Filter on use by
  'barcode': "barcode_example", // String | Filter on barcode
  'taskId': "taskId_example", // String | Filter on task id
  'useFileProcessedSize': "useFileProcessedSize_example", // String | Filter on use file processed size
  'useFileSizeToProcess': "useFileSizeToProcess_example", // String | Filter on use file size to process
  'useFileNameProcessed': "useFileNameProcessed_example", // String | Filter on use file name processed
  'bandwidth': "bandwidth_example" // String | Filter on bandwidth
};
apiInstance.indexTapeDrives(opts, (error, data, response) => {
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
 **name** | **String**| Filter on name | [optional] 
 **serial** | **String**| Filter on serial | [optional] 
 **comment** | **String**| Filter on comment | [optional] 
 **scsiAddress** | **String**| Filter on scsi address | [optional] 
 **vendor** | **String**| Filter on vendor | [optional] 
 **product** | **String**| Filter on product | [optional] 
 **firmware** | **String**| Filter on firmware | [optional] 
 **device** | **String**| Filter on device | [optional] 
 **sgdevice** | **String**| Filter on sgdevice | [optional] 
 **libso** | **String**| Filter on libso | [optional] 
 **acs** | **String**| Filter on acs | [optional] 
 **lsm** | **String**| Filter on lsm | [optional] 
 **panel** | **String**| Filter on panel | [optional] 
 **transport** | **String**| Filter on transport | [optional] 
 **status** | **String**| Filter on status | [optional] 
 **full** | **String**| Filter on full | [optional] 
 **mountCount** | **String**| Filter on mount count | [optional] 
 **useTo** | **String**| Filter on use to | [optional] 
 **useBy** | **String**| Filter on use by | [optional] 
 **barcode** | **String**| Filter on barcode | [optional] 
 **taskId** | **String**| Filter on task id | [optional] 
 **useFileProcessedSize** | **String**| Filter on use file processed size | [optional] 
 **useFileSizeToProcess** | **String**| Filter on use file size to process | [optional] 
 **useFileNameProcessed** | **String**| Filter on use file name processed | [optional] 
 **bandwidth** | **String**| Filter on bandwidth | [optional] 

### Return type

[**TapeDriveCollection**](TapeDriveCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indexTapeDrivesByTapeLibrary

> TapeDriveCollection indexTapeDrivesByTapeLibrary(tapeLibraryId, opts)

Lists all tape drives.

**API Key Scope**: tape_drives / index

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

let apiInstance = new NodeumSdk.TapeDrivesApi();
let tapeLibraryId = "tapeLibraryId_example"; // String | Numeric ID, serial, or name of tape library.
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'sortBy': ["null"], // [String] | Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
  'id': "id_example", // String | Filter on id
  'name': "name_example", // String | Filter on name
  'serial': "serial_example", // String | Filter on serial
  'comment': "comment_example", // String | Filter on comment
  'scsiAddress': "scsiAddress_example", // String | Filter on scsi address
  'vendor': "vendor_example", // String | Filter on vendor
  'product': "product_example", // String | Filter on product
  'firmware': "firmware_example", // String | Filter on firmware
  'device': "device_example", // String | Filter on device
  'sgdevice': "sgdevice_example", // String | Filter on sgdevice
  'libso': "libso_example", // String | Filter on libso
  'acs': "acs_example", // String | Filter on acs
  'lsm': "lsm_example", // String | Filter on lsm
  'panel': "panel_example", // String | Filter on panel
  'transport': "transport_example", // String | Filter on transport
  'status': "status_example", // String | Filter on status
  'full': "full_example", // String | Filter on full
  'mountCount': "mountCount_example", // String | Filter on mount count
  'useTo': "useTo_example", // String | Filter on use to
  'useBy': "useBy_example", // String | Filter on use by
  'barcode': "barcode_example", // String | Filter on barcode
  'taskId': "taskId_example", // String | Filter on task id
  'useFileProcessedSize': "useFileProcessedSize_example", // String | Filter on use file processed size
  'useFileSizeToProcess': "useFileSizeToProcess_example", // String | Filter on use file size to process
  'useFileNameProcessed': "useFileNameProcessed_example", // String | Filter on use file name processed
  'bandwidth': "bandwidth_example" // String | Filter on bandwidth
};
apiInstance.indexTapeDrivesByTapeLibrary(tapeLibraryId, opts, (error, data, response) => {
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
 **name** | **String**| Filter on name | [optional] 
 **serial** | **String**| Filter on serial | [optional] 
 **comment** | **String**| Filter on comment | [optional] 
 **scsiAddress** | **String**| Filter on scsi address | [optional] 
 **vendor** | **String**| Filter on vendor | [optional] 
 **product** | **String**| Filter on product | [optional] 
 **firmware** | **String**| Filter on firmware | [optional] 
 **device** | **String**| Filter on device | [optional] 
 **sgdevice** | **String**| Filter on sgdevice | [optional] 
 **libso** | **String**| Filter on libso | [optional] 
 **acs** | **String**| Filter on acs | [optional] 
 **lsm** | **String**| Filter on lsm | [optional] 
 **panel** | **String**| Filter on panel | [optional] 
 **transport** | **String**| Filter on transport | [optional] 
 **status** | **String**| Filter on status | [optional] 
 **full** | **String**| Filter on full | [optional] 
 **mountCount** | **String**| Filter on mount count | [optional] 
 **useTo** | **String**| Filter on use to | [optional] 
 **useBy** | **String**| Filter on use by | [optional] 
 **barcode** | **String**| Filter on barcode | [optional] 
 **taskId** | **String**| Filter on task id | [optional] 
 **useFileProcessedSize** | **String**| Filter on use file processed size | [optional] 
 **useFileSizeToProcess** | **String**| Filter on use file size to process | [optional] 
 **useFileNameProcessed** | **String**| Filter on use file name processed | [optional] 
 **bandwidth** | **String**| Filter on bandwidth | [optional] 

### Return type

[**TapeDriveCollection**](TapeDriveCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showTapeDrive

> TapeDrive showTapeDrive(tapeDriveId)

Displays a specific tape drive.

**API Key Scope**: tape_drives / show

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

let apiInstance = new NodeumSdk.TapeDrivesApi();
let tapeDriveId = "tapeDriveId_example"; // String | Numeric ID, serial, or name of tape drive.
apiInstance.showTapeDrive(tapeDriveId, (error, data, response) => {
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
 **tapeDriveId** | **String**| Numeric ID, serial, or name of tape drive. | 

### Return type

[**TapeDrive**](TapeDrive.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showTapeDriveByTapeLibrary

> TapeDrive showTapeDriveByTapeLibrary(tapeLibraryId, tapeDriveId)

Displays a specific tape drive.

**API Key Scope**: tape_drives / show

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

let apiInstance = new NodeumSdk.TapeDrivesApi();
let tapeLibraryId = "tapeLibraryId_example"; // String | Numeric ID, serial, or name of tape library.
let tapeDriveId = "tapeDriveId_example"; // String | Numeric ID, serial, or name of tape drive.
apiInstance.showTapeDriveByTapeLibrary(tapeLibraryId, tapeDriveId, (error, data, response) => {
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
 **tapeDriveId** | **String**| Numeric ID, serial, or name of tape drive. | 

### Return type

[**TapeDrive**](TapeDrive.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTapeDrive

> TapeDrive updateTapeDrive(tapeDriveId, tapeDriveBody)

Updates a specific tape drive.

**API Key Scope**: tape_drives / update

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

let apiInstance = new NodeumSdk.TapeDrivesApi();
let tapeDriveId = "tapeDriveId_example"; // String | Numeric ID, serial, or name of tape drive.
let tapeDriveBody = new NodeumSdk.TapeDrive(); // TapeDrive | 
apiInstance.updateTapeDrive(tapeDriveId, tapeDriveBody, (error, data, response) => {
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
 **tapeDriveId** | **String**| Numeric ID, serial, or name of tape drive. | 
 **tapeDriveBody** | [**TapeDrive**](TapeDrive.md)|  | 

### Return type

[**TapeDrive**](TapeDrive.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTapeDriveByTapeLibrary

> TapeDrive updateTapeDriveByTapeLibrary(tapeLibraryId, tapeDriveId, tapeDriveBody)

Updates a specific tape drive.

**API Key Scope**: tape_drives / update

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

let apiInstance = new NodeumSdk.TapeDrivesApi();
let tapeLibraryId = "tapeLibraryId_example"; // String | Numeric ID, serial, or name of tape library.
let tapeDriveId = "tapeDriveId_example"; // String | Numeric ID, serial, or name of tape drive.
let tapeDriveBody = new NodeumSdk.TapeDrive(); // TapeDrive | 
apiInstance.updateTapeDriveByTapeLibrary(tapeLibraryId, tapeDriveId, tapeDriveBody, (error, data, response) => {
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
 **tapeDriveId** | **String**| Numeric ID, serial, or name of tape drive. | 
 **tapeDriveBody** | [**TapeDrive**](TapeDrive.md)|  | 

### Return type

[**TapeDrive**](TapeDrive.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

