/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  PrefixListGlobalRulestackResource,
  PrefixListGlobalRulestackListOptionalParams,
  PrefixListGlobalRulestackGetOptionalParams,
  PrefixListGlobalRulestackGetResponse,
  PrefixListGlobalRulestackCreateOrUpdateOptionalParams,
  PrefixListGlobalRulestackCreateOrUpdateResponse,
  PrefixListGlobalRulestackDeleteOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PrefixListGlobalRulestack. */
export interface PrefixListGlobalRulestack {
  /**
   * List PrefixListGlobalRulestackResource resources by Tenant
   * @param globalRulestackName GlobalRulestack resource name
   * @param options The options parameters.
   */
  list(
    globalRulestackName: string,
    options?: PrefixListGlobalRulestackListOptionalParams
  ): PagedAsyncIterableIterator<PrefixListGlobalRulestackResource>;
  /**
   * Get a PrefixListGlobalRulestackResource
   * @param globalRulestackName GlobalRulestack resource name
   * @param name Local Rule priority
   * @param options The options parameters.
   */
  get(
    globalRulestackName: string,
    name: string,
    options?: PrefixListGlobalRulestackGetOptionalParams
  ): Promise<PrefixListGlobalRulestackGetResponse>;
  /**
   * Create a PrefixListGlobalRulestackResource
   * @param globalRulestackName GlobalRulestack resource name
   * @param name Local Rule priority
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    globalRulestackName: string,
    name: string,
    resource: PrefixListGlobalRulestackResource,
    options?: PrefixListGlobalRulestackCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<PrefixListGlobalRulestackCreateOrUpdateResponse>,
      PrefixListGlobalRulestackCreateOrUpdateResponse
    >
  >;
  /**
   * Create a PrefixListGlobalRulestackResource
   * @param globalRulestackName GlobalRulestack resource name
   * @param name Local Rule priority
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    globalRulestackName: string,
    name: string,
    resource: PrefixListGlobalRulestackResource,
    options?: PrefixListGlobalRulestackCreateOrUpdateOptionalParams
  ): Promise<PrefixListGlobalRulestackCreateOrUpdateResponse>;
  /**
   * Delete a PrefixListGlobalRulestackResource
   * @param globalRulestackName GlobalRulestack resource name
   * @param name Local Rule priority
   * @param options The options parameters.
   */
  beginDelete(
    globalRulestackName: string,
    name: string,
    options?: PrefixListGlobalRulestackDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete a PrefixListGlobalRulestackResource
   * @param globalRulestackName GlobalRulestack resource name
   * @param name Local Rule priority
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    globalRulestackName: string,
    name: string,
    options?: PrefixListGlobalRulestackDeleteOptionalParams
  ): Promise<void>;
}
