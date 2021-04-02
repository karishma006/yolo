const express = require('express');
const router = express.Router();
const fs = require('fs');

function readActivities() {
    const videosData = fs.readFileSync('./data/activities.json');
    const parsedData = JSON.parse(videosData);
    return parsedData;
};

router.get('/', (_request, response) => {
    const activities = readActivities();
    const displayedActivities = activities.map(activity => {
        return {
            id: activity.id,
            category: activity.category,
            title: activity.title,
            image: activity.image,
            rating: activity.rating,
            bucketed: activity.bucketed,
            completed: activity.completed,
        };
    });
    response.status(200).json(displayedActivities);
});

router.get('/activities/:activityId', (request, response) => {
    const activities = readActivities();
    const activity = activities.find(activity => activity.id === request.params.activityId);
    response.status(200).json(activity);
});

module.exports = router;