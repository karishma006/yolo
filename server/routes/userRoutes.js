const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require('uniqid');

readUserActivities = () => {
    const userActivitiesData = fs.readFileSync('./data/userActivities.json');
    const parsedData = JSON.parse(userActivitiesData);
    return parsedData;
};

router.get('/mybucket', (_request, response) => {
    const userActivities = readUserActivities();
    response.status(200).json(userActivities);
});

router.post('/mybucket/add', (request, response) => {
    const { activityId, title, image, category, status } = request.body;

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

module.exports = router;