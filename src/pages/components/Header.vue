<template>
    <div>
        

          <!-- Header Area Start -->
        <header>
            <!-- Header Top Start -->
            <div class="header-top">
                <div class="container">
                    <div class="row">
                        <!-- Header Top left Start -->
                        <div class="col-lg-4 col-md-12 d-center">
                            <div class="header-top-left">
                                <img src="img/icon/call.png" alt=""> +7(9000) - 741-791
                            </div>
                        </div>
                        <!-- Header Top left End -->

                        <!-- Search Box Start -->
                        <div class="col-lg-4 col-md-6 ml-auto mr-auto">
                            <div class="search-box-view">
                                <form action="#" method="get">
                                    <input type="text" class="email" placeholder="Поиск ..." name="q">
                                    <button type="submit" class="submit"></button>
                                </form>
                            </div>
                        </div>
                        <!-- Search Box End -->

                        <!-- Header Top Right Start -->
                        <div class="col-lg-4 col-md-12">
                            <div class="header-top-right">

                                <!-- Header-list-menu End -->
                            </div>
                        </div>
                        <!-- Header Top Right End -->
                    </div>
                </div>
                <!-- Container End -->
            </div>
            <!-- Header Top End -->
            <!-- Header Bottom Start -->
            <div class="header-bottom header-sticky">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-3 col-lg-2 col-sm-5 col-5">
                            <div class="logo">
                                <a href="/"><img src="/img/logo/logo.png" alt="logo-image"></a>
                            </div>
                        </div>
                        <!-- Primary Vertical-Menu End -->
                        <!-- Search Box Start -->
                        <div class="col-xl-6 col-lg-7 d-none d-lg-block">
                            <div class="middle-menu pull-right">
                                <nav>
                                    <ul class="middle-menu-list">
                                        <li><router-link to="/">Домой<i class="fa "></i></router-link>

                                        </li>
                                        <li><router-link to="/about">О нас</router-link></li>
                                        <li><router-link to="/shop">Товары<i class="fa"></i></router-link></li>


                                        <li><router-link to="/contacts">Контакты</router-link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <!-- Search Box End -->
                        <!-- Cartt Box Start -->
                        <div class="col-lg-3 col-sm-7 col-7">
                            <div class="cart-box text-right">
                                <ul id="cartBox">

                                    <li>
                                        
                                        <router-link to="/cart">
                                            <i class="fa fa-shopping-basket"></i>
                                            <span class="cart-counter">{{ totalQuantity }}</span>
                                        </router-link>

                                        <ul class="ht-dropdown main-cart-box">
                                            <li>

                                                   
                                                        <!-- Cart Box Start -->
                                                        <div class="single-cart-box"
                                                        v-for="item in items"
                                                        :key="item.id"
                                                        >
                                                            <div class="cart-img">

                                                               
                                                                <router-link 
                                                                    :to="{ name:'detail', params:{ id:item.id }, 
                                                                            query: { img: item.img }}">
                                                                    <img :src=" item.img " :alt="item.img">
                                                                       
                                                                </router-link>

                                                            </div>
                                                            <div class="cart-content">
                                                                <h6>                                                                   
                                                                    <router-link 
                                                                        :to="{ name:'detail', params:{ id:item.id }, 
                                                                            query: { img: item.img }}">
                                                                        {{ item.item}} 
                                                                    </router-link>
                                                                </h6>
                                                                <span>{{ item.quantity * item.price }}</span>
                                                            </div>

                                                            <button
                                                                type="button"
                                                                class="del-icone delete btn btn-link"    
                                                                @click="deleteItem(item.id)"
                                                            >
                                                                <i class="fa fa-window-close-o"></i>
                                                            </button>

                                                        </div>
                                                        <!-- Cart Box End -->

                                                    

                                                <!-- Cart Footer Inner Start -->
                                                <div class="cart-footer fix">
                                                    <h5>итого :<span class="f-right">{{ totalSum }}р.</span></h5>
                                                    <div class="cart-actions">
                                                        <router-link class="checkout" to="/cart">Корзина</router-link>
                                                    </div>
                                                </div>
                                                <!-- Cart Footer Inner End -->

                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- Cartt Box End -->
                        <div class="col-sm-12 d-lg-none">
                            <div class="mobile-menu">
                                <nav>
                                    <ul>
                                        <li><router-link to="/">Домой</router-link></li>
                                        <li><router-link to="/shop">Товары</router-link></li>
                                        <li><router-link to="/about">О Нас</router-link></li>                                        
                                        <li><router-link to="/contacts">Контакты</router-link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <!-- Mobile Menu  End -->
                    </div>
                    <!-- Row End -->
                </div>
                <!-- Container End -->
            </div>
            <!-- Header Bottom End -->
        </header>
        <!-- Header Area End -->

    </div>
</template>

<script>
export default {
    data(){
        return{
            items:this.$store.getters.getCartItems
        }
    },
    computed:{
        totalQuantity(){
            return this.$store.getters.totalQuantity
        },
        totalSum(){
            return this.$store.getters.totalSum
        }
    },
    methods:{
        deleteItem(id){
        console.log(`DELTE ${id}`)
    }
    }
}
</script>

