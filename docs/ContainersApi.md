# NodeumSdk.ContainersApi

All URIs are relative to *http://localhost/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContainer**](ContainersApi.md#createContainer) | **POST** /containers | Creates a new container.
[**createContainerPrivilege**](ContainersApi.md#createContainerPrivilege) | **POST** /containers/{container_id}/container_privileges | Creates a new privilege on the container.
[**destroyContainer**](ContainersApi.md#destroyContainer) | **DELETE** /containers/{container_id} | Destroys a specific container.
[**destroyContainerPrivilege**](ContainersApi.md#destroyContainerPrivilege) | **DELETE** /containers/{container_id}/container_privileges/{container_privilege_id} | Destroys a specific privilege.
[**indexContainerPrivileges**](ContainersApi.md#indexContainerPrivileges) | **GET** /containers/{container_id}/container_privileges | Lists all privilege on the container.
[**indexContainers**](ContainersApi.md#indexContainers) | **GET** /containers | Lists all containers.
[**showContainer**](ContainersApi.md#showContainer) | **GET** /containers/{container_id} | Displays a specific container.
[**showContainerPrivilege**](ContainersApi.md#showContainerPrivilege) | **GET** /containers/{container_id}/container_privileges/{container_privilege_id} | Displays a specific privilege.
[**updateContainer**](ContainersApi.md#updateContainer) | **PUT** /containers/{container_id} | Updates a specific container.
[**updateContainerPrivilege**](ContainersApi.md#updateContainerPrivilege) | **PUT** /containers/{container_id}/container_privileges/{container_privilege_id} | Updates a specific privilege.



## createContainer

> Container createContainer(containerBody)

Creates a new container.

It **does not** yet create the file structure and configure the samba connection. Use API v1 instead.  **API Key Scope**: containers / create

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

let apiInstance = new NodeumSdk.ContainersApi();
let containerBody = new NodeumSdk.Container(); // Container | 
apiInstance.createContainer(containerBody, (error, data, response) => {
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
 **containerBody** | [**Container**](Container.md)|  | 

### Return type

[**Container**](Container.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createContainerPrivilege

> ContainerPrivilege createContainerPrivilege(containerId, containerPrivilegeBody)

Creates a new privilege on the container.

**API Key Scope**: container_privileges / create

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

let apiInstance = new NodeumSdk.ContainersApi();
let containerId = "containerId_example"; // String | Numeric ID or name of container.
let containerPrivilegeBody = new NodeumSdk.ContainerPrivilege(); // ContainerPrivilege | 
apiInstance.createContainerPrivilege(containerId, containerPrivilegeBody, (error, data, response) => {
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
 **containerPrivilegeBody** | [**ContainerPrivilege**](ContainerPrivilege.md)|  | 

### Return type

[**ContainerPrivilege**](ContainerPrivilege.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## destroyContainer

> destroyContainer(containerId)

Destroys a specific container.

**API Key Scope**: containers / destroy

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

let apiInstance = new NodeumSdk.ContainersApi();
let containerId = "containerId_example"; // String | Numeric ID or name of container.
apiInstance.destroyContainer(containerId, (error, data, response) => {
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
 **containerId** | **String**| Numeric ID or name of container. | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## destroyContainerPrivilege

> destroyContainerPrivilege(containerId, containerPrivilegeId)

Destroys a specific privilege.

**API Key Scope**: container_privileges / destroy

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

let apiInstance = new NodeumSdk.ContainersApi();
let containerId = "containerId_example"; // String | Numeric ID or name of container.
let containerPrivilegeId = 56; // Number | Numeric ID of container privilege.
apiInstance.destroyContainerPrivilege(containerId, containerPrivilegeId, (error, data, response) => {
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
 **containerId** | **String**| Numeric ID or name of container. | 
 **containerPrivilegeId** | **Number**| Numeric ID of container privilege. | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## indexContainerPrivileges

> ContainerPrivilegeCollection indexContainerPrivileges(containerId, opts)

Lists all privilege on the container.

**API Key Scope**: container_privileges / index

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

let apiInstance = new NodeumSdk.ContainersApi();
let containerId = "containerId_example"; // String | Numeric ID or name of container.
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'sortBy': ["null"], // [String] | Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
  'id': "id_example", // String | Filter on id
  'name': "name_example", // String | Filter on name
  'privilege': "privilege_example", // String | Filter on privilege
  'type': "type_example" // String | Filter on type
};
apiInstance.indexContainerPrivileges(containerId, opts, (error, data, response) => {
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
 **sortBy** | [**[String]**](String.md)| Sort results by attribute.  Can sort on multiple attributes, separated by &#x60;|&#x60;. Order direction can be suffixing the attribute by either &#x60;:asc&#x60; (default) or &#x60;:desc&#x60;. | [optional] 
 **id** | **String**| Filter on id | [optional] 
 **name** | **String**| Filter on name | [optional] 
 **privilege** | **String**| Filter on privilege | [optional] 
 **type** | **String**| Filter on type | [optional] 

### Return type

[**ContainerPrivilegeCollection**](ContainerPrivilegeCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## indexContainers

> ContainerCollection indexContainers(opts)

Lists all containers.

**API Key Scope**: containers / index

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

let apiInstance = new NodeumSdk.ContainersApi();
let opts = {
  'limit': 56, // Number | The number of items to display for pagination.
  'offset': 56, // Number | The number of items to skip for pagination.
  'sortBy': ["null"], // [String] | Sort results by attribute.  Can sort on multiple attributes, separated by `|`. Order direction can be suffixing the attribute by either `:asc` (default) or `:desc`.
  'id': "id_example", // String | Filter on id
  'name': "name_example", // String | Filter on name
  'comment': "comment_example", // String | Filter on comment
  'quotaTotalSize': "quotaTotalSize_example", // String | Filter on quota total size
  'quotaOnCache': "quotaOnCache_example", // String | Filter on quota on cache
  'statTotalFiles': "statTotalFiles_example", // String | Filter on stat total files
  'statTotalSize': "statTotalSize_example", // String | Filter on stat total size
  'statSizeOnCache': "statSizeOnCache_example", // String | Filter on stat size on cache
  'guestRight': "guestRight_example", // String | Filter on guest right
  'lastUpdate': "lastUpdate_example" // String | Filter on last update
};
apiInstance.indexContainers(opts, (error, data, response) => {
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
 **comment** | **String**| Filter on comment | [optional] 
 **quotaTotalSize** | **String**| Filter on quota total size | [optional] 
 **quotaOnCache** | **String**| Filter on quota on cache | [optional] 
 **statTotalFiles** | **String**| Filter on stat total files | [optional] 
 **statTotalSize** | **String**| Filter on stat total size | [optional] 
 **statSizeOnCache** | **String**| Filter on stat size on cache | [optional] 
 **guestRight** | **String**| Filter on guest right | [optional] 
 **lastUpdate** | **String**| Filter on last update | [optional] 

### Return type

[**ContainerCollection**](ContainerCollection.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showContainer

> Container showContainer(containerId)

Displays a specific container.

**API Key Scope**: containers / show

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

let apiInstance = new NodeumSdk.ContainersApi();
let containerId = "containerId_example"; // String | Numeric ID or name of container.
apiInstance.showContainer(containerId, (error, data, response) => {
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

### Return type

[**Container**](Container.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showContainerPrivilege

> ContainerPrivilege showContainerPrivilege(containerId, containerPrivilegeId)

Displays a specific privilege.

**API Key Scope**: container_privileges / show

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

let apiInstance = new NodeumSdk.ContainersApi();
let containerId = "containerId_example"; // String | Numeric ID or name of container.
let containerPrivilegeId = 56; // Number | Numeric ID of container privilege.
apiInstance.showContainerPrivilege(containerId, containerPrivilegeId, (error, data, response) => {
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
 **containerPrivilegeId** | **Number**| Numeric ID of container privilege. | 

### Return type

[**ContainerPrivilege**](ContainerPrivilege.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateContainer

> Container updateContainer(containerId, containerBody)

Updates a specific container.

It **does not** yet create the file structure and configure the samba connection. Use API v1 instead.  **API Key Scope**: containers / update

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

let apiInstance = new NodeumSdk.ContainersApi();
let containerId = "containerId_example"; // String | Numeric ID or name of container.
let containerBody = new NodeumSdk.Container(); // Container | 
apiInstance.updateContainer(containerId, containerBody, (error, data, response) => {
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
 **containerBody** | [**Container**](Container.md)|  | 

### Return type

[**Container**](Container.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateContainerPrivilege

> ContainerPrivilege updateContainerPrivilege(containerId, containerPrivilegeId, containerPrivilegeBody)

Updates a specific privilege.

**API Key Scope**: container_privileges / update

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

let apiInstance = new NodeumSdk.ContainersApi();
let containerId = "containerId_example"; // String | Numeric ID or name of container.
let containerPrivilegeId = 56; // Number | Numeric ID of container privilege.
let containerPrivilegeBody = new NodeumSdk.ContainerPrivilege(); // ContainerPrivilege | 
apiInstance.updateContainerPrivilege(containerId, containerPrivilegeId, containerPrivilegeBody, (error, data, response) => {
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
 **containerPrivilegeId** | **Number**| Numeric ID of container privilege. | 
 **containerPrivilegeBody** | [**ContainerPrivilege**](ContainerPrivilege.md)|  | 

### Return type

[**ContainerPrivilege**](ContainerPrivilege.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

