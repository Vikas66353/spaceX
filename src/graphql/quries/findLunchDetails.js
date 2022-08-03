import { gql } from "@apollo/client";

export const FindLaunchDetail = gql`
  query launch($id: ID!) {
    launch(id: $id) {
      mission_name
      launch_site {
        site_name
      }
      rocket {
        rocket_name
        second_stage {
          payloads {
            orbit
            nationality
            payload_type
            manufacturer
          }
        }
        rocket_type
        rocket {
          description
          type
        }
        first_stage {
          cores {
            flight
          }
        }
      }
      links {
        wikipedia
        video_link
      }
      launch_date_local
      launch_success
      upcoming
      id
    }
  }
`;
