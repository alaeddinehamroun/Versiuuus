

import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Cart } from "../models/cart.model";


@Injectable({
    providedIn: 'root'
})



export class CartService {

    cart:Cart[] = []
    cart$ = new BehaviorSubject<Cart[]>(this.cart);

    constructor() {

        let info: Cart[]
        let data = localStorage.getItem('cart');
        if (data !== null) {
            info = JSON.parse(data)
            this.cart = info
        }
        else {
            info = []
            this.cart = []
        }
        this.cart$.next(this.cart);

    }

    AddProductToCart(id: string, name: string, category: string) {
        this.cart.push({ id: id, name: name, category: category})
        localStorage.setItem('cart', JSON.stringify(this.cart))
        this.cart$.next(this.cart);

    }
    RemoveProductFromCart(id: string) {
        let index = this.cart.findIndex(p => p.id == id)
        if (index > -1)
            this.cart.splice(index, 1)
        localStorage.setItem('cart', JSON.stringify(this.cart))
        this.cart$.next(this.cart);

    }
    userHasLiked(id: string) {
        if (this.cart) {
            let index = this.cart.findIndex(p => p.id == id)
            if (index > -1)
                return true
        }
        return false
    }

}
