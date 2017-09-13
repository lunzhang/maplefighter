const { exec } = require('child_process');
const { lstatSync, readdirSync } = require('fs')
const { join } = require('path')

const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory)

var heroes = getDirectories('./');

for(var i = 0; i < heroes.length; i++) {
  var folds = getDirectories('./' + heroes[i]);
  for(var j = 0; j < folds.length; j++) {
    var fold = folds[j];
    var command = 'magick mogrify -trim '+ fold + '/*';
    console.log(command);
    exec(command, (err, stdout, stderr) => {
      if (err) {
        // node couldn't execute the command
        return;
      }
      console.log('trimmed ' + fold);
    });
  }
}
