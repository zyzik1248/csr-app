import gql from "graphql-tag";

export const COUNTRIES = gql`
  query GetCountries($continent: String!) {
    countries(filter: { continent: { regex: $continent } }) {
      name
      code
    }
  }
`;

export interface Country {
  name: string;
  code: string;
}

export interface CountriesData {
  countries: Country[];
}

export interface CountriesVar {
  continent: string;
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

interface Language {
  name: string;
}

export interface CountryData {
  country: {
    name: string;
    code: string;
    emoji: string;
    languages: Language[];
  };
}

export interface CountryVar {
  code: string;
}

export const CONTINENTS = gql`
  query GetContinents {
    continents {
      code
      name
    }
  }
`;

interface Continent {
  code: string;
  name: string;
}

export interface ContinentsData {
  continents: Continent[];
}
