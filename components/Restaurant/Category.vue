<template>
    <div class="category">
        <h3>{{ Category.Name }}</h3>
        <RestaurantItem v-for="item in Category.Items" :ItemDetails="item"/>
    </div>
</template>

<script>
export default {
    props: {
        Category: [],
    },
    mounted() {
        setTimeout(() => {console.log(this.Category)}, 5000)
    },
}
</script>

<style scoped>

</style>