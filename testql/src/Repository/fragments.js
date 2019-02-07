import gql from 'graphql-tag';

const REPOSITORY_FRAGMENT = gql`
  fragment repository on Repository {
    id
    name
    url
    descriptionHTML
    owner {
      login
      url
    }
    stargazers {
      totalCount
    }
    viewerHasStarred
    viewerSubscription
  }
`;

export default REPOSITORY_FRAGMENT;
