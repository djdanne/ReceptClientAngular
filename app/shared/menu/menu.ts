/// <reference path="../../../typings/angularjs/angular.d.ts" />

module app.shared {

    //interface Window {
    //    Menu?: any
    //}

    export interface IMenuOptions {
        wrapper?: string,
        type?: string,
        menuOpenerClass?: string,
        maskId?: string
    }

    export interface IMenu {
        options: IMenuOptions
    }

    export class Menu implements IMenu {

        options: {
            wrapper?: string,
            type?: string,
            menuOpenerClass?: string,
            maskId?: string
        };

        //myWindow: IExtendedWindow;

        private body: any;
        private wrapper: any;
        private mask: any;
        private menu: any;
        private closeBtn: any;
        private menuOpeners: any;

        /**
         * Extend Object helper function.
         */
        extend = (a: any, b: any) : any => {
            for(var key in b) {
                if(b.hasOwnProperty(key)) {
                    a[key] = b[key];
                }
            }
            return a;
        }

        /**
         * Each helper function.
         */
        each = (collection: any, callback: any) : void => {
            for (var i = 0; i < collection.length; i++) {
                var item = collection[i];
                callback(item);
            }
        }

        /**
         * Menu Constructor.
         */
        constructor(options: IMenuOptions) {
            this.options = this.extend({}, this.options);
            this.extend(this.options, options);
            this._init();

            /**
             * Add to global namespace.
             */
            //window.Menu = Menu;
        }

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
        _init = () : void => {
            this.body = document.body;
            this.wrapper = document.querySelector(this.options.wrapper);
            this.mask = document.querySelector(this.options.maskId);
            this.menu = document.querySelector('#c-menu--' + this.options.type);
            this.closeBtn = this.menu.querySelector('.c-menu__close');
            this.menuOpeners = document.querySelectorAll(this.options.menuOpenerClass);
            this._initEvents();
        };

        /**
         * Initialise Menu Events.
         */
        _initEvents = (): void => {
            // Event for clicks on the close button inside the menu.
            this.closeBtn.addEventListener('click', function(e) {
                e.preventDefault();
                this.close();
            }.bind(this));

            // Event for clicks on the mask.
            this.mask.addEventListener('click', function(e) {
                e.preventDefault();
                this.close();
            }.bind(this));
        };

        /**
         * Open Menu.
         */
        open = (): void => {
            this.body.classList.add('has-active-menu');
            this.wrapper.classList.add('has-' + this.options.type);
            this.menu.classList.add('is-active');
            this.mask.classList.add('is-active');
            this.disableMenuOpeners();
        };

        /**
         * Close Menu.
         */
        close = (): void => {
            this.body.classList.remove('has-active-menu');
            this.wrapper.classList.remove('has-' + this.options.type);
            this.menu.classList.remove('is-active');
            this.mask.classList.remove('is-active');
            this.enableMenuOpeners();
        };

        /**
         * Disable Menu Openers.
         */
        disableMenuOpeners = (): void => {
            this.each(this.menuOpeners, function(item) {
                item.disabled = true;
            });
        };

        /**
         * Enable Menu Openers.
         */
        enableMenuOpeners = (): void => {
            this.each(this.menuOpeners, function(item) {
                item.disabled = false;
            });
        };




    }

}
