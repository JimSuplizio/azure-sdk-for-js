/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { PartnerDestinations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EventGridManagementClient } from "../eventGridManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  PartnerDestination,
  PartnerDestinationsListBySubscriptionNextOptionalParams,
  PartnerDestinationsListBySubscriptionOptionalParams,
  PartnerDestinationsListBySubscriptionResponse,
  PartnerDestinationsListByResourceGroupNextOptionalParams,
  PartnerDestinationsListByResourceGroupOptionalParams,
  PartnerDestinationsListByResourceGroupResponse,
  PartnerDestinationsGetOptionalParams,
  PartnerDestinationsGetResponse,
  PartnerDestinationsCreateOrUpdateOptionalParams,
  PartnerDestinationsCreateOrUpdateResponse,
  PartnerDestinationsDeleteOptionalParams,
  PartnerDestinationUpdateParameters,
  PartnerDestinationsUpdateOptionalParams,
  PartnerDestinationsUpdateResponse,
  PartnerDestinationsActivateOptionalParams,
  PartnerDestinationsActivateResponse,
  PartnerDestinationsListBySubscriptionNextResponse,
  PartnerDestinationsListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PartnerDestinations operations. */
export class PartnerDestinationsImpl implements PartnerDestinations {
  private readonly client: EventGridManagementClient;

  /**
   * Initialize a new instance of the class PartnerDestinations class.
   * @param client Reference to the service client
   */
  constructor(client: EventGridManagementClient) {
    this.client = client;
  }

  /**
   * List all the partner destinations under an Azure subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: PartnerDestinationsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<PartnerDestination> {
    const iter = this.listBySubscriptionPagingAll(options);
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
        return this.listBySubscriptionPagingPage(options, settings);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: PartnerDestinationsListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<PartnerDestination[]> {
    let result: PartnerDestinationsListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: PartnerDestinationsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<PartnerDestination> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List all the partner destinations under a resource group.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: PartnerDestinationsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<PartnerDestination> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: PartnerDestinationsListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<PartnerDestination[]> {
    let result: PartnerDestinationsListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: PartnerDestinationsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<PartnerDestination> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get properties of a partner destination.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerDestinationName Name of the partner destination.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    partnerDestinationName: string,
    options?: PartnerDestinationsGetOptionalParams
  ): Promise<PartnerDestinationsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, partnerDestinationName, options },
      getOperationSpec
    );
  }

  /**
   * Asynchronously creates a new partner destination with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerDestinationName Name of the partner destination.
   * @param partnerDestination Partner destination create information.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    partnerDestinationName: string,
    partnerDestination: PartnerDestination,
    options?: PartnerDestinationsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<PartnerDestinationsCreateOrUpdateResponse>,
      PartnerDestinationsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<PartnerDestinationsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        partnerDestinationName,
        partnerDestination,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      PartnerDestinationsCreateOrUpdateResponse,
      OperationState<PartnerDestinationsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Asynchronously creates a new partner destination with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerDestinationName Name of the partner destination.
   * @param partnerDestination Partner destination create information.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    partnerDestinationName: string,
    partnerDestination: PartnerDestination,
    options?: PartnerDestinationsCreateOrUpdateOptionalParams
  ): Promise<PartnerDestinationsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      partnerDestinationName,
      partnerDestination,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete existing partner destination.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerDestinationName Name of the partner destination.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    partnerDestinationName: string,
    options?: PartnerDestinationsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, partnerDestinationName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete existing partner destination.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerDestinationName Name of the partner destination.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    partnerDestinationName: string,
    options?: PartnerDestinationsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      partnerDestinationName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Asynchronously updates a partner destination with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerDestinationName Name of the partner destination.
   * @param partnerDestinationUpdateParameters Partner destination update information.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    partnerDestinationName: string,
    partnerDestinationUpdateParameters: PartnerDestinationUpdateParameters,
    options?: PartnerDestinationsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<PartnerDestinationsUpdateResponse>,
      PartnerDestinationsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<PartnerDestinationsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        partnerDestinationName,
        partnerDestinationUpdateParameters,
        options
      },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      PartnerDestinationsUpdateResponse,
      OperationState<PartnerDestinationsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Asynchronously updates a partner destination with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerDestinationName Name of the partner destination.
   * @param partnerDestinationUpdateParameters Partner destination update information.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    partnerDestinationName: string,
    partnerDestinationUpdateParameters: PartnerDestinationUpdateParameters,
    options?: PartnerDestinationsUpdateOptionalParams
  ): Promise<PartnerDestinationsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      partnerDestinationName,
      partnerDestinationUpdateParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List all the partner destinations under an Azure subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: PartnerDestinationsListBySubscriptionOptionalParams
  ): Promise<PartnerDestinationsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * List all the partner destinations under a resource group.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: PartnerDestinationsListByResourceGroupOptionalParams
  ): Promise<PartnerDestinationsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Activate a newly created partner destination.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerDestinationName Name of the partner destination.
   * @param options The options parameters.
   */
  activate(
    resourceGroupName: string,
    partnerDestinationName: string,
    options?: PartnerDestinationsActivateOptionalParams
  ): Promise<PartnerDestinationsActivateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, partnerDestinationName, options },
      activateOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: PartnerDestinationsListBySubscriptionNextOptionalParams
  ): Promise<PartnerDestinationsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: PartnerDestinationsListByResourceGroupNextOptionalParams
  ): Promise<PartnerDestinationsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerDestinations/{partnerDestinationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PartnerDestination
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.partnerDestinationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerDestinations/{partnerDestinationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PartnerDestination
    },
    201: {
      bodyMapper: Mappers.PartnerDestination
    },
    202: {
      bodyMapper: Mappers.PartnerDestination
    },
    204: {
      bodyMapper: Mappers.PartnerDestination
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.partnerDestination,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.partnerDestinationName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerDestinations/{partnerDestinationName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.partnerDestinationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerDestinations/{partnerDestinationName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.PartnerDestination
    },
    201: {
      bodyMapper: Mappers.PartnerDestination
    },
    202: {
      bodyMapper: Mappers.PartnerDestination
    },
    204: {
      bodyMapper: Mappers.PartnerDestination
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.partnerDestinationUpdateParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.partnerDestinationName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/partnerDestinations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PartnerDestinationsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerDestinations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PartnerDestinationsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const activateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerDestinations/{partnerDestinationName}/activate",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PartnerDestination
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.partnerDestinationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PartnerDestinationsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PartnerDestinationsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};