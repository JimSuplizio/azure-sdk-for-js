/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { KustoPoolPrivateLinkResourcesOperations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { SynapseManagementClient } from "../synapseManagementClient.js";
import {
  KustoPoolPrivateLinkResources,
  KustoPoolPrivateLinkResourcesListOptionalParams,
  KustoPoolPrivateLinkResourcesListResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing KustoPoolPrivateLinkResourcesOperations operations. */
export class KustoPoolPrivateLinkResourcesOperationsImpl
  implements KustoPoolPrivateLinkResourcesOperations {
  private readonly client: SynapseManagementClient;

  /**
   * Initialize a new instance of the class KustoPoolPrivateLinkResourcesOperations class.
   * @param client Reference to the service client
   */
  constructor(client: SynapseManagementClient) {
    this.client = client;
  }

  /**
   * Lists all Kusto pool PrivateLinkResources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceName: string,
    kustoPoolName: string,
    options?: KustoPoolPrivateLinkResourcesListOptionalParams
  ): PagedAsyncIterableIterator<KustoPoolPrivateLinkResources> {
    const iter = this.listPagingAll(
      resourceGroupName,
      workspaceName,
      kustoPoolName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          workspaceName,
          kustoPoolName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    kustoPoolName: string,
    options?: KustoPoolPrivateLinkResourcesListOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<KustoPoolPrivateLinkResources[]> {
    let result: KustoPoolPrivateLinkResourcesListResponse;
    result = await this._list(
      resourceGroupName,
      workspaceName,
      kustoPoolName,
      options
    );
    yield result.value || [];
  }

  private async *listPagingAll(
    resourceGroupName: string,
    workspaceName: string,
    kustoPoolName: string,
    options?: KustoPoolPrivateLinkResourcesListOptionalParams
  ): AsyncIterableIterator<KustoPoolPrivateLinkResources> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceName,
      kustoPoolName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all Kusto pool PrivateLinkResources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceName: string,
    kustoPoolName: string,
    options?: KustoPoolPrivateLinkResourcesListOptionalParams
  ): Promise<KustoPoolPrivateLinkResourcesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, kustoPoolName, options },
      listOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/kustoPools/{kustoPoolName}/privateLinkResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResources
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.kustoPoolName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
