// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { KubernetesRuntimeClient } from "@azure/arm-containerorchestratorruntime";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete a ServiceResource
 *
 * @summary delete a ServiceResource
 * x-ms-original-file: 2024-03-01/Services_Delete.json
 */
async function servicesDelete(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = new KubernetesRuntimeClient(credential);
  await client.services.delete(
    "subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/example/providers/Microsoft.Kubernetes/connectedClusters/cluster1",
    "storageclass",
  );
}

async function main(): Promise<void> {
  servicesDelete();
}

main().catch(console.error);
