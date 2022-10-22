import { Variables } from "relay-runtime";

// your-app-name/src/fetchGraphQL.js
async function fetchGraphQL(query: string, variables: Variables) {
  // Fetch data from GitHub's GraphQL API:
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      // Authorization: `Bearer %ACCESS_TOKEN%`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;
