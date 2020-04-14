# NodeumSdk.StatisticsApi

All URIs are relative to *http://localhost/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**statisticsByFileExtension**](StatisticsApi.md#statisticsByFileExtension) | **GET** /statistics/by_file_extension | TODO
[**statisticsByGroupOwner**](StatisticsApi.md#statisticsByGroupOwner) | **GET** /statistics/by_group_owner | TODO
[**statisticsByPrimaryName**](StatisticsApi.md#statisticsByPrimaryName) | **GET** /statistics/by_primary_name | TODO
[**statisticsBySecondaryStorage**](StatisticsApi.md#statisticsBySecondaryStorage) | **GET** /statistics/by_secondary_storage | TODO
[**statisticsBySize**](StatisticsApi.md#statisticsBySize) | **GET** /statistics/by_size | TODO
[**statisticsByUserOwner**](StatisticsApi.md#statisticsByUserOwner) | **GET** /statistics/by_user_owner | TODO



## statisticsByFileExtension

> ByFileExtensionFacet statisticsByFileExtension(opts)

TODO

**API Key Scope**: statistics / by_file_extension

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

let apiInstance = new NodeumSdk.StatisticsApi();
let opts = {
  'q': "q_example", // String | Solr query
  'dateAttr': "dateAttr_example" // String | Type of date to facet on
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
 **dateAttr** | **String**| Type of date to facet on | [optional] 

### Return type

[**ByFileExtensionFacet**](ByFileExtensionFacet.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statisticsByGroupOwner

> ByGroupOwnerFacet statisticsByGroupOwner(opts)

TODO

**API Key Scope**: statistics / by_group_owner

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

let apiInstance = new NodeumSdk.StatisticsApi();
let opts = {
  'q': "q_example", // String | Solr query
  'dateAttr': "dateAttr_example" // String | Type of date to facet on
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
 **dateAttr** | **String**| Type of date to facet on | [optional] 

### Return type

[**ByGroupOwnerFacet**](ByGroupOwnerFacet.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statisticsByPrimaryName

> ByPrimaryFacet statisticsByPrimaryName(opts)

TODO

**API Key Scope**: statistics / by_primary_name

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

let apiInstance = new NodeumSdk.StatisticsApi();
let opts = {
  'q': "q_example", // String | Solr query
  'dateAttr': "dateAttr_example" // String | Type of date to facet on
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
 **dateAttr** | **String**| Type of date to facet on | [optional] 

### Return type

[**ByPrimaryFacet**](ByPrimaryFacet.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statisticsBySecondaryStorage

> BySecondaryFacet statisticsBySecondaryStorage(opts)

TODO

**API Key Scope**: statistics / by_secondary_storage

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

let apiInstance = new NodeumSdk.StatisticsApi();
let opts = {
  'q': "q_example", // String | Solr query
  'dateAttr': "dateAttr_example" // String | Type of date to facet on
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
 **dateAttr** | **String**| Type of date to facet on | [optional] 

### Return type

[**BySecondaryFacet**](BySecondaryFacet.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statisticsBySize

> BySizeFacet statisticsBySize(opts)

TODO

**API Key Scope**: statistics / by_size

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

let apiInstance = new NodeumSdk.StatisticsApi();
let opts = {
  'q': "q_example", // String | Solr query
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

TODO

**API Key Scope**: statistics / by_user_owner

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

let apiInstance = new NodeumSdk.StatisticsApi();
let opts = {
  'q': "q_example", // String | Solr query
  'dateAttr': "dateAttr_example" // String | Type of date to facet on
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
 **dateAttr** | **String**| Type of date to facet on | [optional] 

### Return type

[**ByUserOwnerFacet**](ByUserOwnerFacet.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

