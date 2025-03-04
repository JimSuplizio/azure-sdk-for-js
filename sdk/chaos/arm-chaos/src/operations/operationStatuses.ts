/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { OperationStatuses } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ChaosManagementClient } from "../chaosManagementClient.js";
import {
  OperationStatusesGetOptionalParams,
  OperationStatusesGetResponse,
} from "../models/index.js";

/** Class containing OperationStatuses operations. */
export class OperationStatusesImpl implements OperationStatuses {
  private readonly client: ChaosManagementClient;

  /**
   * Initialize a new instance of the class OperationStatuses class.
   * @param client Reference to the service client
   */
  constructor(client: ChaosManagementClient) {
    this.client = client;
  }

  /**
   * Get the status of a long running azure asynchronous operation.
   * @param location The name of the Azure region.
   * @param asyncOperationId The operation Id.
   * @param options The options parameters.
   */
  get(
    location: string,
    asyncOperationId: string,
    options?: OperationStatusesGetOptionalParams,
  ): Promise<OperationStatusesGetResponse> {
    return this.client.sendOperationRequest(
      { location, asyncOperationId, options },
      getOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Chaos/locations/{location}/operationStatuses/{asyncOperationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.asyncOperationId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
