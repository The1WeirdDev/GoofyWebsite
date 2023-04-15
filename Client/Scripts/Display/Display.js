class Display{
    static canvas = null;
    static context = null;

    static Init(){

    }
    static Update(){
        if(gl){
            //gl.cullFace(gl.FRONT);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

            //Clearing Screen
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
            gl.clearColor(0, 0.5, 1, 1);
        }
    }
    static CleanUp(){

    }

    static DrawRect(color, x1, y1, width, height){
        if(!gl){
            Display.context.fillStyle = color;
            Display.context.fillRect(x1, y1, width, height);
        }
    }

    static SetBackgroundColor(color){
        document.body.style.background = color;
    }

    static SetViewport(x, y, width, height){
        gl.viewport(x, y, width, height);
    }

    static SetCanvasSize(width, height){
        Display.canvas.width = width;
        Display.canvas.height = height;
        Display.OnUpdateCanvasSize();
    }

    static OnUpdateCanvasSize(){
        if(!gl)
            return;

        Display.SetViewport(0, 0, canvas.width, canvas.height);
    }

    static CenterCanvas(){
        Display.canvas.style.left = (Math.max(0, innerWidth - Display.canvas.width) / 2) + "px";
    }

    static LoadWebGl(){
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("webgl2", { premultipliedAlpha: true, antialias: true });
        
        document.body.appendChild(canvas);

        Display.canvas = canvas;
        Display.context = context;
        gl = Display.context;
    }

    static LoadWeb2D(){
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        
        document.body.appendChild(canvas);

        Display.canvas = canvas;
        Display.context = context;

        Display.canvas.style.position="absolute";
        Display.canvas.style.top="17.5%";
    }

    static CreateCanvas(){
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("webgl2", { premultipliedAlpha: true, antialias: true });
        
        document.body.appendChild(canvas);

        return {canvas:canvas, context:context};
    }
}