<template>
    <div class="modal" v-if="open">
        <div class="modal__body">
            <div class="modal__body--content">
                <slot></slot>
            </div>
        </div>
        <div class="modal__background" @click="closeModal">
    
        </div>
    </div>
</template>

<script>
export default {
    props: {
        open: {
            type: Boolean,
            required: true,
        },
    },
    methods: {
        closeModal() {
            this.$emit("close"); // Emite para o pai deixar o open como false
        },
    },
};
</script>


<style scoped>
.modal {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
}
.modal__body {
    position: fixed;
    top: 25%;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 10px;
}
.modal__body--content {
    padding: 10px;
}
.modal__background {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.295);
}
</style>