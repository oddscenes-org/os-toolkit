# Description
Most react/webpack/babel setups don't have good production deployment - this repo has all the tools needed to build and deploy easily. Also includes some plugins that can help to get started with animation, time, interaction etc.

**Uses**:
- Webpack
- React
- Babel
- Express
- Sass
- ESLint + Sasslint

# Installation
**In project directory**  
If Yarn isn't installed: `brew install yarn`  
Then: `yarn`

# Usage
**Development**  
`yarn run dev`

**Development w/Dashboard**  
`yarn run dashboard`

**Build**  
`yarn run build`

**Production**  
`yarn start`

# Deployment
1) Clone repo on your server
2) Build website with `yarn run build`
3) On your server install forever globally `sudo npm install forever -g`
4) On your server, in your project directory run `forever start -c "npm start" ./`

**Debug deployment**  
To check if `forever` processes are running run `forever list`  
To stop `forever` processes run `forever stop`

**Digital Ocean deployment**  
To deploy to digital ocean there is 2 files that will help in this repo.  
- `README-DO.md`  
is a list of commands to run on a fresh Linux install of a Digital Ocean droplet  
- `README-nginx.md`  
is a sample Nginx config with an installation guide

**Dev Deployment**  
Install **Now CLI** for easy demo  
`sudo npm install -g now`  
`now`  
- The link will be copied to clipboard, then you can paste in browser.
- You get `3` deployment instances with a free now account, so make sure to remove instance after use `now rm <url>`

# Working With the Files  
  
### ▶️ Adding HTML Pages (Serverside load)
1) Create `HTML` page in `/app`
2) Add webpack devserver route in `webpack.config.js` under `Rewrite URLs for devserver`
3) Add `new HTMLWebpackPlugin` for each page at the bottom of `webpack.config.js`
4) Add the same `new HTMLWebpackPlugin` to `webpack.production.js`

### ▶️ Adding React Components to HTML
`index.js` is the file to `import` and `render` all ReactJS components to their `#div`s  
  
Import the components either conditionally (if page contains `#id`), or sitewide

### ▶️ Editing Metadata & Analytics
Metadata component is in `app/js/components/HeadInfo.js`  
Editable information is located in `app/js/index.js`  
  
To add different metadata to another page duplicate `Page Header Info` section in `index.js` file - then change the id selector in both `index.js` and `HTML` page template  
  
To add analytics edit the tracking code under `Analytics Info` inside `index.js`

### ▶️ Sitemap Generator
A sitemap is automatically generated in the project directory when the production build is run with `yarn start`  
  
If you want a `robots.txt` file generated along with `sitemap.xml` file change `sitemap.XMLtoFile();` to `sitemap.toFile();` inside the `server.js` file.  
  
If you would like to make changes to the `sitemap.xml` or `robots.txt` see additional config options [here](https://github.com/hex7c0/express-sitemap)

### ▶️ 404 Not Found Page
The `404.html` file will not display in development (`yarn run dev`) because it's routed via `server.js` with Express. In order to view the changes you make to the `404.html` template, you'll need build and run in production - then navigate to a broken link.

### ▶️ Preloader
The preloader used is called pace by Hubspot, with a custom theme found in `components/Loader.sass`. The script is referenced in the `HTML` templates at the top.  
  
To see the docs and customize it more check [here](http://github.hubspot.com/pace/)

### ▶️ Icon Libraries
3 Icon libraries are included and ready to go, just uncomment out the library in `app/sass/index.sass`. 
  
**Font Awesome:**
[Repo](https://fontawesome.com/icons?d=listing&m=free)  
Usage:  
```
<i class="fas fa-home"></i>
```
  
**IonIcons:**
[Repo](http://ionicons.com/)  
Usage:  
```
<i class="icon ion-home"></i>
```
  
**Material Icons:**
[Repo](https://material.io/icons/)  
Usage:  
```
<i class="material-icons">home</i>
```
  
### ▶️ Media queries
Recommended media query sizes:  

| Size          | Pixels           |
| ------------- |:----------------:|
| X-Small       | < 320px          |
| Small         | 321px - 480px    |
| Medium        | 481px - 767px    |
| Large         | 768px - 991px    |
| X-Large       | 992px - 1200px   |
| XX-Large      | 1201px - 1600px  |
| XXX-Large     | > 1600px         |


### ▶️ Demo Plugins
There is a few demo plugins included located at `app/js/components/Plugin...`. If you won't be using them delete these files, and remove them from `index.js` and corresponding `#div`s in `HTML`.

- [**MomentJS**](https://momentjs.com/): For working with time & dates
- [**AnimeJS**](http://animejs.com/): For animating elements
- [**React Scroll**](https://github.com/fisshy/react-scroll): For scrolling
- [**React Video**](https://github.com/video-react/video-react): For working with video
- [**React Modal**](https://github.com/reactjs/react-modal): For working with popup modals
- [**React Tooltip**](https://github.com/wwayne/react-tooltip): For working with tooltips & popovers
