var fs = require('fs');
var del = require('del');

var gulp = require('gulp');
var replace = require('gulp-replace');
var pipe = require('gulp-pipe');
var prompt = require('gulp-prompt');

var forReplace = [
  // first elem of item is str for replacement and second is key to projectData
  [ 'ng2-f-template-spa', 'normalizedProjectName' ],
  [ 'Seed template for SPA', 'projectDescription' ],
  [ 'seed-app-frontend', 'normalizedProjectNameWithTail' ],
  [ 'SEED APP', 'upperCasedProjectName' ],
  [ 'seed-app', 'normalizedProjectName' ],
  [ 'seedApp', 'projectNameLowerUpperCase' ],
  [ 'SEED-APP-frontend', 'normalizedProjectNameWithTail' ],
  [ 'baseUrl: \'/demo/\',', 'prodUrlRootRepl']
];

var locations = {
  globalDirs: [ '.git' ],
  files: [
    'src/index.html',
    'src/app/app.component.ts',
    'config/*.js',
    'gulp/tasks/*.js',
    '!gulp/tasks/init.js',
    'README.md',
    'package.json'
  ],
  // used for check if script was run in the past
  fileForCheck: 'README.md'
};

function normalizeProjectName(name) {
  return name.toLowerCase().replace(" ", "-")
}

function projectNameLowerUpperCase(name) {
  var nameArray = name.split("-")
  return nameArray[0] + nameArray.slice(1).map(upperFirstLetter).join("")
}

function upperFirstLetter(item) {
  return item.charAt(0).toUpperCase() + item.substr(1).toLowerCase()
}

function replaceTemplatePatternsInFiles(projectData) {
  var pipeArray = [];

  for (var item of forReplace) {
    pipeArray.push(replace(item[0], projectData[item[1]]));
  }

  pipeArray.push(gulp.dest(function (file) { return file.base }));

  return pipe(gulp.src(locations.files), pipeArray);
}

function removeGlobalDirs() {
  return del(locations.globalDirs)
}

function userInputsPostProcess(userInputs) {
  var projectName = userInputs.projectName ? userInputs.projectName : 'ng2 awesome project';
  var projectData = { projectName: projectName, projectDescription: userInputs.projectDescription };
  var prodUrlRoot = userInputs.prodUrlRoot ? userInputs.prodUrlRoot : '/';

  projectData['normalizedProjectName'] = normalizeProjectName(projectName);
  projectData['upperCasedProjectName'] = projectName.toUpperCase();
  projectData['normalizedProjectNameWithTail'] = normalizeProjectName(projectName) + '-frontend';
  projectData['projectNameLowerUpperCase'] = projectNameLowerUpperCase(normalizeProjectName(projectName));
  projectData['prodUrlRootRepl'] = 'baseUrl: \'' + prodUrlRoot + '\',';

  if (userInputs.removeGlobals && !(userInputs.removeGlobals in {'n': 0, 'no': 0})) removeGlobalDirs();

  replaceTemplatePatternsInFiles(projectData);
}

function prepareProject() {
  gulp.src(locations.files).pipe(prompt.prompt([{
    type: 'input',
    name: 'projectName',
    message: 'Get project name?'
  },
  {
    type: 'input',
    name: 'projectDescription',
    message: 'Get project description?'
  },
  {
    type: 'input',
    name: 'prodUrlRoot',
    message: 'Get url root for production(in the form /xyz/)?'
  },
  {
    type: 'input',
    name: 'removeGlobals',
    message: 'Do you want to remove directory ".git"?'
  }], userInputsPostProcess));
}

gulp.task('init', function() {

  fs.readFile(locations.fileForCheck, 'utf8', function(err, data) {
    if (err) {
      throw err;
    }
    else {
      var i = data.search('SEED APP');
      if (i == -1) {
        console.log("Can't initialize project because of project was already initialized or important marks was removed");
      }
      else {
        prepareProject();
      }
    }
  });

});
