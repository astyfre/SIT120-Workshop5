<template>
    <div>
        <p>{{ greetingMessage }}</p>
    </div>
</template>

<script>
//"https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"

export default {
    props: {
        userData: Object
    },
    computed: {
        greetingMessage () {
            if (this.userData) {
                return `Welcome, ${this.userData.name}! Thank you for registering on our shopping website.`;
             }
            return "";
        }
    }
}
</script>
