import {ShopItem} from "@/models/ShopItems";

function ShopCollection(){
    let arr = [];

    arr.addItem = function(item){
        this.push(
            new ShopItem(
                item,
                ((collection) => function(){
                    collection.removeItem(this)
                })(this) 
            )
        );
        // allows for chaining
        return this;
    }


    return arr;
}

export default ShopCollection;