/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** OperationList represents an RP operation list. */
export interface OperationList {
  /** List of operations supported by the resource provider. */
  value?: Operation[];
  /** The link used to get the next page of operations. */
  nextLink?: string;
}

/** Operation represents an RP operation. */
export interface Operation {
  /** Operation name: {provider}/{resource}/{operation}. */
  name?: string;
  /** The object that describes the operation. */
  display?: Display;
  /** Sources of requests to this operation.  Comma separated list with valid values user or system, e.g. "user,system". */
  origin?: string;
}

/** Display represents the display details of an operation. */
export interface Display {
  /** Friendly name of the resource provider. */
  provider?: string;
  /** Resource type on which the operation is performed. */
  resource?: string;
  /** Operation type: read, write, delete, listKeys/action, etc. */
  operation?: string;
  /** Friendly name of the operation. */
  description?: string;
}

/** CloudError represents a cloud error. */
export interface CloudError {
  /** An error response from the service. */
  error?: CloudErrorBody;
}

/** CloudErrorBody represents the body of a cloud error. */
export interface CloudErrorBody {
  /** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
  code?: string;
  /** A message describing the error, intended to be suitable for display in a user interface. */
  message?: string;
  /** The target of the particular error. For example, the name of the property in error. */
  target?: string;
  /** A list of additional details about the error. */
  details?: CloudErrorBody[];
}

/** OpenShiftVersionList represents a List of available versions. */
export interface OpenShiftVersionList {
  /** The List of available versions. */
  value?: OpenShiftVersion[];
  /** Next Link to next operation. */
  nextLink?: string;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /**
   * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * Azure Resource Manager metadata containing createdBy and modifiedBy information.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** OpenShiftClusterList represents a list of OpenShift clusters. */
export interface OpenShiftClusterList {
  /** The list of OpenShift clusters. */
  value?: OpenShiftCluster[];
  /** The link used to get the next page of operations. */
  nextLink?: string;
}

/** ClusterProfile represents a cluster profile. */
export interface ClusterProfile {
  /** The pull secret for the cluster. */
  pullSecret?: string;
  /** The domain for the cluster. */
  domain?: string;
  /** The version of the cluster. */
  version?: string;
  /** The ID of the cluster resource group. */
  resourceGroupId?: string;
  /** If FIPS validated crypto modules are used */
  fipsValidatedModules?: FipsValidatedModules;
}

/** ConsoleProfile represents a console profile. */
export interface ConsoleProfile {
  /**
   * The URL to access the cluster console.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly url?: string;
}

/** ServicePrincipalProfile represents a service principal profile. */
export interface ServicePrincipalProfile {
  /** The client ID used for the cluster. */
  clientId?: string;
  /** The client secret used for the cluster. */
  clientSecret?: string;
}

/** NetworkProfile represents a network profile. */
export interface NetworkProfile {
  /** The CIDR used for OpenShift/Kubernetes Pods. */
  podCidr?: string;
  /** The CIDR used for OpenShift/Kubernetes Services. */
  serviceCidr?: string;
  /** The OutboundType used for egress traffic. */
  outboundType?: OutboundType;
  /** The cluster load balancer profile. */
  loadBalancerProfile?: LoadBalancerProfile;
  /** Specifies whether subnets are pre-attached with an NSG */
  preconfiguredNSG?: PreconfiguredNSG;
}

/** LoadBalancerProfile represents the profile of the cluster public load balancer. */
export interface LoadBalancerProfile {
  /** The desired managed outbound IPs for the cluster public load balancer. */
  managedOutboundIps?: ManagedOutboundIPs;
  /**
   * The list of effective outbound IP addresses of the public load balancer.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly effectiveOutboundIps?: EffectiveOutboundIP[];
}

/** ManagedOutboundIPs represents the desired managed outbound IPs for the cluster public load balancer. */
export interface ManagedOutboundIPs {
  /** Count represents the desired number of IPv4 outbound IPs created and managed by Azure for the cluster public load balancer.  Allowed values are in the range of 1 - 20.  The default value is 1. */
  count?: number;
}

/** EffectiveOutboundIP represents an effective outbound IP resource of the cluster public load balancer. */
export interface EffectiveOutboundIP {
  /** The fully qualified Azure resource id of an IP address resource. */
  id?: string;
}

/** MasterProfile represents a master profile. */
export interface MasterProfile {
  /** The size of the master VMs. */
  vmSize?: string;
  /** The Azure resource ID of the master subnet. */
  subnetId?: string;
  /** Whether master virtual machines are encrypted at host. */
  encryptionAtHost?: EncryptionAtHost;
  /** The resource ID of an associated DiskEncryptionSet, if applicable. */
  diskEncryptionSetId?: string;
}

/** WorkerProfile represents a worker profile. */
export interface WorkerProfile {
  /** The worker profile name. */
  name?: string;
  /** The size of the worker VMs. */
  vmSize?: string;
  /** The disk size of the worker VMs. */
  diskSizeGB?: number;
  /** The Azure resource ID of the worker subnet. */
  subnetId?: string;
  /** The number of worker VMs. */
  count?: number;
  /** Whether master virtual machines are encrypted at host. */
  encryptionAtHost?: EncryptionAtHost;
  /** The resource ID of an associated DiskEncryptionSet, if applicable. */
  diskEncryptionSetId?: string;
}

/** APIServerProfile represents an API server profile. */
export interface APIServerProfile {
  /** API server visibility. */
  visibility?: Visibility;
  /**
   * The URL to access the cluster API server.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly url?: string;
  /**
   * The IP of the cluster API server.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly ip?: string;
}

/** IngressProfile represents an ingress profile. */
export interface IngressProfile {
  /** The ingress profile name. */
  name?: string;
  /** Ingress visibility. */
  visibility?: Visibility;
  /**
   * The IP of the ingress.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly ip?: string;
}

/** MachinePoolList represents a list of MachinePools */
export interface MachinePoolList {
  /** The list of Machine Pools. */
  value?: MachinePool[];
  /** The link used to get the next page of operations. */
  nextLink?: string;
}

/** SecretList represents a list of Secrets */
export interface SecretList {
  /** The list of secrets. */
  value?: Secret[];
  /** The link used to get the next page of operations. */
  nextLink?: string;
}

/** SyncSetList represents a list of SyncSets */
export interface SyncIdentityProviderList {
  /** The list of sync identity providers */
  value?: SyncIdentityProvider[];
  /** The link used to get the next page of operations. */
  nextLink?: string;
}

/** SyncSetList represents a list of SyncSets */
export interface SyncSetList {
  /** The list of syncsets. */
  value?: SyncSet[];
  /** The link used to get the next page of operations. */
  nextLink?: string;
}

/** OpenShiftCluster represents an Azure Red Hat OpenShift cluster. */
export interface OpenShiftClusterUpdate {
  /** The resource tags. */
  tags?: { [propertyName: string]: string };
  /**
   * The system meta data relating to this resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** The cluster provisioning state. */
  provisioningState?: ProvisioningState;
  /** The cluster profile. */
  clusterProfile?: ClusterProfile;
  /** The console profile. */
  consoleProfile?: ConsoleProfile;
  /** The cluster service principal profile. */
  servicePrincipalProfile?: ServicePrincipalProfile;
  /** The cluster network profile. */
  networkProfile?: NetworkProfile;
  /** The cluster master profile. */
  masterProfile?: MasterProfile;
  /** The cluster worker profiles. */
  workerProfiles?: WorkerProfile[];
  /**
   * The cluster worker profiles status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly workerProfilesStatus?: WorkerProfile[];
  /** The cluster API server profile. */
  apiserverProfile?: APIServerProfile;
  /** The cluster ingress profiles. */
  ingressProfiles?: IngressProfile[];
}

/** OpenShiftClusterAdminKubeconfig represents an OpenShift cluster's admin kubeconfig. */
export interface OpenShiftClusterAdminKubeconfig {
  /** The base64-encoded kubeconfig file. */
  kubeconfig?: string;
}

/** OpenShiftClusterCredentials represents an OpenShift cluster's credentials. */
export interface OpenShiftClusterCredentials {
  /** The username for the kubeadmin user. */
  kubeadminUsername?: string;
  /** The password for the kubeadmin user. */
  kubeadminPassword?: string;
}

/** MachinePool represents a MachinePool */
export interface MachinePoolUpdate {
  /**
   * The system meta data relating to this resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  resources?: string;
}

/** Secret represents a secret. */
export interface SecretUpdate {
  /**
   * The system meta data relating to this resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** The Secrets Resources. */
  secretResources?: string;
}

/** SyncIdentityProvider represents a SyncIdentityProvider */
export interface SyncIdentityProviderUpdate {
  /**
   * The system meta data relating to this resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  resources?: string;
}

/** SyncSet represents a SyncSet for an Azure Red Hat OpenShift Cluster. */
export interface SyncSetUpdate {
  /**
   * The system meta data relating to this resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** Resources represents the SyncSets configuration. */
  resources?: string;
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The geo-location where the resource lives */
  location: string;
}

/** OpenShiftVersion represents an OpenShift version that can be installed. */
export interface OpenShiftVersion extends ProxyResource {
  /** Version represents the version to create the cluster at. */
  version?: string;
}

/** MachinePool represents a MachinePool */
export interface MachinePool extends ProxyResource {
  resources?: string;
}

/** Secret represents a secret. */
export interface Secret extends ProxyResource {
  /** The Secrets Resources. */
  secretResources?: string;
}

/** SyncIdentityProvider represents a SyncIdentityProvider */
export interface SyncIdentityProvider extends ProxyResource {
  resources?: string;
}

/** SyncSet represents a SyncSet for an Azure Red Hat OpenShift Cluster. */
export interface SyncSet extends ProxyResource {
  /** Resources represents the SyncSets configuration. */
  resources?: string;
}

/** OpenShiftCluster represents an Azure Red Hat OpenShift cluster. */
export interface OpenShiftCluster extends TrackedResource {
  /** The cluster provisioning state. */
  provisioningState?: ProvisioningState;
  /** The cluster profile. */
  clusterProfile?: ClusterProfile;
  /** The console profile. */
  consoleProfile?: ConsoleProfile;
  /** The cluster service principal profile. */
  servicePrincipalProfile?: ServicePrincipalProfile;
  /** The cluster network profile. */
  networkProfile?: NetworkProfile;
  /** The cluster master profile. */
  masterProfile?: MasterProfile;
  /** The cluster worker profiles. */
  workerProfiles?: WorkerProfile[];
  /**
   * The cluster worker profiles status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly workerProfilesStatus?: WorkerProfile[];
  /** The cluster API server profile. */
  apiserverProfile?: APIServerProfile;
  /** The cluster ingress profiles. */
  ingressProfiles?: IngressProfile[];
}

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key",
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  /** AdminUpdating */
  AdminUpdating = "AdminUpdating",
  /** Canceled */
  Canceled = "Canceled",
  /** Creating */
  Creating = "Creating",
  /** Deleting */
  Deleting = "Deleting",
  /** Failed */
  Failed = "Failed",
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Updating */
  Updating = "Updating",
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AdminUpdating** \
 * **Canceled** \
 * **Creating** \
 * **Deleting** \
 * **Failed** \
 * **Succeeded** \
 * **Updating**
 */
export type ProvisioningState = string;

/** Known values of {@link FipsValidatedModules} that the service accepts. */
export enum KnownFipsValidatedModules {
  /** Disabled */
  Disabled = "Disabled",
  /** Enabled */
  Enabled = "Enabled",
}

/**
 * Defines values for FipsValidatedModules. \
 * {@link KnownFipsValidatedModules} can be used interchangeably with FipsValidatedModules,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Disabled** \
 * **Enabled**
 */
export type FipsValidatedModules = string;

/** Known values of {@link OutboundType} that the service accepts. */
export enum KnownOutboundType {
  /** Loadbalancer */
  Loadbalancer = "Loadbalancer",
  /** UserDefinedRouting */
  UserDefinedRouting = "UserDefinedRouting",
}

/**
 * Defines values for OutboundType. \
 * {@link KnownOutboundType} can be used interchangeably with OutboundType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Loadbalancer** \
 * **UserDefinedRouting**
 */
export type OutboundType = string;

/** Known values of {@link PreconfiguredNSG} that the service accepts. */
export enum KnownPreconfiguredNSG {
  /** Disabled */
  Disabled = "Disabled",
  /** Enabled */
  Enabled = "Enabled",
}

/**
 * Defines values for PreconfiguredNSG. \
 * {@link KnownPreconfiguredNSG} can be used interchangeably with PreconfiguredNSG,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Disabled** \
 * **Enabled**
 */
export type PreconfiguredNSG = string;

/** Known values of {@link EncryptionAtHost} that the service accepts. */
export enum KnownEncryptionAtHost {
  /** Disabled */
  Disabled = "Disabled",
  /** Enabled */
  Enabled = "Enabled",
}

/**
 * Defines values for EncryptionAtHost. \
 * {@link KnownEncryptionAtHost} can be used interchangeably with EncryptionAtHost,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Disabled** \
 * **Enabled**
 */
export type EncryptionAtHost = string;

/** Known values of {@link Visibility} that the service accepts. */
export enum KnownVisibility {
  /** Private */
  Private = "Private",
  /** Public */
  Public = "Public",
}

/**
 * Defines values for Visibility. \
 * {@link KnownVisibility} can be used interchangeably with Visibility,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Private** \
 * **Public**
 */
export type Visibility = string;

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationList;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = OperationList;

/** Optional parameters. */
export interface OpenShiftVersionsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OpenShiftVersionsListResponse = OpenShiftVersionList;

/** Optional parameters. */
export interface OpenShiftVersionsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OpenShiftVersionsListNextResponse = OpenShiftVersionList;

/** Optional parameters. */
export interface OpenShiftClustersListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OpenShiftClustersListResponse = OpenShiftClusterList;

/** Optional parameters. */
export interface OpenShiftClustersListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type OpenShiftClustersListByResourceGroupResponse = OpenShiftClusterList;

/** Optional parameters. */
export interface OpenShiftClustersGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type OpenShiftClustersGetResponse = OpenShiftCluster;

/** Optional parameters. */
export interface OpenShiftClustersCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type OpenShiftClustersCreateOrUpdateResponse = OpenShiftCluster;

/** Optional parameters. */
export interface OpenShiftClustersDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface OpenShiftClustersUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type OpenShiftClustersUpdateResponse = OpenShiftCluster;

/** Optional parameters. */
export interface OpenShiftClustersListAdminCredentialsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAdminCredentials operation. */
export type OpenShiftClustersListAdminCredentialsResponse =
  OpenShiftClusterAdminKubeconfig;

/** Optional parameters. */
export interface OpenShiftClustersListCredentialsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listCredentials operation. */
export type OpenShiftClustersListCredentialsResponse =
  OpenShiftClusterCredentials;

/** Optional parameters. */
export interface OpenShiftClustersListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OpenShiftClustersListNextResponse = OpenShiftClusterList;

/** Optional parameters. */
export interface OpenShiftClustersListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type OpenShiftClustersListByResourceGroupNextResponse =
  OpenShiftClusterList;

/** Optional parameters. */
export interface MachinePoolsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type MachinePoolsListResponse = MachinePoolList;

/** Optional parameters. */
export interface MachinePoolsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type MachinePoolsGetResponse = MachinePool;

/** Optional parameters. */
export interface MachinePoolsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type MachinePoolsCreateOrUpdateResponse = MachinePool;

/** Optional parameters. */
export interface MachinePoolsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface MachinePoolsUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type MachinePoolsUpdateResponse = MachinePool;

/** Optional parameters. */
export interface MachinePoolsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type MachinePoolsListNextResponse = MachinePoolList;

/** Optional parameters. */
export interface SecretsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type SecretsListResponse = SecretList;

/** Optional parameters. */
export interface SecretsGetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type SecretsGetResponse = Secret;

/** Optional parameters. */
export interface SecretsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type SecretsCreateOrUpdateResponse = Secret;

/** Optional parameters. */
export interface SecretsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface SecretsUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type SecretsUpdateResponse = Secret;

/** Optional parameters. */
export interface SecretsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type SecretsListNextResponse = SecretList;

/** Optional parameters. */
export interface SyncIdentityProvidersListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type SyncIdentityProvidersListResponse = SyncIdentityProviderList;

/** Optional parameters. */
export interface SyncIdentityProvidersGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type SyncIdentityProvidersGetResponse = SyncIdentityProvider;

/** Optional parameters. */
export interface SyncIdentityProvidersCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type SyncIdentityProvidersCreateOrUpdateResponse = SyncIdentityProvider;

/** Optional parameters. */
export interface SyncIdentityProvidersDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface SyncIdentityProvidersUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type SyncIdentityProvidersUpdateResponse = SyncIdentityProvider;

/** Optional parameters. */
export interface SyncIdentityProvidersListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type SyncIdentityProvidersListNextResponse = SyncIdentityProviderList;

/** Optional parameters. */
export interface SyncSetsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type SyncSetsListResponse = SyncSetList;

/** Optional parameters. */
export interface SyncSetsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type SyncSetsGetResponse = SyncSet;

/** Optional parameters. */
export interface SyncSetsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type SyncSetsCreateOrUpdateResponse = SyncSet;

/** Optional parameters. */
export interface SyncSetsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface SyncSetsUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type SyncSetsUpdateResponse = SyncSet;

/** Optional parameters. */
export interface SyncSetsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type SyncSetsListNextResponse = SyncSetList;

/** Optional parameters. */
export interface AzureRedHatOpenShiftClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
