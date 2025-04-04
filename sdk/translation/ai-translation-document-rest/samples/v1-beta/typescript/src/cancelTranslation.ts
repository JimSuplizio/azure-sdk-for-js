// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import "dotenv/config";
import createClient from "../src/documentTranslationClient.js";
import {
  ONE_TEST_DOCUMENTS,
  createSourceContainer,
  createTargetContainer,
} from "../test/public/utils/samplesHelper.js";
import {
  createSourceInput,
  createTargetInput,
  createBatchRequest,
  getTranslationOperationID,
} from "../test/public/utils/testHelper.js";
import { isUnexpected } from "../src/isUnexpected.js";
const endpoint =
  process.env["ENDPOINT"] ||
  "https://<translator-instance>-doctranslation.cognitiveservices.azure.com";
const apiKey = process.env["DOCUMENT_TRANSLATION_API_KEY"] || "<API_Key>";
const credentials = { key: apiKey ?? "" };

export async function main(): Promise<void> {
  console.log("== Cancel Translation ==");
  const client = createClient(endpoint, credentials);

  const sourceUrl = await createSourceContainer(ONE_TEST_DOCUMENTS);
  const sourceInput = createSourceInput(sourceUrl);
  const targetUrl = await createTargetContainer();
  const targetInput = createTargetInput(targetUrl, "fr");
  const batchRequest = createBatchRequest(sourceInput, [targetInput]);

  //Start translation
  const batchRequests = { inputs: [batchRequest] };
  const poller = await client.path("/document/batches").post({
    body: batchRequests,
  });
  const id = getTranslationOperationID(poller.headers["operation-location"]);

  //Cancel translation
  await client.path("/document/batches/{id}", id).delete();

  //get translation status and verify the job is cancelled, cancelling or notStarted
  const response = await client.path("/document/batches/{id}", id).get();
  if (isUnexpected(response)) {
    throw response.body;
  }
  console.log("The status after cancelling the batch operation is:" + response.body.status);

  main().catch((err) => {
    console.error(err);
  });
}
