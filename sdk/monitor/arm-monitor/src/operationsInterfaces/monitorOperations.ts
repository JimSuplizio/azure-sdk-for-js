/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Operation, MonitorOperationsListOptionalParams } from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a MonitorOperations. */
export interface MonitorOperations {
  /**
   * Lists available Operations for this Resource Provider
   * @param options The options parameters.
   */
  list(
    options?: MonitorOperationsListOptionalParams,
  ): PagedAsyncIterableIterator<Operation>;
}
