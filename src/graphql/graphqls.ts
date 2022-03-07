import gql from "graphql-tag";

export const COUNTRIES = gql`
  query GetCountries {
    countries{
      name
      code
    }
  }
`;

export interface ICountries {
  countries: {name: string, code: string}[]
}
