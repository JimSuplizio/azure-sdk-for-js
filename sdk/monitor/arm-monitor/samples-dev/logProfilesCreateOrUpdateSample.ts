/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { LogProfileResource } from "@azure/arm-monitor";
import { MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or update a log profile in Azure Monitoring REST API.
 *
 * @summary Create or update a log profile in Azure Monitoring REST API.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2016-03-01/examples/createOrUpdateLogProfile.json
 */
async function createOrUpdateALogProfile(): Promise<void> {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] || "df602c9c-7aa0-407d-a6fb-eb20c8bd1192";
  const logProfileName = "Rac46PostSwapRG";
  const parameters: LogProfileResource = {
    categories: ["Write", "Delete", "Action"],
    location: "",
    locations: ["global"],
    retentionPolicy: { days: 3, enabled: true },
    serviceBusRuleId: "",
    storageAccountId:
      "/subscriptions/df602c9c-7aa0-407d-a6fb-eb20c8bd1192/resourceGroups/JohnKemTest/providers/Microsoft.Storage/storageAccounts/johnkemtest8162",
    tags: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.logProfiles.createOrUpdate(logProfileName, parameters);
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateALogProfile();
}

main().catch(console.error);
