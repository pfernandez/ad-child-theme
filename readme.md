# The standard WordPress child theme used by [ArtsDigital](http://artsdigital.co)

Just the bare essentials to getcha goin'.

## Installation

*The following assumes that you have [npm](https://www.npmjs.com) and [grunt](http://gruntjs.com) installed, have WordPress and a parent theme installed on a web server running Linux, that internet service and electricity are available in your region, and that you are literate.*

Navigate to your `wp-content/themes/` directory, then run

    git clone git@github.com:pfernandez/ad-child-theme.git
    mv ad-child-theme your-theme-name
    cd your-theme-name
    npm install

which will grab the source and required dependencies. In `package.json` change `"name": "ad-child-theme"` to `"name": "your-theme-name"`, and in `style.css` change the `Template:` name to the name of the parent theme directory you happen to have installed.

Add your styles and scripts to `less/styles.less` and `js/scripts.js`. You can compile everything once by running

    grunt

or

    grunt watch

to autocompile every time you save. The result will be minified CSS and JavaScript enqueued into your theme via `functions.php`. Vendor prefixes are automatically added, so no need to add things like `-webkit-border-radius` to your CSS.

For more info about child themes in WordPress, see [the codex](http://codex.wordpress.org/Child_Themes).

