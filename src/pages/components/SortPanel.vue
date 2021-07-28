<template>
    <div>
        <div class="toolbar-sorter">
                                    
            <label for="SortFormControlSelect1">Сортировка</label>
            <select class=" sort" 
                id="SortFormControlSelect1"
                v-model="sort"                                        
            >
                <option value="item" @click="sortSet(sort)" >Имя</option>
                <option value="price" @click="sortSet(sort)" >Цена</option>  

            </select>

            <span><a href="#" @click="sortSet(sort)"><i class="fa fa-arrow-up"></i></a></span>
            <span><a href="#" @click="sortSet('-'+sort)"><i class="fa fa-arrow-down"></i></a></span>
                                    
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{       
            sort:"item"

        }
    },
    methods:{
        sortSet:function(sort){         
          //формируем тип сортировки ASC (без знака '-') DES со знаком '-' -item - price
        if(sort[0]==='-'){
            while(sort.charAt( 0 ) === '-'){//на вскяий случай читсим все знкаи - в переди sort
                 sort = sort.substring(1);
            }
            this.sort= sort
            sort = `-${sort}` //и присваиваем заново ))
        }  

          this.$store.commit('setSort', sort)
          this.$store.dispatch('asyncGetItems')
      },
    }
}
</script>