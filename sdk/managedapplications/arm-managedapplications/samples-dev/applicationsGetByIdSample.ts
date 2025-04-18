/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { ApplicationClient } from "@azure/arm-managedapplications";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets the managed application.
 *
 * @summary Gets the managed application.
 * x-ms-original-file: specification/solutions/resource-manager/Microsoft.Solutions/stable/2021-07-01/examples/getApplicationById.json
 */
async function getsTheManagedApplication(): Promise<void> {
  const applicationId =
    "subscriptions/subid/resourceGroups/rg/providers/Microsoft.Solutions/applications/myManagedApplication";
  const credential = new DefaultAzureCredential();
  const client = new ApplicationClient(credential);
  const result = await client.applications.getById(applicationId);
  console.log(result);
}

async function main(): Promise<void> {
  await getsTheManagedApplication();
}

main().catch(console.error);
