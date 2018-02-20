(function() {
    var self = this;
    self.buttonClassSelector = window.flCss.prefix + 'button';
    self.buttons = document.getElementsByClassName(self.buttonClassSelector);

    for (var b = 0; b < self.buttons.length; b++) {
        var button = self.buttons[b];
    }
})();