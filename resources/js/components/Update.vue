<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Editar produto</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="update">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label for="name">Nome</label>
                                    <input v-validate="'required'" id="name" type="text" class="form-control"
                                        v-model="product.name">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label for="description">Descrição</label>
                                    <input v-validate="'required'" id="description" type="text" class="form-control"
                                        v-model="product.description">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label for="brand">Marca</label>
                                    <input v-validate="'required'" id="brand" type="text" class="form-control"
                                        v-model="product.brand">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label for="quantity">Quantidade</label>
                                    <input v-validate="'required'" id="quantity" type="text" class="form-control"
                                        v-model="product.quantity">
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Atualizar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "product-update",
        data() {
            return {
                product: {
                    name: "",
                    description: "",
                    brand: "",
                    quantity: 0
                }
            }
        },
        mounted() {
            this.getProduct();
        },
        methods: {
            async getProduct() {
                await axios.get(`/api/products/${this.$route.params.id}`).then((response) => {
                    const {
                        name,
                        description,
                        brand,
                        quantity
                    } = response.data[0];

                    this.product.name = name;
                    this.product.description = description;
                    this.product.brand = brand;
                    this.product.quantity = quantity;
                }).catch((err) => console.log(err))
            },
            async update() {
                await axios.put(`/api/products/update/${this.$route.params.id}`, this.product).then((response) => {
                    this.$router.push({
                        name: "home"
                    })
                })
            }
        }
    }

</script>
