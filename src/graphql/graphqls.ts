import gql from "graphql-tag";

export const COUNTRIES = gql`
  query GetCountries {
    countries {
      name
      code
    }
  }
`;

export interface ICountries {
  countries: { name: string; code: string }[];
}

export const COUNTRY = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      name
      code
      emoji
      languages {
        name
      }
    }
  }
`;

export interface ICountry {
  country: {
    name: string;
    code: string;
    emoji: string;
    languages: { name: string }[];
  };
}
