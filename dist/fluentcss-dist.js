//@prepros-append core.js
//@prepros-append ../components/button/buttonComponent.js
(function() {
    window.flCss = window.flCss || {
        prefix: 'fl-'
    };
})();
(function() {
    var self = this;
    self.buttonClassSelector = window.flCss.prefix + 'button';
    self.buttons = document.getElementsByClassName(self.buttonClassSelector);

    for (var b = 0; b < self.buttons.length; b++) {
        var button = self.buttons[b];
    }
})();

//# sourceMappingURL=fluentcss-dist.js.map