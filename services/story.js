var express = require('express');
var router = express.Router();
var { createStory, getStory, getAllStories, updateStory, deleteStory } = require('../business/story');

router.get('', async (req, res) => {
    const response =  await getAllStories();
    res.send(response);
})


router.get('/:storyId', async (req, res) => {
    const response = await getStory(req.params.storyId);
    if(!response){
        res.statusCode = 404;
        res.send('Story does not exists')
    } else {
    res.send(response);
    }
})


router.post('', async (req, res) => {
    const response = await createStory(req.body);
    res.send(response);
})


router.put('/:storyId', async (req, res) => {
    const response = await updateStory(req.params.storyId, req.body);
    if(!response){
        res.statusCode = 404;
        res.send('Could not update story');
      } else res.send(response);
    
})


router.delete('/:storyId', async (req, res) => {
    const response = await deleteStory(req.params.storyId);
    if(!response){
        res.statusCode = 404;
        res.send('Could not delete story');
    } else res.send(response);
})

module.exports = router;