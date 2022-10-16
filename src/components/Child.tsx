import React from "react";
import { AppAllUsersQuery as AppAllUsersQueryType } from "../queries/__generated__/AppAllUsersQuery.graphql";
import { AllUsersQuery } from "../App";
import { usePreloadedQuery } from "react-relay";

type ChildProps = {
  queryReference: any;
};
export const Child: React.FC<ChildProps> = ({ queryReference }) => {
  const data = usePreloadedQuery<AppAllUsersQueryType>(
    AllUsersQuery,
    queryReference
  );
  console.log(data);

  return <div>Child</div>;
};
