/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { RedisEnterpriseManagementClient } from "@azure/arm-redisenterprisecache";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists all the private endpoint connections associated with the RedisEnterprise cluster.
 *
 * @summary Lists all the private endpoint connections associated with the RedisEnterprise cluster.
 * x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/preview/2023-03-01-preview/examples/RedisEnterpriseListPrivateEndpointConnections.json
 */
async function redisEnterpriseListPrivateEndpointConnections() {
  const subscriptionId =
    process.env["REDISENTERPRISE_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["REDISENTERPRISE_RESOURCE_GROUP"] || "rg1";
  const clusterName = "cache1";
  const credential = new DefaultAzureCredential();
  const client = new RedisEnterpriseManagementClient(
    credential,
    subscriptionId
  );
  const resArray = new Array();
  for await (let item of client.privateEndpointConnections.list(
    resourceGroupName,
    clusterName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  redisEnterpriseListPrivateEndpointConnections();
}

main().catch(console.error);