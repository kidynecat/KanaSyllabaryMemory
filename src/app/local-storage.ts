export class LocalStorage {
    private static storage=window.localStorage;
    public static save<T>(key:string,value:T){
            var d=JSON.stringify(value);
            this.storage.setItem(key,d);
    }

    public static load<T>(key:string):T{
        var json=this.storage.getItem(key);
        var jsonObj=JSON.parse(json);
        return jsonObj
    }
}
