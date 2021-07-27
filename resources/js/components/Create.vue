<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Adicionar produto</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="create">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label for="name">Nome</label>
                                    <input v-validate="'required'" required id="name" type="text" class="form-control" v-model="product.name">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label for="description">Descrição</label>
                                    <input v-validate="'required'" id="description" type="text" class="form-control" required
                                        v-model="product.description">
                                        <span v-show="errors.has('phone')" class="help is-danger">{{ errors.first('description') }}</span>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label for="brand">Marca</label>
                                    <input required v-validate="'required'" id="brand" type="text" class="form-control" v-model="product.brand">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label for="quantity">Quantidade</label>
                                    <input required v-validate="'required|numeric'" id="quantity" type="text" class="form-control" v-model="product.quantity">
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Criar</button>
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
        name: "product-add",
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
        methods: {
            async create() {
                await axios.post('/api/products/new', this.product).then((response) => {
                    this.$router.push({
                        name: "home"
                    })
                });
            }
        }
    }

</script>
