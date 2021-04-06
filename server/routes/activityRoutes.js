const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require('uniqid');

const readActivities = () => {
    const activitiesData = fs.readFileSync('./data/activities.json');
    const parsedData = JSON.parse(activitiesData);
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

router.post('/activities/:activityId/reviews', (request, response) => {
    const { rating, content } = request.body;
    
    const newReview = {
        id : uniqid(),
        rating : rating,
        content : content, 
    };

    const activities = readActivities();
    const activity = activities.find(activity => activity.id === request.params.activityId);
    activity.reviews.unshift(newReview);
    fs.writeFileSync('./data/activities.json', JSON.stringify(activities));

    response.status(200).json(reviews);
});

module.exports = router;