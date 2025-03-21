/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  GitLabSubgroupsListOptionalParams,
  GitLabSubgroupsListResponse,
} from "../models/index.js";

/** Interface representing a GitLabSubgroups. */
export interface GitLabSubgroups {
  /**
   * Gets nested subgroups of given GitLab Group which are onboarded to the connector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param securityConnectorName The security connector name.
   * @param groupFQName The GitLab group fully-qualified name.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    securityConnectorName: string,
    groupFQName: string,
    options?: GitLabSubgroupsListOptionalParams,
  ): Promise<GitLabSubgroupsListResponse>;
}
