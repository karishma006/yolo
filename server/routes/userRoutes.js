const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require('uniqid');

readUserActivities = () => {
    const userActivitiesData = fs.readFileSync('./data/userActivities.json');
    const parsedData = JSON.parse(userActivitiesData);
    return parsedData;
};

writeUserActivities = (userActivities) => {
    const userActivitiesData = JSON.stringify(userActivities, null, '');
    fs.writeFileSync('./data/userActivities.json', userActivitiesData);
};

const readActivities = () => {
    const activitiesData = fs.readFileSync('./data/activities.json');
    const parsedData = JSON.parse(activitiesData);
    return parsedData;
};

router.get('/mybucket/activities', (_request, response) => {
    const userActivities = readUserActivities();
    response.status(200).json(userActivities);
});

router.get('/mybucket/activities/random', (_request, response) => {
    const activities = readActivities();
    const randomActivity = activities[Math.floor(Math.random()*activities.length)];
    response.status(200).json(randomActivity);
});

router.post('/mybucket/activities', (request, response) => {
    const { activityId, title, image, category, reviews } = request.body;

    const newUserActivity = {
        id: uniqid(),
        activityId: activityId,
        title: title,
        image: image,
        category: category,
        done: false,
        reviews: reviews,
    };

    const userActivities = readUserActivities();
    userActivities.unshift(newUserActivity);
    fs.writeFileSync('./data/userActivities.json', JSON.stringify(userActivities));

    response.status(200).json(newUserActivity);
});

router.delete('/mybucket/activities/:id', (request, response) => {
    const id = request.params.id;
    const userActivities = readUserActivities();
    const deleteIndex = userActivities.findIndex(userActivity => userActivity.id === id);
    userActivities.splice(deleteIndex, 1);
    writeUserActivities(userActivities);

    response.status(200).json('You deleted an activity');
});

router.put('/mybucket/activities/:id', (request, response) => {
    const id = request.params.id;
    const userActivities = readUserActivities();
    const doneActivity = userActivities.find(userActivity => userActivity.id === id);
    doneActivity.done = true;
    writeUserActivities(userActivities);

    response.status(200).json(doneActivity);
});

module.exports = router;