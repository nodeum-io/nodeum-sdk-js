# NodeumApi.CloudBucketsApi

All URIs are relative to *http://localhost/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**indexCloudBuckets**](CloudBucketsApi.md#indexCloudBuckets) | **GET** /cloud_buckets | Lists all cloud buckets.
[**indexCloudBucketsByCloudConnector**](CloudBucketsApi.md#indexCloudBucketsByCloudConnector) | **GET** /cloud_connectors/{cloud_connector_id}/cloud_buckets | Lists all cloud buckets.
[**indexCloudBucketsByPool**](CloudBucketsApi.md#indexCloudBucketsByPool) | **GET** /pools/{pool_id}/cloud_buckets | Lists all cloud buckets from pool.
[**mountStatusCloudBucket**](CloudBucketsApi.md#mountStatusCloudBucket) | **GET** /cloud_buckets/{cloud_bucket_id}/mount | Get mount status of Cloud bucket.
[**mountStatusCloudBucketByCloudConnector**](CloudBucketsApi.md#mountStatusCloudBucketByCloudConnector) | **GET** /cloud_connectors/{cloud_connector_id}/cloud_buckets/{cloud_bucket_id}/mount | Get mount status of Cloud bucket.
[**mountStatusCloudBucketByPool**](CloudBucketsApi.md#mountStatusCloudBucketByPool) | **GET** /pools/{pool_id}/cloud_buckets/{cloud_bucket_id}/mount | Get mount status of Cloud bucket.
[**showCloudBucket**](CloudBucketsApi.md#showCloudBucket) | **GET** /cloud_buckets/{cloud_bucket_id} | Displays a specific cloud bucket.
[**showCloudBucketByCloudConnector**](CloudBucketsApi.md#showCloudBucketByCloudConnector) | **GET** /cloud_connectors/{cloud_connector_id}/cloud_buckets/{cloud_bucket_id} | Displays a specific cloud bucket.
[**showCloudBucketByPool**](CloudBucketsApi.md#showCloudBucketByPool) | **GET** /pools/{pool_id}/cloud_buckets/{cloud_bucket_id} | Displays a specific cloud bucket.
[**syncCloudBuckets**](CloudBucketsApi.md#syncCloudBuckets) | **PUT** /cloud_connectors/{cloud_connector_id}/cloud_buckets/-/sync | Synchronize internal cloud buckets with their remote equivalent.
[**syncResultCloudBuckets**](CloudBucketsApi.md#syncResultCloudBuckets) | **GET** /cloud_connectors/{cloud_connector_id}/cloud_buckets/-/sync | Check result of cloud connector sync job.
[**updateCloudBucket**](CloudBucketsApi.md#updateCloudBucket) | **PUT** /cloud_buckets/{cloud_bucket_id} | Updates a specific cloud bucket.
[**updateCloudBucketByCloudConnector**](CloudBucketsApi.md#updateCloudBucketByCloudConnector) | **PUT** /cloud_connectors/{cloud_connector_id}/cloud_buckets/{cloud_bucket_id} | Updates a specific cloud bucket.
[**updateCloudBucketByPool**](CloudBucketsApi.md#updateCloudBucketByPool) | **PUT** /pools/{pool_id}/cloud_buckets/{cloud_bucket_id} | Updates a specific cloud bucket.



## indexCloudBuckets

> CloudBucketCollection indexCloudBuckets(opts)

Lists all cloud buckets.

**API Key Scope**: cloud_buckets / index

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

let apiInstance = new NodeumApi.CloudBucketsApi();
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'sortBy': ["null"], // [String] | Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
  'id': "id_example", // String | Filter on id
  'cloudConnectorId': "cloudConnectorId_example", // String | Filter on cloud connector id
  'poolId': "poolId_example", // String | Filter on a pool id
  'name': "name_example", // String | Filter on name
  'location': "location_example", // String | Filter on location
  'price': "price_example" // String | Filter on price
};
apiInstance.indexCloudBuckets(opts, (error, data, response) => {
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
 **cloudConnectorId** | **String**| Filter on cloud connector id | [optional] 
 **poolId** | **String**| Filter on a pool id | [optional] 
 **name** | **String**| Filter on name | [optional] 
 **location** | **String**| Filter on location | [optional] 
 **price** | **String**| Filter on price | [optional] 

### Return type

[**CloudBucketCollection**](CloudBucketCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indexCloudBucketsByCloudConnector

> CloudBucketCollection indexCloudBucketsByCloudConnector(cloudConnectorId, opts)

Lists all cloud buckets.

**API Key Scope**: cloud_buckets / index

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

let apiInstance = new NodeumApi.CloudBucketsApi();
let cloudConnectorId = "cloudConnectorId_example"; // String | Numeric ID or name of cloud connector.
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'sortBy': ["null"], // [String] | Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
  'id': "id_example", // String | Filter on id
  'poolId': "poolId_example", // String | Filter on a pool id
  'name': "name_example", // String | Filter on name
  'location': "location_example", // String | Filter on location
  'price': "price_example" // String | Filter on price
};
apiInstance.indexCloudBucketsByCloudConnector(cloudConnectorId, opts, (error, data, response) => {
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
 **cloudConnectorId** | **String**| Numeric ID or name of cloud connector. | 
 **limit** | **Number**| The number of items to display for pagination. | [optional] 
 **offset** | **Number**| The number of items to skip for pagination. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort results by attribute.  Can sort on multiple attributes, separated by &#x60;|&#x60;. Order direction can be suffixing the attribute by either &#x60;:asc&#x60; (default) or &#x60;:desc&#x60;. | [optional] 
 **id** | **String**| Filter on id | [optional] 
 **poolId** | **String**| Filter on a pool id | [optional] 
 **name** | **String**| Filter on name | [optional] 
 **location** | **String**| Filter on location | [optional] 
 **price** | **String**| Filter on price | [optional] 

### Return type

[**CloudBucketCollection**](CloudBucketCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indexCloudBucketsByPool

> CloudBucketCollection indexCloudBucketsByPool(poolId, opts)

Lists all cloud buckets from pool.

**API Key Scope**: cloud_buckets / index

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

let apiInstance = new NodeumApi.CloudBucketsApi();
let poolId = "poolId_example"; // String | Numeric ID, or name of pool.
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'sortBy': ["null"], // [String] | Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
  'id': "id_example", // String | Filter on id
  'cloudConnectorId': "cloudConnectorId_example", // String | Filter on cloud connector id
  'name': "name_example", // String | Filter on name
  'location': "location_example", // String | Filter on location
  'price': "price_example" // String | Filter on price
};
apiInstance.indexCloudBucketsByPool(poolId, opts, (error, data, response) => {
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
 **cloudConnectorId** | **String**| Filter on cloud connector id | [optional] 
 **name** | **String**| Filter on name | [optional] 
 **location** | **String**| Filter on location | [optional] 
 **price** | **String**| Filter on price | [optional] 

### Return type

[**CloudBucketCollection**](CloudBucketCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mountStatusCloudBucket

> MountStatus mountStatusCloudBucket(cloudBucketId)

Get mount status of Cloud bucket.

**API Key Scope**: cloud_buckets / mount_status

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

let apiInstance = new NodeumApi.CloudBucketsApi();
let cloudBucketId = "cloudBucketId_example"; // String | Numeric ID or name of cloud bucket.
apiInstance.mountStatusCloudBucket(cloudBucketId, (error, data, response) => {
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
 **cloudBucketId** | **String**| Numeric ID or name of cloud bucket. | 

### Return type

[**MountStatus**](MountStatus.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mountStatusCloudBucketByCloudConnector

> MountStatus mountStatusCloudBucketByCloudConnector(cloudConnectorId, cloudBucketId)

Get mount status of Cloud bucket.

**API Key Scope**: cloud_buckets / mount_status

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

let apiInstance = new NodeumApi.CloudBucketsApi();
let cloudConnectorId = "cloudConnectorId_example"; // String | Numeric ID or name of cloud connector.
let cloudBucketId = "cloudBucketId_example"; // String | Numeric ID or name of cloud bucket.
apiInstance.mountStatusCloudBucketByCloudConnector(cloudConnectorId, cloudBucketId, (error, data, response) => {
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
 **cloudConnectorId** | **String**| Numeric ID or name of cloud connector. | 
 **cloudBucketId** | **String**| Numeric ID or name of cloud bucket. | 

### Return type

[**MountStatus**](MountStatus.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mountStatusCloudBucketByPool

> MountStatus mountStatusCloudBucketByPool(poolId, cloudBucketId)

Get mount status of Cloud bucket.

**API Key Scope**: cloud_buckets / mount_status

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

let apiInstance = new NodeumApi.CloudBucketsApi();
let poolId = "poolId_example"; // String | Numeric ID, or name of pool.
let cloudBucketId = "cloudBucketId_example"; // String | Numeric ID or name of cloud bucket.
apiInstance.mountStatusCloudBucketByPool(poolId, cloudBucketId, (error, data, response) => {
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
 **cloudBucketId** | **String**| Numeric ID or name of cloud bucket. | 

### Return type

[**MountStatus**](MountStatus.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showCloudBucket

> CloudBucket showCloudBucket(cloudBucketId)

Displays a specific cloud bucket.

**API Key Scope**: cloud_buckets / show

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

let apiInstance = new NodeumApi.CloudBucketsApi();
let cloudBucketId = "cloudBucketId_example"; // String | Numeric ID or name of cloud bucket.
apiInstance.showCloudBucket(cloudBucketId, (error, data, response) => {
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
 **cloudBucketId** | **String**| Numeric ID or name of cloud bucket. | 

### Return type

[**CloudBucket**](CloudBucket.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showCloudBucketByCloudConnector

> CloudBucket showCloudBucketByCloudConnector(cloudConnectorId, cloudBucketId)

Displays a specific cloud bucket.

**API Key Scope**: cloud_buckets / show

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

let apiInstance = new NodeumApi.CloudBucketsApi();
let cloudConnectorId = "cloudConnectorId_example"; // String | Numeric ID or name of cloud connector.
let cloudBucketId = "cloudBucketId_example"; // String | Numeric ID or name of cloud bucket.
apiInstance.showCloudBucketByCloudConnector(cloudConnectorId, cloudBucketId, (error, data, response) => {
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
 **cloudConnectorId** | **String**| Numeric ID or name of cloud connector. | 
 **cloudBucketId** | **String**| Numeric ID or name of cloud bucket. | 

### Return type

[**CloudBucket**](CloudBucket.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showCloudBucketByPool

> CloudBucket showCloudBucketByPool(poolId, cloudBucketId)

Displays a specific cloud bucket.

**API Key Scope**: cloud_buckets / show

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

let apiInstance = new NodeumApi.CloudBucketsApi();
let poolId = "poolId_example"; // String | Numeric ID, or name of pool.
let cloudBucketId = "cloudBucketId_example"; // String | Numeric ID or name of cloud bucket.
apiInstance.showCloudBucketByPool(poolId, cloudBucketId, (error, data, response) => {
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
 **cloudBucketId** | **String**| Numeric ID or name of cloud bucket. | 

### Return type

[**CloudBucket**](CloudBucket.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## syncCloudBuckets

> ActiveJobStatus syncCloudBuckets(cloudConnectorId)

Synchronize internal cloud buckets with their remote equivalent.

**API Key Scope**: cloud_buckets / sync

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

let apiInstance = new NodeumApi.CloudBucketsApi();
let cloudConnectorId = "cloudConnectorId_example"; // String | Numeric ID or name of cloud connector.
apiInstance.syncCloudBuckets(cloudConnectorId, (error, data, response) => {
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
 **cloudConnectorId** | **String**| Numeric ID or name of cloud connector. | 

### Return type

[**ActiveJobStatus**](ActiveJobStatus.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, queued, working, failed


## syncResultCloudBuckets

> CloudBucketSimpleCollection syncResultCloudBuckets(cloudConnectorId, jobId)

Check result of cloud connector sync job.

**API Key Scope**: cloud_buckets / sync

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

let apiInstance = new NodeumApi.CloudBucketsApi();
let cloudConnectorId = "cloudConnectorId_example"; // String | Numeric ID or name of cloud connector.
let jobId = "jobId_example"; // String | ID of active job
apiInstance.syncResultCloudBuckets(cloudConnectorId, jobId, (error, data, response) => {
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
 **cloudConnectorId** | **String**| Numeric ID or name of cloud connector. | 
 **jobId** | **String**| ID of active job | 

### Return type

[**CloudBucketSimpleCollection**](CloudBucketSimpleCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, queued, working, failed, 


## updateCloudBucket

> CloudBucket updateCloudBucket(cloudBucketId, cloudBucketBody)

Updates a specific cloud bucket.

**API Key Scope**: cloud_buckets / update

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

let apiInstance = new NodeumApi.CloudBucketsApi();
let cloudBucketId = "cloudBucketId_example"; // String | Numeric ID or name of cloud bucket.
let cloudBucketBody = new NodeumApi.CloudBucket(); // CloudBucket | 
apiInstance.updateCloudBucket(cloudBucketId, cloudBucketBody, (error, data, response) => {
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
 **cloudBucketId** | **String**| Numeric ID or name of cloud bucket. | 
 **cloudBucketBody** | [**CloudBucket**](CloudBucket.md)|  | 

### Return type

[**CloudBucket**](CloudBucket.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCloudBucketByCloudConnector

> CloudBucket updateCloudBucketByCloudConnector(cloudConnectorId, cloudBucketId, cloudBucketBody)

Updates a specific cloud bucket.

**API Key Scope**: cloud_buckets / update

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

let apiInstance = new NodeumApi.CloudBucketsApi();
let cloudConnectorId = "cloudConnectorId_example"; // String | Numeric ID or name of cloud connector.
let cloudBucketId = "cloudBucketId_example"; // String | Numeric ID or name of cloud bucket.
let cloudBucketBody = new NodeumApi.CloudBucket(); // CloudBucket | 
apiInstance.updateCloudBucketByCloudConnector(cloudConnectorId, cloudBucketId, cloudBucketBody, (error, data, response) => {
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
 **cloudConnectorId** | **String**| Numeric ID or name of cloud connector. | 
 **cloudBucketId** | **String**| Numeric ID or name of cloud bucket. | 
 **cloudBucketBody** | [**CloudBucket**](CloudBucket.md)|  | 

### Return type

[**CloudBucket**](CloudBucket.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCloudBucketByPool

> CloudBucket updateCloudBucketByPool(poolId, cloudBucketId, cloudBucketBody)

Updates a specific cloud bucket.

**API Key Scope**: cloud_buckets / update

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

let apiInstance = new NodeumApi.CloudBucketsApi();
let poolId = "poolId_example"; // String | Numeric ID, or name of pool.
let cloudBucketId = "cloudBucketId_example"; // String | Numeric ID or name of cloud bucket.
let cloudBucketBody = new NodeumApi.CloudBucket(); // CloudBucket | 
apiInstance.updateCloudBucketByPool(poolId, cloudBucketId, cloudBucketBody, (error, data, response) => {
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
 **cloudBucketId** | **String**| Numeric ID or name of cloud bucket. | 
 **cloudBucketBody** | [**CloudBucket**](CloudBucket.md)|  | 

### Return type

[**CloudBucket**](CloudBucket.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

