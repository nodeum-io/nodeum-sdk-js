# NodeumApi.TaskMetadataApi

All URIs are relative to *http://localhost/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTaskMetadatum**](TaskMetadataApi.md#createTaskMetadatum) | **POST** /tasks/{task_id}/task_metadata | Creates a new task metadatum.
[**destroyTaskMetadatum**](TaskMetadataApi.md#destroyTaskMetadatum) | **DELETE** /tasks/{task_id}/task_metadata/{task_metadatum_id} | Destroys a specific task metadatum.
[**indexTaskMetadata**](TaskMetadataApi.md#indexTaskMetadata) | **GET** /tasks/{task_id}/task_metadata | Lists all task metadata.
[**showTaskMetadatum**](TaskMetadataApi.md#showTaskMetadatum) | **GET** /tasks/{task_id}/task_metadata/{task_metadatum_id} | Displays a specific task metadatum.
[**updateTaskMetadatum**](TaskMetadataApi.md#updateTaskMetadatum) | **PUT** /tasks/{task_id}/task_metadata/{task_metadatum_id} | Updates a specific task metadatum.



## createTaskMetadatum

> TaskMetadatum createTaskMetadatum(taskId, taskMetadatumBody)

Creates a new task metadatum.

**API Key Scope**: task_metadata / create

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

let apiInstance = new NodeumApi.TaskMetadataApi();
let taskId = "taskId_example"; // String | Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
let taskMetadatumBody = new NodeumApi.TaskMetadatum(); // TaskMetadatum | 
apiInstance.createTaskMetadatum(taskId, taskMetadatumBody, (error, data, response) => {
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
 **taskMetadatumBody** | [**TaskMetadatum**](TaskMetadatum.md)|  | 

### Return type

[**TaskMetadatum**](TaskMetadatum.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## destroyTaskMetadatum

> destroyTaskMetadatum(taskId, taskMetadatumId)

Destroys a specific task metadatum.

**API Key Scope**: task_metadata / destroy

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

let apiInstance = new NodeumApi.TaskMetadataApi();
let taskId = "taskId_example"; // String | Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
let taskMetadatumId = 56; // Number | Numeric ID of task metadatum.
apiInstance.destroyTaskMetadatum(taskId, taskMetadatumId, (error, data, response) => {
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
 **taskMetadatumId** | **Number**| Numeric ID of task metadatum. | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## indexTaskMetadata

> TaskMetadatumCollection indexTaskMetadata(taskId, opts)

Lists all task metadata.

**API Key Scope**: task_metadata / index

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

let apiInstance = new NodeumApi.TaskMetadataApi();
let taskId = "taskId_example"; // String | Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'sortBy': ["null"], // [String] | Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
  'id': "id_example", // String | Filter on id
  'key': "key_example", // String | Filter on key
  'value': "value_example" // String | Filter on value
};
apiInstance.indexTaskMetadata(taskId, opts, (error, data, response) => {
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
 **key** | **String**| Filter on key | [optional] 
 **value** | **String**| Filter on value | [optional] 

### Return type

[**TaskMetadatumCollection**](TaskMetadatumCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showTaskMetadatum

> TaskMetadatum showTaskMetadatum(taskId, taskMetadatumId)

Displays a specific task metadatum.

**API Key Scope**: task_metadata / show

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

let apiInstance = new NodeumApi.TaskMetadataApi();
let taskId = "taskId_example"; // String | Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
let taskMetadatumId = 56; // Number | Numeric ID of task metadatum.
apiInstance.showTaskMetadatum(taskId, taskMetadatumId, (error, data, response) => {
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
 **taskMetadatumId** | **Number**| Numeric ID of task metadatum. | 

### Return type

[**TaskMetadatum**](TaskMetadatum.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTaskMetadatum

> TaskMetadatum updateTaskMetadatum(taskId, taskMetadatumId, taskMetadatumBody)

Updates a specific task metadatum.

**API Key Scope**: task_metadata / update

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

let apiInstance = new NodeumApi.TaskMetadataApi();
let taskId = "taskId_example"; // String | Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
let taskMetadatumId = 56; // Number | Numeric ID of task metadatum.
let taskMetadatumBody = new NodeumApi.TaskMetadatum(); // TaskMetadatum | 
apiInstance.updateTaskMetadatum(taskId, taskMetadatumId, taskMetadatumBody, (error, data, response) => {
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
 **taskMetadatumId** | **Number**| Numeric ID of task metadatum. | 
 **taskMetadatumBody** | [**TaskMetadatum**](TaskMetadatum.md)|  | 

### Return type

[**TaskMetadatum**](TaskMetadatum.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

