<template>
    <div class="item" @click="addCart()">
        <img :src="ItemDetails.Image" alt="">
        <p>{{ ItemDetails.Name }}</p>
        <p>{{ ItemDetails.Description }}</p>
        <p>R$ {{ ItemDetails.Price }}</p>
    </div>

    <UOModal :open.sync="modalAddCart" @close="modalAddCart = false">
        <img src="" alt="">
        <h3>Gostaria de adicionar o pedido ao carrinho?</h3>
        <UOButton @click="addToCart">Sim</UOButton>
        <UOButton>Não</UOButton>
    </UOModal>
</template>

<script>
export default {
    data() {
        return {
            modalAddCart: false,
        }
    },
    props: {
        ItemDetails: {},
    },
    methods: {
        addCart() {
            this.modalAddCart = true;
        },
        addToCart() {
            const cartStore = useCartStore();
            cartStore.addCartItems(this.ItemDetails);
            console.log(this.ItemDetails);
        }
    }
}
</script>

<style scoped >
.item {
    background-color: red;
}
.item img {
    height: 64px;
    width: 64px;
    object-fit: cover;
}
</style>