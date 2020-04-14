# NodeumSdk.TaskExecutionsApi

All URIs are relative to *http://localhost/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**indexTaskExecutions**](TaskExecutionsApi.md#indexTaskExecutions) | **GET** /task_executions | Lists all task executions.
[**indexTaskExecutionsByTask**](TaskExecutionsApi.md#indexTaskExecutionsByTask) | **GET** /tasks/{task_id}/task_executions | Lists all task executions.
[**showTaskExecution**](TaskExecutionsApi.md#showTaskExecution) | **GET** /task_executions/{task_execution_id} | Displays a specific task execution.
[**showTaskExecutionByTask**](TaskExecutionsApi.md#showTaskExecutionByTask) | **GET** /tasks/{task_id}/task_executions/{task_execution_id} | Displays a specific task execution.



## indexTaskExecutions

> TaskExecutionCollection indexTaskExecutions(opts)

Lists all task executions.

**API Key Scope**: task_executions / index

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

let apiInstance = new NodeumSdk.TaskExecutionsApi();
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'sortBy': ["null"], // [String] | Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
  'completeList': true, // Boolean | If `false`, only includes the last correct execution of a task.
  'id': "id_example", // String | Filter on id
  'taskId': "taskId_example", // String | Filter on task id
  'name': "name_example", // String | Filter on name
  'workflowType': "workflowType_example", // String | Filter on task workflow type
  'workflowAction': "workflowAction_example", // String | Filter on task workflow action
  'sourceType': "sourceType_example", // String | Filter on task source type
  'destinationType': "destinationType_example", // String | Filter on task destination type
  'status': "status_example", // String | Filter on status
  'logTime': "logTime_example", // String | Filter on log time
  'jobStarted': "jobStarted_example", // String | Filter on job started
  'jobFinished': "jobFinished_example", // String | Filter on job finished
  'creationDate': "creationDate_example", // String | Filter on creation date
  'modificationDate': "modificationDate_example", // String | Filter on modification date
  'toProcessSize': "toProcessSize_example", // String | Filter on to process size
  'processedSize': "processedSize_example", // String | Filter on processed size
  'toProcessFiles': "toProcessFiles_example", // String | Filter on to process files
  'processedFiles': "processedFiles_example", // String | Filter on processed files
  'finalizedFiles': "finalizedFiles_example", // String | Filter on finalized files
  'estimationTime': "estimationTime_example", // String | Filter on estimation time
  'bandwidth': "bandwidth_example" // String | Filter on bandwidth
};
apiInstance.indexTaskExecutions(opts, (error, data, response) => {
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
 **completeList** | **Boolean**| If &#x60;false&#x60;, only includes the last correct execution of a task. | [optional] [default to true]
 **id** | **String**| Filter on id | [optional] 
 **taskId** | **String**| Filter on task id | [optional] 
 **name** | **String**| Filter on name | [optional] 
 **workflowType** | **String**| Filter on task workflow type | [optional] 
 **workflowAction** | **String**| Filter on task workflow action | [optional] 
 **sourceType** | **String**| Filter on task source type | [optional] 
 **destinationType** | **String**| Filter on task destination type | [optional] 
 **status** | **String**| Filter on status | [optional] 
 **logTime** | **String**| Filter on log time | [optional] 
 **jobStarted** | **String**| Filter on job started | [optional] 
 **jobFinished** | **String**| Filter on job finished | [optional] 
 **creationDate** | **String**| Filter on creation date | [optional] 
 **modificationDate** | **String**| Filter on modification date | [optional] 
 **toProcessSize** | **String**| Filter on to process size | [optional] 
 **processedSize** | **String**| Filter on processed size | [optional] 
 **toProcessFiles** | **String**| Filter on to process files | [optional] 
 **processedFiles** | **String**| Filter on processed files | [optional] 
 **finalizedFiles** | **String**| Filter on finalized files | [optional] 
 **estimationTime** | **String**| Filter on estimation time | [optional] 
 **bandwidth** | **String**| Filter on bandwidth | [optional] 

### Return type

[**TaskExecutionCollection**](TaskExecutionCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indexTaskExecutionsByTask

> TaskExecutionCollection indexTaskExecutionsByTask(opts)

Lists all task executions.

**API Key Scope**: task_executions / index

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

let apiInstance = new NodeumSdk.TaskExecutionsApi();
let opts = {
  'taskId': "taskId_example", // String | Filter on task id
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'sortBy': ["null"], // [String] | Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
  'id': "id_example", // String | Filter on id
  'name': "name_example", // String | Filter on name
  'workflowType': "workflowType_example", // String | Filter on task workflow type
  'workflowAction': "workflowAction_example", // String | Filter on task workflow action
  'sourceType': "sourceType_example", // String | Filter on task source type
  'destinationType': "destinationType_example", // String | Filter on task destination type
  'status': "status_example", // String | Filter on status
  'logTime': "logTime_example", // String | Filter on log time
  'jobStarted': "jobStarted_example", // String | Filter on job started
  'jobFinished': "jobFinished_example", // String | Filter on job finished
  'toProcessSize': "toProcessSize_example", // String | Filter on to process size
  'processedSize': "processedSize_example", // String | Filter on processed size
  'toProcessFiles': "toProcessFiles_example", // String | Filter on to process files
  'processedFiles': "processedFiles_example", // String | Filter on processed files
  'finalizedFiles': "finalizedFiles_example", // String | Filter on finalized files
  'estimationTime': "estimationTime_example", // String | Filter on estimation time
  'bandwidth': "bandwidth_example" // String | Filter on bandwidth
};
apiInstance.indexTaskExecutionsByTask(opts, (error, data, response) => {
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
 **taskId** | **String**| Filter on task id | [optional] 
 **limit** | **Number**| The number of items to display for pagination. | [optional] 
 **offset** | **Number**| The number of items to skip for pagination. | [optional] 
 **sortBy** | [**[String]**](String.md)| Sort results by attribute.  Can sort on multiple attributes, separated by &#x60;|&#x60;. Order direction can be suffixing the attribute by either &#x60;:asc&#x60; (default) or &#x60;:desc&#x60;. | [optional] 
 **id** | **String**| Filter on id | [optional] 
 **name** | **String**| Filter on name | [optional] 
 **workflowType** | **String**| Filter on task workflow type | [optional] 
 **workflowAction** | **String**| Filter on task workflow action | [optional] 
 **sourceType** | **String**| Filter on task source type | [optional] 
 **destinationType** | **String**| Filter on task destination type | [optional] 
 **status** | **String**| Filter on status | [optional] 
 **logTime** | **String**| Filter on log time | [optional] 
 **jobStarted** | **String**| Filter on job started | [optional] 
 **jobFinished** | **String**| Filter on job finished | [optional] 
 **toProcessSize** | **String**| Filter on to process size | [optional] 
 **processedSize** | **String**| Filter on processed size | [optional] 
 **toProcessFiles** | **String**| Filter on to process files | [optional] 
 **processedFiles** | **String**| Filter on processed files | [optional] 
 **finalizedFiles** | **String**| Filter on finalized files | [optional] 
 **estimationTime** | **String**| Filter on estimation time | [optional] 
 **bandwidth** | **String**| Filter on bandwidth | [optional] 

### Return type

[**TaskExecutionCollection**](TaskExecutionCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showTaskExecution

> TaskExecution showTaskExecution(taskExecutionId)

Displays a specific task execution.

**API Key Scope**: task_executions / show

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

let apiInstance = new NodeumSdk.TaskExecutionsApi();
let taskExecutionId = "taskExecutionId_example"; // String | Numeric ID of task execution.
apiInstance.showTaskExecution(taskExecutionId, (error, data, response) => {
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
 **taskExecutionId** | **String**| Numeric ID of task execution. | 

### Return type

[**TaskExecution**](TaskExecution.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showTaskExecutionByTask

> TaskExecution showTaskExecutionByTask(taskId, taskExecutionId)

Displays a specific task execution.

**API Key Scope**: task_executions / show

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

let apiInstance = new NodeumSdk.TaskExecutionsApi();
let taskId = "taskId_example"; // String | Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
let taskExecutionId = "taskExecutionId_example"; // String | Numeric ID of task execution.
apiInstance.showTaskExecutionByTask(taskId, taskExecutionId, (error, data, response) => {
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
 **taskExecutionId** | **String**| Numeric ID of task execution. | 

### Return type

[**TaskExecution**](TaskExecution.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

