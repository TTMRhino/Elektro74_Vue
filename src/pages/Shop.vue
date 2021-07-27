<template>
    <div>

        <!-- Shop Page Start -->
<div class="main-shop-page pb-60">
            <div class="container">
                <!-- Row End -->
                <div class="row">
                    <!-- Sidebar Shopping Option Start -->
                    <div class="col-lg-3  order-2">
                        <div class="sidebar white-bg">



            <div class="single-sidebar">
                    <div class="group-title">
                        <h2>categories</h2>
                    </div>
                    <ul >
                        <ul class="middle-menu-list menuSideBar"
                        v-for="mGroup in MainGroup" :key="mGroup.id"
                        >
                     
                            <li>
                                <button class="btn btn-link"
                                 @click="getItemsByGroup(mGroup.id,'/get-by-maingroup')"> 
                                    {{mGroup.title}} <i class="fa fa-angle-down"></i> 
                                 </button>

                                <ul class="ht-dropdown dropdown-style-one">
                                    <li
                                     v-for="sGroup in mGroup.subGroup"
                                    :key="sGroup.id"
                                    > 
                                    <button class="btn btn-link" 
                                    @click="getItemsByGroup(sGroup.id,'/get-by-subgroup')"> 
                                    >
                                        {{ sGroup.title  }}
                                    </button></li>
                                </ul>
                            </li>
                        </ul>
                    </ul>
                    <!--<ul>
                        <ul class="middle-menu-list menuSideBar">
                            <li><a href="/shop/3">
                                    Насосы<i class="fa fa-angle-down"></i>
                                </a>                        
                                <ul class="ht-dropdown dropdown-style-one">   
                                    <li> <a href="/shop/index?subgroup_id=3">Дренажные</a></li>
                                    <li> <a href="/shop/index?subgroup_id=4">Насосные станции</a></li>                                    
                                </ul> 
                            </li> 
                        </ul> 
                    </ul>
                    <ul class="middle-menu-list menuSideBar">
                        <li><a href="/shop/4">
                            Садовая техника<i class="fa fa-angle-down"></i></a>                        
                            <ul class="ht-dropdown dropdown-style-one">   
                                <li> <a href="/shop/index?subgroup_id=11">Бензопилы</a></li>
                                <li> <a href="/shop/index?subgroup_id=12">Электропилы</a></li>
                            </ul> 
                        </li> 
                    </ul> -->
                <ul class="middle-menu-list menuSideBar">                    
                </ul> 
            </div>
                          
                          
                                                       
                            <!-- Single Banner Start -->
                            <div class="single-sidebar single-banner zoom pt-20">
                                <a href="#" class="hidden-sm"><img src="/img/banner/8.jpg" alt="slider-banner"></a>
                                <a href="#" class="visible-sm"><img src="/img/banner/6.jpg" alt="slider-banner"></a>
                            </div>
                            <!-- Single Banner End -->
                        </div>
                    </div>
                    <!-- Sidebar Shopping Option End -->                    
                    <!-- Product Categorie List Start -->
                    <div class="col-lg-9 order-lg-2">
                        <!-- Grid & List View Start -->
                        <div class="grid-list-top border-default universal-padding fix mb-30">
                            <div class="grid-list-view f-left">
                                <ul class="list-inline nav">
                                    <li><a data-toggle="tab" href="#grid-view"><i class="fa fa-th"></i></a></li>
                                    <li><a  class="active" data-toggle="tab" href="#list-view"><i class="fa fa-list-ul"></i></a></li>
                                    <li><span class="grid-item-list"> товары 1-12 of 13</span></li>
                                </ul>
                            </div>
                            <!-- SORT -->
                            <div class="main-toolbar-sorter f-right">
                                
                                <div class="toolbar-sorter">
                                    
                                        <label for="SortFormControlSelect1">Сортировка</label>
                                        <select class=" sort" 
                                        id="SortFormControlSelect1"
                                        v-model="sort"
                                        
                                        >
                                            <option value="item" @click="sortSet(sort)" >Имя</option>
                                            <option value="price" @click="sortSet(sort)" >Цена</option>  

                                        </select>

                                        <span><a href="#"><i class="fa fa-arrow-up"></i></a></span>
                                        <span><a href="#"><i class="fa fa-arrow-down"></i></a></span>
                                    
                                  
                                    
                                </div>
                            </div>
                            <!-- SORT End -->
                        </div>



                        <!-- Grid & List View End -->
                        <div class="main-categorie">
                            <!-- Grid & List Main Area End -->
                            <div class="tab-content fix">
                                <div id="grid-view" class="tab-pane ">

                                    <div class="row">

                                        <!-- START FOREACH  ITEMS -->
                                            <!-- Single Product Start -->                    
                                            <div 
                                              class="col-lg-4 col-sm-6"
                                              v-for="item in items"
                                              :key="item.id"
                                            >
                                                <div class="single-product">
                                                    <!-- Product Image Start -->
                                                    <div class="pro-img">
                                                        <a href="#">
                                                            <img class="primary-img" :src="'/img/products/l'+ item.vendor +'.jpg'" alt="#">                                                           
                                                        </a>
                                                    </div>
                                                    <!-- Product Image End -->
                                                    <!-- Product Content Start -->
                                                    <div class="pro-content">
                                                        <div class="product-rating">
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                        </div>                                
                                                        <h4><a href="<?= Url::to(['product/view', 'vendor' => $item->vendor]) ?>"> {{ item.item }} </a></h4>
                                                        <p>
                                                            <span class="price">{{ item.price }} р.</span>
                                                              
                                                                    <del class="prev-price"> {{ item.old_price }} р.</del>
                                                                
                                                        </p>
                                                        <div class="pro-actions">
                                                            <div class="actions-secondary">
                                                                <!--<a href="wishlist.html" data-toggle="tooltip" title="Add to Wishlist"><i class="fa fa-heart"></i></a>-->
                                                                <a class="add-cart add-to-cart" href="#" 
                                                                data-id="<?= $item->id ?>"
                                                                data-toggle="tooltip" title="Add to Cart">В корзину</a>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- Product Content End -->
                                                </div>
                                            </div>
                                            <!-- Single Product End -->
                                        <!-- END FOREACH -->
                                        
                                      
                                       
                                                            
                                    </div>                                    
                                </div>



                                <!-- LIST VIEW  -->
                                <!-- #grid view End -->
                               

                                <div id="list-view" class="tab-pane active">

                                    <!-- START FOREACH ITEMS -->
                                        <div class="single-product"
                                            v-for="item in items"
                                            :key="item.id"
                                        >
                                            <!-- Product Image Start -->
                                            <div class="pro-img">
                                                <a href="#">
                                                    <img class="primary-img" :src="'/img/products/l'+ item.vendor +'.jpg'" alt="#">
                                                    <!--<img class="secondary-img" src="/img/products/2.jpg" alt="">-->
                                                </a>
                                            </div>
                                            <!-- Product Image End -->
                                            <!-- Product Content Start -->
                                            <div class="pro-content">
                                                <div class="product-rating">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>                                
                                                <h4><a href="#">{{ item.item}} </a></h4>
                                                <p>
                                                    <span class="price"> {{ item.price }} р.</span>
                                                   
                                                        <del class="prev-price"> {{ item.old_price }}р.</del>
                                                   
                                                    
                                                </p>
                                                <p> description </p>
                                                <div class="pro-actions">
                                                    <div class="actions-secondary">
                                                        <!--<a href="wishlist.html" data-toggle="tooltip" title="Add to Wishlist"><i class="fa fa-heart"></i></a>-->
                                                        <a class="add-cart add-to-cart" href="#"
                                                        data-id="#"
                                                         data-toggle="tooltip" title="Add to Cart">В корзину</a>
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Product Content End -->
                                        </div>
                                    <!-- END FOREACH -->


                                                                      
                                </div>
                                <!-- #list view End -->



                                
                            </div>
                            <!-- Grid & List Main Area End -->
                        </div>

                        <!--Breadcrumb and Page Show Start -->
                        <div class="pagination-box fix">

                                        
                                        
                           <!-- PAGINATION -->
                               
                                <paginations :method='methodForPagin'></paginations>
                           

                            <div class="toolbar-sorter-footer">
                                <label>Показать:</label>
                                <select class="sorter" name="sorter">
                                    <option value="Position" selected="selected">12</option>
                                    <option value="Product Name">15</option>
                                    <option value="Price">30</option>
                                </select>
                                <span>страниц</span>
                            </div>
                        </div>
                        <!--Breadcrumb and Page Show End -->
                    </div>
                    <!-- product Categorie List End -->
                </div>
                <!-- Row End -->
            </div>
            <!-- Container End -->
</div>

    </div>
</template>
<script>
import Paginations from "./components/Paginations.vue"

export default {
    components: {
   'paginations': Paginations
  },
  data(){
    return{
        methodForPagin:'',
        sort:'item'

    }
  },
  computed:{
      items(){
                return  this.$store.getters.items
            },
            MainGroup(){
                 
                return this.$store.getters.MainGroup
            },
  },  
  methods:{
      getItemsByGroup:function(id,method) {
          
           method =`${method}?id=${id}`
          console.log(method)
          this.methodForPagin = method
          this.$store.commit('setMethod', method)
          this.$store.dispatch('asyncGetItems')
      },
      sortSet:function(sort){
          this.$store.commit('setSort', sort)


          this.$store.dispatch('asyncGetItems')
      }
  },
        created(){
            //забираем с сервера группы(все) 
            this.$store.dispatch('asyncGetMainGroup')

            //обращаемся в store для вытягиваия items через API
             this.$store.dispatch('asyncGetItems') 
             
        }
                
}
</script>