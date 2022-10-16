import React, { Suspense } from "react";
import { graphql, loadQuery } from "react-relay";
import { Parent } from "./components/Parent";
import RelayEnvironment from "./RelayEnvironment";
import * as AppAllUsersQuery from "./queries/__generated__/AppAllUsersQuery.graphql";

export const AllUsersQuery = graphql`
  query AppAllUsersQuery {
    allUsers {
      name
      email
    }
  }
`;

const initialQueryRef = loadQuery<AppAllUsersQuery.AppAllUsersQuery>(
  RelayEnvironment,
  AppAllUsersQuery.default,
  {}
);
const App: React.FC = () => {
  return (
    <div>
      <Suspense fallback={"Loading..."}>
        <Parent initialQueryRef={initialQueryRef} />
      </Suspense>
    </div>
  );
};

export default App;
