/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  FileServer,
  FileServersListByDeviceOptionalParams,
  Metrics,
  FileServersListMetricsOptionalParams,
  MetricDefinition,
  FileServersListMetricDefinitionOptionalParams,
  FileServersListByManagerOptionalParams,
  FileServersGetOptionalParams,
  FileServersGetResponse,
  FileServersCreateOrUpdateOptionalParams,
  FileServersCreateOrUpdateResponse,
  FileServersDeleteOptionalParams,
  FileServersBackupNowOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a FileServers. */
export interface FileServers {
  /**
   * Retrieves all the file servers in a device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  listByDevice(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileServersListByDeviceOptionalParams
  ): PagedAsyncIterableIterator<FileServer>;
  /**
   * Gets the file server metrics.
   * @param deviceName The name of the device.
   * @param fileServerName The name of the file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  listMetrics(
    deviceName: string,
    fileServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileServersListMetricsOptionalParams
  ): PagedAsyncIterableIterator<Metrics>;
  /**
   * Retrieves metric definitions of all metrics aggregated at the file server.
   * @param deviceName The name of the device.
   * @param fileServerName The name of the file server.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  listMetricDefinition(
    deviceName: string,
    fileServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileServersListMetricDefinitionOptionalParams
  ): PagedAsyncIterableIterator<MetricDefinition>;
  /**
   * Retrieves all the file servers in a manager.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  listByManager(
    resourceGroupName: string,
    managerName: string,
    options?: FileServersListByManagerOptionalParams
  ): PagedAsyncIterableIterator<FileServer>;
  /**
   * Returns the properties of the specified file server name.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  get(
    deviceName: string,
    fileServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileServersGetOptionalParams
  ): Promise<FileServersGetResponse>;
  /**
   * Creates or updates the file server.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param fileServer The file server.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    deviceName: string,
    fileServerName: string,
    resourceGroupName: string,
    managerName: string,
    fileServer: FileServer,
    options?: FileServersCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<FileServersCreateOrUpdateResponse>,
      FileServersCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates the file server.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param fileServer The file server.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    deviceName: string,
    fileServerName: string,
    resourceGroupName: string,
    managerName: string,
    fileServer: FileServer,
    options?: FileServersCreateOrUpdateOptionalParams
  ): Promise<FileServersCreateOrUpdateResponse>;
  /**
   * Deletes the file server.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  beginDelete(
    deviceName: string,
    fileServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileServersDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes the file server.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    deviceName: string,
    fileServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileServersDeleteOptionalParams
  ): Promise<void>;
  /**
   * Backup the file server now.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  beginBackupNow(
    deviceName: string,
    fileServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileServersBackupNowOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Backup the file server now.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  beginBackupNowAndWait(
    deviceName: string,
    fileServerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: FileServersBackupNowOptionalParams
  ): Promise<void>;
}
