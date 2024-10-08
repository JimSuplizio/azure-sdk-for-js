// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RunningOperation, OperationResponse } from "../../src/index.js";
import { AbortSignalLike } from "@azure/abort-controller";
import { PipelineRequest } from "@azure/core-rest-pipeline";

type SendOperationFn<T> = (request: PipelineRequest) => Promise<OperationResponse<T>>;

export function createCoreRestPipelineLro<T>(inputs: {
  sendOperationFn: SendOperationFn<T>;
  request: PipelineRequest;
}): RunningOperation<T> {
  const { request, sendOperationFn } = inputs;
  return {
    sendInitialRequest: () => sendOperationFn(request),
    sendPollRequest: (url: string, options?: { abortSignal?: AbortSignalLike }) =>
      sendOperationFn({
        ...request,
        method: "GET",
        url,
        abortSignal: options?.abortSignal,
      }),
  };
}
