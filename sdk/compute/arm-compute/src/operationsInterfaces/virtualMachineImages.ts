/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  VirtualMachineImage,
  Expand,
  VirtualMachineImagesListWithPropertiesOptionalParams,
  VirtualMachineImagesGetOptionalParams,
  VirtualMachineImagesGetResponse,
  VirtualMachineImagesListOptionalParams,
  VirtualMachineImagesListResponse,
  VirtualMachineImagesListOffersOptionalParams,
  VirtualMachineImagesListOffersResponse,
  VirtualMachineImagesListPublishersOptionalParams,
  VirtualMachineImagesListPublishersResponse,
  VirtualMachineImagesListSkusOptionalParams,
  VirtualMachineImagesListSkusResponse,
  VirtualMachineImagesListByEdgeZoneOptionalParams,
  VirtualMachineImagesListByEdgeZoneResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VirtualMachineImages. */
export interface VirtualMachineImages {
  /**
   * @param location The name of a supported Azure region.
   * @param publisherName A valid image publisher.
   * @param offer A valid image publisher offer.
   * @param skus A valid image SKU.
   * @param expand The expand expression to apply on the operation.
   * @param options The options parameters.
   */
  listWithProperties(
    location: string,
    publisherName: string,
    offer: string,
    skus: string,
    expand: Expand,
    options?: VirtualMachineImagesListWithPropertiesOptionalParams,
  ): PagedAsyncIterableIterator<VirtualMachineImage>;
  /**
   * Gets a virtual machine image.
   * @param location The name of a supported Azure region.
   * @param publisherName A valid image publisher.
   * @param offer A valid image publisher offer.
   * @param skus A valid image SKU.
   * @param version A valid image SKU version.
   * @param options The options parameters.
   */
  get(
    location: string,
    publisherName: string,
    offer: string,
    skus: string,
    version: string,
    options?: VirtualMachineImagesGetOptionalParams,
  ): Promise<VirtualMachineImagesGetResponse>;
  /**
   * Gets a list of all virtual machine image versions for the specified location, publisher, offer, and
   * SKU.
   * @param location The name of a supported Azure region.
   * @param publisherName A valid image publisher.
   * @param offer A valid image publisher offer.
   * @param skus A valid image SKU.
   * @param options The options parameters.
   */
  list(
    location: string,
    publisherName: string,
    offer: string,
    skus: string,
    options?: VirtualMachineImagesListOptionalParams,
  ): Promise<VirtualMachineImagesListResponse>;
  /**
   * Gets a list of virtual machine image offers for the specified location and publisher.
   * @param location The name of a supported Azure region.
   * @param publisherName A valid image publisher.
   * @param options The options parameters.
   */
  listOffers(
    location: string,
    publisherName: string,
    options?: VirtualMachineImagesListOffersOptionalParams,
  ): Promise<VirtualMachineImagesListOffersResponse>;
  /**
   * Gets a list of virtual machine image publishers for the specified Azure location.
   * @param location The name of a supported Azure region.
   * @param options The options parameters.
   */
  listPublishers(
    location: string,
    options?: VirtualMachineImagesListPublishersOptionalParams,
  ): Promise<VirtualMachineImagesListPublishersResponse>;
  /**
   * Gets a list of virtual machine image SKUs for the specified location, publisher, and offer.
   * @param location The name of a supported Azure region.
   * @param publisherName A valid image publisher.
   * @param offer A valid image publisher offer.
   * @param options The options parameters.
   */
  listSkus(
    location: string,
    publisherName: string,
    offer: string,
    options?: VirtualMachineImagesListSkusOptionalParams,
  ): Promise<VirtualMachineImagesListSkusResponse>;
  /**
   * Gets a list of all virtual machine image versions for the specified edge zone
   * @param location The name of a supported Azure region.
   * @param edgeZone The name of the edge zone.
   * @param options The options parameters.
   */
  listByEdgeZone(
    location: string,
    edgeZone: string,
    options?: VirtualMachineImagesListByEdgeZoneOptionalParams,
  ): Promise<VirtualMachineImagesListByEdgeZoneResponse>;
}
