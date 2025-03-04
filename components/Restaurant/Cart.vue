<template>
    <div class="cart">
        <IconsCart @click="openCart"/>
        <div class="cartResume" v-if="!cartModal">
            <h2>Quantidade: {{ itemsInCart.length }}</h2>
            <p>Valor: {{ price }}</p>
            <ul v-if="itemsInCart.length > 0">
                <li v-for="(item, index) in uniqueItems">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cartModal: {
                type: Boolean,
                default: false
            },
            cartStore: useCartStore(),
            itemsInCart: {
                type: Array,
                default: []
            },
            uniqueItems: {
                'Name': '',
                'Price:'
            },
            price: 0,
        }
    },
    watch: {
        'cartStore.cartItems': {
            handler(newVal, oldVal) {
                this.itemsInCart = newVal;
                for (var i = 0; i < newVal.length; i++) {
                    this.price += newVal[i].Price;
                    if (!this.uniqueItems.find(item => item === newVal[i].Name)) {
                        this.uniqueItems.push(newVal[i].Name)
                    }
                    
                }
                console.log(this.uniqueItems)
            },
            deep: true,
        }
    },
    methods: {
        openCart() {
            this.cartModal = !this.cartModal;
        }
    }
}
</script>

<style>
.cartResume {
     width: 200px;
     height: 200px;
     background-color: grey;
     position: absolute;
     top: 24px;
}
</style>