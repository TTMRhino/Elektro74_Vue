<template>
    <div>
            <div class="main-product-thumbnail pb-60">
            <div class="container">
                <div class="row">
                    <!-- Main Thumbnail Image Start -->
                    <div class="col-lg-5">
                     
                        <!-- Thumbnail Large Image start -->
                        <div class="tab-content">
                            <div id="thumb1" class="tab-pane active">
                                <a data-fancybox="images" :href="img"><img :src="img" alt="product-view"></a>
                            </div>
                           <!-- <div id="thumb2" class="tab-pane">
                                <a data-fancybox="images" href="/img/products/2.jpg"><img src="/img/products/2.jpg" alt="product-view"></a>
                            </div>
                            <div id="thumb3" class="tab-pane">
                                <a data-fancybox="images" href="/img/products/3.jpg"><img src="/img/products/3.jpg" alt="product-view"></a>
                            </div>
                            <div id="thumb4" class="tab-pane">
                                <a data-fancybox="images" href="/img/products/4.jpg"><img src="/img/products/4.jpg" alt="product-view"></a>
                            </div>-->
                        </div> 
                        <!-- Thumbnail Large Image End -->

                        <!-- Thumbnail Image End -->
                       <!-- <div class="product-thumbnail">
                            <div class="thumb-menu nav">
                                    <a class="active" data-toggle="tab" href="#thumb1"> <img src="/img/products/1.jpg" alt="product-thumbnail"></a>
                                    <a data-toggle="tab" href="#thumb2"> <img src="/img/products/2.jpg" alt="product-thumbnail"></a>
                                    <a data-toggle="tab" href="#thumb3"> <img src="/img/products/3.jpg" alt="product-thumbnail"></a>
                                    <a data-toggle="tab" href="#thumb4"> <img src="/img/products/4.jpg" alt="product-thumbnail"></a>
                            </div>
                        </div>-->
                        <!-- Thumbnail image end -->
                    </div>
                    <!-- Main Thumbnail Image End -->
                    <!-- Thumbnail Description Start -->
                    <div class="col-lg-7">
                        <div class="thubnail-desc fix">
                            <h3 class="product-header">{{name}} </h3>
                            <p class="">Группа: {{ mainGroup(maingroup) }} </p>
                            <p class="">Подгруппа: {{ subGroup(subgroup) }} </p>
                            <div class="rating-summary fix mtb-10">
                                <div class="rating f-left">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                
                            </div>
                            <div class="pro-price mb-10">
                                <p><span class="price">{{price}} р.</span><del class="prev-price">{{oldPrice}} р.</del></p>
                            </div>
                            <div class="pro-ref mb-15">
                                <p><span class="in-stock">На складе</span><span class="sku">50шт.</span></p>
                            </div>
                            
                            <div class="box-quantity">
                                <form action="#">
                                  
                                    <a class="add-cart" href="<?= Url::to(['cart/add','id'=>$item->id]) ?>">в корзину</a>
                                </form>
                            </div>
                            
                            <p class="ptb-20">{{ description }} </p>
                        </div>
                    </div>
                    <!-- Thumbnail Description End -->
                </div>
                <!-- Row End -->
            </div>
            <!-- Container End -->
        </div>
        <!-- Product Thumbnail End -->
    </div>
</template>

<script>
export default {
    data(){
    return{
       // id:this.$router.currentRoute.params['id']     
       id:this.$route.params['id'],
       subGroupName:'',
       mainGroupName:''

    }
  },
  computed:{
      name(){
          return this.$route.query.name
      },
      price(){
          return this.$route.query.price
      },
      oldPrice(){
          return this.$route.query.oldPrice
      },
      description(){
          return this.$route.query.description
      },
     img(){
         return this.$route.query.img
     },
     subgroup(){
         return this.$route.query.subgroup
     },
     maingroup(){
         return this.$route.query.maingroup
     }
     
  },
  methods:{
      subGroup(id){          
          this.$resource(`subgroup/${id}`)
            .get().then(res => res.json()).then(res => this.subGroupName = res.title)
              
        return  this.subGroupName
     },
     mainGroup(id){          
          this.$resource(`maingroup/${id}`)
            .get().then(res => res.json()).then(res => this.mainGroupName = res.title)
              
        return  this.mainGroupName
     }
  }
}
</script>