/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { PaloAltoNetworksCloudngfw } = require("@azure/arm-paloaltonetworksngfw");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create a PrefixListGlobalRulestackResource
 *
 * @summary Create a PrefixListGlobalRulestackResource
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/preview/2022-08-29-preview/examples/PrefixListGlobalRulestack_CreateOrUpdate_MaximumSet_Gen.json
 */
async function prefixListGlobalRulestackCreateOrUpdateMaximumSetGen() {
  const subscriptionId =
    process.env["PALOALTONETWORKSNGFW_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const globalRulestackName = "praval";
  const name = "armid1";
  const resource = {
    description: "string",
    auditComment: "comment",
    etag: "2bf4a339-294d-4c25-b0b2-ef649e9f5c27",
    prefixList: ["1.0.0.0/24"],
    provisioningState: "Accepted",
  };
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential, subscriptionId);
  const result = await client.prefixListGlobalRulestack.beginCreateOrUpdateAndWait(
    globalRulestackName,
    name,
    resource
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create a PrefixListGlobalRulestackResource
 *
 * @summary Create a PrefixListGlobalRulestackResource
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/preview/2022-08-29-preview/examples/PrefixListGlobalRulestack_CreateOrUpdate_MinimumSet_Gen.json
 */
async function prefixListGlobalRulestackCreateOrUpdateMinimumSetGen() {
  const subscriptionId =
    process.env["PALOALTONETWORKSNGFW_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const globalRulestackName = "praval";
  const name = "armid1";
  const resource = {
    prefixList: ["1.0.0.0/24"],
  };
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential, subscriptionId);
  const result = await client.prefixListGlobalRulestack.beginCreateOrUpdateAndWait(
    globalRulestackName,
    name,
    resource
  );
  console.log(result);
}

async function main() {
  prefixListGlobalRulestackCreateOrUpdateMaximumSetGen();
  prefixListGlobalRulestackCreateOrUpdateMinimumSetGen();
}

main().catch(console.error);