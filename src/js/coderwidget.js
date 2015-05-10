/*jslint browser: true*/
/*global define, module, exports*/
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.Coderwidget = factory();
    }
}(this, function () {
    'use strict';

    if (!(Function.prototype.hasOwnProperty('bind'))) {
        Function.prototype.bind = function () {
            var fn = this, context = arguments[0], args = Array.prototype.slice.call(arguments, 1);
            return function () {
                return fn.apply(context, args.concat(Array.prototype.slice.call(arguments)));
            };
        };
    }

    var Coderwidget = function (options) {
        if (!this || !(this instanceof Coderwidget)) {
            return new Coderwidget(options);
        }

        if (!options) {
            throw new Error('Provide a username');
        }

        if (typeof options === 'string') {
            options = { key : options };
        }

        this.container   = document.querySelector('.coderwidget');
        this.user        = options.user;
        this.orientation = options.orientation || 'vertical';
        this.endpoint    = 'https://coderwall.com/' + this.user + '.json';

        this.request();
    };

    Coderwidget.init = function (options) {
        return new Coderwidget(options);
    };

    Coderwidget.prototype = {
        jsonp: function (url, callback, context) {
            var name = 'jsonp_' + Math.round(100000 * Math.random()),
                head, script, extScript;

            head           = document.head || document.getElementsByTagName('head')[0];
            extScript      = document.createElement('script');
            extScript.type = 'text/javascript';

            script       = extScript.cloneNode();
            script.src   = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + name;
            script.async = true;

            head.appendChild(script);

            window[name] = function (data) {
                callback.call((context || window), data);
                head.removeChild(script);
                script = null;
                delete this.name;
            }.bind(this);
        },
        loop: function (els, callback) {
            var i = 0, max = els.length;
            while (i < max) {
                callback(els[i], i);
                i += 1;
            }
        },
        create: function (name, props) {
            var el = document.createElement(name), p;
            for (p in props) {
                if (props.hasOwnProperty(p)) {
                    el[p] = props[p];
                }
            }
            return el;
        },
        request: function () {
            this.jsonp(this.endpoint, function (data) {
                this.attach(data);
            }.bind(this));
        },
        logo: function () {
            var logo = this.create('div', {className: 'coderwall-logo'}),
                link = this.create('a', {className: 'coderwall-tag-name', href: 'https://coderwall.com/'}),
                name = document.createTextNode('Coderwall');

            link.appendChild(name);
            logo.appendChild(link);

            return logo;
        },
        badges: function (data) {
            var link = this.create('a', {className: 'cf coderwall-badge', href: 'https://coderwall.com/' + this.user}),
                img  = this.create('img', {className: 'coderwall-badge-image', src: data.badge, alt: data.description, title: data.description});

            link.appendChild(img);

            return link;
        },
        attach: function (data) {
            if (!data.data.badges) {
                throw new Error('You have not badges to display');
            }

            var badges    = data.data.badges,
                container = this.container,
                logo      = this.logo(),
                count     = 0;

            container.setAttribute('data-orientation', this.orientation);

            this.loop(badges, function (badge) {
                if (count < 6) {
                    container.appendChild(this.badges(badge).cloneNode(true));
                    count += 1;
                }
            }.bind(this));

            container.appendChild(logo);
        }
    }

    return Coderwidget;
}));