import { gql } from "@apollo/client";

export const GetLaunchedHistory = gql`
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
    }
    links {
      video_link
      wikipedia
    }
    launch_date_local
  }
}
`;