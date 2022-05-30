function getCreatedXDaysAgo(createdAt) {
    var today = new Date();
    var createdOn = createdAt ? Date.parse(createdAt) : today;
    var msInDay = 24 * 60 * 60 * 1000;

    var difference = (today.getTime()  - createdOn) / msInDay;

    return Math.floor(difference)
}

export default getCreatedXDaysAgo;