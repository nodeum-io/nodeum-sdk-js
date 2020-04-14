# NodeumSdk.TaskDestinationsApi

All URIs are relative to *http://localhost/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTaskDestination**](TaskDestinationsApi.md#createTaskDestination) | **POST** /tasks/{task_id}/task_destinations | Creates a new task destination.
[**destroyTaskDestination**](TaskDestinationsApi.md#destroyTaskDestination) | **DELETE** /tasks/{task_id}/task_destinations/{task_destination_id} | Destroys a specific task destination.
[**indexTaskDestinations**](TaskDestinationsApi.md#indexTaskDestinations) | **GET** /tasks/{task_id}/task_destinations | Lists all task destinations.
[**showTaskDestination**](TaskDestinationsApi.md#showTaskDestination) | **GET** /tasks/{task_id}/task_destinations/{task_destination_id} | Displays a specific task destination.
[**updateTaskDestination**](TaskDestinationsApi.md#updateTaskDestination) | **PUT** /tasks/{task_id}/task_destinations/{task_destination_id} | Updates a specific task destination.



## createTaskDestination

> TaskDestinationDown createTaskDestination(taskId, taskDestinationBody)

Creates a new task destination.

**API Key Scope**: task_destinations / create

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

let apiInstance = new NodeumSdk.TaskDestinationsApi();
let taskId = "taskId_example"; // String | Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
let taskDestinationBody = new NodeumSdk.TaskDestinationUp(); // TaskDestinationUp | 
apiInstance.createTaskDestination(taskId, taskDestinationBody, (error, data, response) => {
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
 **taskDestinationBody** | [**TaskDestinationUp**](TaskDestinationUp.md)|  | 

### Return type

[**TaskDestinationDown**](TaskDestinationDown.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## destroyTaskDestination

> destroyTaskDestination(taskId, taskDestinationId)

Destroys a specific task destination.

**API Key Scope**: task_destinations / destroy

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

let apiInstance = new NodeumSdk.TaskDestinationsApi();
let taskId = "taskId_example"; // String | Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
let taskDestinationId = 56; // Number | Numeric ID of task destination.
apiInstance.destroyTaskDestination(taskId, taskDestinationId, (error, data, response) => {
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
 **taskDestinationId** | **Number**| Numeric ID of task destination. | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## indexTaskDestinations

> TaskDestinationCollection indexTaskDestinations(taskId, opts)

Lists all task destinations.

**API Key Scope**: task_destinations / index

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

let apiInstance = new NodeumSdk.TaskDestinationsApi();
let taskId = "taskId_example"; // String | Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'sortBy': ["null"], // [String] | Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
  'id': "id_example", // String | Filter on id
  'folderId': "folderId_example", // String | Filter on folder id
  'tapeId': "tapeId_example", // String | Filter on tape id
  'poolId': "poolId_example" // String | Filter on a pool id
};
apiInstance.indexTaskDestinations(taskId, opts, (error, data, response) => {
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
 **folderId** | **String**| Filter on folder id | [optional] 
 **tapeId** | **String**| Filter on tape id | [optional] 
 **poolId** | **String**| Filter on a pool id | [optional] 

### Return type

[**TaskDestinationCollection**](TaskDestinationCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showTaskDestination

> TaskDestinationDown showTaskDestination(taskId, taskDestinationId)

Displays a specific task destination.

**API Key Scope**: task_destinations / show

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

let apiInstance = new NodeumSdk.TaskDestinationsApi();
let taskId = "taskId_example"; // String | Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
let taskDestinationId = 56; // Number | Numeric ID of task destination.
apiInstance.showTaskDestination(taskId, taskDestinationId, (error, data, response) => {
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
 **taskDestinationId** | **Number**| Numeric ID of task destination. | 

### Return type

[**TaskDestinationDown**](TaskDestinationDown.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTaskDestination

> TaskDestinationDown updateTaskDestination(taskId, taskDestinationId, taskDestinationBody)

Updates a specific task destination.

**API Key Scope**: task_destinations / update

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

let apiInstance = new NodeumSdk.TaskDestinationsApi();
let taskId = "taskId_example"; // String | Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
let taskDestinationId = 56; // Number | Numeric ID of task destination.
let taskDestinationBody = new NodeumSdk.TaskDestinationUp(); // TaskDestinationUp | 
apiInstance.updateTaskDestination(taskId, taskDestinationId, taskDestinationBody, (error, data, response) => {
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
 **taskDestinationId** | **Number**| Numeric ID of task destination. | 
 **taskDestinationBody** | [**TaskDestinationUp**](TaskDestinationUp.md)|  | 

### Return type

[**TaskDestinationDown**](TaskDestinationDown.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

