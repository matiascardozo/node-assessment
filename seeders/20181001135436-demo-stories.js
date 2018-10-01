/*eslint-disable*/
"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "Stories",
      [
        {
          author: "John Doe",
          title:
            "Ex-Apple engineers unveil a next-generation sensor for self-driving cars",
          content:
            "Aeva, a Mountain View, California-based startup founded only just last year, has built what its two-cofounders claim is a next-generation version of LIDAR, the 3D mapping technology that has become instrumental for how self-driving cars measure the distance of objects and effectively see the road in front of them. And today, the company is officially unveiling its product, a tiny box that can more directly measure objects in a given scene and the distance and velocity of those objects relative to one another. This, the company says, will help power future self-driving systems as autonomous cars become more commonplace and the software that powers them increasingly more demanding and data-driven.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          author: "Russell Brandom",
          title:
            "The Facebook hack could be Europe’s first big online privacy battle",
          content:
            "On Friday, a massive breach opened up a new front in the war on Facebook. According the the company, more than 50 million accounts were taken over by a kind of login worm, which used a series of unpublished vulnerabilities to hijack session keys on an unprecedented scale. Hackers had full access to any of the targeted accounts — essentially, they could do whatever you can do when you’re logged in — and Facebook is still working to survey the full extent of the damage.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          author: "Jon Porter",
          title:
            "Trump administration sues California over tough net neutrality law",
          content:
            "The Justice Department has hit back against California’s attempt to restore net neutrality rules with a lawsuit that alleges state legislators are attempting to “subvert the Federal Government’s deregulatory approach.” The suit was announced jointly by representatives of the Justice Department and FCC Chairman Ajit Pai (via USA Today).",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
