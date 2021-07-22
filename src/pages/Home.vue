</<template>
<div>
    <!-- Slider Area Start -->
    <div class="slider-area slider-style-three">
        <div class="container">
            <div class="row">
                <div class="col-md-8">

                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        </ol>

                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="img/slider/5.jpg" alt="Первый слайд">
                                <div class="carousel-caption d-none d-md-block">
                                    <div class="text-content-wrapper ">
                                        <div class="text-content ">
                                            <h4 class="title2 wow bounceInLeft text-white mb-16" data-wow-duration="2s" data-wow-delay="0s">Elektro74.ru</h4>
                                            <h1 class="title1 wow bounceInRight text-white mb-16">Интернет магазин электро инструмента<br>по приятным ценам.</h1>

                                            <div class="banner-readmore wow bounceInUp mt-35" data-wow-duration="2s" data-wow-delay="2s">
                                                <a class="button slider-btn" href="shop.html">В каталог</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="img/slider/6.jpg" alt="Второй слайд">
                                <div class="carousel-caption d-none d-md-block">
                                    <div class="text-content-wrapper ">
                                        <div class="text-content ">
                                            <h4 class="title2 wow bounceInLeft text-white mb-16" data-wow-duration="2s" data-wow-delay="0s">Доставка</h4>
                                            <h1 class="title1 wow bounceInRight text-white mb-16">100 рублей <br>по городу</h1>

                                            <div class="banner-readmore wow bounceInUp mt-35" data-wow-duration="2s" data-wow-delay="2s">
                                                <a class="button slider-btn" href="shop.html">В каталог</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>

                </div>
                <div class="col-md-4">
                    <!-- Single Banner Start -->
                    <div class="single-banner zoom mb-20">
                        <a href="#"><img src="img/banner/9.jpg" alt="slider-banner"></a>
                    </div>
                    <!-- Single Banner End -->
                    <!-- Single Banner Start -->
                    <div class="single-banner zoom">
                        <a href="#"><img src="img/banner/10.jpg" alt="slider-banner"></a>
                    </div>
                    <!-- Single Banner End -->
                </div>
            </div>
        </div>
    </div>
    <!-- Slider Area End -->
    <!-- Product Area Start -->
    <div class="product-area pt-30">
        <div class="container">
            <div class="row">

                <!-- Single Product Start -->
                <div 
                class="col-lg-3 col-sm-6"
                v-for="item in top.items"
                :key="item.id"
                >
                    <div class="single-product">
                        <!-- Product Image Start -->
                        <div class="pro-img">
                            <a href="#">
                                <img class="primary-img" :src="'img/products/l'+ item.vendor +'.jpg'" alt="single-product">
                            </a>
                        </div>
                        <!-- Product Image End -->
                        <!-- Product Content Start -->
                        <div class="pro-content">
                            <div class="product-rating">
                                <!-- тут был рейтинг -->
                            </div>
                            <h4>Сезонный товар</h4>
                            <h4> <a href="#">{{ item.item }}</a></h4>
                            <p>
                                <span class="price"> {{ item.price }} р.</span>

                               
                                <del 
                                v-if = "item.price < item.old_price"
                                class="prev-price">
                                {{item.old_price}}р.
                                </del>
                                
                            </p>
                            <div class="pro-actions">
                                <div class="actions-secondary">

                                    <a class="add-cart" href="#" data-id="<?= $product->id ?>" title="Add to Cart">В корзину</a>

                                </div>
                            </div>
                        </div>
                        <!-- Product Content End -->
                    </div>
                </div>
                <!-- Single Product End -->
              


            </div>
        </div>
    </div>
    <!-- Product Area End -->
    <!-- Banner Start -->
    <div class="upper-banner banner pb-60">
        <div class="container">
            <div class="row">
                <!-- Single Banner Start -->
                <div class="col-sm-6">
                    <div class="single-banner zoom">
                        <a href="#"><img src="img/banner/1.png" alt="slider-banner"></a>
                    </div>
                </div>
                <!-- Single Banner End -->
                <!-- Single Banner Start -->
                <div class="col-sm-6">
                    <div class="single-banner zoom">
                        <a href="#"><img src="img/banner/2.png" alt="slider-banner"></a>
                    </div>
                </div>
                <!-- Single Banner End -->
            </div>
            <!-- Row End -->
        </div>
        <!-- Container End -->
    </div>
    <!-- Banner End -->
    <!-- New Products Start -->

    <!-- New Products End -->
    <!-- Company Policy Start -->
    <div class="company-policy pb-60">
        <div class="container">
            <div class="row">
                <!-- Single Policy Start -->
                <div class="col-lg-3 col-sm-6">
                    <div class="single-policy">
                        <div class="icone-img">
                            <img src="img/icon/1.png" alt="">
                        </div>
                        <div class="policy-desc">
                            <h3>Доставка</h3>
                            <p>100 рублей по городу.</p>
                        </div>
                    </div>
                </div>
                <!-- Single Policy End -->
                <!-- Single Policy Start -->
                <div class="col-lg-3 col-sm-6">
                    <div class="single-policy">
                        <div class="icone-img">
                            <img src="img/icon/2.png" alt="">
                        </div>
                        <div class="policy-desc">
                            <h3>Заказы на сайте</h3>
                            <p>принимаем 24/7</p>
                        </div>
                    </div>
                </div>
                <!-- Single Policy End -->
                <!-- Single Policy Start -->
                <div class="col-lg-3 col-sm-6">
                    <div class="single-policy">
                        <div class="icone-img">
                            <img src="img/icon/3.png" alt="">
                        </div>
                        <div class="policy-desc">
                            <h3>Гарантия</h3>
                            <p>на весь товар от производителя.</p>
                        </div>
                    </div>
                </div>
                <!-- Single Policy End -->
                <!-- Single Policy Start -->
                <div class="col-lg-3 col-sm-6">
                    <div class="single-policy">
                        <div class="icone-img">
                            <img src="img/icon/4.png" alt="">
                        </div>
                        <div class="policy-desc">
                            <h3>Акции и скидки</h3>
                            <p>Приветственный бонус -3%</p>
                        </div>
                    </div>
                </div>
                <!-- Single Policy End -->
            </div>
        </div>
    </div>
</div>

</template>

<script>
    export default {
        data(){
            return{
               // top:null,
                resource:null
            }
        },
        methods:{
           
        },
        computed:{
            top(){
               // console.log(this.$store.getters.top)
                return this.$store.getters.top
            }
        },
        created(){
         /* this.resource = this.$resource('items/gettop')
          .get().then(res => res.json()).then(items => {
              items.items.map( item =>{
                  //убираем из vendor все  "/"
                  return item.vendor = item.vendor.replace(new RegExp("/",'g'),"")
              })
              this.top = items})*/
              this.$store.dispatch('asyncGetTop')
              //console.log(this.top)
         
        }

    }
</script>