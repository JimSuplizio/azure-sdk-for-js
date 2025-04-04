/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { AdvisorManagementClient } from "@azure/arm-advisor";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Retrieve Azure Advisor configurations.
 *
 * @summary Retrieve Azure Advisor configurations.
 * x-ms-original-file: specification/advisor/resource-manager/Microsoft.Advisor/stable/2020-01-01/examples/ListConfigurations.json
 */
async function getConfigurations() {
  const subscriptionId =
    process.env["ADVISOR_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroup = "resourceGroup";
  const credential = new DefaultAzureCredential();
  const client = new AdvisorManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.configurations.listByResourceGroup(
    resourceGroup
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  getConfigurations();
}

main().catch(console.error);
