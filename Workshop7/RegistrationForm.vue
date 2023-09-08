<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <form class="p-4 border rounded">
                    <h2 class="mb-4">Registration Form</h2>

                    <div class="mb-3">
                        <label for="name" class="form-label">Name:</label>
                        <input v-model="name" id="name" class="form-control" />
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label">Email:</label>
                        <input v-model="email" id="email" class="form-control" type="email" />
                    </div>

                    <div class="mb-3">
                        <label for="password" class="form-label">Password:</label>
                        <input v-model="password" id="password" class="form-control" type="password"/>
                    </div>

                    <div class="mb-3">
                        <label for="address" class="form-label">Address:</label>
                        <textarea v-model="address" id="address" class="form-control"  rows="3"></textarea>
                    </div>

                    <div class="form-check mb-3">
                        <input v-model="termsAgreed" class="form-check-input" type="checkbox" id="termsAgreed" />
                        <label for="termsAgreed" class="form-check-label">I agree to the terms of service</label>
                    </div>

                    <button @click="register" :disabled="!isValid" class="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return {
            name: '',
            email: '',
            password: '',
            address: '',
            termsAgreed: false,
        };
    },
    computed: {
        isValid() {
            return this.name && this.email && this.password && this.address && this.termsAgreed;
        }
    },
    methods: {
        register(){
            if(this.isValid) {
                this.$emit('user-registered',{
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    address: this.address,
                });
            }
        }
    }
}
</script>

<style scoped>

</style>
