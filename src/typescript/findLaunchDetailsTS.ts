export interface Root {
  data: Data
}

export interface Data {
  launch: Launch
}

export interface Launch {
  mission_name: string
  launch_site: LaunchSite
  rocket: Rocket
  links: Links
  launch_date_local: string
}

export interface LaunchSite {
  site_name: string
}

export interface Rocket {
  rocket_name: string
  second_stage: SecondStage
  rocket_type: string
  rocket: Rocket2
}

export interface SecondStage {
  payloads: Payload[]
}

export interface Payload {
  orbit: string
  nationality: string
  payload_type: string
  manufacturer: string
}

export interface Rocket2 {
  description: string
  type: string
}

export interface Links {
  wikipedia: string
  video_link: string
}
