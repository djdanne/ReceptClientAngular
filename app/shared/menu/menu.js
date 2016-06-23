/// <reference path="../../../typings/angularjs/angular.d.ts" />
var app;
(function (app) {
    var shared;
    (function (shared) {
        var Menu = (function () {
            /**
             * Menu Constructor.
             */
            function Menu(options) {
                var _this = this;
                /**
                 * Extend Object helper function.
                 */
                this.extend = function (a, b) {
                    for (var key in b) {
                        if (b.hasOwnProperty(key)) {
                            a[key] = b[key];
                        }
                    }
                    return a;
                };
                /**
                 * Each helper function.
                 */
                this.each = function (collection, callback) {
                    for (var i = 0; i < collection.length; i++) {
                        var item = collection[i];
                        callback(item);
                    }
                };
                ///**
                // * Menu Options.
                // */
                //Menu.prototype.options = {
                //    wrapper: '#o-wrapper',          // The content wrapper
                //    type: 'slide-left',             // The menu type
                //    menuOpenerClass: '.c-button',   // The menu opener class names (i.e. the buttons)
                //    maskId: '#c-mask'               // The ID of the mask
                //};
                /**
                 * Initialise Menu.
                 */
                this._init = function () {
                    _this.body = document.body;
                    _this.wrapper = document.querySelector(_this.options.wrapper);
                    _this.mask = document.querySelector(_this.options.maskId);
                    _this.menu = document.querySelector('#c-menu--' + _this.options.type);
                    _this.closeBtn = _this.menu.querySelector('.c-menu__close');
                    _this.menuOpeners = document.querySelectorAll(_this.options.menuOpenerClass);
                    _this._initEvents();
                };
                /**
                 * Initialise Menu Events.
                 */
                this._initEvents = function () {
                    // Event for clicks on the close button inside the menu.
                    _this.closeBtn.addEventListener('click', function (e) {
                        e.preventDefault();
                        this.close();
                    }.bind(_this));
                    // Event for clicks on the mask.
                    _this.mask.addEventListener('click', function (e) {
                        e.preventDefault();
                        this.close();
                    }.bind(_this));
                };
                /**
                 * Open Menu.
                 */
                this.open = function () {
                    _this.body.classList.add('has-active-menu');
                    _this.wrapper.classList.add('has-' + _this.options.type);
                    _this.menu.classList.add('is-active');
                    _this.mask.classList.add('is-active');
                    _this.disableMenuOpeners();
                };
                /**
                 * Close Menu.
                 */
                this.close = function () {
                    _this.body.classList.remove('has-active-menu');
                    _this.wrapper.classList.remove('has-' + _this.options.type);
                    _this.menu.classList.remove('is-active');
                    _this.mask.classList.remove('is-active');
                    _this.enableMenuOpeners();
                };
                /**
                 * Disable Menu Openers.
                 */
                this.disableMenuOpeners = function () {
                    _this.each(_this.menuOpeners, function (item) {
                        item.disabled = true;
                    });
                };
                /**
                 * Enable Menu Openers.
                 */
                this.enableMenuOpeners = function () {
                    _this.each(_this.menuOpeners, function (item) {
                        item.disabled = false;
                    });
                };
                this.options = this.extend({}, this.options);
                this.extend(this.options, options);
                this._init();
                /**
                 * Add to global namespace.
                 */
                //window.Menu = Menu;
            }
            return Menu;
        })();
        shared.Menu = Menu;
    })(shared = app.shared || (app.shared = {}));
})(app || (app = {}));
//# sourceMappingURL=menu.js.map