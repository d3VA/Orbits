(function() {
    (function() {
        function t() {}
        t.prototype.increment = 100, t.prototype.radius = 800, t.prototype.center = {
            x: 0,
            y: 0
        }, t.prototype.start = 50, t.prototype.current = 0, t.prototype.values = null, t.prototype.setPositions = function(t, e, i, n) {
            return this.center = t, this.radius = e, this.increment = i, this.keys = n, this.values = d3.map(), 
            this.setKeys(this.keys);
        }, t.prototype.getPosition = function(t) {
            return this.values.get(t);
        }, t.prototype.setKeys = function(t) {
            var e, i;
            return this.current = this.start, e = 360 / this.increment, t.length < e && (this.increment = 360 / t.length), 
            t.slice(0, e).forEach(function(t) {
                return function(e) {
                    return t.place(e);
                };
            }(this)), i = t.slice(e), this.radius = this.radius + this.radius / 1.8, this.increment = 360 / i.length, 
            i.forEach(function(t) {
                return function(e) {
                    return t.place(e);
                };
            }(this));
        }, t.prototype.place = function(t) {
            var e;
            return e = this.radialLocation(this.center, this.current, this.radius), this.values.set(t, e), 
            this.current += this.increment, e;
        }, t.prototype.radialLocation = function(t, e, i) {
            var n, r;
            return n = t.x + i * Math.cos(e * Math.PI / 180), r = t.y + i * Math.sin(e * Math.PI / 180), 
            {
                x: n,
                y: r
            };
        };
    })();
}).call(this);