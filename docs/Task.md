# NodeumSdk.Task

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] [readonly] 
**name** | **String** |  | [optional] 
**comment** | **String** |  | [optional] 
**workflowType** | **String** |  | [optional] 
**workflowAction** | **String** |  | [optional] 
**sourceType** | **String** |  | [optional] 
**destinationType** | **String** |  | [optional] 
**priority** | **Number** |  | [optional] 
**conflictResolution** | **String** |  | [optional] 
**action** | **String** |  | [optional] [readonly] 
**activate** | **Boolean** |  | [optional] 
**creationDate** | **String** |  | [optional] [readonly] 
**modificationDate** | **String** |  | [optional] [readonly] 
**creationUsername** | **String** |  | [optional] [readonly] 
**modificationUsername** | **String** |  | [optional] [readonly] 
**status** | **String** |  | [optional] [readonly] 
**jobStarted** | **String** |  | [optional] [readonly] 
**jobFinished** | **String** |  | [optional] [readonly] 
**processedSize** | **Number** |  | [optional] [readonly] 
**toProcessSize** | **Number** |  | [optional] [readonly] 



## Enum: WorkflowTypeEnum


* `active_archive` (value: `"active_archive"`)

* `offline_archive` (value: `"offline_archive"`)

* `data_exchange` (value: `"data_exchange"`)

* `data_migration` (value: `"data_migration"`)

* `maintenance` (value: `"maintenance"`)

* `data_enrichment` (value: `"data_enrichment"`)





## Enum: WorkflowActionEnum


* `copy` (value: `"copy"`)

* `move` (value: `"move"`)

* `scan` (value: `"scan"`)

* `rehydratation` (value: `"rehydratation"`)

* `format` (value: `"format"`)

* `check_consistency` (value: `"check_consistency"`)

* `duplication` (value: `"duplication"`)

* `cache_cleaning` (value: `"cache_cleaning"`)

* `ejection` (value: `"ejection"`)

* `get_index` (value: `"get_index"`)

* `full_backup` (value: `"full_backup"`)

* `incremental_backup` (value: `"incremental_backup"`)





## Enum: SourceTypeEnum


* `container` (value: `"container"`)

* `primary_nas` (value: `"primary_nas"`)

* `secondary_nas` (value: `"secondary_nas"`)

* `primary_cloud` (value: `"primary_cloud"`)

* `secondary_cloud` (value: `"secondary_cloud"`)

* `secondary_tape` (value: `"secondary_tape"`)





## Enum: DestinationTypeEnum


* `container` (value: `"container"`)

* `primary_nas` (value: `"primary_nas"`)

* `secondary_nas` (value: `"secondary_nas"`)

* `primary_cloud` (value: `"primary_cloud"`)

* `secondary_cloud` (value: `"secondary_cloud"`)

* `secondary_tape` (value: `"secondary_tape"`)





## Enum: ConflictResolutionEnum


* `rename` (value: `"rename"`)

* `overwrite` (value: `"overwrite"`)

* `ignore` (value: `"ignore"`)





## Enum: ActionEnum


* `noop` (value: `"noop"`)

* `run` (value: `"run"`)

* `pause` (value: `"pause"`)

* `stop` (value: `"stop"`)

* `resume` (value: `"resume"`)





## Enum: StatusEnum


* `not_activated` (value: `"not_activated"`)

* `done` (value: `"done"`)

* `in_progress` (value: `"in_progress"`)

* `error` (value: `"error"`)

* `paused` (value: `"paused"`)

* `stopped_by_system` (value: `"stopped_by_system"`)

* `in_queue` (value: `"in_queue"`)

* `finished_with_warnings` (value: `"finished_with_warnings"`)

* `calculating` (value: `"calculating"`)

* `stopped_by_user` (value: `"stopped_by_user"`)




