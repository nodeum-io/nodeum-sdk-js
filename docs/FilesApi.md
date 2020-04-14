# NodeumSdk.FilesApi

All URIs are relative to *http://localhost/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filesChildren**](FilesApi.md#filesChildren) | **GET** /files/{file_parent_id}/children | Lists files under a specific folder.
[**filesChildrenByContainer**](FilesApi.md#filesChildrenByContainer) | **GET** /containers/{container_id}/files/{file_parent_id}/children | Lists files under a specific folder.
[**filesChildrenByPool**](FilesApi.md#filesChildrenByPool) | **GET** /pools/{pool_id}/files/{file_parent_id}/children | Lists files under a specific folder.
[**filesChildrenByTask**](FilesApi.md#filesChildrenByTask) | **GET** /tasks/{task_id}/files/{file_parent_id}/children | Lists files under a specific folder.
[**filesChildrenByTaskExecution**](FilesApi.md#filesChildrenByTaskExecution) | **GET** /task_executions/{task_execution_id}/files/{file_parent_id}/children | Lists files under a specific folder.
[**filesChildrenByTaskExecutionByTask**](FilesApi.md#filesChildrenByTaskExecutionByTask) | **GET** /tasks/{task_id}/task_executions/{task_execution_id}/files/{file_parent_id}/children | Lists files under a specific folder.
[**importFilesChildrenByPool**](FilesApi.md#importFilesChildrenByPool) | **GET** /pools/{pool_id}/import_files/{file_parent_id}/children | Lists files under a specific folder on tape of pools, specific for Data Exchange.
[**indexFiles**](FilesApi.md#indexFiles) | **GET** /files | Lists files on root.
[**indexFilesByContainer**](FilesApi.md#indexFilesByContainer) | **GET** /containers/{container_id}/files | Lists files on root.
[**indexFilesByPool**](FilesApi.md#indexFilesByPool) | **GET** /pools/{pool_id}/files | Lists files on root.
[**indexFilesByTask**](FilesApi.md#indexFilesByTask) | **GET** /tasks/{task_id}/files | Lists files on root.
[**indexFilesByTaskExecution**](FilesApi.md#indexFilesByTaskExecution) | **GET** /task_executions/{task_execution_id}/files | Lists files on root.
[**indexFilesByTaskExecutionByTask**](FilesApi.md#indexFilesByTaskExecutionByTask) | **GET** /tasks/{task_id}/task_executions/{task_execution_id}/files | Lists files on root.
[**indexImportFilesByPool**](FilesApi.md#indexImportFilesByPool) | **GET** /pools/{pool_id}/import_files | Lists files on root of tape of pools, specific for Data Exchange.
[**indexOnTapesFilesByPool**](FilesApi.md#indexOnTapesFilesByPool) | **GET** /pools/{pool_id}/on_tapes_files | Lists files on root of tape of pools, specific for Active and Offline.
[**indexTapesByFileByPool**](FilesApi.md#indexTapesByFileByPool) | **GET** /pools/{pool_id}/files/{file_id}/tapes | Displays tapes containing specific file, related to the specific pool.
[**indexTapesByFileByTask**](FilesApi.md#indexTapesByFileByTask) | **GET** /tasks/{task_id}/files/{file_id}/tapes | Displays tapes containing specific file, related to the specific task.
[**indexTapesByFileByTaskExecution**](FilesApi.md#indexTapesByFileByTaskExecution) | **GET** /task_executions/{task_execution_id}/files/{file_id}/tapes | Displays tapes containing specific file, related to the specific task.
[**indexTapesByFileByTaskExecutionByTask**](FilesApi.md#indexTapesByFileByTaskExecutionByTask) | **GET** /tasks/{task_id}/task_executions/{task_execution_id}/files/{file_id}/tapes | Displays tapes containing specific file, related to the specific task.
[**onTapesFilesChildrenByPool**](FilesApi.md#onTapesFilesChildrenByPool) | **GET** /pools/{pool_id}/on_tapes_files/{file_parent_id}/children | Lists files under a specific folder on tape of pools, specific for Active and Offline.
[**showFile**](FilesApi.md#showFile) | **GET** /files/{file_id} | Displays a specific file.
[**showFileByContainer**](FilesApi.md#showFileByContainer) | **GET** /containers/{container_id}/files/{file_id} | Displays a specific file.
[**showFileByPool**](FilesApi.md#showFileByPool) | **GET** /pools/{pool_id}/files/{file_id} | Displays a specific file.
[**showFileByTask**](FilesApi.md#showFileByTask) | **GET** /tasks/{task_id}/files/{file_id} | Displays a specific file.
[**showFileByTaskExecution**](FilesApi.md#showFileByTaskExecution) | **GET** /task_executions/{task_execution_id}/files/{file_id} | Displays a specific file.
[**showFileByTaskExecutionByTask**](FilesApi.md#showFileByTaskExecutionByTask) | **GET** /tasks/{task_id}/task_executions/{task_execution_id}/files/{file_id} | Displays a specific file.
[**showImportFileByPool**](FilesApi.md#showImportFileByPool) | **GET** /pools/{pool_id}/import_files/{file_id} | Displays a specific file on tape of pools, specific for Data Exchange.
[**showOnTapeFileByPool**](FilesApi.md#showOnTapeFileByPool) | **GET** /pools/{pool_id}/on_tapes_files/{file_id} | Displays a specific file on tape of pools, specific for Active and Offline.



## filesChildren

> NodeumFileCollection filesChildren(fileParentId, opts)

Lists files under a specific folder.

**API Key Scope**: files / index

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

let apiInstance = new NodeumSdk.FilesApi();
let fileParentId = 56; // Number | Numeric ID of parent folder.
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'fileId': "fileId_example", // String | Filter on file id
  'name': "name_example", // String | Filter on name
  'type': "type_example", // String | Filter on type
  'permission': "permission_example", // String | Filter on permission
  'size': "size_example", // String | Filter on size
  'changeDate': "changeDate_example", // String | Filter on change date
  'modificationDate': "modificationDate_example", // String | Filter on modification date
  'accessDate': "accessDate_example", // String | Filter on access date
  'gid': "gid_example", // String | Filter on gid
  'uid': "uid_example" // String | Filter on uid
};
apiInstance.filesChildren(fileParentId, opts, (error, data, response) => {
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
 **fileParentId** | **Number**| Numeric ID of parent folder. | 
 **limit** | **Number**| The number of items to display for pagination. | [optional] 
 **offset** | **Number**| The number of items to skip for pagination. | [optional] 
 **fileId** | **String**| Filter on file id | [optional] 
 **name** | **String**| Filter on name | [optional] 
 **type** | **String**| Filter on type | [optional] 
 **permission** | **String**| Filter on permission | [optional] 
 **size** | **String**| Filter on size | [optional] 
 **changeDate** | **String**| Filter on change date | [optional] 
 **modificationDate** | **String**| Filter on modification date | [optional] 
 **accessDate** | **String**| Filter on access date | [optional] 
 **gid** | **String**| Filter on gid | [optional] 
 **uid** | **String**| Filter on uid | [optional] 

### Return type

[**NodeumFileCollection**](NodeumFileCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## filesChildrenByContainer

> NodeumFileCollection filesChildrenByContainer(containerId, fileParentId, opts)

Lists files under a specific folder.

**API Key Scope**: files / index

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

let apiInstance = new NodeumSdk.FilesApi();
let containerId = "containerId_example"; // String | Numeric ID or name of container.
let fileParentId = 56; // Number | Numeric ID of parent folder.
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'fileId': "fileId_example", // String | Filter on file id
  'name': "name_example", // String | Filter on name
  'type': "type_example", // String | Filter on type
  'permission': "permission_example", // String | Filter on permission
  'size': "size_example", // String | Filter on size
  'changeDate': "changeDate_example", // String | Filter on change date
  'modificationDate': "modificationDate_example", // String | Filter on modification date
  'accessDate': "accessDate_example", // String | Filter on access date
  'gid': "gid_example", // String | Filter on gid
  'uid': "uid_example" // String | Filter on uid
};
apiInstance.filesChildrenByContainer(containerId, fileParentId, opts, (error, data, response) => {
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
 **containerId** | **String**| Numeric ID or name of container. | 
 **fileParentId** | **Number**| Numeric ID of parent folder. | 
 **limit** | **Number**| The number of items to display for pagination. | [optional] 
 **offset** | **Number**| The number of items to skip for pagination. | [optional] 
 **fileId** | **String**| Filter on file id | [optional] 
 **name** | **String**| Filter on name | [optional] 
 **type** | **String**| Filter on type | [optional] 
 **permission** | **String**| Filter on permission | [optional] 
 **size** | **String**| Filter on size | [optional] 
 **changeDate** | **String**| Filter on change date | [optional] 
 **modificationDate** | **String**| Filter on modification date | [optional] 
 **accessDate** | **String**| Filter on access date | [optional] 
 **gid** | **String**| Filter on gid | [optional] 
 **uid** | **String**| Filter on uid | [optional] 

### Return type

[**NodeumFileCollection**](NodeumFileCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## filesChildrenByPool

> NodeumFileCollection filesChildrenByPool(poolId, fileParentId, opts)

Lists files under a specific folder.

**API Key Scope**: files / index

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

let apiInstance = new NodeumSdk.FilesApi();
let poolId = "poolId_example"; // String | Numeric ID, or name of pool.
let fileParentId = 56; // Number | Numeric ID of parent folder.
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'fileId': "fileId_example", // String | Filter on file id
  'name': "name_example", // String | Filter on name
  'type': "type_example", // String | Filter on type
  'permission': "permission_example", // String | Filter on permission
  'size': "size_example", // String | Filter on size
  'changeDate': "changeDate_example", // String | Filter on change date
  'modificationDate': "modificationDate_example", // String | Filter on modification date
  'accessDate': "accessDate_example", // String | Filter on access date
  'gid': "gid_example", // String | Filter on gid
  'uid': "uid_example" // String | Filter on uid
};
apiInstance.filesChildrenByPool(poolId, fileParentId, opts, (error, data, response) => {
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
 **fileParentId** | **Number**| Numeric ID of parent folder. | 
 **limit** | **Number**| The number of items to display for pagination. | [optional] 
 **offset** | **Number**| The number of items to skip for pagination. | [optional] 
 **fileId** | **String**| Filter on file id | [optional] 
 **name** | **String**| Filter on name | [optional] 
 **type** | **String**| Filter on type | [optional] 
 **permission** | **String**| Filter on permission | [optional] 
 **size** | **String**| Filter on size | [optional] 
 **changeDate** | **String**| Filter on change date | [optional] 
 **modificationDate** | **String**| Filter on modification date | [optional] 
 **accessDate** | **String**| Filter on access date | [optional] 
 **gid** | **String**| Filter on gid | [optional] 
 **uid** | **String**| Filter on uid | [optional] 

### Return type

[**NodeumFileCollection**](NodeumFileCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## filesChildrenByTask

> NodeumFileCollection filesChildrenByTask(taskId, fileParentId, opts)

Lists files under a specific folder.

**API Key Scope**: files / index

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

let apiInstance = new NodeumSdk.FilesApi();
let taskId = "taskId_example"; // String | Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
let fileParentId = 56; // Number | Numeric ID of parent folder.
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'fileId': "fileId_example", // String | Filter on file id
  'name': "name_example", // String | Filter on name
  'type': "type_example", // String | Filter on type
  'permission': "permission_example", // String | Filter on permission
  'size': "size_example", // String | Filter on size
  'changeDate': "changeDate_example", // String | Filter on change date
  'modificationDate': "modificationDate_example", // String | Filter on modification date
  'accessDate': "accessDate_example", // String | Filter on access date
  'gid': "gid_example", // String | Filter on gid
  'uid': "uid_example" // String | Filter on uid
};
apiInstance.filesChildrenByTask(taskId, fileParentId, opts, (error, data, response) => {
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
 **fileParentId** | **Number**| Numeric ID of parent folder. | 
 **limit** | **Number**| The number of items to display for pagination. | [optional] 
 **offset** | **Number**| The number of items to skip for pagination. | [optional] 
 **fileId** | **String**| Filter on file id | [optional] 
 **name** | **String**| Filter on name | [optional] 
 **type** | **String**| Filter on type | [optional] 
 **permission** | **String**| Filter on permission | [optional] 
 **size** | **String**| Filter on size | [optional] 
 **changeDate** | **String**| Filter on change date | [optional] 
 **modificationDate** | **String**| Filter on modification date | [optional] 
 **accessDate** | **String**| Filter on access date | [optional] 
 **gid** | **String**| Filter on gid | [optional] 
 **uid** | **String**| Filter on uid | [optional] 

### Return type

[**NodeumFileCollection**](NodeumFileCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## filesChildrenByTaskExecution

> NodeumFileCollection filesChildrenByTaskExecution(taskExecutionId, fileParentId, opts)

Lists files under a specific folder.

**API Key Scope**: files / index

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

let apiInstance = new NodeumSdk.FilesApi();
let taskExecutionId = "taskExecutionId_example"; // String | Numeric ID of task execution.
let fileParentId = 56; // Number | Numeric ID of parent folder.
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'fileId': "fileId_example", // String | Filter on file id
  'name': "name_example", // String | Filter on name
  'type': "type_example", // String | Filter on type
  'permission': "permission_example", // String | Filter on permission
  'size': "size_example", // String | Filter on size
  'changeDate': "changeDate_example", // String | Filter on change date
  'modificationDate': "modificationDate_example", // String | Filter on modification date
  'accessDate': "accessDate_example", // String | Filter on access date
  'gid': "gid_example", // String | Filter on gid
  'uid': "uid_example" // String | Filter on uid
};
apiInstance.filesChildrenByTaskExecution(taskExecutionId, fileParentId, opts, (error, data, response) => {
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
 **fileParentId** | **Number**| Numeric ID of parent folder. | 
 **limit** | **Number**| The number of items to display for pagination. | [optional] 
 **offset** | **Number**| The number of items to skip for pagination. | [optional] 
 **fileId** | **String**| Filter on file id | [optional] 
 **name** | **String**| Filter on name | [optional] 
 **type** | **String**| Filter on type | [optional] 
 **permission** | **String**| Filter on permission | [optional] 
 **size** | **String**| Filter on size | [optional] 
 **changeDate** | **String**| Filter on change date | [optional] 
 **modificationDate** | **String**| Filter on modification date | [optional] 
 **accessDate** | **String**| Filter on access date | [optional] 
 **gid** | **String**| Filter on gid | [optional] 
 **uid** | **String**| Filter on uid | [optional] 

### Return type

[**NodeumFileCollection**](NodeumFileCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## filesChildrenByTaskExecutionByTask

> NodeumFileCollection filesChildrenByTaskExecutionByTask(taskId, taskExecutionId, fileParentId, opts)

Lists files under a specific folder.

**API Key Scope**: files / index

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

let apiInstance = new NodeumSdk.FilesApi();
let taskId = "taskId_example"; // String | Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
let taskExecutionId = "taskExecutionId_example"; // String | Numeric ID of task execution.
let fileParentId = 56; // Number | Numeric ID of parent folder.
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'fileId': "fileId_example", // String | Filter on file id
  'name': "name_example", // String | Filter on name
  'type': "type_example", // String | Filter on type
  'permission': "permission_example", // String | Filter on permission
  'size': "size_example", // String | Filter on size
  'changeDate': "changeDate_example", // String | Filter on change date
  'modificationDate': "modificationDate_example", // String | Filter on modification date
  'accessDate': "accessDate_example", // String | Filter on access date
  'gid': "gid_example", // String | Filter on gid
  'uid': "uid_example" // String | Filter on uid
};
apiInstance.filesChildrenByTaskExecutionByTask(taskId, taskExecutionId, fileParentId, opts, (error, data, response) => {
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
 **fileParentId** | **Number**| Numeric ID of parent folder. | 
 **limit** | **Number**| The number of items to display for pagination. | [optional] 
 **offset** | **Number**| The number of items to skip for pagination. | [optional] 
 **fileId** | **String**| Filter on file id | [optional] 
 **name** | **String**| Filter on name | [optional] 
 **type** | **String**| Filter on type | [optional] 
 **permission** | **String**| Filter on permission | [optional] 
 **size** | **String**| Filter on size | [optional] 
 **changeDate** | **String**| Filter on change date | [optional] 
 **modificationDate** | **String**| Filter on modification date | [optional] 
 **accessDate** | **String**| Filter on access date | [optional] 
 **gid** | **String**| Filter on gid | [optional] 
 **uid** | **String**| Filter on uid | [optional] 

### Return type

[**NodeumFileCollection**](NodeumFileCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importFilesChildrenByPool

> ImportFileCollection importFilesChildrenByPool(poolId, fileParentId, opts)

Lists files under a specific folder on tape of pools, specific for Data Exchange.

**API Key Scope**: import_files / index

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

let apiInstance = new NodeumSdk.FilesApi();
let poolId = "poolId_example"; // String | Numeric ID, or name of pool.
let fileParentId = 56; // Number | Numeric ID of parent folder.
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'fileId': "fileId_example", // String | Filter on file id
  'name': "name_example", // String | Filter on name
  'type': "type_example", // String | Filter on type
  'permission': "permission_example", // String | Filter on permission
  'size': "size_example", // String | Filter on size
  'changeDate': "changeDate_example", // String | Filter on change date
  'modificationDate': "modificationDate_example", // String | Filter on modification date
  'accessDate': "accessDate_example", // String | Filter on access date
  'gid': "gid_example", // String | Filter on gid
  'uid': "uid_example" // String | Filter on uid
};
apiInstance.importFilesChildrenByPool(poolId, fileParentId, opts, (error, data, response) => {
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
 **fileParentId** | **Number**| Numeric ID of parent folder. | 
 **limit** | **Number**| The number of items to display for pagination. | [optional] 
 **offset** | **Number**| The number of items to skip for pagination. | [optional] 
 **fileId** | **String**| Filter on file id | [optional] 
 **name** | **String**| Filter on name | [optional] 
 **type** | **String**| Filter on type | [optional] 
 **permission** | **String**| Filter on permission | [optional] 
 **size** | **String**| Filter on size | [optional] 
 **changeDate** | **String**| Filter on change date | [optional] 
 **modificationDate** | **String**| Filter on modification date | [optional] 
 **accessDate** | **String**| Filter on access date | [optional] 
 **gid** | **String**| Filter on gid | [optional] 
 **uid** | **String**| Filter on uid | [optional] 

### Return type

[**ImportFileCollection**](ImportFileCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indexFiles

> NodeumFileCollection indexFiles(opts)

Lists files on root.

**API Key Scope**: files / index

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

let apiInstance = new NodeumSdk.FilesApi();
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'fileId': "fileId_example", // String | Filter on file id
  'name': "name_example", // String | Filter on name
  'type': "type_example", // String | Filter on type
  'permission': "permission_example", // String | Filter on permission
  'size': "size_example", // String | Filter on size
  'changeDate': "changeDate_example", // String | Filter on change date
  'modificationDate': "modificationDate_example", // String | Filter on modification date
  'accessDate': "accessDate_example", // String | Filter on access date
  'gid': "gid_example", // String | Filter on gid
  'uid': "uid_example" // String | Filter on uid
};
apiInstance.indexFiles(opts, (error, data, response) => {
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
 **fileId** | **String**| Filter on file id | [optional] 
 **name** | **String**| Filter on name | [optional] 
 **type** | **String**| Filter on type | [optional] 
 **permission** | **String**| Filter on permission | [optional] 
 **size** | **String**| Filter on size | [optional] 
 **changeDate** | **String**| Filter on change date | [optional] 
 **modificationDate** | **String**| Filter on modification date | [optional] 
 **accessDate** | **String**| Filter on access date | [optional] 
 **gid** | **String**| Filter on gid | [optional] 
 **uid** | **String**| Filter on uid | [optional] 

### Return type

[**NodeumFileCollection**](NodeumFileCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indexFilesByContainer

> NodeumFileCollection indexFilesByContainer(containerId, opts)

Lists files on root.

**API Key Scope**: files / index

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

let apiInstance = new NodeumSdk.FilesApi();
let containerId = "containerId_example"; // String | Numeric ID or name of container.
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'fileId': "fileId_example", // String | Filter on file id
  'name': "name_example", // String | Filter on name
  'type': "type_example", // String | Filter on type
  'permission': "permission_example", // String | Filter on permission
  'size': "size_example", // String | Filter on size
  'changeDate': "changeDate_example", // String | Filter on change date
  'modificationDate': "modificationDate_example", // String | Filter on modification date
  'accessDate': "accessDate_example", // String | Filter on access date
  'gid': "gid_example", // String | Filter on gid
  'uid': "uid_example" // String | Filter on uid
};
apiInstance.indexFilesByContainer(containerId, opts, (error, data, response) => {
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
 **containerId** | **String**| Numeric ID or name of container. | 
 **limit** | **Number**| The number of items to display for pagination. | [optional] 
 **offset** | **Number**| The number of items to skip for pagination. | [optional] 
 **fileId** | **String**| Filter on file id | [optional] 
 **name** | **String**| Filter on name | [optional] 
 **type** | **String**| Filter on type | [optional] 
 **permission** | **String**| Filter on permission | [optional] 
 **size** | **String**| Filter on size | [optional] 
 **changeDate** | **String**| Filter on change date | [optional] 
 **modificationDate** | **String**| Filter on modification date | [optional] 
 **accessDate** | **String**| Filter on access date | [optional] 
 **gid** | **String**| Filter on gid | [optional] 
 **uid** | **String**| Filter on uid | [optional] 

### Return type

[**NodeumFileCollection**](NodeumFileCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indexFilesByPool

> NodeumFileCollection indexFilesByPool(poolId, opts)

Lists files on root.

**API Key Scope**: files / index

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

let apiInstance = new NodeumSdk.FilesApi();
let poolId = "poolId_example"; // String | Numeric ID, or name of pool.
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'fileId': "fileId_example", // String | Filter on file id
  'name': "name_example", // String | Filter on name
  'type': "type_example", // String | Filter on type
  'permission': "permission_example", // String | Filter on permission
  'size': "size_example", // String | Filter on size
  'changeDate': "changeDate_example", // String | Filter on change date
  'modificationDate': "modificationDate_example", // String | Filter on modification date
  'accessDate': "accessDate_example", // String | Filter on access date
  'gid': "gid_example", // String | Filter on gid
  'uid': "uid_example" // String | Filter on uid
};
apiInstance.indexFilesByPool(poolId, opts, (error, data, response) => {
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
 **fileId** | **String**| Filter on file id | [optional] 
 **name** | **String**| Filter on name | [optional] 
 **type** | **String**| Filter on type | [optional] 
 **permission** | **String**| Filter on permission | [optional] 
 **size** | **String**| Filter on size | [optional] 
 **changeDate** | **String**| Filter on change date | [optional] 
 **modificationDate** | **String**| Filter on modification date | [optional] 
 **accessDate** | **String**| Filter on access date | [optional] 
 **gid** | **String**| Filter on gid | [optional] 
 **uid** | **String**| Filter on uid | [optional] 

### Return type

[**NodeumFileCollection**](NodeumFileCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indexFilesByTask

> NodeumFileCollection indexFilesByTask(taskId, opts)

Lists files on root.

**API Key Scope**: files / index

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

let apiInstance = new NodeumSdk.FilesApi();
let taskId = "taskId_example"; // String | Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'fileId': "fileId_example", // String | Filter on file id
  'name': "name_example", // String | Filter on name
  'type': "type_example", // String | Filter on type
  'permission': "permission_example", // String | Filter on permission
  'size': "size_example", // String | Filter on size
  'changeDate': "changeDate_example", // String | Filter on change date
  'modificationDate': "modificationDate_example", // String | Filter on modification date
  'accessDate': "accessDate_example", // String | Filter on access date
  'gid': "gid_example", // String | Filter on gid
  'uid': "uid_example" // String | Filter on uid
};
apiInstance.indexFilesByTask(taskId, opts, (error, data, response) => {
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
 **fileId** | **String**| Filter on file id | [optional] 
 **name** | **String**| Filter on name | [optional] 
 **type** | **String**| Filter on type | [optional] 
 **permission** | **String**| Filter on permission | [optional] 
 **size** | **String**| Filter on size | [optional] 
 **changeDate** | **String**| Filter on change date | [optional] 
 **modificationDate** | **String**| Filter on modification date | [optional] 
 **accessDate** | **String**| Filter on access date | [optional] 
 **gid** | **String**| Filter on gid | [optional] 
 **uid** | **String**| Filter on uid | [optional] 

### Return type

[**NodeumFileCollection**](NodeumFileCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indexFilesByTaskExecution

> NodeumFileCollection indexFilesByTaskExecution(taskExecutionId, opts)

Lists files on root.

**API Key Scope**: files / index

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

let apiInstance = new NodeumSdk.FilesApi();
let taskExecutionId = "taskExecutionId_example"; // String | Numeric ID of task execution.
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'fileId': "fileId_example", // String | Filter on file id
  'name': "name_example", // String | Filter on name
  'type': "type_example", // String | Filter on type
  'permission': "permission_example", // String | Filter on permission
  'size': "size_example", // String | Filter on size
  'changeDate': "changeDate_example", // String | Filter on change date
  'modificationDate': "modificationDate_example", // String | Filter on modification date
  'accessDate': "accessDate_example", // String | Filter on access date
  'gid': "gid_example", // String | Filter on gid
  'uid': "uid_example" // String | Filter on uid
};
apiInstance.indexFilesByTaskExecution(taskExecutionId, opts, (error, data, response) => {
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
 **limit** | **Number**| The number of items to display for pagination. | [optional] 
 **offset** | **Number**| The number of items to skip for pagination. | [optional] 
 **fileId** | **String**| Filter on file id | [optional] 
 **name** | **String**| Filter on name | [optional] 
 **type** | **String**| Filter on type | [optional] 
 **permission** | **String**| Filter on permission | [optional] 
 **size** | **String**| Filter on size | [optional] 
 **changeDate** | **String**| Filter on change date | [optional] 
 **modificationDate** | **String**| Filter on modification date | [optional] 
 **accessDate** | **String**| Filter on access date | [optional] 
 **gid** | **String**| Filter on gid | [optional] 
 **uid** | **String**| Filter on uid | [optional] 

### Return type

[**NodeumFileCollection**](NodeumFileCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indexFilesByTaskExecutionByTask

> NodeumFileCollection indexFilesByTaskExecutionByTask(taskId, taskExecutionId, opts)

Lists files on root.

**API Key Scope**: files / index

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

let apiInstance = new NodeumSdk.FilesApi();
let taskId = "taskId_example"; // String | Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
let taskExecutionId = "taskExecutionId_example"; // String | Numeric ID of task execution.
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'fileId': "fileId_example", // String | Filter on file id
  'name': "name_example", // String | Filter on name
  'type': "type_example", // String | Filter on type
  'permission': "permission_example", // String | Filter on permission
  'size': "size_example", // String | Filter on size
  'changeDate': "changeDate_example", // String | Filter on change date
  'modificationDate': "modificationDate_example", // String | Filter on modification date
  'accessDate': "accessDate_example", // String | Filter on access date
  'gid': "gid_example", // String | Filter on gid
  'uid': "uid_example" // String | Filter on uid
};
apiInstance.indexFilesByTaskExecutionByTask(taskId, taskExecutionId, opts, (error, data, response) => {
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
 **limit** | **Number**| The number of items to display for pagination. | [optional] 
 **offset** | **Number**| The number of items to skip for pagination. | [optional] 
 **fileId** | **String**| Filter on file id | [optional] 
 **name** | **String**| Filter on name | [optional] 
 **type** | **String**| Filter on type | [optional] 
 **permission** | **String**| Filter on permission | [optional] 
 **size** | **String**| Filter on size | [optional] 
 **changeDate** | **String**| Filter on change date | [optional] 
 **modificationDate** | **String**| Filter on modification date | [optional] 
 **accessDate** | **String**| Filter on access date | [optional] 
 **gid** | **String**| Filter on gid | [optional] 
 **uid** | **String**| Filter on uid | [optional] 

### Return type

[**NodeumFileCollection**](NodeumFileCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indexImportFilesByPool

> ImportFileCollection indexImportFilesByPool(poolId, opts)

Lists files on root of tape of pools, specific for Data Exchange.

**API Key Scope**: import_files / index

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

let apiInstance = new NodeumSdk.FilesApi();
let poolId = "poolId_example"; // String | Numeric ID, or name of pool.
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'fileId': "fileId_example", // String | Filter on file id
  'name': "name_example", // String | Filter on name
  'type': "type_example", // String | Filter on type
  'permission': "permission_example", // String | Filter on permission
  'size': "size_example", // String | Filter on size
  'changeDate': "changeDate_example", // String | Filter on change date
  'modificationDate': "modificationDate_example", // String | Filter on modification date
  'accessDate': "accessDate_example", // String | Filter on access date
  'gid': "gid_example", // String | Filter on gid
  'uid': "uid_example" // String | Filter on uid
};
apiInstance.indexImportFilesByPool(poolId, opts, (error, data, response) => {
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
 **fileId** | **String**| Filter on file id | [optional] 
 **name** | **String**| Filter on name | [optional] 
 **type** | **String**| Filter on type | [optional] 
 **permission** | **String**| Filter on permission | [optional] 
 **size** | **String**| Filter on size | [optional] 
 **changeDate** | **String**| Filter on change date | [optional] 
 **modificationDate** | **String**| Filter on modification date | [optional] 
 **accessDate** | **String**| Filter on access date | [optional] 
 **gid** | **String**| Filter on gid | [optional] 
 **uid** | **String**| Filter on uid | [optional] 

### Return type

[**ImportFileCollection**](ImportFileCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indexOnTapesFilesByPool

> OnTapesFileCollection indexOnTapesFilesByPool(poolId, opts)

Lists files on root of tape of pools, specific for Active and Offline.

**API Key Scope**: on_tapes_files / index

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

let apiInstance = new NodeumSdk.FilesApi();
let poolId = "poolId_example"; // String | Numeric ID, or name of pool.
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'name': "name_example", // String | Filter on name
  'type': "type_example", // String | Filter on type
  'size': "size_example" // String | Filter on size
};
apiInstance.indexOnTapesFilesByPool(poolId, opts, (error, data, response) => {
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
 **name** | **String**| Filter on name | [optional] 
 **type** | **String**| Filter on type | [optional] 
 **size** | **String**| Filter on size | [optional] 

### Return type

[**OnTapesFileCollection**](OnTapesFileCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indexTapesByFileByPool

> TapeCollection indexTapesByFileByPool(poolId, fileId)

Displays tapes containing specific file, related to the specific pool.

**API Key Scope**: files / tapes

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

let apiInstance = new NodeumSdk.FilesApi();
let poolId = "poolId_example"; // String | Numeric ID, or name of pool.
let fileId = 56; // Number | Numeric ID of file.
apiInstance.indexTapesByFileByPool(poolId, fileId, (error, data, response) => {
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
 **fileId** | **Number**| Numeric ID of file. | 

### Return type

[**TapeCollection**](TapeCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indexTapesByFileByTask

> TapeCollection indexTapesByFileByTask(taskId, fileId)

Displays tapes containing specific file, related to the specific task.

**API Key Scope**: files / tapes

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

let apiInstance = new NodeumSdk.FilesApi();
let taskId = "taskId_example"; // String | Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
let fileId = 56; // Number | Numeric ID of file.
apiInstance.indexTapesByFileByTask(taskId, fileId, (error, data, response) => {
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
 **fileId** | **Number**| Numeric ID of file. | 

### Return type

[**TapeCollection**](TapeCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indexTapesByFileByTaskExecution

> TapeCollection indexTapesByFileByTaskExecution(taskExecutionId, fileId)

Displays tapes containing specific file, related to the specific task.

**API Key Scope**: files / tapes

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

let apiInstance = new NodeumSdk.FilesApi();
let taskExecutionId = "taskExecutionId_example"; // String | Numeric ID of task execution.
let fileId = 56; // Number | Numeric ID of file.
apiInstance.indexTapesByFileByTaskExecution(taskExecutionId, fileId, (error, data, response) => {
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
 **fileId** | **Number**| Numeric ID of file. | 

### Return type

[**TapeCollection**](TapeCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indexTapesByFileByTaskExecutionByTask

> TapeCollection indexTapesByFileByTaskExecutionByTask(taskId, taskExecutionId, fileId)

Displays tapes containing specific file, related to the specific task.

**API Key Scope**: files / tapes

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

let apiInstance = new NodeumSdk.FilesApi();
let taskId = "taskId_example"; // String | Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
let taskExecutionId = "taskExecutionId_example"; // String | Numeric ID of task execution.
let fileId = 56; // Number | Numeric ID of file.
apiInstance.indexTapesByFileByTaskExecutionByTask(taskId, taskExecutionId, fileId, (error, data, response) => {
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
 **fileId** | **Number**| Numeric ID of file. | 

### Return type

[**TapeCollection**](TapeCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## onTapesFilesChildrenByPool

> OnTapesFileCollection onTapesFilesChildrenByPool(poolId, fileParentId, opts)

Lists files under a specific folder on tape of pools, specific for Active and Offline.

**API Key Scope**: on_tapes_files / index

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

let apiInstance = new NodeumSdk.FilesApi();
let poolId = "poolId_example"; // String | Numeric ID, or name of pool.
let fileParentId = 56; // Number | Numeric ID of parent folder.
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'name': "name_example", // String | Filter on name
  'type': "type_example", // String | Filter on type
  'size': "size_example" // String | Filter on size
};
apiInstance.onTapesFilesChildrenByPool(poolId, fileParentId, opts, (error, data, response) => {
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
 **fileParentId** | **Number**| Numeric ID of parent folder. | 
 **limit** | **Number**| The number of items to display for pagination. | [optional] 
 **offset** | **Number**| The number of items to skip for pagination. | [optional] 
 **name** | **String**| Filter on name | [optional] 
 **type** | **String**| Filter on type | [optional] 
 **size** | **String**| Filter on size | [optional] 

### Return type

[**OnTapesFileCollection**](OnTapesFileCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showFile

> NodeumFileWithPath showFile(fileId)

Displays a specific file.

**API Key Scope**: files / show

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

let apiInstance = new NodeumSdk.FilesApi();
let fileId = 56; // Number | Numeric ID of file.
apiInstance.showFile(fileId, (error, data, response) => {
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
 **fileId** | **Number**| Numeric ID of file. | 

### Return type

[**NodeumFileWithPath**](NodeumFileWithPath.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showFileByContainer

> NodeumFileWithPath showFileByContainer(containerId, fileId)

Displays a specific file.

**API Key Scope**: files / show

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

let apiInstance = new NodeumSdk.FilesApi();
let containerId = "containerId_example"; // String | Numeric ID or name of container.
let fileId = 56; // Number | Numeric ID of file.
apiInstance.showFileByContainer(containerId, fileId, (error, data, response) => {
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
 **containerId** | **String**| Numeric ID or name of container. | 
 **fileId** | **Number**| Numeric ID of file. | 

### Return type

[**NodeumFileWithPath**](NodeumFileWithPath.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showFileByPool

> NodeumFileWithPath showFileByPool(poolId, fileId)

Displays a specific file.

**API Key Scope**: files / show

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

let apiInstance = new NodeumSdk.FilesApi();
let poolId = "poolId_example"; // String | Numeric ID, or name of pool.
let fileId = 56; // Number | Numeric ID of file.
apiInstance.showFileByPool(poolId, fileId, (error, data, response) => {
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
 **fileId** | **Number**| Numeric ID of file. | 

### Return type

[**NodeumFileWithPath**](NodeumFileWithPath.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showFileByTask

> NodeumFileWithPath showFileByTask(taskId, fileId)

Displays a specific file.

**API Key Scope**: files / show

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

let apiInstance = new NodeumSdk.FilesApi();
let taskId = "taskId_example"; // String | Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
let fileId = 56; // Number | Numeric ID of file.
apiInstance.showFileByTask(taskId, fileId, (error, data, response) => {
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
 **fileId** | **Number**| Numeric ID of file. | 

### Return type

[**NodeumFileWithPath**](NodeumFileWithPath.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showFileByTaskExecution

> NodeumFileWithPath showFileByTaskExecution(taskExecutionId, fileId)

Displays a specific file.

**API Key Scope**: files / show

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

let apiInstance = new NodeumSdk.FilesApi();
let taskExecutionId = "taskExecutionId_example"; // String | Numeric ID of task execution.
let fileId = 56; // Number | Numeric ID of file.
apiInstance.showFileByTaskExecution(taskExecutionId, fileId, (error, data, response) => {
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
 **fileId** | **Number**| Numeric ID of file. | 

### Return type

[**NodeumFileWithPath**](NodeumFileWithPath.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showFileByTaskExecutionByTask

> NodeumFileWithPath showFileByTaskExecutionByTask(taskId, taskExecutionId, fileId)

Displays a specific file.

**API Key Scope**: files / show

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

let apiInstance = new NodeumSdk.FilesApi();
let taskId = "taskId_example"; // String | Numeric ID or name of task. Task names are not unique, it's recommanded to use numeric ID.
let taskExecutionId = "taskExecutionId_example"; // String | Numeric ID of task execution.
let fileId = 56; // Number | Numeric ID of file.
apiInstance.showFileByTaskExecutionByTask(taskId, taskExecutionId, fileId, (error, data, response) => {
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
 **fileId** | **Number**| Numeric ID of file. | 

### Return type

[**NodeumFileWithPath**](NodeumFileWithPath.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showImportFileByPool

> ImportFileWithPath showImportFileByPool(poolId, fileId)

Displays a specific file on tape of pools, specific for Data Exchange.

**API Key Scope**: import_files / show

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

let apiInstance = new NodeumSdk.FilesApi();
let poolId = "poolId_example"; // String | Numeric ID, or name of pool.
let fileId = 56; // Number | Numeric ID of file.
apiInstance.showImportFileByPool(poolId, fileId, (error, data, response) => {
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
 **fileId** | **Number**| Numeric ID of file. | 

### Return type

[**ImportFileWithPath**](ImportFileWithPath.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showOnTapeFileByPool

> OnTapesFile showOnTapeFileByPool(poolId, fileId)

Displays a specific file on tape of pools, specific for Active and Offline.

**API Key Scope**: on_tapes_files / show

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

let apiInstance = new NodeumSdk.FilesApi();
let poolId = "poolId_example"; // String | Numeric ID, or name of pool.
let fileId = 56; // Number | Numeric ID of file.
apiInstance.showOnTapeFileByPool(poolId, fileId, (error, data, response) => {
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
 **fileId** | **Number**| Numeric ID of file. | 

### Return type

[**OnTapesFile**](OnTapesFile.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

