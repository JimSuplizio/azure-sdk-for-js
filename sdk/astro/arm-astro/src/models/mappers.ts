/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const OperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation",
            },
          },
        },
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const Operation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      isDataAction: {
        serializedName: "isDataAction",
        readOnly: true,
        type: {
          name: "Boolean",
        },
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay",
        },
      },
      origin: {
        serializedName: "origin",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      actionType: {
        serializedName: "actionType",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const OperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      resource: {
        serializedName: "resource",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      operation: {
        serializedName: "operation",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetail",
        },
      },
    },
  },
};

export const ErrorDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetail",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail",
            },
          },
        },
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo",
            },
          },
        },
      },
    },
  },
};

export const ErrorAdditionalInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } },
        },
      },
    },
  },
};

export const OrganizationResourceListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OrganizationResourceListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OrganizationResource",
            },
          },
        },
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const LiftrBaseDataOrganizationProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LiftrBaseDataOrganizationProperties",
    modelProperties: {
      marketplace: {
        serializedName: "marketplace",
        type: {
          name: "Composite",
          className: "LiftrBaseMarketplaceDetails",
        },
      },
      user: {
        serializedName: "user",
        type: {
          name: "Composite",
          className: "LiftrBaseUserDetails",
        },
      },
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      partnerOrganizationProperties: {
        serializedName: "partnerOrganizationProperties",
        type: {
          name: "Composite",
          className: "LiftrBaseDataPartnerOrganizationProperties",
        },
      },
    },
  },
};

export const LiftrBaseMarketplaceDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LiftrBaseMarketplaceDetails",
    modelProperties: {
      subscriptionId: {
        serializedName: "subscriptionId",
        required: true,
        type: {
          name: "String",
        },
      },
      subscriptionStatus: {
        serializedName: "subscriptionStatus",
        type: {
          name: "String",
        },
      },
      offerDetails: {
        serializedName: "offerDetails",
        type: {
          name: "Composite",
          className: "LiftrBaseOfferDetails",
        },
      },
    },
  },
};

export const LiftrBaseOfferDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LiftrBaseOfferDetails",
    modelProperties: {
      publisherId: {
        serializedName: "publisherId",
        required: true,
        type: {
          name: "String",
        },
      },
      offerId: {
        serializedName: "offerId",
        required: true,
        type: {
          name: "String",
        },
      },
      planId: {
        serializedName: "planId",
        required: true,
        type: {
          name: "String",
        },
      },
      planName: {
        serializedName: "planName",
        type: {
          name: "String",
        },
      },
      termUnit: {
        serializedName: "termUnit",
        type: {
          name: "String",
        },
      },
      termId: {
        serializedName: "termId",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const LiftrBaseUserDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LiftrBaseUserDetails",
    modelProperties: {
      firstName: {
        serializedName: "firstName",
        required: true,
        type: {
          name: "String",
        },
      },
      lastName: {
        serializedName: "lastName",
        required: true,
        type: {
          name: "String",
        },
      },
      emailAddress: {
        constraints: {
          Pattern: new RegExp(
            "^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\\.)+[A-Za-z]{2,}$",
          ),
        },
        serializedName: "emailAddress",
        required: true,
        type: {
          name: "String",
        },
      },
      upn: {
        serializedName: "upn",
        type: {
          name: "String",
        },
      },
      phoneNumber: {
        serializedName: "phoneNumber",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const LiftrBaseDataPartnerOrganizationProperties: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "LiftrBaseDataPartnerOrganizationProperties",
      modelProperties: {
        organizationId: {
          serializedName: "organizationId",
          type: {
            name: "String",
          },
        },
        workspaceId: {
          serializedName: "workspaceId",
          type: {
            name: "String",
          },
        },
        organizationName: {
          constraints: {
            Pattern: new RegExp("^[a-zA-Z0-9][a-zA-Z0-9_\\-.: ]*$"),
            MaxLength: 50,
            MinLength: 1,
          },
          serializedName: "organizationName",
          required: true,
          type: {
            name: "String",
          },
        },
        workspaceName: {
          constraints: {
            Pattern: new RegExp("^[a-zA-Z0-9][a-zA-Z0-9_\\-.: ]*$"),
            MaxLength: 50,
            MinLength: 1,
          },
          serializedName: "workspaceName",
          type: {
            name: "String",
          },
        },
        singleSignOnProperties: {
          serializedName: "singleSignOnProperties",
          type: {
            name: "Composite",
            className: "LiftrBaseSingleSignOnProperties",
          },
        },
      },
    },
  };

export const LiftrBaseSingleSignOnProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LiftrBaseSingleSignOnProperties",
    modelProperties: {
      singleSignOnState: {
        serializedName: "singleSignOnState",
        type: {
          name: "String",
        },
      },
      enterpriseAppId: {
        serializedName: "enterpriseAppId",
        type: {
          name: "String",
        },
      },
      singleSignOnUrl: {
        serializedName: "singleSignOnUrl",
        type: {
          name: "String",
        },
      },
      aadDomains: {
        serializedName: "aadDomains",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ManagedServiceIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedServiceIdentity",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "Uuid",
        },
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "Uuid",
        },
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String",
        },
      },
      userAssignedIdentities: {
        serializedName: "userAssignedIdentities",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "UserAssignedIdentity" },
          },
        },
      },
    },
  },
};

export const UserAssignedIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UserAssignedIdentity",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "Uuid",
        },
      },
      clientId: {
        serializedName: "clientId",
        readOnly: true,
        type: {
          name: "Uuid",
        },
      },
    },
  },
};

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData",
        },
      },
    },
  },
};

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String",
        },
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String",
        },
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime",
        },
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String",
        },
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String",
        },
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime",
        },
      },
    },
  },
};

export const OrganizationResourceUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OrganizationResourceUpdate",
    modelProperties: {
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ManagedServiceIdentity",
        },
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "OrganizationResourceUpdateProperties",
        },
      },
    },
  },
};

export const OrganizationResourceUpdateProperties: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "OrganizationResourceUpdateProperties",
      modelProperties: {
        user: {
          serializedName: "user",
          type: {
            name: "Composite",
            className: "LiftrBaseUserDetailsUpdate",
          },
        },
        partnerOrganizationProperties: {
          serializedName: "partnerOrganizationProperties",
          type: {
            name: "Composite",
            className: "LiftrBaseDataPartnerOrganizationPropertiesUpdate",
          },
        },
      },
    },
  };

export const LiftrBaseUserDetailsUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LiftrBaseUserDetailsUpdate",
    modelProperties: {
      firstName: {
        serializedName: "firstName",
        type: {
          name: "String",
        },
      },
      lastName: {
        serializedName: "lastName",
        type: {
          name: "String",
        },
      },
      emailAddress: {
        constraints: {
          Pattern: new RegExp(
            "^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\\.)+[A-Za-z]{2,}$",
          ),
        },
        serializedName: "emailAddress",
        type: {
          name: "String",
        },
      },
      upn: {
        serializedName: "upn",
        type: {
          name: "String",
        },
      },
      phoneNumber: {
        serializedName: "phoneNumber",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const LiftrBaseDataPartnerOrganizationPropertiesUpdate: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "LiftrBaseDataPartnerOrganizationPropertiesUpdate",
      modelProperties: {
        organizationId: {
          serializedName: "organizationId",
          type: {
            name: "String",
          },
        },
        workspaceId: {
          serializedName: "workspaceId",
          type: {
            name: "String",
          },
        },
        organizationName: {
          constraints: {
            Pattern: new RegExp("^[a-zA-Z0-9][a-zA-Z0-9_\\-.: ]*$"),
            MaxLength: 50,
            MinLength: 1,
          },
          serializedName: "organizationName",
          type: {
            name: "String",
          },
        },
        workspaceName: {
          constraints: {
            Pattern: new RegExp("^[a-zA-Z0-9][a-zA-Z0-9_\\-.: ]*$"),
            MaxLength: 50,
            MinLength: 1,
          },
          serializedName: "workspaceName",
          type: {
            name: "String",
          },
        },
        singleSignOnProperties: {
          serializedName: "singleSignOnProperties",
          type: {
            name: "Composite",
            className: "LiftrBaseSingleSignOnProperties",
          },
        },
      },
    },
  };

export const TrackedResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const OrganizationResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OrganizationResource",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "LiftrBaseDataOrganizationProperties",
        },
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ManagedServiceIdentity",
        },
      },
    },
  },
};

export const OrganizationsCreateOrUpdateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OrganizationsCreateOrUpdateHeaders",
    modelProperties: {
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const OrganizationsUpdateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OrganizationsUpdateHeaders",
    modelProperties: {
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number",
        },
      },
      location: {
        serializedName: "location",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const OrganizationsDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OrganizationsDeleteHeaders",
    modelProperties: {
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number",
        },
      },
      location: {
        serializedName: "location",
        type: {
          name: "String",
        },
      },
    },
  },
};
