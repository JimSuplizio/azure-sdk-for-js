## API Report File for "@azure/arm-agricultureplatform"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { Client } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { OperationState } from '@azure/core-lro';
import { PollerLike } from '@azure/core-lro';

// @public
export function $delete(context: AgriculturePlatformContext, resourceGroupName: string, agriServiceResourceName: string, options?: AgriServiceDeleteOptionalParams): PollerLike<OperationState<void>, void>;

// @public
export interface AgriServiceCreateOrUpdateOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

// @public
export interface AgriServiceDeleteOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

// @public
export interface AgriServiceGetOptionalParams extends OperationOptions {
}

// @public
export interface AgriServiceListAvailableSolutionsOptionalParams extends OperationOptions {
}

// @public
export interface AgriServiceListByResourceGroupOptionalParams extends OperationOptions {
}

// @public
export interface AgriServiceListBySubscriptionOptionalParams extends OperationOptions {
}

// @public
export interface AgriServiceUpdateOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

// @public
export function createOrUpdate(context: AgriculturePlatformContext, resourceGroupName: string, agriServiceResourceName: string, resource: AgriServiceResource, options?: AgriServiceCreateOrUpdateOptionalParams): PollerLike<OperationState<AgriServiceResource>, AgriServiceResource>;

// @public
export function get(context: AgriculturePlatformContext, resourceGroupName: string, agriServiceResourceName: string, options?: AgriServiceGetOptionalParams): Promise<AgriServiceResource>;

// @public
export function listAvailableSolutions(context: AgriculturePlatformContext, resourceGroupName: string, agriServiceResourceName: string, options?: AgriServiceListAvailableSolutionsOptionalParams): Promise<AvailableAgriSolutionListResult>;

// @public
export function listByResourceGroup(context: AgriculturePlatformContext, resourceGroupName: string, options?: AgriServiceListByResourceGroupOptionalParams): PagedAsyncIterableIterator<AgriServiceResource>;

// @public
export function listBySubscription(context: AgriculturePlatformContext, options?: AgriServiceListBySubscriptionOptionalParams): PagedAsyncIterableIterator<AgriServiceResource>;

// @public
export function update(context: AgriculturePlatformContext, resourceGroupName: string, agriServiceResourceName: string, properties: AgriServiceResourceUpdate, options?: AgriServiceUpdateOptionalParams): PollerLike<OperationState<AgriServiceResource>, AgriServiceResource>;

// (No @packageDocumentation comment for this package)

```
