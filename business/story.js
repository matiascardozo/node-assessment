const db = require('../models');

const getStory = id => db.Story.findById(id);

const getAllStories = () => db.Story.findAll();

const createStory = params => db.Story.create(params);

const updateStory = async (id,params) => {
    const Story = await db.Story.findById(id);
  if (!Story) return null;
  Story.title = params.title;
  Story.author = params.author;
  Story.content = params.content;
  return Story.save();
}

const deleteStory = async (id) => {
    const Story = await db.Story.findById(id);
    if(!Story) return null;
    return Story.destroy();
}

module.exports = {
    createStory,
    getStory,
    getAllStories,
    updateStory,
    deleteStory
}