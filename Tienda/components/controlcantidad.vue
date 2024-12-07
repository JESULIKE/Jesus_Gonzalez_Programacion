<template>
    <button>
        <slot name="simbolo"> + </slot>

    </button>
</template>
<script>
export default {
    props: {
        operacion: {
        type: Number,
        default: 0
    },
     id : {
        type: Number,
        },
    },
    methods: {
        aumentar(){
            this.$store.dispatch('incrementarCantidad', r);
        }
    },
}
</script>