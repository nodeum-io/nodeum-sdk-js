# NodeumApi.SystemsApi

All URIs are relative to *http://localhost/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**downloadResetVars**](SystemsApi.md#downloadResetVars) | **POST** /systems/reset/generate_vars | Creates a YAML file with selected tables and downloads it
[**resultDownloadTraces**](SystemsApi.md#resultDownloadTraces) | **GET** /systems/download_traces | Check result of a download traces job.
[**triggerDownloadTraces**](SystemsApi.md#triggerDownloadTraces) | **PUT** /systems/download_traces | Trigger a download traces request.



## downloadResetVars

> File downloadResetVars(resetForm)

Creates a YAML file with selected tables and downloads it

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

let apiInstance = new NodeumApi.SystemsApi();
let resetForm = new NodeumApi.Reset(); // Reset | 
apiInstance.downloadResetVars(resetForm, (error, data, response) => {
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
 **resetForm** | [**Reset**](Reset.md)|  | 

### Return type

**File**

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/x-yaml


## resultDownloadTraces

> File resultDownloadTraces(jobId)

Check result of a download traces job.

**API Key Scope**: systems / download_traces

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

let apiInstance = new NodeumApi.SystemsApi();
let jobId = "jobId_example"; // String | ID of active job
apiInstance.resultDownloadTraces(jobId, (error, data, response) => {
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

**File**

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/tar+gzip, queued, working, failed, 


## triggerDownloadTraces

> ActiveJobStatus triggerDownloadTraces(type)

Trigger a download traces request.

**API Key Scope**: systems / download_traces

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

let apiInstance = new NodeumApi.SystemsApi();
let type = "type_example"; // String | Type of traces to download
apiInstance.triggerDownloadTraces(type, (error, data, response) => {
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
 **type** | **String**| Type of traces to download | 

### Return type

[**ActiveJobStatus**](ActiveJobStatus.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, queued, working, failed

