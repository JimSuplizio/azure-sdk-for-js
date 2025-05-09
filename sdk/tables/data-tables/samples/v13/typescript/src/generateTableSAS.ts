// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to create an Account SAS token. An account SAS token
 * provides access to the whole Tables Service account, given the permissions selected,
 * by default the only permission granted is list
 *
 * @summary generate a Table Account SAS token
 */

import type { AccountSasPermissions, TableSasPermissions } from "@azure/data-tables";
import {
  generateAccountSas,
  generateTableSas,
  TableClient,
  TableServiceClient,
} from "@azure/data-tables";
import { AzureNamedKeyCredential, AzureSASCredential } from "@azure/core-auth";
import "dotenv/config";

const tablesUrl = process.env["TABLES_URL"] || "";
const accountKey = process.env["ACCOUNT_KEY"] || "";
const accountName = process.env["ACCOUNT_NAME"] || "";

async function generateTableSasSample(): Promise<void> {
  console.log("== Generate Table Account SAS Sample ==");

  // We need a NamedKeyCredential to generate the SAS token
  const cred = new AzureNamedKeyCredential(accountName, accountKey);

  // We can optionally set the permissions we want on the SAS token
  // If non is specified, only list is granted
  const permissions: AccountSasPermissions = {
    // Grants permission to list tables
    list: true,
    // Grants permission to create tables
    write: true,
    // Grants permission to create entities
    add: true,
    // Grants permission to query entities
    query: true,
    // Grants permission to delete tables and entities
    delete: true,
  };

  // Generate an account SAS with the NamedKeyCredential and the permissions set previously
  // by default, expiration is set an hour after the SAS is created. Expiration can be
  // set explicitly by passing expiresOn with the desired expiration Date
  const accountSas = generateAccountSas(cred, {
    permissions,
  });

  const tableService = new TableServiceClient(tablesUrl, new AzureSASCredential(accountSas));

  // Create a new table
  const tableName = "fooTable";
  await tableService.createTable(tableName);

  // List all the tables in the service account
  const tables = tableService.listTables();
  for await (const table of tables) {
    console.log(table);
  }

  // We are going to create a new SAS token scoped down to the specific table we just created.
  // If no permissions are provided, by default the token would have only query permission
  const tablePermissions: TableSasPermissions = {
    // Allows adding entities
    add: true,
    // Allows querying entities
    query: true,
    // Allows deleting entities
    delete: true,
    // Allows updating entities
    update: true,
  };

  // Create the table SAS token
  const anHourFromNow = Date.now() + 60 * 60 * 1000;
  const tableSas = generateTableSas(tableName, cred, {
    expiresOn: new Date(anHourFromNow),
    permissions: tablePermissions,
  });

  // Create a new client for the table we just created. Alternatively the Table Account SAS token could be used here as well
  // however using Table level SAS tokens offers a more granular access control
  const table = new TableClient(tablesUrl, tableName, new AzureSASCredential(tableSas));

  // Create an entity in the table
  await table.createEntity({
    partitionKey: "test",
    rowKey: "1",
    foo: "bar",
  });

  // List all the entities in the table
  const entities = table.listEntities();
  for await (const entity of entities) {
    console.log(entity);
  }

  // Delete the entity we just created
  await table.deleteEntity("test", "1");

  // Delete the Table
  await tableService.deleteTable(tableName);
}

export async function main(): Promise<void> {
  await generateTableSasSample();
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
