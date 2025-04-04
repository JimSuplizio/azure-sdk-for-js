/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ApplicationPackage,
  ApplicationPackageListOptionalParams,
  ActivateApplicationPackageParameters,
  ApplicationPackageActivateOptionalParams,
  ApplicationPackageActivateResponse,
  ApplicationPackageCreateOptionalParams,
  ApplicationPackageCreateResponse,
  ApplicationPackageDeleteOptionalParams,
  ApplicationPackageGetOptionalParams,
  ApplicationPackageGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ApplicationPackageOperations. */
export interface ApplicationPackageOperations {
  /**
   * Lists all of the application packages in the specified application.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    accountName: string,
    applicationName: string,
    options?: ApplicationPackageListOptionalParams,
  ): PagedAsyncIterableIterator<ApplicationPackage>;
  /**
   * Activates the specified application package. This should be done after the `ApplicationPackage` was
   * created and uploaded. This needs to be done before an `ApplicationPackage` can be used on Pools or
   * Tasks.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param versionName The version of the application.
   * @param parameters The parameters for the request.
   * @param options The options parameters.
   */
  activate(
    resourceGroupName: string,
    accountName: string,
    applicationName: string,
    versionName: string,
    parameters: ActivateApplicationPackageParameters,
    options?: ApplicationPackageActivateOptionalParams,
  ): Promise<ApplicationPackageActivateResponse>;
  /**
   * Creates an application package record. The record contains a storageUrl where the package should be
   * uploaded to.  Once it is uploaded the `ApplicationPackage` needs to be activated using
   * `ApplicationPackageActive` before it can be used. If the auto storage account was configured to use
   * storage keys, the URL returned will contain a SAS.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param versionName The version of the application.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    accountName: string,
    applicationName: string,
    versionName: string,
    options?: ApplicationPackageCreateOptionalParams,
  ): Promise<ApplicationPackageCreateResponse>;
  /**
   * Deletes an application package record and its associated binary file.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param versionName The version of the application.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    applicationName: string,
    versionName: string,
    options?: ApplicationPackageDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Gets information about the specified application package.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param versionName The version of the application.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    applicationName: string,
    versionName: string,
    options?: ApplicationPackageGetOptionalParams,
  ): Promise<ApplicationPackageGetResponse>;
}
