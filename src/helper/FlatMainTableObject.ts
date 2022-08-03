import React from "react"
import { isTemplateExpression } from "typescript";
import { Root } from "../typescript/launchedHistoryTS";

function convertInFlatObjec(data:any):Root[]{
    // console.log(data.launchesPast)
    let temp:Root[] = data.launchesPast.map((launch:Root)=>{return(
        {
            "id":launch.id,
            "launchDate":launch.launch_date_local,
            "missionName":launch.mission_name,
            "location":launch.launch_site.site_name,
            "orbit":launch.rocket.second_stage.payloads[0].orbit,
            "rocketName":launch.rocket.rocket_name,
            "status":(launch.launch_success?"Success":launch.upcoming?"Upcoming":"Failed")
        }
    )}
    )
    return temp

}

export default convertInFlatObjec;