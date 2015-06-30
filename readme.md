# The standard WordPress child theme used by [ArtsDigital](http://artsdigital.co)

Just the bare essentials to getcha goin'.

## Installation

*The following assumes that you have [npm](https://www.npmjs.com) installed, have WordPress and a parent theme installed on a web server running Linux, that internet service and electricity are available in your region, and that you are literate.*

Navigate to your `wp-content/themes/` directory, then run

    git clone git@github.com:pfernandez/ad-child-theme.git
    mv ad-child-theme your-theme-name
    cd your-theme-name
    npm install

which will grab the source and required dependencies. In `style.css`, change the `Template:` name to the name of the parent theme directory you happen to have installed.

List any additional CSS/JavaScript dependencies you want to include in `Gruntfile.js`. You can compile everything once by running `grunt`, or run `grunt watch` to autocompile every time you save. The result will be minified CSS and JavaScript enqueued into your theme via `functions.php`. Vendor prefixes are automatically added, so no need to add things like `-webkit-border-radius` to your CSS.

For more info about child themes in WordPress, see [the codex](http://codex.wordpress.org/Child_Themes).
