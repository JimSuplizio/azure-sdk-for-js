/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { ExternalSecuritySolutions } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { SecurityCenter } from "../securityCenter.js";
import {
  ExternalSecuritySolution,
  ExternalSecuritySolutionsListNextOptionalParams,
  ExternalSecuritySolutionsListOptionalParams,
  ExternalSecuritySolutionsListResponse,
  ExternalSecuritySolutionsListByHomeRegionNextOptionalParams,
  ExternalSecuritySolutionsListByHomeRegionOptionalParams,
  ExternalSecuritySolutionsListByHomeRegionResponse,
  ExternalSecuritySolutionsGetOptionalParams,
  ExternalSecuritySolutionsGetResponse,
  ExternalSecuritySolutionsListNextResponse,
  ExternalSecuritySolutionsListByHomeRegionNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ExternalSecuritySolutions operations. */
export class ExternalSecuritySolutionsImpl
  implements ExternalSecuritySolutions
{
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class ExternalSecuritySolutions class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Gets a list of external security solutions for the subscription.
   * @param options The options parameters.
   */
  public list(
    options?: ExternalSecuritySolutionsListOptionalParams,
  ): PagedAsyncIterableIterator<ExternalSecuritySolution> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      },
    };
  }

  private async *listPagingPage(
    options?: ExternalSecuritySolutionsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ExternalSecuritySolution[]> {
    let result: ExternalSecuritySolutionsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: ExternalSecuritySolutionsListOptionalParams,
  ): AsyncIterableIterator<ExternalSecuritySolution> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of external Security Solutions for the subscription and location.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param options The options parameters.
   */
  public listByHomeRegion(
    ascLocation: string,
    options?: ExternalSecuritySolutionsListByHomeRegionOptionalParams,
  ): PagedAsyncIterableIterator<ExternalSecuritySolution> {
    const iter = this.listByHomeRegionPagingAll(ascLocation, options);
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
        return this.listByHomeRegionPagingPage(ascLocation, options, settings);
      },
    };
  }

  private async *listByHomeRegionPagingPage(
    ascLocation: string,
    options?: ExternalSecuritySolutionsListByHomeRegionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ExternalSecuritySolution[]> {
    let result: ExternalSecuritySolutionsListByHomeRegionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByHomeRegion(ascLocation, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByHomeRegionNext(
        ascLocation,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByHomeRegionPagingAll(
    ascLocation: string,
    options?: ExternalSecuritySolutionsListByHomeRegionOptionalParams,
  ): AsyncIterableIterator<ExternalSecuritySolution> {
    for await (const page of this.listByHomeRegionPagingPage(
      ascLocation,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of external security solutions for the subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: ExternalSecuritySolutionsListOptionalParams,
  ): Promise<ExternalSecuritySolutionsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Gets a list of external Security Solutions for the subscription and location.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param options The options parameters.
   */
  private _listByHomeRegion(
    ascLocation: string,
    options?: ExternalSecuritySolutionsListByHomeRegionOptionalParams,
  ): Promise<ExternalSecuritySolutionsListByHomeRegionResponse> {
    return this.client.sendOperationRequest(
      { ascLocation, options },
      listByHomeRegionOperationSpec,
    );
  }

  /**
   * Gets a specific external Security Solution.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param externalSecuritySolutionsName Name of an external security solution.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    ascLocation: string,
    externalSecuritySolutionsName: string,
    options?: ExternalSecuritySolutionsGetOptionalParams,
  ): Promise<ExternalSecuritySolutionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        ascLocation,
        externalSecuritySolutionsName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ExternalSecuritySolutionsListNextOptionalParams,
  ): Promise<ExternalSecuritySolutionsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec,
    );
  }

  /**
   * ListByHomeRegionNext
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param nextLink The nextLink from the previous successful call to the ListByHomeRegion method.
   * @param options The options parameters.
   */
  private _listByHomeRegionNext(
    ascLocation: string,
    nextLink: string,
    options?: ExternalSecuritySolutionsListByHomeRegionNextOptionalParams,
  ): Promise<ExternalSecuritySolutionsListByHomeRegionNextResponse> {
    return this.client.sendOperationRequest(
      { ascLocation, nextLink, options },
      listByHomeRegionNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Security/externalSecuritySolutions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExternalSecuritySolutionList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion20],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByHomeRegionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/ExternalSecuritySolutions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExternalSecuritySolutionList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion20],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.ascLocation,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/ExternalSecuritySolutions/{externalSecuritySolutionsName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExternalSecuritySolution,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion20],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.resourceGroupName,
    Parameters.externalSecuritySolutionsName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExternalSecuritySolutionList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByHomeRegionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExternalSecuritySolutionList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
