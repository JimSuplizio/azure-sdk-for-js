/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PolicyClient } from "@azure/arm-policy";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to This operation retrieves the data policy manifest with the given policy mode.
 *
 * @summary This operation retrieves the data policy manifest with the given policy mode.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Authorization/stable/2020-09-01/examples/getDataPolicyManifest.json
 */
async function retrieveADataPolicyManifestByPolicyMode(): Promise<void> {
  const policyMode = "Microsoft.KeyVault.Data";
  const credential = new DefaultAzureCredential();
  const client = new PolicyClient(credential);
  const result = await client.dataPolicyManifests.getByPolicyMode(policyMode);
  console.log(result);
}

async function main(): Promise<void> {
  await retrieveADataPolicyManifestByPolicyMode();
}

main().catch(console.error);
