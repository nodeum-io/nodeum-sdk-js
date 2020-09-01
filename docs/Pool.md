# NodeumApi.Pool

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] [readonly] 
**name** | **String** |  | [optional] 
**comment** | **String** |  | [optional] 
**type** | **String** |  | [optional] 
**content** | **String** |  | [optional] 
**primaryId** | **Number** |  | [optional] [readonly] 
**storageId** | **Number** | For pool of tapes, used to link to a tape library id | [optional] 



## Enum: TypeEnum


* `active_archive` (value: `"active_archive"`)

* `offline_archive` (value: `"offline_archive"`)

* `data_exchange` (value: `"data_exchange"`)

* `scratch` (value: `"scratch"`)

* `data_enrichment` (value: `"data_enrichment"`)

* `primary` (value: `"primary"`)





## Enum: ContentEnum


* `tape` (value: `"tape"`)

* `cloud` (value: `"cloud"`)

* `nas` (value: `"nas"`)




