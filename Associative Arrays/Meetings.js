function meeting(arr) {
    let meeting = {}
    for (const pepopleInfo of arr) {
        let [weekDay, name] = pepopleInfo.split(' ')
        if(meeting.hasOwnProperty(weekDay)){
            console.log(`Conflict on ${weekDay}!`);
        }else{
            meeting[weekDay]=name
            console.log(`Scheduled for ${weekDay}`);
        }

    }

    for (const key in meeting) {
        console.log(`${key} -> ${meeting[key]}`);
    }
}
meeting(['Monday Peter',

    'Wednesday Bill',

    'Monday Tim',

    'Friday Tim'])