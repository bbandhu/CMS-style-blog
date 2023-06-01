const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const blog_postsRoutes = require('./blog_postsRoutes');


router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
