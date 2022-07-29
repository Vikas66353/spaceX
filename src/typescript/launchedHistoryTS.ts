export interface limit {
  limit: number;
}
export interface Root {
  launchesPast: LaunchesPast[];
}

// export interface Root {
//     // data: Data
//   }

export interface LaunchesPast {
  mission_name: string;
  launch_date_local: string;
  launch_site: LaunchSite;
  rocket: Rocket;
  launch_success: boolean;
  id: number;
  upcoming: boolean;
}

export interface LaunchSite {
  site_name: string;
}

export interface Rocket {
  rocket_name: string;
  second_stage: SecondStage;
}

export interface SecondStage {
  payloads: Payload[];
}

export interface Payload {
  orbit: string;
}
