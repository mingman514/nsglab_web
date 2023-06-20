const express = require('express');
const path = require('path')

const router = express.Router();

router.get('/:category/:filename', async (req, res, next) => {
  try {
    var options = {
        root: path.join(__dirname.split('routes')[0], 'images'),
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
      }
    // console.log(options.root)
    let filePath = req.params.category + '/' + req.params.filename;
    
    res.sendFile(filePath, options);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;