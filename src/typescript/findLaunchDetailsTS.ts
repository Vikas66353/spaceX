export interface id {
  id: number;
}

// export interface Root {
//   data: Data
// }

export interface Root {
  launch: Launch;
}

export interface Launch {
  mission_name: string;
  launch_site: LaunchSite;
  rocket: Rocket;
  links: Links;
  launch_date_local: string;
  launch_success: boolean;
  upcoming: boolean;
}

export interface LaunchSite {
  site_name: string;
}

export interface Rocket {
  rocket_name: string;
  second_stage: SecondStage;
  rocket_type: string;
  rocket: Rocket2;
  first_stage: FirstStage;
}

export interface SecondStage {
  payloads: Payload[];
}

export interface Payload {
  orbit: string;
  nationality: string;
  payload_type: string;
  manufacturer?: string;
}

export interface Rocket2 {
  description: string;
  type: string;
}

export interface FirstStage {
  cores: Core[];
}

export interface Core {
  flight: number;
}

export interface Links {
  wikipedia: string;
  video_link: string;
}
