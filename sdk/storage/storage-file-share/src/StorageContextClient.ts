// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { OperationArguments, OperationSpec } from "@azure/core-client";
import { StorageClient } from "./generated/src/index.js";

/**
 * @internal
 */
export class StorageContextClient extends StorageClient {
  async sendOperationRequest<T>(
    operationArguments: OperationArguments,
    operationSpec: OperationSpec,
  ): Promise<T> {
    const operationSpecToSend = { ...operationSpec };

    if (
      operationSpecToSend.path === "/{shareName}" ||
      operationSpecToSend.path === "/{shareName}/{directory}" ||
      operationSpecToSend.path === "/{shareName}/{directory}/{fileName}"
    ) {
      operationSpecToSend.path = "";
    }
    return super.sendOperationRequest(operationArguments, operationSpecToSend);
  }
}
