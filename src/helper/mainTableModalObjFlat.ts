import {Root} from "../typescript/findLaunchDetailsTS"


const modalObjfunc=(data:any)=>{
    let tempdata=data.launch;
    
    let tempObj:Root={
        "id":tempdata.id,
        "messionName":tempdata.mission_name,
        "status":(tempdata.launch_success?"Success":tempdata.upcoming?"Upcoming":"Failed"),
        "rocketName":tempdata.rocket.rocket_name,
        "wikipediaLink":tempdata.links.wikipedia,
        "videoLink":tempdata.links.video_link,
        "desc":tempdata.rocket.rocket.description,
        "flightNo":tempdata.rocket.first_stage.cores[0].flight,
        "rocketType":tempdata.rocket.rocket.type,
        "manufacturer":tempdata.rocket.second_stage.payloads[0].manufacturer,
        "nationality":tempdata.rocket.second_stage.payloads[0].nationality,
        "launchDate":tempdata.launch_date_local,
        "payloadType":tempdata.rocket.second_stage.payloads[0].payload_type,
        "orbit":tempdata.rocket.second_stage.payloads[0].orbit,
        "launchSite":tempdata.launch_site.site_name

    }

    console.log(tempObj)

    
}

export default modalObjfunc;