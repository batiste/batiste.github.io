diff --git a/AUTHORS b/AUTHORS
index 22c0b45..e4bb7f3 100644
--- a/AUTHORS
+++ b/AUTHORS
@@ -3,5 +3,4 @@ Yoan Blanc
 Szymon Pilkowski
 Cosimo Streppone
 Jonathan Bieler
-Daniel White
 Ground tile by http://www.pixeljoint.com/p/19372.htm
diff --git a/README.rst b/README.rst
index f28bc1a..581b8b5 100644
--- a/README.rst
+++ b/README.rst
@@ -2,22 +2,22 @@
 Sprite.js framework
 ====================
 
-This project aims to provide an easy to use and easy to extend abstraction to draw sprites within any browser.
+This project aim provide an easy to use and easy to extend abstraction to draw sprites within any browser.
 
-For more information, refer to the documentation:
+For more informations, refers to the documentation:
 
 http://readthedocs.org/docs/spritejs/en/latest/
 
 For examples of what the framework offers:
 
-http://batiste.dosimple.ch/sprite.js/tests/
+http://batiste.github.io/sprite.js/tests/
 
 
 Projects that uses sprite.js
 ==============================
 
-* `RPG-like example <http://batiste.dosimple.ch/sprite.js/tests/mapeditor/map_reader.html>`_ is a `Tiled editor <http://www.mapeditor.org/>`_ dynamic JSON map reader.
-* `Steam <http://batiste.dosimple.ch/games/steam9/>`_ is a plateform game involving physic puzzle.
+* `RPG-like example <http://batiste.github.io/sprite.js/tests/mapeditor/map_reader.html>`_ is a `Tiled editor <http://www.mapeditor.org/>`_ dynamic JSON map reader.
+* `Steam <http://batiste.github.io/games/steam9/>`_ is a plateform game involving physic puzzle.
 * `Webattle.js <https://github.com/tadast/webattle.js>`_ is a multiplayer HTML5 game using nodejs.
-* `"The invasion of the evil lords" <http://batiste.dosimple.ch/games/rpg/game.html>`_. is a demo RPG with different creatures and a boss.
+* `"The invasion of the evil lords" <http://batiste.github.io/games/rpg/game.html>`_. is a demo RPG with different creatures and a boss.
 
diff --git a/doc/source/api.rst b/doc/source/api.rst
index 3496b0c..2d63c75 100644
--- a/doc/source/api.rst
+++ b/doc/source/api.rst
@@ -683,7 +683,7 @@ To use some of these feature, you must include an extra javascript files in your
 
 ScrollingSurface object
 -------------------------
-Scro
+
 This object is not included in sprite.js core and needs to be loaded independantly::
 
     <script src="lib/scrolling.js"></script>
@@ -694,7 +694,7 @@ already been drawn and only redraw the necessary parts instead of the whole scen
 
 .. code-block:: javascript
 
-    var surface = sjs.ScrollingSurface(scene, w, h, redrawCallback);
+    var surface = sjs.SrollingSurface(scene, w, h, redrawCallback);
 
     function redrawCallback(layer, x, y) {
         // draw the necessary sprites on the layer
@@ -707,7 +707,7 @@ already been drawn and only redraw the necessary parts instead of the whole scen
 The redrawCallback is called whenever a part of the surface needs to be updated. The absolute position on the surface
 is provided for you as an argument to redrawCallback so you may determine what to draw on this layer. The layer object has a width and height (layer.w, layer.h).
 
-.. js:class:: sjs.ScrollingSurface(scene, w, h, redrawCallback)
+.. js:class:: sjs.SrollingSurface(scene, w, h, redrawCallback)
 
     :param Scene scene: The scene that will hold the surface.
     :param number w: The width of the surface.
@@ -720,15 +720,15 @@ is provided for you as an argument to redrawCallback so you may determine what t
     :param number x: The x position of the layer within the scrolling surface.
     :param number y: The y position of the layer within the scrolling surface.
 
-.. js:function:: ScrollingSurface.move(x, y)
+.. js:function:: SrollingSurface.move(x, y)
 
     Moves the surface offset in direction (x, y).
 
-.. js:function:: ScrollingSurface.position(x, y)
+.. js:function:: SrollingSurface.position(x, y)
 
     Sets the surface offset position to (x, y)
 
-.. js:function:: ScrollingSurface.update()
+.. js:function:: SrollingSurface.update()
 
     Updates the latest changes to the surface and call the redrawCallback if necessary.
 
diff --git a/doc/source/index.rst b/doc/source/index.rst
index 68d227c..ff09466 100644
--- a/doc/source/index.rst
+++ b/doc/source/index.rst
@@ -21,7 +21,7 @@ or use the `direct link to the library <https://raw.github.com/batiste/sprite.js
 Examples
 =========================
 
-To see examples of what the framework has to offer `have a look at the test files <http://batiste.dosimple.ch/sprite.js/tests/>`_.
+To see examples of what the framework has to offer `have a look at the test files <http://batiste.github.io/sprite.js/tests/>`_.
 
 Table of content
 ======================================
@@ -39,6 +39,6 @@ Table of content
 Projects that Use Sprite.js
 ==============================
 
-* `Steam <http://batiste.dosimple.ch/games/steam9/>`_ is a platform game involving a physics puzzle.
+* `Steam <http://batiste.github.io/games/steam9/>`_ is a platform game involving a physics puzzle.
 * `Webattle.js <https://github.com/tadast/webattle.js>`_ is a multiplayer HTML5 game using node.js.
-* `"The invasion of the evil lords" <http://batiste.dosimple.ch/games/rpg/game.html>`_. is a demo RPG with different creatures and a boss.
\ No newline at end of file
+* `"The invasion of the evil lords" <http://batiste.github.io/games/rpg/game.html>`_. is a demo RPG with different creatures and a boss.
\ No newline at end of file
diff --git a/doc/source/introduction.rst b/doc/source/introduction.rst
index b3bde47..aae1a62 100644
--- a/doc/source/introduction.rst
+++ b/doc/source/introduction.rst
@@ -37,7 +37,7 @@ Example of basic sprite transformations:
         sp.update();
     });
 
-If you want a more interactive demonstration of basic sprite manipulation, there is a good example in the tests: http://batiste.dosimple.ch/sprite.js/tests/visual_guide.html
+If you want a more interactive demonstration of basic sprite manipulation, there is a good example in the tests: http://batiste.github.io/sprite.js/tests/visual_guide.html
 
 
 Performance and different ways to draw
diff --git a/lib/collision.js b/lib/collision.js
index 393c484..c12bab0 100755
--- a/lib/collision.js
+++ b/lib/collision.js
@@ -7,30 +7,20 @@ Copyright (c) 2011 Batiste Bieler and contributors, https://github.com/batiste/s
 
 var Sprite = sjs.Sprite;
 
-function inPolygon(polygonA, polygonB, debug) {
-
-    var h, i, j,
-        collision = false;
-
-    // test to see if just a point coordinate (x,y) was sent in
-    if (polygonA.hasOwnProperty('x')) {
-        // convert to single-length array for traversal
-        polygonA = [polygonA];
-    }
-
-    for (h = 0; h < polygonA.length; h += 1) {
-        if (collision === false) {
-            for (i = 0, j = polygonB.length - 1; i < polygonB.length; j = i++) {
-                if (((polygonB[i].y > polygonA[h].y) !== (polygonB[j].y > polygonA[h].y))
-                    && (polygonA[h].x < (polygonB[j].x - polygonB[i].x) * (polygonA[h].y - polygonB[i].y) / (polygonB[j].y - polygonB[i].y) + polygonB[i].x)
-                ) {
-                    collision = !collision;
-                }
-            }
+// TODO: add the polygone shape
+
+function pointInPoly(polyCords, x, y)
+{
+    var i, j, c = false;
+    for (i = 0, j = polyCords.length - 1; i < polyCords.length; j = i++)
+    {
+        if (((polyCords[i][1] > y) != (polyCords[j][1] > y))
+            && (x < (polyCords[j][0] - polyCords[i][0]) *
+            (y - polyCords[i][1]) / (polyCords[j][1] - polyCords[i][1]) + polyCords[i][0])) {
+            c = !c;
         }
     }
- 
-    return collision;
+    return c;
 }
 
 function pointToLineDistance(x, y, x1, y1, x2, y2) {
@@ -304,10 +294,9 @@ function resolveCollisions() {
 }
 
 global.sjs.collision = {
-    'find': resolveCollisions,
-    'isPointInImage': isPointInImage,
-    'isPointInRectangle': isPointInRectangle,
-    'inPolygon': inPolygon
+    find:resolveCollisions,
+    isPointInImage:isPointInImage,
+    isPointInRectangle:isPointInRectangle
 };
 
-})(this);
+})(this);
\ No newline at end of file
diff --git a/lib/scrolling.js b/lib/scrolling.js
index eaeb324..cb60cd2 100755
--- a/lib/scrolling.js
+++ b/lib/scrolling.js
@@ -25,272 +25,205 @@ WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  *
  */
 
-(function (global) {
-
-    var ScrollingSurface;
-
-    ScrollingSurface = function (Scene, w, h, redrawCallback) {
-
-        var i,
-            buffer,
-            doc;
-
-        if (this.constructor !== arguments.callee) {
-            return new ScrollingSurface(Scene, w, h, redrawCallback);
-        }
-
-        doc = window.document;
-        this.divider = 2.0;
-        // be sure that the sizes are divisible by the block divider size
-        this.w = w - (w % this.divider);
-        this.h = h - (h % this.divider);
-
-        this.minimum_free_buffer = (this.divider + 1) * (this.divider + 1);
-
-        this.redrawCallback = redrawCallback;
-        this.block_h = Math.ceil(this.h / this.divider);
-        this.block_w = Math.ceil(this.w / this.divider);
-        this.x = 0;
-        this.y = 0;
-        this.Scene = Scene;
-        this.dom = doc.createElement('div');
-        this.dom.style.position = "relative";
-        Scene.dom.appendChild(this.dom);
-    
-        // buffers
-        this.free_buffers = sjs.List();
-
-        for (i = 0; i < (4 * this.minimum_free_buffer); i += 1) {
-            buffer = Scene.Layer("buffer-" + Math.random(), {
-                'w': this.block_w,
-                'h': this.block_h,
-                'x': 0,
-                'y': 0,
-                'autoClear': false,
-                'useCanvas': true,
-                'parent': this.dom,
-                'disableAutoZIndex': true
-            });
-            buffer.dom.style.display = 'none';
-            buffer.ctx.fillStyle = "#666";
-            this.free_buffers.append(buffer);
+(function(global){
+
+var doc = global.document;
+
+function SrollingSurface(scene, w, h, redrawCallback) {
+
+    if(this.constructor !== arguments.callee)
+        return new SrollingSurface(scene, w, h, redrawCallback);
+
+    this.divider = 2.0;
+    // be sure that the sizes are divisible by the block divider size
+    this.w = w - w % this.divider;
+    this.h = h - h % this.divider;
+
+    this.minimum_free_buffer = (this.divider + 1) * (this.divider + 1);
+
+    this.redrawCallback = redrawCallback;
+    this.block_h = Math.ceil(this.h / this.divider);
+    this.block_w = Math.ceil(this.w / this.divider);
+    this.x = 0;
+    this.y = 0;
+    this.scene = scene;
+    this.dom = doc.createElement('div');
+    this.dom.style.position = "relative";
+    scene.dom.appendChild(this.dom);
+
+    // buffers
+    this.free_buffers = sjs.List();
+    for(var i=0; i< (4*this.minimum_free_buffer); i++) {
+        var buffer = scene.Layer("buffer-"+Math.random(),
+                {w:this.block_w , h:this.block_h, x:0, y:0, autoClear:false,
+                useCanvas:true, parent:this.dom, disableAutoZIndex:true});
+        buffer.dom.style.display = 'none';
+        buffer.ctx.fillStyle = "#666";
+        this.free_buffers.append(buffer);
+    }
+    // the front style
+    this.front = scene.Layer("front-"+Math.random(),
+        {w:this.w, h:this.h, x:0, y:0, autoClear:false,
+        useCanvas:true, parent:this.dom, disableAutoZIndex:true});
+
+    this.front.ctx.fillStyle = "#f00";
+
+    // all the rendered block
+    this.drawned = {};
+}
+
+SrollingSurface.prototype.getBuffer = function getBuffer() {
+    if(this.free_buffers.length==0) {
+        this.freeBuffers();
+    }
+    var b = this.free_buffers.shift();
+    return b;
+}
+
+SrollingSurface.prototype.freeBuffers = function freeBuffers() {
+    var distance_list = [];
+    for(var key in this.drawned) {
+        if(this.drawned.hasOwnProperty(key)) {
+            var b = this.drawned[key];
+            distance_list.push({d:sjs.math.hypo(
+                b.x - (this.x - this.w / 2),
+                b.y - (this.y - this.h / 2)),
+                key:key});
         }
-
-        // the front style
-        this.front = Scene.Layer("front-" + Math.random(), {
-            'w': this.w,
-            'h': this.h,
-            'x': 0,
-            'y': 0,
-            'autoClear': false,
-            'useCanvas': true,
-            'parent': this.dom,
-            'disableAutoZIndex': true
-        });
-        this.front.ctx.fillStyle = "#f00";
-
-        // all the rendered blocks
-        this.drew = {};
-    };
-
-    ScrollingSurface.prototype.getBuffer = function getBuffer() {
-
-        if (this.free_buffers.length === 0) {
-            this.freeBuffers();
+    }
+    distance_list = distance_list.sort(function(a, b) { return b.d - a.d; });
+    var amount = this.minimum_free_buffer;
+    for(var i=0; i<amount; i++) {
+        var key = distance_list[i].key;
+        var block = this.drawned[key];
+        delete this.drawned[key];
+        this.free_buffers.append(block.buffer);
+    }
+}
+
+SrollingSurface.prototype.createBlock = function createBlock(block_x, block_y) {
+    // Create a block for a position
+    var key = block_x+'|'+block_y;
+    if(this.drawned[key]) {
+        return this.drawned[key];
+    }
+    var buffer = this.getBuffer();
+    // by painting the callback canvas, we don't need to clear it nor the bufferCanvas
+    buffer.ctx.fillRect(0,  0, this.block_w, this.block_h);
+    // redraw to copy on the necessary part of the buffer
+    var x = block_x * this.block_w;
+    var y = block_y * this.block_h;
+    this.redrawCallback(buffer, x, y);
+    var b =  {
+        x:x,
+        y:y,
+        block_x:block_x,
+        block_y:block_y,
+        buffer:buffer
+    }
+    this.drawned[key] = b;
+    return b;
+}
+
+SrollingSurface.prototype.neededBlocks = function neededBlocks() {
+    // Return a list of needed block for the surface,
+    // the block is a int pair eg: (0,0), (10,12) that indicates the position
+    // (x / this.block_w, y / this.block_h) within the map.
+    var needed_blocks = [];
+    var x_block_start = Math.floor((this.x) / this.block_w) -1;
+    var y_block_start = Math.floor((this.y) / this.block_h) -1;
+
+    for(var x=0; x<this.divider+2; x++) {
+        for(var y=0; y<this.divider+2; y++) {
+            needed_blocks.push({x:x_block_start + x, y:y_block_start + y});
         }
-
-        return this.free_buffers.shift();
-    };
-
-    ScrollingSurface.prototype.freeBuffers = function freeBuffers() {
-
-        var distanceList = [],
-            key, b, i, block;
-
-        for (key in this.drew) {
-            if (this.drew.hasOwnProperty(key)) {
-                b = this.drew[key];
-
-                distanceList.push({
-                    'd': sjs.math.hypo(b.x - (this.x - this.w / 2), b.y - (this.y - this.h / 2)),
-                    'key': key
-                });
-            }
+    }
+    return needed_blocks
+}
+
+SrollingSurface.prototype.blockToRender = function blockToRender() {
+    // Return the blocks that need rendering
+    var neededBlocks = this.neededBlocks();
+    var toRender = [];
+    for(var i=0; i<neededBlocks.length; i++) {
+        var b = neededBlocks[i];
+        var key = b.x+'|'+b.y;
+        if(!this.drawned[key])
+            toRender.push(b);
+    }
+    return toRender
+}
+
+SrollingSurface.prototype.renderBlocks = function renderBlocks() {
+    // new blocks to that need rendering
+    var render_list = this.blockToRender();
+    for(var i=0; i<render_list.length; i++) {
+        var toRender = render_list[i];
+        var b = this.createBlock(toRender.x, toRender.y);
+    }
+}
+
+SrollingSurface.prototype.recomposeBlocks = function recomposeBlocks() {
+    // draw all the blocks on the surface. My tests show that it's more efficient
+    // than redrawing the canvas on itself.
+    var toRecompose = this.neededBlocks();
+    for(var i=0; i<toRecompose.length; i++) {
+        var b = toRecompose[i];
+        var key = b.x+'|'+b.y;
+        var block = this.drawned[key];
+        // draw the block on the front canvas
+        var x = block.x - this.x;
+        var w = Math.min(this.w - x, this.block_w);
+        var y = block.y - this.y;
+        var h = Math.min(this.h - y, this.block_h);
+
+        left_source = 0;
+        if(x < 0) {
+            var left_source = -x;
+            w = w + x;
+            x = 0;
         }
 
-        distanceList = distanceList.sort(function(a, b) {
-            return b.d - a.d;
-        });
-
-        for (i = 0; i < this.minimum_free_buffer; i += 1) {
-            key = distanceList[i].key;
-            block = this.drew[key];
-            delete this.drew[key];
-            this.free_buffers.append(block.buffer);
+        top_source = 0;
+        if(y < 0) {
+            var top_source = -y;
+            h = h + y;
+            y = 0;
         }
-    };
-
-    ScrollingSurface.prototype.createBlock = function createBlock(blockX, blockY) {
-
-        // Create a block for a position
-        var key, buffer, x, y, block;
 
-        key = blockX + '|' + blockY;
-        if (this.drew[key]) {
-            return this.drew[key];
+        if(w>0 && h>0) {
+            this.front.ctx.drawImage(block.buffer.ctx.canvas,
+            left_source, top_source,
+            w, h,
+            x, y,
+            w, h);
         }
-
-        buffer = this.getBuffer();
-        // by painting the callback canvas, we don't need to clear it nor the bufferCanvas
-        buffer.ctx.fillRect(0,  0, this.block_w, this.block_h);
-        // redraw to copy on the necessary part of the buffer
-        x = blockX * this.block_w;
-        y = blockY * this.block_h;
-
-        this.redrawCallback(buffer, x, y);
-
-        block = {
-            'x': x,
-            'y': y,
-            'block_x': blockX,
-            'block_y': blockY,
-            'buffer': buffer
-        };
-        this.drew[key] = block;
-
-        return block;
-    };
-
-    ScrollingSurface.prototype.neededBlocks = function neededBlocks() {
-
-        // Return a list of needed block for the surface,
-        // the block is a int pair eg: (0,0), (10,12) that indicates the position
-        // (x / this.block_w, y / this.block_h) within the map.
-        var needed = [],
-            xBlockStart, yBlockStart,
-            x, y;
-
-        xBlockStart = Math.floor((this.x) / this.block_w) - 1;
-        yBlockStart = Math.floor((this.y) / this.block_h) - 1;
-
-        for (x = 0; x < this.divider + 2; x += 1) {
-            for (y = 0; y < this.divider + 2; y += 1) {
-                needed.push({
-                    'x': xBlockStart + x,
-                    'y': yBlockStart + y
-                });
-            }
-        }
-
-        return needed;
-    };
-    
-    ScrollingSurface.prototype.blockToRender = function blockToRender() {
-
-        // Return the blocks that need rendering
-        var neededBlocks = this.neededBlocks(),
-            toRender = [],
-            i, block, key;
-
-        for (i = 0; i < neededBlocks.length; i += 1) {
-            block = neededBlocks[i];
-            key = block.x + '|' + block.y;
-
-            if (!this.drew[key]) {
-                toRender.push(block);
-            }
-        }
-
-        return toRender;
-    };
-
-    ScrollingSurface.prototype.renderBlocks = function renderBlocks() {
-
-        // new blocks to that need rendering
-        var renderList = this.blockToRender(),
-            i, toRender, block;
-
-        for (i = 0; i < renderList.length; i += 1) {
-            toRender = renderList[i];
-            block = this.createBlock(toRender.x, toRender.y);
-        }
-    };
-
-    ScrollingSurface.prototype.recomposeBlocks = function recomposeBlocks() {
-
-        // draw all the blocks on the surface. My tests show that it's more efficient
-        // than redrawing the canvas on itself.
-        var toRecompose = this.neededBlocks(),
-            i, b, key, block, x, y, w, h,
-            leftSource, topSource;
-
-        for (i = 0; i < toRecompose.length; i += 1) {
-            b = toRecompose[i];
-            key = b.x + '|' + b.y;
-            
-            if (this.drew[key]) {
-                block = this.drew[key];
-                // draw the block on the front canvas
-                x = block.x - this.x;
-                w = Math.min(this.w - x, this.block_w);
-                y = block.y - this.y;
-                h = Math.min(this.h - y, this.block_h);
-    
-                leftSource = 0;
-                if (x < 0) {
-                    leftSource = -x;
-                    w = w + x;
-                    x = 0;
-                }
-    
-                topSource = 0;
-                if (y < 0) {
-                    topSource = -y;
-                    h = h + y;
-                    y = 0;
-                }
-    
-                if (w > 0 && h > 0) {
-                    this.front.ctx.drawImage(
-                        block.buffer.ctx.canvas,
-                        leftSource, topSource,
-                        w, h,
-                        x, y,
-                        w, h
-                    );
-                }
-            }
-        }
-    };
-
-    ScrollingSurface.prototype.move = function move(x, y) {
-
-        this.x = this.x + x;
-        this.y = this.y + y;
-
-        return this;
-    };
-
-    ScrollingSurface.prototype.position = function position(x, y) {
-
-        this.x = x;
-        this.y = y;
-
-        return this;
-    };
-
-    ScrollingSurface.prototype.update = function update() {
-
-        this.renderBlocks();
-        this.recomposeBlocks();
-    };
-
-    ScrollingSurface.prototype.remove = function remove() {
-
-        this.Scene.dom.removeChild(this.dom);
-        this.bufferCanvas = null;
-        this.front = null;
-    };
-
-    global.sjs.ScrollingSurface = ScrollingSurface;
-}(this));
+    }
+}
+
+SrollingSurface.prototype.move = function move(x, y) {
+    this.x = this.x + x;
+    this.y = this.y + y;
+    return this;
+}
+
+SrollingSurface.prototype.position = function position(x, y) {
+    this.x = x;
+    this.y = y;
+    return this;
+}
+
+SrollingSurface.prototype.update = function update() {
+    this.renderBlocks();
+    this.recomposeBlocks();
+}
+
+SrollingSurface.prototype.remove = function remove() {
+    this.scene.dom.removeChild(this.dom);
+    this.bufferCanvas = null;
+    this.front = null;
+}
+
+global.sjs.SrollingSurface = SrollingSurface;
+
+})(this);
\ No newline at end of file
diff --git a/sprite.js b/sprite.js
index 474c97f..c57508b 100644
--- a/sprite.js
+++ b/sprite.js
@@ -48,33 +48,6 @@ browser_specific_runned = false,
 // global z-index
 zindex = 1;
 
-
-//IE 8 fix help functions
-function _addEventListener(element, type,listener,useCapture){
-    if(element.addEventListener){
-        element.addEventListener(type, listener, useCapture);
-    }else if(element.attachEvent){
-        element.attachEvent("on" + type, listener);
-    }
-}
-
-function _removeEventListener(element, type,listener,useCapture){
-    if(element.removeEventListener){
-        element.removeEventListener(type, listener, useCapture);
-    }else if (element.detachEvent){
-        element.detachEvent(type, listener);
-    }
-}
-
-function _preventEvent(e){
-    if (e.preventDefault) {
-        e.preventDefault();
-        e.stopPropagation();
-    }else{
-        e.returnValue = false;
-    }
-}
-
 // math functions
 function mod(n, base) {
     // strictly positive modulo
@@ -123,26 +96,12 @@ function initBrowserSpecific() {
         'MozTransform',
         'OTransform',
         'msTransform']);
-
-    sjs.requestAnimationFrame = has(global, [
+    sjs.animationFrame = has(global, [
         'requestAnimationFrame',
         'mozRequestAnimationFrame',
         'webkitRequestAnimationFrame',
         'oRequestAnimationFrame',
         'msRequestAnimationFrame']);
-
-    sjs.cancelAnimationFrame = has(global, [
-        'cancelAnimationFrame',
-        'cancelRequestAnimationFrame',
-        'mozCancelAnimationFrame',
-        'mozCancelRequestAnimationFrame',
-        'webkitCancelAnimationFrame',
-        'webkitCancelRequestAnimationFrame',
-        'oCancelAnimationFrame',
-        'oCancelRequestAnimationFrame',
-        'msCancelAnimationFrame',
-        'msCancelRequestAnimationFrame']);
-
     sjs.createEventProperty = has(doc, ['createEvent', 'createEventObject']);
     browser_specific_runned = true;
 }
@@ -312,7 +271,7 @@ Scene.prototype.loadImages = function loadImages(images, callback) {
         sjs.spriteCache[src].loading = true;
         img = doc.createElement('img');
         sjs.spriteCache[src].img = img;
-        _addEventListener(img, 'load', function () {
+        img.addEventListener('load', function () {
             sjs.spriteCache[src].loaded = true;
             toLoad -= 1;
             if (error === false) {
@@ -325,7 +284,7 @@ Scene.prototype.loadImages = function loadImages(images, callback) {
             }
         }, false);
 
-        _addEventListener(img, 'error', function () {
+        img.addEventListener('error', function () {
             error = true;
             div.innerHTML = 'Error loading image ' + src;
         }, false);
@@ -607,25 +566,6 @@ Sprite.prototype.size = function (w, h) {
     return this;
 };
 
-Sprite.prototype.toFront = function(){
-    this.layer.lastZIndex++;
-    return this.setZIndex(this.layer.lastZIndex);
-};
-
-Sprite.prototype.toBack = function(){
-    this.layer.lastZIndex++;
-    return this.setZIndex(-this.layer.lastZIndex);
-};
-
-Sprite.prototype.setZIndex = function(z){
-    if(this.dom && this.layer) {
-        this._dirty.zindex = true;
-        this.changed = true;
-        this.zindex = z;
-    }
-    return this;
-};
-
 // Physic
 
 Sprite.prototype.setForce = function setForce(xf, yf) {
@@ -791,17 +731,11 @@ Sprite.prototype.update = function updateDomProperties () {
         style.backgroundPosition=-(this.xoffset | 0) + 'px ' + -(this.yoffset | 0) + 'px';
 
     if (this._dirty.opacity)
-        if ('opacity' in document.body.style) {
-            style.opacity = this.opacity;     
-        } else {
-            style.filter = "alpha(opacity="+ this.opacity*100 + ")";
-        }
+        style.opacity = this.opacity;
 
     if (this._dirty.color)
         style.backgroundColor = this.color;
-    
-    if (this._dirty.zindex)
-        style.zIndex = this.zindex;
+
 
     if(this._dirty.transform) {
         style[sjs.tproperty + 'Origin'] = this.xTransformOrigin + " " + this.yTransformOrigin;
@@ -851,8 +785,8 @@ Sprite.prototype.canvasUpdate = function canvasUpdate(layer) {
     ctx.save();
     if (this.xTransformOrigin === null) {
         // 50% 505 in CSS
-        transx = this.w >> 1;
-        transy = this.h >> 1;
+        transx = this.w / 2 | 0;
+        transy = this.h / 2 | 0;
     } else {
         transx = this.xTransformOrigin;
         transy = this.yTransformOrigin;
@@ -945,7 +879,7 @@ Sprite.prototype.loadImg = function (src, resetSize) {
     if (_loaded)
         imageReady();
     else {
-        _addEventListener(this.img, 'load', imageReady, false);
+        this.img.addEventListener('load', imageReady, false);
         this.img.src = src;
     }
     return this;
@@ -974,10 +908,11 @@ Sprite.prototype.explode2 = function explode(v, horizontal, layer) {
     var props = {layer:layer, color:this.color};
     if (v === undefined) {
         if (horizontal)
-            v = this.h >> 1;
+            v = this.h / 2;
         else
-            v = this.w >> 1;
+            v = this.w / 2;
     }
+    v = v | 0;
     var s1 = layer.scene.Sprite(this.src, props);
     var s2 = layer.scene.Sprite(this.src, props);
     if (horizontal) {
@@ -998,9 +933,11 @@ Sprite.prototype.explode2 = function explode(v, horizontal, layer) {
 
 Sprite.prototype.explode4 = function explode(x, y, layer) {
     if (x === undefined)
-        x = this.w >> 1;
+        x = this.w / 2;
     if (y === undefined)
-        y = this.h >> 1;
+        y = this.h / 2;
+    x = x | 0;
+    y = y | 0;
     if (!layer)
         layer = this.layer;
     var props = {layer:layer, color:this.color};
@@ -1161,22 +1098,16 @@ Ticker_ = function Ticker_(scene, paint, options) {
 
     this.scene = scene;
 
-    if (this.constructor !== Ticker_){
+    if (this.constructor !== Ticker_)
         return new Ticker_(tickDuration, paint);
-    }
 
     this.tickDuration = optionValue(options, 'tickDuration', 16);
     this.expectedFps = 1000 / this.tickDuration;
     this.useAnimationFrame = optionValue(options, 'useAnimationFrame', false);
-    if (!sjs.requestAnimationFrame || !sjs.cancelAnimationFrame) {
+    if (!sjs.animationFrame)
         this.useAnimationFrame = false;
-    }
-
     this.paint = paint;
 
-    var that = this;
-    this.bindedRun = function bindedRun(t) {that.run(t);}
-
     this.start = new Date().getTime();
     this.now = this.start;
     this.ticksElapsed = 0;
@@ -1188,7 +1119,7 @@ Ticker_ = function Ticker_(scene, paint, options) {
     this.lowFrameRate = false;
 };
 
-Ticker_.prototype.next = function (timestamp) {
+Ticker_.prototype.next = function () {
     var now = new Date().getTime();
     this.diff = now - this.now;
     this.now = now;
@@ -1201,11 +1132,11 @@ Ticker_.prototype.next = function (timestamp) {
     return this.lastTicksElapsed;
 };
 
-Ticker_.prototype.run = function(timestamp) {
+Ticker_.prototype.run = function () {
     if (this.paused) {
         return;
     }
-    /*if(this.lowFrameRate || this.load > 20 && this.fps < (this.expectedFps / 2)) {
+    if(this.lowFrameRate || this.load > 20 && this.fps < (this.expectedFps / 2)) {
         this.lowFrameRate = true;
         if(this.skippedFrames == 1) {
             this.skippedFrames = 0;
@@ -1218,53 +1149,49 @@ Ticker_.prototype.run = function(timestamp) {
         }
     } else {
         this.skipPaint = false;
-    }*/
+    }
 
     var t = this;
-    var ticksElapsed = this.next(timestamp);
-
+    var ticksElapsed = this.next();
     // no update needed, this happen on the first run
-    /*if (ticksElapsed == 0) {
+    if (ticksElapsed == 0) {
         // this is not a cheap operation
-        setTimeout(this.bindedRun, this.tickDuration);
+        setTimeout(function () {t.run()}, this.tickDuration);
         return;
-    }*/
-    
-    //if(!this.skipPaint) {
-    for (var name in this.scene.layers) {
-        var layer = this.scene.layers[name];
-        if (layer.useCanvas && layer.autoClear) {
-            layer.clear();
+    }
+
+    if(!this.skipPaint) {
+        for (var name in this.scene.layers) {
+            var layer = this.scene.layers[name];
+            if (layer.useCanvas && layer.autoClear) {
+                layer.clear();
+            }
         }
     }
-    //}
 
     this.paint(this);
     // reset the keyboard change
-    if (this.scene.input) {
+    if (this.scene.input)
         this.scene.input.next();
-    }
+
     this.timeToPaint = (new Date().getTime()) - this.now;
     // spread the load value on 2 frames so the value is more stable
-    this.load = ((this.timeToPaint / this.tickDuration * 100) + this.load) >> 1;
+    this.load = ((this.timeToPaint / this.tickDuration * 100) + this.load) / 2 | 0;
     this.fps = Math.round(1000 / (this.now - (this.lastPaintAt || 0)));
 
     this.lastPaintAt = this.now;
     if (this.useAnimationFrame) {
         this.tickDuration = 16;
-        this.animationId = global[sjs.requestAnimationFrame](this.bindedRun);
+        global[sjs.animationFrame](function () {t.run()});
     } else {
         var _nextPaint = Math.max(this.tickDuration - this.timeToPaint, 6);
-        this.timeout = setTimeout(this.bindedRun, _nextPaint);
+        this.timeout = setTimeout(function () {t.run()}, _nextPaint);
     }
 };
 
 Ticker_.prototype.pause = function () {
-    if (this.useAnimationFrame) {
-        global[sjs.cancelAnimationFrame](this.animationId);
-    } else {
-        global.clearTimeout(this.timeout);
-    }
+    global.clearTimeout(this.timeout);
+    global[sjs.animationFrame] = undefined;
     this.paused = true;
 };
 
@@ -1394,7 +1321,7 @@ _Input = function _Input(scene) {
     }
 
     var listen = function (name, fct) {
-        _addEventListener(global, name, fct, false);
+        global.addEventListener(name, fct, false);
     }
 
     // Mouse like events
@@ -1410,7 +1337,7 @@ _Input = function _Input(scene) {
         that.mouse.down = true;
         that.mousepressed = true;
         // prevent unwanted browser drag and drop behavior
-        _preventEvent(event);
+        event.preventDefault();
     }
 
     function mouseUpEvent(event) {
@@ -1455,7 +1382,7 @@ _Input = function _Input(scene) {
     });
 
     listen("touchmove", function (e) {
-        _preventEvent(e); // avoid scrolling the page
+        e.preventDefault(); // avoid scrolling the page
         e = reduceTapEvent(e);
         updateKeyChange('space', false); // if it moves: it is not a tap
         mouseMoveEvent(e);
@@ -1510,13 +1437,13 @@ _Input = function _Input(scene) {
     // can be used to avoid key jamming
     listen("keypress", function (e) {});
     if (!sjs.debug)
-        listen("contextmenu", function (e) {_preventEvent(e);});
+        listen("contextmenu", function (e) {e.preventDefault()});
 };
 
 
 // Add an automatic pause to all the scenes when the user
 // quit the current window.
-_addEventListener(global, "blur", function (e) {
+global.addEventListener("blur", function (e) {
     for (var i = 0; i < sjs.scenes.length; i++) {
         var scene = sjs.scenes[i];
         if (!scene.autoPause)
@@ -1533,14 +1460,15 @@ _addEventListener(global, "blur", function (e) {
                 div.style.textAlign = 'center';
                 div.style.paddingTop = ((scene.h / 2) - 32) + 'px';
                 var listener = function (e) {
-                    _preventEvent(e);
+                    e.stopPropagation();
+                    e.preventDefault();
                     scene.dom.removeChild(div);
-                    _removeEventListener(doc, 'click', listener, false);
-                    _removeEventListener(doc, 'keyup', listener, false);
+                    doc.removeEventListener('click', listener, false);
+                    doc.removeEventListener('keyup', listener, false);
                     scene.ticker.resume();
                 }
-                _addEventListener(doc, 'click', listener, false);
-                _addEventListener(doc, 'keyup', listener, false);
+                doc.addEventListener('click', listener, false);
+                doc.addEventListener('keyup', listener, false);
                 scene.dom.appendChild(div);
             }
         }
@@ -1587,9 +1515,7 @@ Layer = function Layer(scene, name, options) {
         // we send back the same.
         return this.scene.layers[name];
     }
-    
-    this.lastZIndex = 0;
-    
+
     domElement = doc.getElementById(name);
     if (!domElement)
         needToCreate = true;
diff --git a/tests/mapeditor/map_reader.html b/tests/mapeditor/map_reader.html
index d65c493..56d5163 100644
--- a/tests/mapeditor/map_reader.html
+++ b/tests/mapeditor/map_reader.html
@@ -156,7 +156,7 @@ function main() {
     if(surface)
         surface.remove();
 
-    surface = sjs.ScrollingSurface(scene, scene.w, scene.h, function(layer, _x, _y) {
+    surface = sjs.SrollingSurface(scene, scene.w, scene.h, function(layer, _x, _y) {
         sjs.map.paintOn(layer, _x, _y);
     });
 
@@ -434,4 +434,4 @@ function paint(ticker) {
 }
 
 });
-</script>
+</script>
\ No newline at end of file
diff --git a/tests/server.py b/tests/server.py
index 9f8fa03..2626027 100644
--- a/tests/server.py
+++ b/tests/server.py
@@ -41,9 +41,6 @@ class Allow(SimpleHTTPServer.SimpleHTTPRequestHandler):
             self.send_response(200)
             self.send_header("Content-type", ctype)
             self.send_header("Access-Control-Allow-Origin", "*")
-            if path.endswith("png") or path.endswith("gif") or path.endswith("jpg"):
-                # 2 minutes cache
-                self.send_header("Cache-Control", "max-age=120");
             self.end_headers()
             return f
 
@@ -52,4 +49,4 @@ SocketServer.ThreadingTCPServer.allow_reuse_address = True
 httpd = SocketServer.TCPServer(("", PORT), Allow)
 
 print "serving at port", PORT
-httpd.serve_forever()
+httpd.serve_forever()
\ No newline at end of file
diff --git a/tests/test_particles.html b/tests/test_particles.html
index bb9a2b4..0feb5aa 100644
--- a/tests/test_particles.html
+++ b/tests/test_particles.html
@@ -83,7 +83,7 @@ window.onload = function() {
         useReq = req.checked;
         ticker.useAnimationFrame = useReq;
     }
-    if(!sjs.requestAnimationFrame || !sjs.cancelAnimationFrame)
+    if(!sjs.animationFrame)
         req.disabled = "disabled";
 
     var canvas = window.location.href.indexOf('canvas') != -1;
diff --git a/tests/test_scrolling.html b/tests/test_scrolling.html
index 78200c6..48145c3 100644
--- a/tests/test_scrolling.html
+++ b/tests/test_scrolling.html
@@ -37,7 +37,7 @@ scene.loadImages(['img/tiles.png'], function() {
         tile_list.push(tile);
     }
 
-    var surface = sjs.ScrollingSurface(scene, scene.w, scene.h, function(layer, x, y) {
+    var surface= sjs.SrollingSurface(scene, scene.w, scene.h, function(layer, x, y) {
         for(var x = 0; x < (layer.w / 48); x++) {
             for(var y = 0; y < (layer.h / 48); y++) {
                 var tile = random_from_list(tile_list);
@@ -61,4 +61,4 @@ scene.loadImages(['img/tiles.png'], function() {
 
 });
 
-</script>
+</script>
\ No newline at end of file
