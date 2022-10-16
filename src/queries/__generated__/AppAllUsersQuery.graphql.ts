/**
 * @generated SignedSource<<289179f72e05affd962ecafa736c9154>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppAllUsersQuery$variables = {};
export type AppAllUsersQuery$data = {
  readonly allUsers: ReadonlyArray<{
    readonly email: string;
    readonly name: string | null;
  }>;
};
export type AppAllUsersQuery = {
  response: AppAllUsersQuery$data;
  variables: AppAllUsersQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "allUsers",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppAllUsersQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppAllUsersQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "0479b01a60256426cd036f09684e1686",
    "id": null,
    "metadata": {},
    "name": "AppAllUsersQuery",
    "operationKind": "query",
    "text": "query AppAllUsersQuery {\n  allUsers {\n    name\n    email\n  }\n}\n"
  }
};
})();

(node as any).hash = "a247656a33ce770c79d8a06d7140653c";

export default node;
