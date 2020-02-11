
# Personal blog demo with React + WP API
### Overview:
Posts are pulled from the WP API (via `fetch()` in *App.js*). A map of `<Post />` components are then created and sent to state. In `render()`, a Router Switch either returns a `<Main />` component with the Posts as a prop, or a `<Single/>` post, depending on the current path.

----

### Editing:
#### General
Download/clone this repo. Run `npm install` and then `npm start`.  (Requires Node.)

#### Editing styling
See `index.scss` - SCSS compiles to CSS.

#### Editing the blog the posts come from
`url` in `componentDidMount()` in *App.js*.
Structure: `https://public-api.wordpress.com/wp/v2/sites/[YOUR SITE HERE]/posts`

----

### Further questions?
Contact me! Always happy to lend a hand. 