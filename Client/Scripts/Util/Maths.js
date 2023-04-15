class Maths{
    static Lerp(a, b, c){
        return a * (1 - c) + b * c;
    }

    static ToDeg(radians){
        return (180 / Math.PI) * radians;
    }

    static ToRad(degrees){
        return (Math.PI / 180) * degrees;
    }
}

class Vector{
    x;

    Add(v){}
    Subtract(v){}
    Multiply(v){}
    Divide(v){}
}

class Vector2 extends Vector{
    y;

    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    Add(v){
        var result = new Vector2(0, 0);
        result.x = this.x + v.x;
        result.y = this.y + v.y;

        return result;
    }
    Subtract(v){
        var result = new Vector2(0, 0);
        result.x = this.x - v.x;
        result.y = this.y - v.y;

        return result;
    }
    Multiply(v){
        var result = new Vector2(0, 0);
        result.x = this.x * v.x;
        result.y = this.y * v.y;

        return result;
    }
    Divide(v){
        var result = new Vector2(0, 0);
        result.x = this.x / v.x;
        result.y = this.y / v.y;

        return result;
    }
}
class Vector3 extends Vector{
    y;
    z;

    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    Add(v){
        var result = new Vector3(0, 0, 0);
        result.x = this.x + v.x;
        result.y = this.y + v.y;
        result.z = this.z + v.z;

        return result;
    }
    Subtract(v){
        var result = new Vector3(0, 0, 0);
        result.x = this.x - v.x;
        result.y = this.y - v.y;
        result.z = this.z - v.z;

        return result;
    }
    Multiply(v){
        var result = new Vector3(0, 0, 0);
        result.x = this.x * v.x;
        result.y = this.y * v.y;
        result.z = this.z * v.z;

        return result;
    }
    Divide(v){
        var result = new Vector3(0, 0, 0);
        result.x = this.x / v.x;
        result.y = this.y / v.y;
        result.z = this.z / v.z;

        return result;
    }
}
class Vector4 extends Vector{
    y;
    z;
    w;

    constructor(x, y, z, w){
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }

    Add(v){
        var result = new Vector4(0, 0, 0, 0);
        result.x = this.x + v.x;
        result.y = this.y + v.y;
        result.z = this.z + v.z;
        result.w = this.w + v.w;

        return result;
    }
    Subtract(v){
        var result = new Vector4(0, 0, 0, 0);
        result.x = this.x - v.x;
        result.y = this.y - v.y;
        result.z = this.z - v.z;
        result.w = this.w - v.w;

        return result;
    }
    Multiply(v){
        var result = new Vector4(0, 0, 0, 0);
        result.x = this.x * v.x;
        result.y = this.y * v.y;
        result.z = this.z * v.z;
        result.w = this.w * v.w;

        return result;
    }
    Divide(v){
        var result = new Vector4(0, 0, 0, 0);
        result.x = this.x / v.x;
        result.y = this.y / v.y;
        result.z = this.z / v.z;
        result.w = this.w / v.w;

        return result;
    }
}