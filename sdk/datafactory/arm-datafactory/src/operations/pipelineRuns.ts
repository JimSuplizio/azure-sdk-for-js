/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PipelineRuns } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { DataFactoryManagementClient } from "../dataFactoryManagementClient.js";
import {
  RunFilterParameters,
  PipelineRunsQueryByFactoryOptionalParams,
  PipelineRunsQueryByFactoryResponse,
  PipelineRunsGetOptionalParams,
  PipelineRunsGetResponse,
  PipelineRunsCancelOptionalParams,
} from "../models/index.js";

/** Class containing PipelineRuns operations. */
export class PipelineRunsImpl implements PipelineRuns {
  private readonly client: DataFactoryManagementClient;

  /**
   * Initialize a new instance of the class PipelineRuns class.
   * @param client Reference to the service client
   */
  constructor(client: DataFactoryManagementClient) {
    this.client = client;
  }

  /**
   * Query pipeline runs in the factory based on input filter conditions.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param filterParameters Parameters to filter the pipeline run.
   * @param options The options parameters.
   */
  queryByFactory(
    resourceGroupName: string,
    factoryName: string,
    filterParameters: RunFilterParameters,
    options?: PipelineRunsQueryByFactoryOptionalParams,
  ): Promise<PipelineRunsQueryByFactoryResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, filterParameters, options },
      queryByFactoryOperationSpec,
    );
  }

  /**
   * Get a pipeline run by its run ID.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param runId The pipeline run identifier.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    runId: string,
    options?: PipelineRunsGetOptionalParams,
  ): Promise<PipelineRunsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, runId, options },
      getOperationSpec,
    );
  }

  /**
   * Cancel a pipeline run by its run ID.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param runId The pipeline run identifier.
   * @param options The options parameters.
   */
  cancel(
    resourceGroupName: string,
    factoryName: string,
    runId: string,
    options?: PipelineRunsCancelOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, runId, options },
      cancelOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const queryByFactoryOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/queryPipelineRuns",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PipelineRunsQueryResponse,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.filterParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelineruns/{runId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PipelineRun,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.runId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const cancelOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelineruns/{runId}/cancel",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.isRecursive],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.runId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
