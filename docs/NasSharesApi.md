# NodeumSdk.NasSharesApi

All URIs are relative to *http://localhost/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNasShareByNas**](NasSharesApi.md#createNasShareByNas) | **POST** /nas/{nas_id}/nas_shares | Creates a new NAS share.
[**destroyNasShare**](NasSharesApi.md#destroyNasShare) | **DELETE** /nas_shares/{nas_share_id} | Destroys a specific NAS share.
[**destroyNasShareByNas**](NasSharesApi.md#destroyNasShareByNas) | **DELETE** /nas/{nas_id}/nas_shares/{nas_share_id} | Destroys a specific NAS share.
[**destroyNasShareByPool**](NasSharesApi.md#destroyNasShareByPool) | **DELETE** /pools/{pool_id}/nas_shares/{nas_share_id} | Destroys a specific NAS share.
[**indexNasShares**](NasSharesApi.md#indexNasShares) | **GET** /nas_shares | Lists all NAS shares.
[**indexNasSharesByNas**](NasSharesApi.md#indexNasSharesByNas) | **GET** /nas/{nas_id}/nas_shares | Lists all NAS shares.
[**indexNasSharesByPool**](NasSharesApi.md#indexNasSharesByPool) | **GET** /pools/{pool_id}/nas_shares | Lists all NAS shares from pool.
[**mountStatusNasShare**](NasSharesApi.md#mountStatusNasShare) | **GET** /nas_shares/{nas_share_id}/mount | Get mount status of NAS Share.
[**mountStatusNasShareByNas**](NasSharesApi.md#mountStatusNasShareByNas) | **GET** /nas/{nas_id}/nas_shares/{nas_share_id}/mount | Get mount status of NAS Share.
[**mountStatusNasShareByPool**](NasSharesApi.md#mountStatusNasShareByPool) | **GET** /pools/{pool_id}/nas_shares/{nas_share_id}/mount | Get mount status of NAS Share.
[**showNasShare**](NasSharesApi.md#showNasShare) | **GET** /nas_shares/{nas_share_id} | Displays a specific NAS share.
[**showNasShareByNas**](NasSharesApi.md#showNasShareByNas) | **GET** /nas/{nas_id}/nas_shares/{nas_share_id} | Displays a specific NAS share.
[**showNasShareByPool**](NasSharesApi.md#showNasShareByPool) | **GET** /pools/{pool_id}/nas_shares/{nas_share_id} | Displays a specific NAS share.
[**testNasShare**](NasSharesApi.md#testNasShare) | **PUT** /nas/{nas_id}/nas_shares/-/test | Test an unsaved NAS Share.
[**testResultNasShare**](NasSharesApi.md#testResultNasShare) | **GET** /nas/{nas_id}/nas_shares/-/test | Check result of a NAS Share test job.
[**updateNasShare**](NasSharesApi.md#updateNasShare) | **PUT** /nas_shares/{nas_share_id} | Updates a specific NAS share.
[**updateNasShareByNas**](NasSharesApi.md#updateNasShareByNas) | **PUT** /nas/{nas_id}/nas_shares/{nas_share_id} | Updates a specific NAS share.
[**updateNasShareByPool**](NasSharesApi.md#updateNasShareByPool) | **PUT** /pools/{pool_id}/nas_shares/{nas_share_id} | Updates a specific NAS share.



## createNasShareByNas

> NasShare createNasShareByNas(nasId, nasShareBody)

Creates a new NAS share.

**API Key Scope**: nas_shares / create

### Example

```javascript
import NodeumSdk from 'nodeum_sdk';
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

let apiInstance = new NodeumSdk.NasSharesApi();
let nasId = "nasId_example"; // String | Numeric ID or name of NAS.
let nasShareBody = new NodeumSdk.NasShare(); // NasShare | 
apiInstance.createNasShareByNas(nasId, nasShareBody, (error, data, response) => {
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
 **nasId** | **String**| Numeric ID or name of NAS. | 
 **nasShareBody** | [**NasShare**](NasShare.md)|  | 

### Return type

[**NasShare**](NasShare.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## destroyNasShare

> destroyNasShare(nasShareId)

Destroys a specific NAS share.

**API Key Scope**: nas_shares / destroy

### Example

```javascript
import NodeumSdk from 'nodeum_sdk';
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

let apiInstance = new NodeumSdk.NasSharesApi();
let nasShareId = "nasShareId_example"; // String | Numeric ID or name of NAS share.
apiInstance.destroyNasShare(nasShareId, (error, data, response) => {
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
 **nasShareId** | **String**| Numeric ID or name of NAS share. | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## destroyNasShareByNas

> destroyNasShareByNas(nasId, nasShareId)

Destroys a specific NAS share.

**API Key Scope**: nas_shares / destroy

### Example

```javascript
import NodeumSdk from 'nodeum_sdk';
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

let apiInstance = new NodeumSdk.NasSharesApi();
let nasId = "nasId_example"; // String | Numeric ID or name of NAS.
let nasShareId = "nasShareId_example"; // String | Numeric ID or name of NAS share.
apiInstance.destroyNasShareByNas(nasId, nasShareId, (error, data, response) => {
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
 **nasId** | **String**| Numeric ID or name of NAS. | 
 **nasShareId** | **String**| Numeric ID or name of NAS share. | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## destroyNasShareByPool

> destroyNasShareByPool(poolId, nasShareId)

Destroys a specific NAS share.

**API Key Scope**: nas_shares / destroy

### Example

```javascript
import NodeumSdk from 'nodeum_sdk';
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

let apiInstance = new NodeumSdk.NasSharesApi();
let poolId = "poolId_example"; // String | Numeric ID, or name of pool.
let nasShareId = "nasShareId_example"; // String | Numeric ID or name of NAS share.
apiInstance.destroyNasShareByPool(poolId, nasShareId, (error, data, response) => {
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
 **poolId** | **String**| Numeric ID, or name of pool. | 
 **nasShareId** | **String**| Numeric ID or name of NAS share. | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## indexNasShares

> NasShareCollection indexNasShares(opts)

Lists all NAS shares.

**API Key Scope**: nas_shares / index   Optional API Key Explicit Scope: nas_shares / get_password

### Example

```javascript
import NodeumSdk from 'nodeum_sdk';
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

let apiInstance = new NodeumSdk.NasSharesApi();
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'sortBy': ["null"], // [String] | Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
  'id': "id_example", // String | Filter on id
  'name': "name_example", // String | Filter on name
  'path': "path_example", // String | Filter on path
  'options': "options_example", // String | Filter on options
  'username': "username_example", // String | Filter on username
  'nasId': "nasId_example", // String | Filter on NAS id
  'poolId': "poolId_example" // String | Filter on a pool id
};
apiInstance.indexNasShares(opts, (error, data, response) => {
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
 **path** | **String**| Filter on path | [optional] 
 **options** | **String**| Filter on options | [optional] 
 **username** | **String**| Filter on username | [optional] 
 **nasId** | **String**| Filter on NAS id | [optional] 
 **poolId** | **String**| Filter on a pool id | [optional] 

### Return type

[**NasShareCollection**](NasShareCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indexNasSharesByNas

> NasShareCollection indexNasSharesByNas(nasId, opts)

Lists all NAS shares.

**API Key Scope**: nas_shares / index   Optional API Key Explicit Scope: nas_shares / get_password

### Example

```javascript
import NodeumSdk from 'nodeum_sdk';
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

let apiInstance = new NodeumSdk.NasSharesApi();
let nasId = "nasId_example"; // String | Numeric ID or name of NAS.
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'sortBy': ["null"], // [String] | Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
  'id': "id_example", // String | Filter on id
  'name': "name_example", // String | Filter on name
  'path': "path_example", // String | Filter on path
  'options': "options_example", // String | Filter on options
  'username': "username_example", // String | Filter on username
  'poolId': "poolId_example" // String | Filter on a pool id
};
apiInstance.indexNasSharesByNas(nasId, opts, (error, data, response) => {
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
 **nasId** | **String**| Numeric ID or name of NAS. | 
 **limit** | **Number**| The number of items to display for pagination. | [optional] 
 **offset** | **Number**| The number of items to skip for pagination. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort results by attribute.  Can sort on multiple attributes, separated by &#x60;|&#x60;. Order direction can be suffixing the attribute by either &#x60;:asc&#x60; (default) or &#x60;:desc&#x60;. | [optional] 
 **id** | **String**| Filter on id | [optional] 
 **name** | **String**| Filter on name | [optional] 
 **path** | **String**| Filter on path | [optional] 
 **options** | **String**| Filter on options | [optional] 
 **username** | **String**| Filter on username | [optional] 
 **poolId** | **String**| Filter on a pool id | [optional] 

### Return type

[**NasShareCollection**](NasShareCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indexNasSharesByPool

> NasShareCollection indexNasSharesByPool(poolId, opts)

Lists all NAS shares from pool.

**API Key Scope**: nas_shares / index   Optional API Key Explicit Scope: nas_shares / get_password

### Example

```javascript
import NodeumSdk from 'nodeum_sdk';
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

let apiInstance = new NodeumSdk.NasSharesApi();
let poolId = "poolId_example"; // String | Numeric ID, or name of pool.
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'sortBy': ["null"], // [String] | Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
  'id': "id_example", // String | Filter on id
  'name': "name_example", // String | Filter on name
  'path': "path_example", // String | Filter on path
  'options': "options_example", // String | Filter on options
  'username': "username_example", // String | Filter on username
  'nasId': "nasId_example" // String | Filter on NAS id
};
apiInstance.indexNasSharesByPool(poolId, opts, (error, data, response) => {
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
 **name** | **String**| Filter on name | [optional] 
 **path** | **String**| Filter on path | [optional] 
 **options** | **String**| Filter on options | [optional] 
 **username** | **String**| Filter on username | [optional] 
 **nasId** | **String**| Filter on NAS id | [optional] 

### Return type

[**NasShareCollection**](NasShareCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mountStatusNasShare

> MountStatus mountStatusNasShare(nasShareId)

Get mount status of NAS Share.

**API Key Scope**: nas_shares / mount_status

### Example

```javascript
import NodeumSdk from 'nodeum_sdk';
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

let apiInstance = new NodeumSdk.NasSharesApi();
let nasShareId = "nasShareId_example"; // String | Numeric ID or name of NAS share.
apiInstance.mountStatusNasShare(nasShareId, (error, data, response) => {
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
 **nasShareId** | **String**| Numeric ID or name of NAS share. | 

### Return type

[**MountStatus**](MountStatus.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mountStatusNasShareByNas

> MountStatus mountStatusNasShareByNas(nasId, nasShareId)

Get mount status of NAS Share.

**API Key Scope**: nas_shares / mount_status

### Example

```javascript
import NodeumSdk from 'nodeum_sdk';
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

let apiInstance = new NodeumSdk.NasSharesApi();
let nasId = "nasId_example"; // String | Numeric ID or name of NAS.
let nasShareId = "nasShareId_example"; // String | Numeric ID or name of NAS share.
apiInstance.mountStatusNasShareByNas(nasId, nasShareId, (error, data, response) => {
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
 **nasId** | **String**| Numeric ID or name of NAS. | 
 **nasShareId** | **String**| Numeric ID or name of NAS share. | 

### Return type

[**MountStatus**](MountStatus.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mountStatusNasShareByPool

> MountStatus mountStatusNasShareByPool(poolId, nasShareId)

Get mount status of NAS Share.

**API Key Scope**: nas_shares / mount_status

### Example

```javascript
import NodeumSdk from 'nodeum_sdk';
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

let apiInstance = new NodeumSdk.NasSharesApi();
let poolId = "poolId_example"; // String | Numeric ID, or name of pool.
let nasShareId = "nasShareId_example"; // String | Numeric ID or name of NAS share.
apiInstance.mountStatusNasShareByPool(poolId, nasShareId, (error, data, response) => {
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
 **nasShareId** | **String**| Numeric ID or name of NAS share. | 

### Return type

[**MountStatus**](MountStatus.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showNasShare

> NasShare showNasShare(nasShareId)

Displays a specific NAS share.

**API Key Scope**: nas_shares / show   Optional API Key Explicit Scope: nas_shares / get_password

### Example

```javascript
import NodeumSdk from 'nodeum_sdk';
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

let apiInstance = new NodeumSdk.NasSharesApi();
let nasShareId = "nasShareId_example"; // String | Numeric ID or name of NAS share.
apiInstance.showNasShare(nasShareId, (error, data, response) => {
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
 **nasShareId** | **String**| Numeric ID or name of NAS share. | 

### Return type

[**NasShare**](NasShare.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showNasShareByNas

> NasShare showNasShareByNas(nasId, nasShareId)

Displays a specific NAS share.

**API Key Scope**: nas_shares / show   Optional API Key Explicit Scope: nas_shares / get_password

### Example

```javascript
import NodeumSdk from 'nodeum_sdk';
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

let apiInstance = new NodeumSdk.NasSharesApi();
let nasId = "nasId_example"; // String | Numeric ID or name of NAS.
let nasShareId = "nasShareId_example"; // String | Numeric ID or name of NAS share.
apiInstance.showNasShareByNas(nasId, nasShareId, (error, data, response) => {
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
 **nasId** | **String**| Numeric ID or name of NAS. | 
 **nasShareId** | **String**| Numeric ID or name of NAS share. | 

### Return type

[**NasShare**](NasShare.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showNasShareByPool

> NasShare showNasShareByPool(poolId, nasShareId)

Displays a specific NAS share.

**API Key Scope**: nas_shares / show   Optional API Key Explicit Scope: nas_shares / get_password

### Example

```javascript
import NodeumSdk from 'nodeum_sdk';
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

let apiInstance = new NodeumSdk.NasSharesApi();
let poolId = "poolId_example"; // String | Numeric ID, or name of pool.
let nasShareId = "nasShareId_example"; // String | Numeric ID or name of NAS share.
apiInstance.showNasShareByPool(poolId, nasShareId, (error, data, response) => {
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
 **nasShareId** | **String**| Numeric ID or name of NAS share. | 

### Return type

[**NasShare**](NasShare.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## testNasShare

> ActiveJobStatus testNasShare(nasId, nasShareBody)

Test an unsaved NAS Share.

**API Key Scope**: nas_shares / test

### Example

```javascript
import NodeumSdk from 'nodeum_sdk';
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

let apiInstance = new NodeumSdk.NasSharesApi();
let nasId = "nasId_example"; // String | Numeric ID or name of NAS.
let nasShareBody = new NodeumSdk.NasShare(); // NasShare | 
apiInstance.testNasShare(nasId, nasShareBody, (error, data, response) => {
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
 **nasId** | **String**| Numeric ID or name of NAS. | 
 **nasShareBody** | [**NasShare**](NasShare.md)|  | 

### Return type

[**ActiveJobStatus**](ActiveJobStatus.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, queued, working, failed


## testResultNasShare

> ActiveJobStatus testResultNasShare(nasId, jobId)

Check result of a NAS Share test job.

**API Key Scope**: nas_shares / test

### Example

```javascript
import NodeumSdk from 'nodeum_sdk';
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

let apiInstance = new NodeumSdk.NasSharesApi();
let nasId = "nasId_example"; // String | Numeric ID or name of NAS.
let jobId = "jobId_example"; // String | ID of active job
apiInstance.testResultNasShare(nasId, jobId, (error, data, response) => {
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
 **nasId** | **String**| Numeric ID or name of NAS. | 
 **jobId** | **String**| ID of active job | 

### Return type

[**ActiveJobStatus**](ActiveJobStatus.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, queued, working, failed


## updateNasShare

> NasShare updateNasShare(nasShareId, nasShareBody)

Updates a specific NAS share.

**API Key Scope**: nas_shares / update

### Example

```javascript
import NodeumSdk from 'nodeum_sdk';
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

let apiInstance = new NodeumSdk.NasSharesApi();
let nasShareId = "nasShareId_example"; // String | Numeric ID or name of NAS share.
let nasShareBody = new NodeumSdk.NasShare(); // NasShare | 
apiInstance.updateNasShare(nasShareId, nasShareBody, (error, data, response) => {
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
 **nasShareId** | **String**| Numeric ID or name of NAS share. | 
 **nasShareBody** | [**NasShare**](NasShare.md)|  | 

### Return type

[**NasShare**](NasShare.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateNasShareByNas

> NasShare updateNasShareByNas(nasId, nasShareId, nasShareBody)

Updates a specific NAS share.

**API Key Scope**: nas_shares / update

### Example

```javascript
import NodeumSdk from 'nodeum_sdk';
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

let apiInstance = new NodeumSdk.NasSharesApi();
let nasId = "nasId_example"; // String | Numeric ID or name of NAS.
let nasShareId = "nasShareId_example"; // String | Numeric ID or name of NAS share.
let nasShareBody = new NodeumSdk.NasShare(); // NasShare | 
apiInstance.updateNasShareByNas(nasId, nasShareId, nasShareBody, (error, data, response) => {
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
 **nasId** | **String**| Numeric ID or name of NAS. | 
 **nasShareId** | **String**| Numeric ID or name of NAS share. | 
 **nasShareBody** | [**NasShare**](NasShare.md)|  | 

### Return type

[**NasShare**](NasShare.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateNasShareByPool

> NasShare updateNasShareByPool(poolId, nasShareId, nasShareBody)

Updates a specific NAS share.

**API Key Scope**: nas_shares / update

### Example

```javascript
import NodeumSdk from 'nodeum_sdk';
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

let apiInstance = new NodeumSdk.NasSharesApi();
let poolId = "poolId_example"; // String | Numeric ID, or name of pool.
let nasShareId = "nasShareId_example"; // String | Numeric ID or name of NAS share.
let nasShareBody = new NodeumSdk.NasShare(); // NasShare | 
apiInstance.updateNasShareByPool(poolId, nasShareId, nasShareBody, (error, data, response) => {
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
 **nasShareId** | **String**| Numeric ID or name of NAS share. | 
 **nasShareBody** | [**NasShare**](NasShare.md)|  | 

### Return type

[**NasShare**](NasShare.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

