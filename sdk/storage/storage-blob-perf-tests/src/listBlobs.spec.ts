// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { randomUUID } from "node:crypto";
import { PerfOptionDictionary, executeParallel } from "@azure-tools/test-perf";
import { StorageBlobTest } from "./storageTest.spec.js";

interface StorageBlobListTestOptions {
  count: number;
}

export class StorageBlobListTest extends StorageBlobTest<StorageBlobListTestOptions> {
  public options: PerfOptionDictionary<StorageBlobListTestOptions> = {
    count: {
      required: true,
      description: "Number of blobs to be listed",
      longName: "count",
      defaultValue: 10,
    },
  };

  public async globalSetup() {
    await super.globalSetup();
    await executeParallel(
      async (_count: number, _parallelIndex: number) => {
        await this.containerClient.uploadBlockBlob(randomUUID(), Buffer.alloc(0), 0);
      },
      this.parsedOptions.count.value!,
      32,
    );
  }

  async run(): Promise<void> {
    for await (const segmentResponse of this.containerClient.listBlobsFlat().byPage()) {
      // eslint-disable-next-line no-empty
      for (const _ of segmentResponse.segment.blobItems) {
      }
    }
  }
}
