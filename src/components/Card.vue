<template>
    <div class="card shadow-sm">
      <spn class="img" :style="{backgroundImage: `url(${item.imgPath})`}" />
      <div class="card-body">
        <p class="card-text">
          {{item.name}}
          <spen class="discount badge bg-danger">
            {{item.discountPer}}%
          </spen>
        </p>

        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" @click="addToCart(item.id)">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </button>
          </div>
          <small class="price text-body-secondary">
          {{lib.getNumberFormatted(item.price)}}원
          </small>

          <small class="real text-body-secondary">
            {{lib.getNumberFormatted(item.price - (item.price * item.discountPer / 100))}}원
          </small>
        </div>
      </div>
    </div>
</template>

<script>
import lib from "@/scripts/lib";
import axios from "axios";
    export default {
      name : 'Card',
      props:{
          item: Object
      },
      setup(){
        const addToCart = (itemId)=> {
          axios.post(`/api/cart/items/${itemId}`).then(() => {
            console.log("sucess");
          })
        }
        return {lib, addToCart}

      }
    }
</script>

<style scoped>
.card .img{
  display: inline-block;
  width: 100%;
  height: 350px;
  background-size: cover;
  background-position: center;
}

.card .card-body .price {
  text-decoration: line-through;
}
</style>