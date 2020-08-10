# NodeumApi.StatisticsApi

All URIs are relative to *http://localhost/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**statisticsByDate**](StatisticsApi.md#statisticsByDate) | **GET** /statistics/by_date | Get statistics about files, grouped by date
[**statisticsByFileExtension**](StatisticsApi.md#statisticsByFileExtension) | **GET** /statistics/by_file_extension | Get statistics about files, grouped by file extension
[**statisticsByGroupOwner**](StatisticsApi.md#statisticsByGroupOwner) | **GET** /statistics/by_group_owner | Get statistics about files, grouped by owner (group)
[**statisticsByMetadata**](StatisticsApi.md#statisticsByMetadata) | **GET** /statistics/by_metadata | Get statistics about files, grouped by metadata
[**statisticsByPrimaryCloud**](StatisticsApi.md#statisticsByPrimaryCloud) | **GET** /statistics/by_primary_cloud | Get statistics about files, grouped by primary Cloud
[**statisticsByPrimaryName**](StatisticsApi.md#statisticsByPrimaryName) | **GET** /statistics/by_primary_name | Get statistics about files, grouped by primary storages
[**statisticsByPrimaryNas**](StatisticsApi.md#statisticsByPrimaryNas) | **GET** /statistics/by_primary_nas | Get statistics about files, grouped by primary NAS
[**statisticsByPrimaryStorage**](StatisticsApi.md#statisticsByPrimaryStorage) | **GET** /statistics/by_primary_storage | Get statistics about files, grouped by primary storage
[**statisticsBySecondaryCloud**](StatisticsApi.md#statisticsBySecondaryCloud) | **GET** /statistics/by_secondary_cloud | Get statistics about files, grouped by secondary Cloud
[**statisticsBySecondaryNas**](StatisticsApi.md#statisticsBySecondaryNas) | **GET** /statistics/by_secondary_nas | Get statistics about files, grouped by secondary NAS
[**statisticsBySecondaryStorage**](StatisticsApi.md#statisticsBySecondaryStorage) | **GET** /statistics/by_secondary_storage | Get statistics about files, grouped by secondary storage
[**statisticsBySecondaryTape**](StatisticsApi.md#statisticsBySecondaryTape) | **GET** /statistics/by_secondary_tape | Get statistics about files, grouped by secondary Tape
[**statisticsBySize**](StatisticsApi.md#statisticsBySize) | **GET** /statistics/by_size | Get statistics about files, grouped by size
[**statisticsByUserOwner**](StatisticsApi.md#statisticsByUserOwner) | **GET** /statistics/by_user_owner | Get statistics about files, grouped by owner (user)
[**statisticsStorage**](StatisticsApi.md#statisticsStorage) | **GET** /statistics/storage | Get statistics about storages, grouped by types
[**statisticsTaskByMetadata**](StatisticsApi.md#statisticsTaskByMetadata) | **GET** /statistics/task_by_metadata | Get statistics about tasks executions, grouped by metadata
[**statisticsTaskByStatus**](StatisticsApi.md#statisticsTaskByStatus) | **GET** /statistics/task_by_status | Get statistics about tasks executions, grouped by status
[**statisticsTaskByStorage**](StatisticsApi.md#statisticsTaskByStorage) | **GET** /statistics/task_by_storage | Get statistics about tasks executions, grouped by source and destination
[**statisticsTaskByWorkflow**](StatisticsApi.md#statisticsTaskByWorkflow) | **GET** /statistics/task_by_workflow | Get statistics about tasks executions, grouped by workflow



## statisticsByDate

> ByDateFacet statisticsByDate(opts)

Get statistics about files, grouped by date

**API Key Scope**: statistics / by_date

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

let apiInstance = new NodeumApi.StatisticsApi();
let opts = {
  'q': "q_example", // String | Solr query
  'fq': ["null"], // [String] | Solr filter query  Multiple query can be separated by `|`.
  'dateAttr': "dateAttr_example" // String | Type of date to facet on
};
apiInstance.statisticsByDate(opts, (error, data, response) => {
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
 **q** | **String**| Solr query | [optional] 
 **fq** | [**[String]**](String.md)| Solr filter query  Multiple query can be separated by &#x60;|&#x60;. | [optional] 
 **dateAttr** | **String**| Type of date to facet on | [optional] 

### Return type

[**ByDateFacet**](ByDateFacet.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statisticsByFileExtension

> ByFileExtensionFacet statisticsByFileExtension(opts)

Get statistics about files, grouped by file extension

**API Key Scope**: statistics / by_file_extension

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

let apiInstance = new NodeumApi.StatisticsApi();
let opts = {
  'q': "q_example", // String | Solr query
  'fq': ["null"], // [String] | Solr filter query  Multiple query can be separated by `|`.
  'dateAttr': "dateAttr_example", // String | Type of date to facet on
  'sort': "'count'", // String | Sort results of facet
  'limit': 10 // Number | Limit results of facet
};
apiInstance.statisticsByFileExtension(opts, (error, data, response) => {
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
 **q** | **String**| Solr query | [optional] 
 **fq** | [**[String]**](String.md)| Solr filter query  Multiple query can be separated by &#x60;|&#x60;. | [optional] 
 **dateAttr** | **String**| Type of date to facet on | [optional] 
 **sort** | **String**| Sort results of facet | [optional] [default to &#39;count&#39;]
 **limit** | **Number**| Limit results of facet | [optional] [default to 10]

### Return type

[**ByFileExtensionFacet**](ByFileExtensionFacet.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statisticsByGroupOwner

> ByGroupOwnerFacet statisticsByGroupOwner(opts)

Get statistics about files, grouped by owner (group)

**API Key Scope**: statistics / by_group_owner

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

let apiInstance = new NodeumApi.StatisticsApi();
let opts = {
  'q': "q_example", // String | Solr query
  'fq': ["null"], // [String] | Solr filter query  Multiple query can be separated by `|`.
  'dateAttr': "dateAttr_example", // String | Type of date to facet on
  'sort': "'count'", // String | Sort results of facet
  'limit': 10 // Number | Limit results of facet
};
apiInstance.statisticsByGroupOwner(opts, (error, data, response) => {
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
 **q** | **String**| Solr query | [optional] 
 **fq** | [**[String]**](String.md)| Solr filter query  Multiple query can be separated by &#x60;|&#x60;. | [optional] 
 **dateAttr** | **String**| Type of date to facet on | [optional] 
 **sort** | **String**| Sort results of facet | [optional] [default to &#39;count&#39;]
 **limit** | **Number**| Limit results of facet | [optional] [default to 10]

### Return type

[**ByGroupOwnerFacet**](ByGroupOwnerFacet.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statisticsByMetadata

> ByMetadataFacet statisticsByMetadata(opts)

Get statistics about files, grouped by metadata

**API Key Scope**: statistics / by_metadata

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

let apiInstance = new NodeumApi.StatisticsApi();
let opts = {
  'q': "q_example", // String | Solr query
  'fq': ["null"], // [String] | Solr filter query  Multiple query can be separated by `|`.
  'dateAttr': "dateAttr_example", // String | Type of date to facet on
  'sort': "'count'", // String | Sort results of facet
  'limit': 10 // Number | Limit results of facet
};
apiInstance.statisticsByMetadata(opts, (error, data, response) => {
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
 **q** | **String**| Solr query | [optional] 
 **fq** | [**[String]**](String.md)| Solr filter query  Multiple query can be separated by &#x60;|&#x60;. | [optional] 
 **dateAttr** | **String**| Type of date to facet on | [optional] 
 **sort** | **String**| Sort results of facet | [optional] [default to &#39;count&#39;]
 **limit** | **Number**| Limit results of facet | [optional] [default to 10]

### Return type

[**ByMetadataFacet**](ByMetadataFacet.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statisticsByPrimaryCloud

> ByPrimaryCloudFacet statisticsByPrimaryCloud(opts)

Get statistics about files, grouped by primary Cloud

**API Key Scope**: statistics / by_primary_cloud

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

let apiInstance = new NodeumApi.StatisticsApi();
let opts = {
  'q': "q_example", // String | Solr query
  'fq': ["null"], // [String] | Solr filter query  Multiple query can be separated by `|`.
  'dateAttr': "dateAttr_example", // String | Type of date to facet on
  'sort': "'count'", // String | Sort results of facet
  'limit': 10 // Number | Limit results of facet
};
apiInstance.statisticsByPrimaryCloud(opts, (error, data, response) => {
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
 **q** | **String**| Solr query | [optional] 
 **fq** | [**[String]**](String.md)| Solr filter query  Multiple query can be separated by &#x60;|&#x60;. | [optional] 
 **dateAttr** | **String**| Type of date to facet on | [optional] 
 **sort** | **String**| Sort results of facet | [optional] [default to &#39;count&#39;]
 **limit** | **Number**| Limit results of facet | [optional] [default to 10]

### Return type

[**ByPrimaryCloudFacet**](ByPrimaryCloudFacet.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statisticsByPrimaryName

> ByPrimaryFacet statisticsByPrimaryName(opts)

Get statistics about files, grouped by primary storages

**API Key Scope**: statistics / by_primary_name

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

let apiInstance = new NodeumApi.StatisticsApi();
let opts = {
  'q': "q_example", // String | Solr query
  'fq': ["null"], // [String] | Solr filter query  Multiple query can be separated by `|`.
  'dateAttr': "dateAttr_example", // String | Type of date to facet on
  'sort': "'count'", // String | Sort results of facet
  'limit': 10 // Number | Limit results of facet
};
apiInstance.statisticsByPrimaryName(opts, (error, data, response) => {
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
 **q** | **String**| Solr query | [optional] 
 **fq** | [**[String]**](String.md)| Solr filter query  Multiple query can be separated by &#x60;|&#x60;. | [optional] 
 **dateAttr** | **String**| Type of date to facet on | [optional] 
 **sort** | **String**| Sort results of facet | [optional] [default to &#39;count&#39;]
 **limit** | **Number**| Limit results of facet | [optional] [default to 10]

### Return type

[**ByPrimaryFacet**](ByPrimaryFacet.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statisticsByPrimaryNas

> ByPrimaryNasFacet statisticsByPrimaryNas(opts)

Get statistics about files, grouped by primary NAS

**API Key Scope**: statistics / by_primary_nas

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

let apiInstance = new NodeumApi.StatisticsApi();
let opts = {
  'q': "q_example", // String | Solr query
  'fq': ["null"], // [String] | Solr filter query  Multiple query can be separated by `|`.
  'dateAttr': "dateAttr_example", // String | Type of date to facet on
  'sort': "'count'", // String | Sort results of facet
  'limit': 10 // Number | Limit results of facet
};
apiInstance.statisticsByPrimaryNas(opts, (error, data, response) => {
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
 **q** | **String**| Solr query | [optional] 
 **fq** | [**[String]**](String.md)| Solr filter query  Multiple query can be separated by &#x60;|&#x60;. | [optional] 
 **dateAttr** | **String**| Type of date to facet on | [optional] 
 **sort** | **String**| Sort results of facet | [optional] [default to &#39;count&#39;]
 **limit** | **Number**| Limit results of facet | [optional] [default to 10]

### Return type

[**ByPrimaryNasFacet**](ByPrimaryNasFacet.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statisticsByPrimaryStorage

> ByPrimaryStorageFacet statisticsByPrimaryStorage(opts)

Get statistics about files, grouped by primary storage

**API Key Scope**: statistics / by_primary_storage

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

let apiInstance = new NodeumApi.StatisticsApi();
let opts = {
  'q': "q_example", // String | Solr query
  'fq': ["null"], // [String] | Solr filter query  Multiple query can be separated by `|`.
  'dateAttr': "dateAttr_example", // String | Type of date to facet on
  'sort': "'count'", // String | Sort results of facet
  'limit': 10 // Number | Limit results of facet
};
apiInstance.statisticsByPrimaryStorage(opts, (error, data, response) => {
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
 **q** | **String**| Solr query | [optional] 
 **fq** | [**[String]**](String.md)| Solr filter query  Multiple query can be separated by &#x60;|&#x60;. | [optional] 
 **dateAttr** | **String**| Type of date to facet on | [optional] 
 **sort** | **String**| Sort results of facet | [optional] [default to &#39;count&#39;]
 **limit** | **Number**| Limit results of facet | [optional] [default to 10]

### Return type

[**ByPrimaryStorageFacet**](ByPrimaryStorageFacet.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statisticsBySecondaryCloud

> BySecondaryCloudFacet statisticsBySecondaryCloud(opts)

Get statistics about files, grouped by secondary Cloud

**API Key Scope**: statistics / by_secondary_cloud

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

let apiInstance = new NodeumApi.StatisticsApi();
let opts = {
  'q': "q_example", // String | Solr query
  'fq': ["null"], // [String] | Solr filter query  Multiple query can be separated by `|`.
  'dateAttr': "dateAttr_example", // String | Type of date to facet on
  'sort': "'count'", // String | Sort results of facet
  'limit': 10 // Number | Limit results of facet
};
apiInstance.statisticsBySecondaryCloud(opts, (error, data, response) => {
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
 **q** | **String**| Solr query | [optional] 
 **fq** | [**[String]**](String.md)| Solr filter query  Multiple query can be separated by &#x60;|&#x60;. | [optional] 
 **dateAttr** | **String**| Type of date to facet on | [optional] 
 **sort** | **String**| Sort results of facet | [optional] [default to &#39;count&#39;]
 **limit** | **Number**| Limit results of facet | [optional] [default to 10]

### Return type

[**BySecondaryCloudFacet**](BySecondaryCloudFacet.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statisticsBySecondaryNas

> BySecondaryNasFacet statisticsBySecondaryNas(opts)

Get statistics about files, grouped by secondary NAS

**API Key Scope**: statistics / by_secondary_nas

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

let apiInstance = new NodeumApi.StatisticsApi();
let opts = {
  'q': "q_example", // String | Solr query
  'fq': ["null"], // [String] | Solr filter query  Multiple query can be separated by `|`.
  'dateAttr': "dateAttr_example", // String | Type of date to facet on
  'sort': "'count'", // String | Sort results of facet
  'limit': 10 // Number | Limit results of facet
};
apiInstance.statisticsBySecondaryNas(opts, (error, data, response) => {
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
 **q** | **String**| Solr query | [optional] 
 **fq** | [**[String]**](String.md)| Solr filter query  Multiple query can be separated by &#x60;|&#x60;. | [optional] 
 **dateAttr** | **String**| Type of date to facet on | [optional] 
 **sort** | **String**| Sort results of facet | [optional] [default to &#39;count&#39;]
 **limit** | **Number**| Limit results of facet | [optional] [default to 10]

### Return type

[**BySecondaryNasFacet**](BySecondaryNasFacet.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statisticsBySecondaryStorage

> BySecondaryStorageFacet statisticsBySecondaryStorage(opts)

Get statistics about files, grouped by secondary storage

**API Key Scope**: statistics / by_secondary_storage

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

let apiInstance = new NodeumApi.StatisticsApi();
let opts = {
  'q': "q_example", // String | Solr query
  'fq': ["null"], // [String] | Solr filter query  Multiple query can be separated by `|`.
  'dateAttr': "dateAttr_example", // String | Type of date to facet on
  'sort': "'count'", // String | Sort results of facet
  'limit': 10 // Number | Limit results of facet
};
apiInstance.statisticsBySecondaryStorage(opts, (error, data, response) => {
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
 **q** | **String**| Solr query | [optional] 
 **fq** | [**[String]**](String.md)| Solr filter query  Multiple query can be separated by &#x60;|&#x60;. | [optional] 
 **dateAttr** | **String**| Type of date to facet on | [optional] 
 **sort** | **String**| Sort results of facet | [optional] [default to &#39;count&#39;]
 **limit** | **Number**| Limit results of facet | [optional] [default to 10]

### Return type

[**BySecondaryStorageFacet**](BySecondaryStorageFacet.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statisticsBySecondaryTape

> BySecondaryTapeFacet statisticsBySecondaryTape(opts)

Get statistics about files, grouped by secondary Tape

**API Key Scope**: statistics / by_secondary_tape

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

let apiInstance = new NodeumApi.StatisticsApi();
let opts = {
  'q': "q_example", // String | Solr query
  'fq': ["null"], // [String] | Solr filter query  Multiple query can be separated by `|`.
  'dateAttr': "dateAttr_example", // String | Type of date to facet on
  'sort': "'count'", // String | Sort results of facet
  'limit': 10 // Number | Limit results of facet
};
apiInstance.statisticsBySecondaryTape(opts, (error, data, response) => {
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
 **q** | **String**| Solr query | [optional] 
 **fq** | [**[String]**](String.md)| Solr filter query  Multiple query can be separated by &#x60;|&#x60;. | [optional] 
 **dateAttr** | **String**| Type of date to facet on | [optional] 
 **sort** | **String**| Sort results of facet | [optional] [default to &#39;count&#39;]
 **limit** | **Number**| Limit results of facet | [optional] [default to 10]

### Return type

[**BySecondaryTapeFacet**](BySecondaryTapeFacet.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statisticsBySize

> BySizeFacet statisticsBySize(opts)

Get statistics about files, grouped by size

**API Key Scope**: statistics / by_size

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

let apiInstance = new NodeumApi.StatisticsApi();
let opts = {
  'q': "q_example", // String | Solr query
  'fq': ["null"], // [String] | Solr filter query  Multiple query can be separated by `|`.
  'dateAttr': "dateAttr_example" // String | Type of date to facet on
};
apiInstance.statisticsBySize(opts, (error, data, response) => {
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
 **q** | **String**| Solr query | [optional] 
 **fq** | [**[String]**](String.md)| Solr filter query  Multiple query can be separated by &#x60;|&#x60;. | [optional] 
 **dateAttr** | **String**| Type of date to facet on | [optional] 

### Return type

[**BySizeFacet**](BySizeFacet.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statisticsByUserOwner

> ByUserOwnerFacet statisticsByUserOwner(opts)

Get statistics about files, grouped by owner (user)

**API Key Scope**: statistics / by_user_owner

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

let apiInstance = new NodeumApi.StatisticsApi();
let opts = {
  'q': "q_example", // String | Solr query
  'fq': ["null"], // [String] | Solr filter query  Multiple query can be separated by `|`.
  'dateAttr': "dateAttr_example", // String | Type of date to facet on
  'sort': "'count'", // String | Sort results of facet
  'limit': 10 // Number | Limit results of facet
};
apiInstance.statisticsByUserOwner(opts, (error, data, response) => {
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
 **q** | **String**| Solr query | [optional] 
 **fq** | [**[String]**](String.md)| Solr filter query  Multiple query can be separated by &#x60;|&#x60;. | [optional] 
 **dateAttr** | **String**| Type of date to facet on | [optional] 
 **sort** | **String**| Sort results of facet | [optional] [default to &#39;count&#39;]
 **limit** | **Number**| Limit results of facet | [optional] [default to 10]

### Return type

[**ByUserOwnerFacet**](ByUserOwnerFacet.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statisticsStorage

> StorageFacet statisticsStorage(opts)

Get statistics about storages, grouped by types

**API Key Scope**: statistics / storages

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

let apiInstance = new NodeumApi.StatisticsApi();
let opts = {
  'q': "q_example", // String | Solr query
  'fq': ["null"] // [String] | Solr filter query  Multiple query can be separated by `|`.
};
apiInstance.statisticsStorage(opts, (error, data, response) => {
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
 **q** | **String**| Solr query | [optional] 
 **fq** | [**[String]**](String.md)| Solr filter query  Multiple query can be separated by &#x60;|&#x60;. | [optional] 

### Return type

[**StorageFacet**](StorageFacet.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statisticsTaskByMetadata

> ByTaskMetadataFacet statisticsTaskByMetadata(opts)

Get statistics about tasks executions, grouped by metadata

**API Key Scope**: statistics / task_by_metadata

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

let apiInstance = new NodeumApi.StatisticsApi();
let opts = {
  'q': "q_example", // String | Solr query
  'fq': ["null"], // [String] | Solr filter query  Multiple query can be separated by `|`.
  'sort': "'count'", // String | Sort results of facet on task
  'limit': 10 // Number | Limit results of facet
};
apiInstance.statisticsTaskByMetadata(opts, (error, data, response) => {
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
 **q** | **String**| Solr query | [optional] 
 **fq** | [**[String]**](String.md)| Solr filter query  Multiple query can be separated by &#x60;|&#x60;. | [optional] 
 **sort** | **String**| Sort results of facet on task | [optional] [default to &#39;count&#39;]
 **limit** | **Number**| Limit results of facet | [optional] [default to 10]

### Return type

[**ByTaskMetadataFacet**](ByTaskMetadataFacet.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statisticsTaskByStatus

> ByTaskStatusFacet statisticsTaskByStatus(opts)

Get statistics about tasks executions, grouped by status

**API Key Scope**: statistics / task_by_status

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

let apiInstance = new NodeumApi.StatisticsApi();
let opts = {
  'q': "q_example", // String | Solr query
  'fq': ["null"] // [String] | Solr filter query  Multiple query can be separated by `|`.
};
apiInstance.statisticsTaskByStatus(opts, (error, data, response) => {
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
 **q** | **String**| Solr query | [optional] 
 **fq** | [**[String]**](String.md)| Solr filter query  Multiple query can be separated by &#x60;|&#x60;. | [optional] 

### Return type

[**ByTaskStatusFacet**](ByTaskStatusFacet.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statisticsTaskByStorage

> ByTaskStorageFacet statisticsTaskByStorage(opts)

Get statistics about tasks executions, grouped by source and destination

**API Key Scope**: statistics / task_by_storage

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

let apiInstance = new NodeumApi.StatisticsApi();
let opts = {
  'q': "q_example", // String | Solr query
  'fq': ["null"] // [String] | Solr filter query  Multiple query can be separated by `|`.
};
apiInstance.statisticsTaskByStorage(opts, (error, data, response) => {
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
 **q** | **String**| Solr query | [optional] 
 **fq** | [**[String]**](String.md)| Solr filter query  Multiple query can be separated by &#x60;|&#x60;. | [optional] 

### Return type

[**ByTaskStorageFacet**](ByTaskStorageFacet.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statisticsTaskByWorkflow

> ByTaskWorkflowFacet statisticsTaskByWorkflow(opts)

Get statistics about tasks executions, grouped by workflow

**API Key Scope**: statistics / task_by_workflow

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

let apiInstance = new NodeumApi.StatisticsApi();
let opts = {
  'q': "q_example", // String | Solr query
  'fq': ["null"] // [String] | Solr filter query  Multiple query can be separated by `|`.
};
apiInstance.statisticsTaskByWorkflow(opts, (error, data, response) => {
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
 **q** | **String**| Solr query | [optional] 
 **fq** | [**[String]**](String.md)| Solr filter query  Multiple query can be separated by &#x60;|&#x60;. | [optional] 

### Return type

[**ByTaskWorkflowFacet**](ByTaskWorkflowFacet.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

