var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET credits page */
router.get('/credits', (req, res, next) => {
  res.render('credits');
});

router.param('quizId', quizController.load);

/* GET quizzes page */
router.get('/quizzes', quizController.index);


module.exports = router;
