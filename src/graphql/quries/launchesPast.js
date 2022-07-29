import { gql } from "@apollo/client";

export const GetLaunchedHistory = gql`
  query launchesPast($limit: Int) {
    launchesPast(limit: $limit) {
      mission_name
      launch_date_local
      launch_site {
        site_name
      }
      rocket {
        rocket_name
        second_stage {
          payloads {
            orbit
          }
        }
      }
      launch_success
      id
      upcoming
    }
  }
`;
