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
  DscNodeConfiguration,
  DscNodeConfigurationListByAutomationAccountOptionalParams,
  DscNodeConfigurationDeleteOptionalParams,
  DscNodeConfigurationGetOptionalParams,
  DscNodeConfigurationGetResponse,
  DscNodeConfigurationCreateOrUpdateParameters,
  DscNodeConfigurationCreateOrUpdateOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DscNodeConfigurationOperations. */
export interface DscNodeConfigurationOperations {
  /**
   * Retrieve a list of dsc node configurations.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  listByAutomationAccount(
    resourceGroupName: string,
    automationAccountName: string,
    options?: DscNodeConfigurationListByAutomationAccountOptionalParams
  ): PagedAsyncIterableIterator<DscNodeConfiguration>;
  /**
   * Delete the Dsc node configurations by node configuration.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param nodeConfigurationName The Dsc node configuration name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    automationAccountName: string,
    nodeConfigurationName: string,
    options?: DscNodeConfigurationDeleteOptionalParams
  ): Promise<void>;
  /**
   * Retrieve the Dsc node configurations by node configuration.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param nodeConfigurationName The Dsc node configuration name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    nodeConfigurationName: string,
    options?: DscNodeConfigurationGetOptionalParams
  ): Promise<DscNodeConfigurationGetResponse>;
  /**
   * Create the node configuration identified by node configuration name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param nodeConfigurationName The Dsc node configuration name.
   * @param parameters The create or update parameters for configuration.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    automationAccountName: string,
    nodeConfigurationName: string,
    parameters: DscNodeConfigurationCreateOrUpdateParameters,
    options?: DscNodeConfigurationCreateOrUpdateOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Create the node configuration identified by node configuration name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param nodeConfigurationName The Dsc node configuration name.
   * @param parameters The create or update parameters for configuration.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    automationAccountName: string,
    nodeConfigurationName: string,
    parameters: DscNodeConfigurationCreateOrUpdateParameters,
    options?: DscNodeConfigurationCreateOrUpdateOptionalParams
  ): Promise<void>;
}
