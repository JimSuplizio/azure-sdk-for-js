/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { QnAMakerEndpointKeys } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureBotService } from "../azureBotService";
import {
  QnAMakerEndpointKeysRequestBody,
  QnAMakerEndpointKeysGetOptionalParams,
  QnAMakerEndpointKeysGetResponse
} from "../models";

/** Class containing QnAMakerEndpointKeys operations. */
export class QnAMakerEndpointKeysImpl implements QnAMakerEndpointKeys {
  private readonly client: AzureBotService;

  /**
   * Initialize a new instance of the class QnAMakerEndpointKeys class.
   * @param client Reference to the service client
   */
  constructor(client: AzureBotService) {
    this.client = client;
  }

  /**
   * Lists the QnA Maker endpoint keys
   * @param parameters The request body parameters to provide for the check name availability request
   * @param options The options parameters.
   */
  get(
    parameters: QnAMakerEndpointKeysRequestBody,
    options?: QnAMakerEndpointKeysGetOptionalParams
  ): Promise<QnAMakerEndpointKeysGetResponse> {
    return this.client.sendOperationRequest(
      { parameters, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.BotService/listQnAMakerEndpointKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.QnAMakerEndpointKeysResponse
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.parameters7,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};