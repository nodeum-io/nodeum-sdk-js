# NodeumApi.CloudConnectorsApi

All URIs are relative to *http://localhost/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCloudConnector**](CloudConnectorsApi.md#createCloudConnector) | **POST** /cloud_connectors | Creates a new cloud connector.
[**destroyCloudConnector**](CloudConnectorsApi.md#destroyCloudConnector) | **DELETE** /cloud_connectors/{cloud_connector_id} | Destroys a specific cloud connector.
[**indexCloudConnectors**](CloudConnectorsApi.md#indexCloudConnectors) | **GET** /cloud_connectors | Lists all cloud connectors.
[**showCloudConnector**](CloudConnectorsApi.md#showCloudConnector) | **GET** /cloud_connectors/{cloud_connector_id} | Displays a specific cloud connector.
[**testCloudConnector**](CloudConnectorsApi.md#testCloudConnector) | **PUT** /cloud_connectors/-/test | Test an unsaved cloud connector.
[**testResultCloudConnector**](CloudConnectorsApi.md#testResultCloudConnector) | **GET** /cloud_connectors/-/test | Check result of cloud connector test job.
[**updateCloudConnector**](CloudConnectorsApi.md#updateCloudConnector) | **PUT** /cloud_connectors/{cloud_connector_id} | Updates a specific cloud connector.



## createCloudConnector

> CloudConnector createCloudConnector(cloudConnectorBody)

Creates a new cloud connector.

**API Key Scope**: cloud_connectors / create

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

let apiInstance = new NodeumApi.CloudConnectorsApi();
let cloudConnectorBody = new NodeumApi.CloudConnector(); // CloudConnector | 
apiInstance.createCloudConnector(cloudConnectorBody, (error, data, response) => {
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
 **cloudConnectorBody** | [**CloudConnector**](CloudConnector.md)|  | 

### Return type

[**CloudConnector**](CloudConnector.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## destroyCloudConnector

> destroyCloudConnector(cloudConnectorId)

Destroys a specific cloud connector.

**API Key Scope**: cloud_connectors / destroy

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

let apiInstance = new NodeumApi.CloudConnectorsApi();
let cloudConnectorId = "cloudConnectorId_example"; // String | Numeric ID or name of cloud connector.
apiInstance.destroyCloudConnector(cloudConnectorId, (error, data, response) => {
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
 **cloudConnectorId** | **String**| Numeric ID or name of cloud connector. | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## indexCloudConnectors

> CloudConnectorCollection indexCloudConnectors(opts)

Lists all cloud connectors.

**API Key Scope**: cloud_connectors / index   Optional API Key Explicit Scope: cloud_connectors / get_secret_key

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

let apiInstance = new NodeumApi.CloudConnectorsApi();
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'sortBy': ["null"], // [String] | Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
  'id': "id_example", // String | Filter on id
  'name': "name_example", // String | Filter on name
  'url': "url_example", // String | Filter on url
  'urlProxy': "urlProxy_example", // String | Filter on url proxy
  'provider': "provider_example", // String | Filter on provider
  'region': "region_example", // String | Filter on region
  'accessKey': "accessKey_example" // String | Filter on access key
};
apiInstance.indexCloudConnectors(opts, (error, data, response) => {
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
 **url** | **String**| Filter on url | [optional] 
 **urlProxy** | **String**| Filter on url proxy | [optional] 
 **provider** | **String**| Filter on provider | [optional] 
 **region** | **String**| Filter on region | [optional] 
 **accessKey** | **String**| Filter on access key | [optional] 

### Return type

[**CloudConnectorCollection**](CloudConnectorCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showCloudConnector

> CloudConnector showCloudConnector(cloudConnectorId)

Displays a specific cloud connector.

**API Key Scope**: cloud_connectors / show   Optional API Key Explicit Scope: cloud_connectors / get_secret_key

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

let apiInstance = new NodeumApi.CloudConnectorsApi();
let cloudConnectorId = "cloudConnectorId_example"; // String | Numeric ID or name of cloud connector.
apiInstance.showCloudConnector(cloudConnectorId, (error, data, response) => {
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

[**CloudConnector**](CloudConnector.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## testCloudConnector

> ActiveJobStatus testCloudConnector(cloudConnectorBody)

Test an unsaved cloud connector.

**API Key Scope**: cloud_connectors / test

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

let apiInstance = new NodeumApi.CloudConnectorsApi();
let cloudConnectorBody = new NodeumApi.CloudConnector(); // CloudConnector | 
apiInstance.testCloudConnector(cloudConnectorBody, (error, data, response) => {
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
 **cloudConnectorBody** | [**CloudConnector**](CloudConnector.md)|  | 

### Return type

[**ActiveJobStatus**](ActiveJobStatus.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, queued, working, failed


## testResultCloudConnector

> CloudBucketSimpleCollection testResultCloudConnector(jobId)

Check result of cloud connector test job.

**API Key Scope**: cloud_connectors / test

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

let apiInstance = new NodeumApi.CloudConnectorsApi();
let jobId = "jobId_example"; // String | ID of active job
apiInstance.testResultCloudConnector(jobId, (error, data, response) => {
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

[**CloudBucketSimpleCollection**](CloudBucketSimpleCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, queued, working, failed, 


## updateCloudConnector

> CloudConnector updateCloudConnector(cloudConnectorId, cloudConnectorBody)

Updates a specific cloud connector.

**API Key Scope**: cloud_connectors / update

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

let apiInstance = new NodeumApi.CloudConnectorsApi();
let cloudConnectorId = "cloudConnectorId_example"; // String | Numeric ID or name of cloud connector.
let cloudConnectorBody = new NodeumApi.CloudConnector(); // CloudConnector | 
apiInstance.updateCloudConnector(cloudConnectorId, cloudConnectorBody, (error, data, response) => {
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
 **cloudConnectorBody** | [**CloudConnector**](CloudConnector.md)|  | 

### Return type

[**CloudConnector**](CloudConnector.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

