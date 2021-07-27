<template>
    <div class="mx-auto">
        <div class="d-flex justify-content-between">
            <h1 class="mb-4">Produtos</h1>
            <router-link to="/create"><button class="btn btn-primary">Criar produto</button></router-link>
        </div>
        <div v-if="products.length > 0" class="row">
            <div v-for="(product, key) in products" :key="key" class="col-lg-4 col-8 mb-4">
                <div class="card" style="width: 18rem;">
                    <h5 class="card-header">{{ product.name }}</h5>
                    <div class="card-body">
                        <p class="card-text">{{ product.description }}</p>
                        <p class="font-weight-bold">Quantidade: {{ product.quantity }}</p>
                        <span class="font-weight-bold">Criação:
                            {{ moment(product.created_at).format("DD/MM/YYYY") }}</span>
                    </div>
                    <div class="card-footer">
                        <router-link :to='{name:"update",params:{id:product.id}}' class="btn btn-success">Editar
                        </router-link>
                        <button type="button" @click="deleteProduct(product.id)" class="btn btn-danger">Deletar</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <h4>Nenhum produto encontrado...</h4>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import moment from "moment";

    export default {
        name: "products",
        data() {
            return {
                products: [],
                moment: moment
            }
        },
        mounted() {
            this.getProducts();
        },
        methods: {
            async getProducts() {
                await axios.get('/api/products').then(response => {
                    this.products = response.data
                })
            },
            async deleteProduct(id) {
                if (confirm("Você deseja deletar esse produto mesmo?")) {
                    await axios.delete(`/api/products/${id}`);

                    return this.getProducts();
                }
            }
        }
    }

</script>
