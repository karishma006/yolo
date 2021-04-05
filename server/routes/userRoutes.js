const { request, response } = require('express');
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

router.get('/mybucket/activities', (_request, response) => {
    const userActivities = readUserActivities();
    response.status(200).json(userActivities);
});

router.post('/mybucket/activities', (request, response) => {
    const { activityId, title, image, category } = request.body;

    const newUserActivity = {
        id: uniqid(),
        activityId: activityId,
        title: title,
        image: image,
        category: category,
        done: false,
    };

    const userActivities = readUserActivities();
    userActivities.push(newUserActivity);
    fs.writeFileSync('./data/userActivities.json', JSON.stringify(userActivities));

    response.status(200).json(newUserActivity);
});

router.delete('/mybucket/user-activities/:id', (request, response) => {
    const id = request.params.id;
    const userActivities = readUserActivities();
    const deleteIndex = userActivities.findIndex(userActivity => userActivity.id === id);
    userActivities.splice(deleteIndex, 1);
    writeUserActivities(userActivities);

    response.status(200).json('You deleted an activity');
});

module.exports = router;