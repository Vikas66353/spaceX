import {Root} from "../typescript/findLaunchDetailsTS"


const modalObjfunc=(data:any)=>{
    let tempdata=data.launch;
    let tempObj={
        "id":tempdata.id,
        "messionName":tempdata.mission_name,
        "status":(tempdata.launch_success?"Success":tempdata.upcoming?"Upcoming":"Failed"),
        "rocketName":""

    }
}

export default modalObjfunc;