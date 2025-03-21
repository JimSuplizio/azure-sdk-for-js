/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  StorageAccountCreateParameters,
  StorageManagementClient
} from "@azure/arm-storage-profile-2020-09-01-hybrid";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 *
 * @summary Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2019-06-01/examples/StorageAccountCreate.json
 */
async function storageAccountCreate(): Promise<void> {
  const subscriptionId =
    process.env["STORAGE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["STORAGE_RESOURCE_GROUP"] || "res9101";
  const accountName = "sto4445";
  const parameters: StorageAccountCreateParameters = {
    allowBlobPublicAccess: false,
    allowSharedKeyAccess: true,
    encryption: {
      keySource: "Microsoft.Storage",
      requireInfrastructureEncryption: false,
      services: {
        blob: { enabled: true, keyType: "Account" },
        file: { enabled: true, keyType: "Account" }
      }
    },
    isHnsEnabled: true,
    kind: "Storage",
    location: "eastus",
    minimumTlsVersion: "TLS1_2",
    routingPreference: {
      publishInternetEndpoints: true,
      publishMicrosoftEndpoints: true,
      routingChoice: "MicrosoftRouting"
    },
    sku: { name: "Standard_GRS" },
    tags: { key1: "value1", key2: "value2" }
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.storageAccounts.beginCreateAndWait(
    resourceGroupName,
    accountName,
    parameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  storageAccountCreate();
}

main().catch(console.error);
