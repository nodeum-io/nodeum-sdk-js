# NodeumSdk.TaskSourcesApi

All URIs are relative to *http://localhost/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTaskSource**](TaskSourcesApi.md#createTaskSource) | **POST** /tasks/{task_id}/task_sources | Creates a new task source.
[**destroyTaskSource**](TaskSourcesApi.md#destroyTaskSource) | **DELETE** /tasks/{task_id}/task_sources/{task_source_id} | Destroys a specific task source.
[**indexTaskSources**](TaskSourcesApi.md#indexTaskSources) | **GET** /tasks/{task_id}/task_sources | Lists all task sources.
[**showTaskSource**](TaskSourcesApi.md#showTaskSource) | **GET** /tasks/{task_id}/task_sources/{task_source_id} | Displays a specific task source.
[**updateTaskSource**](TaskSourcesApi.md#updateTaskSource) | **PUT** /tasks/{task_id}/task_sources/{task_source_id} | Updates a specific task source.



## createTaskSource

> TaskSourceDown createTaskSource(taskId, taskSourceBody)

Creates a new task source.

**API Key Scope**: task_sources / create

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

let apiInstance = new NodeumSdk.TaskSourcesApi();
let taskId = "taskId_example"; // String | Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
let taskSourceBody = new NodeumSdk.TaskSourceUp(); // TaskSourceUp | 
apiInstance.createTaskSource(taskId, taskSourceBody, (error, data, response) => {
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
 **taskId** | **String**| Numeric ID or name of task. Task names are not unique, it&#39;s recommanded to use numeric ID. | 
 **taskSourceBody** | [**TaskSourceUp**](TaskSourceUp.md)|  | 

### Return type

[**TaskSourceDown**](TaskSourceDown.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## destroyTaskSource

> destroyTaskSource(taskId, taskSourceId)

Destroys a specific task source.

**API Key Scope**: task_sources / destroy

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

let apiInstance = new NodeumSdk.TaskSourcesApi();
let taskId = "taskId_example"; // String | Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
let taskSourceId = 56; // Number | Numeric ID of task source.
apiInstance.destroyTaskSource(taskId, taskSourceId, (error, data, response) => {
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
 **taskId** | **String**| Numeric ID or name of task. Task names are not unique, it&#39;s recommanded to use numeric ID. | 
 **taskSourceId** | **Number**| Numeric ID of task source. | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## indexTaskSources

> TaskSourceCollection indexTaskSources(taskId, opts)

Lists all task sources.

**API Key Scope**: task_sources / index

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

let apiInstance = new NodeumSdk.TaskSourcesApi();
let taskId = "taskId_example"; // String | Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'sortBy': ["null"], // [String] | Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
  'id': "id_example", // String | Filter on id
  'fileId': "fileId_example", // String | Filter on file id
  'importFileId': "importFileId_example", // String | Filter on import file id
  'tapeId': "tapeId_example", // String | Filter on tape id
  'poolId': "poolId_example" // String | Filter on a pool id
};
apiInstance.indexTaskSources(taskId, opts, (error, data, response) => {
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
 **taskId** | **String**| Numeric ID or name of task. Task names are not unique, it&#39;s recommanded to use numeric ID. | 
 **limit** | **Number**| The number of items to display for pagination. | [optional] 
 **offset** | **Number**| The number of items to skip for pagination. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort results by attribute.  Can sort on multiple attributes, separated by &#x60;|&#x60;. Order direction can be suffixing the attribute by either &#x60;:asc&#x60; (default) or &#x60;:desc&#x60;. | [optional] 
 **id** | **String**| Filter on id | [optional] 
 **fileId** | **String**| Filter on file id | [optional] 
 **importFileId** | **String**| Filter on import file id | [optional] 
 **tapeId** | **String**| Filter on tape id | [optional] 
 **poolId** | **String**| Filter on a pool id | [optional] 

### Return type

[**TaskSourceCollection**](TaskSourceCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showTaskSource

> TaskSourceDown showTaskSource(taskId, taskSourceId)

Displays a specific task source.

**API Key Scope**: task_sources / show

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

let apiInstance = new NodeumSdk.TaskSourcesApi();
let taskId = "taskId_example"; // String | Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
let taskSourceId = 56; // Number | Numeric ID of task source.
apiInstance.showTaskSource(taskId, taskSourceId, (error, data, response) => {
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
 **taskId** | **String**| Numeric ID or name of task. Task names are not unique, it&#39;s recommanded to use numeric ID. | 
 **taskSourceId** | **Number**| Numeric ID of task source. | 

### Return type

[**TaskSourceDown**](TaskSourceDown.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTaskSource

> TaskSourceDown updateTaskSource(taskId, taskSourceId, taskSourceBody)

Updates a specific task source.

**API Key Scope**: task_sources / update

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

let apiInstance = new NodeumSdk.TaskSourcesApi();
let taskId = "taskId_example"; // String | Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
let taskSourceId = 56; // Number | Numeric ID of task source.
let taskSourceBody = new NodeumSdk.TaskSourceUp(); // TaskSourceUp | 
apiInstance.updateTaskSource(taskId, taskSourceId, taskSourceBody, (error, data, response) => {
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
 **taskId** | **String**| Numeric ID or name of task. Task names are not unique, it&#39;s recommanded to use numeric ID. | 
 **taskSourceId** | **Number**| Numeric ID of task source. | 
 **taskSourceBody** | [**TaskSourceUp**](TaskSourceUp.md)|  | 

### Return type

[**TaskSourceDown**](TaskSourceDown.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

