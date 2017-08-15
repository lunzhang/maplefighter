var path = require('path');
var webpack  = require('webpack');

var phaserModule = path.join(__dirname,'./node_modules/phaser-ce');
var phaser = path.join(phaserModule,'build/custom/phaser-split.js');
var pixi = path.join(phaserModule,'build/custom/pixi.js');
var p2 = path.join(phaserModule,'build/custom/p2.js');

module.exports=[{
  entry:{
    'app':'./src/main.js',
    'vendor':['pixi','p2','phaser']
  },
  output:{
    filename : 'bundle.js',
    path: path.resolve(__dirname,'build'),
    publicPath: '/build/'
  },
  module:{
    loaders:[
      { test: /pixi\.js/, use: ['expose-loader?PIXI'] },
      { test: /phaser-split\.js$/, use: ['expose-loader?Phaser'] },
      { test: /p2\.js/, use: ['expose-loader?p2'] }
    ]
  },
  resolve: {
   alias: {
     'phaser': phaser,
     'pixi': pixi,
     'p2': p2
   }
  },
  plugins:[
   new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js'})
  ]
  },
  {
    entry:{
      'style':'./css/style.js'
    },
    output:{
      filename : 'style.js',
      path: path.resolve(__dirname,'build'),
      publicPath: '/build/'
    },
    module:{
      loaders:[
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        },
        {
          test: /\.scss$/,
          loaders: [ 'style-loader', 'css-loader', 'sass-loader']
        }
      ]
    }
  }];
