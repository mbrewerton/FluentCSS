# What is Fluent CSS?
Fluent CSS is a CSS framework based on Microsoft's Fluent Design (https://fluent.microsoft.com/) to provide a compelling user interface that is extremely simple to use and modify.

I am currently working on a full API doc to go along with the framework.

Fluent CSS uses prefixed Flexbox and provides support for:
- Chrome 21+
- Safari 6.1+
- Firefox 22+
- Opera 12.1+
- IE10+

# How do I use Fluent CSS?
Fluent CSS is extremely easy to use. The layout consists of a simple `.fl-flex` class that simply provides a `display: flex;` to the container. Item alignment is done using alignment classes, for example:

```
<div class="fl-start-center">
  <!-- Content here -->
</div>
```

This will align your items at the start on the X axis, and centered on the Y axis. The alignment classes are `<prefix>-flex-<x>-<y?>` where y is optional. eg `.fl-flex-start` will align items to the start for both the X and the Y axis.

# Can I modify the classes?
Short answer: Of course! Longer answer: Yes you can as it's build using Sass. You are free to modify the Sass files in any way you see fit. However, as it is built using Sass, you will need a preprocessor such as [Prepros](https://prepros.io/), unless you feel like a bit of a sadist and fancy sifting through the compiled css.

## Can I Change the Class Prefix?
Yes. In the `_variables.scss` file there is a `$prefix` variable. This is prefixed to all classes. By default the prefix is `fl-` but this can be anything you like.
