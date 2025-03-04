/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { env, Recorder, RecorderStartOptions, isPlaybackMode } from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { RecoveryServicesBackupClient } from "../src/recoveryServicesBackupClient.js";
import { RecoveryServicesClient } from "@azure/arm-recoveryservices";
import { describe, it, assert, beforeEach, afterEach } from "vitest";

const replaceableVariables: Record<string, string> = {
  SUBSCRIPTION_ID: "88888888-8888-8888-8888-888888888888",
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables,
  removeCentralSanitizers: [
    "AZSDK3493", // .name in the body is not a secret and is listed below in the beforeEach section
    "AZSDK3430", // .id in the body is not a secret and is listed below in the beforeEach section
    "AZSDK3490", // .etag in the body is not a secret and is listed below in the beforeEach section
  ],
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("RecoveryServicesBackup test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: RecoveryServicesBackupClient;
  let rsclient: RecoveryServicesClient;
  let location: string;
  let resourceGroup: string;
  let resourcename: string;
  let vaultsname: string;

  beforeEach(async (ctx) => {
    recorder = new Recorder(ctx);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || "";
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new RecoveryServicesBackupClient(
      credential,
      subscriptionId,
      recorder.configureClientOptions({}),
    );
    rsclient = new RecoveryServicesClient(
      credential,
      subscriptionId,
      recorder.configureClientOptions({}),
    );
    location = "eastus";
    resourceGroup = "myjstest";
    resourcename = "resourcetest";
    vaultsname = "vaultstest";
  });

  afterEach(async () => {
    await recorder.stop();
  });

  it("dependence create test", async () => {
    const res = await rsclient.vaults.beginCreateOrUpdateAndWait(
      resourceGroup,
      vaultsname,
      {
        identity: { type: "SystemAssigned" },
        location,
        properties: { publicNetworkAccess: "Enabled" },
        sku: { name: "Standard" },
      },
      testPollingOptions,
    );
    console.log(res.name);
    assert.equal(res.name, vaultsname);
  });

  it("protectionPolicies create test", async () => {
    const res = await client.protectionPolicies.createOrUpdate(
      vaultsname,
      resourceGroup,
      resourcename,
      {
        properties: {
          backupManagementType: "AzureIaasVM",
          policyType: "V1",
          instantRPDetails: {},
          schedulePolicy: {
            schedulePolicyType: "SimpleSchedulePolicy",
            scheduleRunFrequency: "Daily",
            scheduleRunTimes: [new Date("2023-03-17T18:00:00Z")],
            scheduleWeeklyFrequency: 0,
          },
          retentionPolicy: {
            retentionPolicyType: "LongTermRetentionPolicy",
            dailySchedule: {
              retentionTimes: [new Date("2023-03-17T18:00:00Z")],
              retentionDuration: {
                count: 180,
                durationType: "Days",
              },
            },
          },
          tieringPolicy: {
            ArchivedRP: {
              tieringMode: "DoNotTier",
              duration: 0,
              durationType: "Invalid",
            },
          },
          instantRpRetentionRangeInDays: 2,
          timeZone: "UTC",
          protectedItemsCount: 0,
        },
      },
    );
    assert.equal(res.name, resourcename);
  });

  it("protectionPolicies get test", async () => {
    const res = await client.protectionPolicies.get(vaultsname, resourceGroup, resourcename);
    assert.equal(res.name, resourcename);
  });

  it("protectionPolicies delete test", async () => {
    await client.protectionPolicies.beginDeleteAndWait(
      vaultsname,
      resourceGroup,
      resourcename,
      testPollingOptions,
    );
  });

  it("dependence delete test", async () => {
    const resArray = new Array();
    await rsclient.vaults.delete(resourceGroup, vaultsname);
    for await (let item of rsclient.vaults.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });
});
