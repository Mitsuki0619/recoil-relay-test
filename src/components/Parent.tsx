import { AllUsersQuery } from "../App";
import React from "react";
import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from "react-relay";
import { AppAllUsersQuery as AppAllUsersQueryType } from "../queries/__generated__/AppAllUsersQuery.graphql";
import { Child } from "./Child";

type ParentProps = {
  initialQueryRef: PreloadedQuery<AppAllUsersQueryType>;
};

export const Parent: React.FC<ParentProps> = ({ initialQueryRef }) => {
  const [queryReference, loadQuery, disposeQuery] = useQueryLoader(
    AllUsersQuery,
    initialQueryRef /* e.g. provided by router */
  );

  if (queryReference == null) {
    return (
      <>
        <button onClick={loadQuery}>
          Click to hide the name and dispose the query.
        </button>
        <React.Suspense fallback="Loading">
          {queryReference != null ? (
            <Child queryReference={queryReference} />
          ) : null}
        </React.Suspense>
      </>
    );
  }

  return (
    <div>
      {" "}
      <React.Suspense fallback="Loading">
        {queryReference != null ? (
          <Child queryReference={queryReference} />
        ) : null}
      </React.Suspense>
    </div>
  );
};
