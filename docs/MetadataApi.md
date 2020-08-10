# NodeumApi.MetadataApi

All URIs are relative to *http://localhost/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**indexFileMetadataDefinitions**](MetadataApi.md#indexFileMetadataDefinitions) | **GET** /file_metadata_definitions | List file metadata definitions
[**indexTaskMetadataDefinitions**](MetadataApi.md#indexTaskMetadataDefinitions) | **GET** /task_metadata_definitions | List task metadata definitions
[**showFileMetadataDefinition**](MetadataApi.md#showFileMetadataDefinition) | **GET** /file_metadata_definitions/{metadata_definition_id} | Displays a specific task metadata definition.
[**showTaskMetadataDefinition**](MetadataApi.md#showTaskMetadataDefinition) | **GET** /task_metadata_definitions/{metadata_definition_id} | Displays a specific task metadata definition.



## indexFileMetadataDefinitions

> FileMetadataDefinitionCollection indexFileMetadataDefinitions(opts)

List file metadata definitions

**API Key Scope**: file_metadata_definitions / index

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

let apiInstance = new NodeumApi.MetadataApi();
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56 // Number | The number of items to skip for pagination.
};
apiInstance.indexFileMetadataDefinitions(opts, (error, data, response) => {
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

[**FileMetadataDefinitionCollection**](FileMetadataDefinitionCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indexTaskMetadataDefinitions

> TaskMetadataDefinitionCollection indexTaskMetadataDefinitions(opts)

List task metadata definitions

**API Key Scope**: task_metadata_definitions / index

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

let apiInstance = new NodeumApi.MetadataApi();
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56 // Number | The number of items to skip for pagination.
};
apiInstance.indexTaskMetadataDefinitions(opts, (error, data, response) => {
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

[**TaskMetadataDefinitionCollection**](TaskMetadataDefinitionCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showFileMetadataDefinition

> FileMetadataDefinition showFileMetadataDefinition(metadataDefinitionId)

Displays a specific task metadata definition.

**API Key Scope**: file_metadata_definitions / show

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

let apiInstance = new NodeumApi.MetadataApi();
let metadataDefinitionId = "metadataDefinitionId_example"; // String | Numeric ID or key of a metadata definition
apiInstance.showFileMetadataDefinition(metadataDefinitionId, (error, data, response) => {
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
 **metadataDefinitionId** | **String**| Numeric ID or key of a metadata definition | 

### Return type

[**FileMetadataDefinition**](FileMetadataDefinition.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showTaskMetadataDefinition

> TaskMetadataDefinition showTaskMetadataDefinition(metadataDefinitionId)

Displays a specific task metadata definition.

**API Key Scope**: task_metadata_definitions / show

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

let apiInstance = new NodeumApi.MetadataApi();
let metadataDefinitionId = "metadataDefinitionId_example"; // String | Numeric ID or key of a metadata definition
apiInstance.showTaskMetadataDefinition(metadataDefinitionId, (error, data, response) => {
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
 **metadataDefinitionId** | **String**| Numeric ID or key of a metadata definition | 

### Return type

[**TaskMetadataDefinition**](TaskMetadataDefinition.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

