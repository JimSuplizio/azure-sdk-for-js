/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ExtensionValue,
  ExtensionMetadataListOptionalParams,
  ExtensionMetadataGetOptionalParams,
  ExtensionMetadataGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ExtensionMetadata. */
export interface ExtensionMetadata {
  /**
   * Gets all Extension versions based on location, publisher, extensionType
   * @param location The location of the Extension being received.
   * @param publisher The publisher of the Extension being received.
   * @param extensionType The extensionType of the Extension being received.
   * @param options The options parameters.
   */
  list(
    location: string,
    publisher: string,
    extensionType: string,
    options?: ExtensionMetadataListOptionalParams,
  ): PagedAsyncIterableIterator<ExtensionValue>;
  /**
   * Gets an Extension Metadata based on location, publisher, extensionType and version
   * @param location The location of the Extension being received.
   * @param publisher The publisher of the Extension being received.
   * @param extensionType The extensionType of the Extension being received.
   * @param version The version of the Extension being received.
   * @param options The options parameters.
   */
  get(
    location: string,
    publisher: string,
    extensionType: string,
    version: string,
    options?: ExtensionMetadataGetOptionalParams,
  ): Promise<ExtensionMetadataGetResponse>;
}
