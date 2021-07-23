<template>
    <div>
        <nav aria-label="Page navigation example">
         <ul class="pagination">
          <li class="page-item">
            <button  class="page-link " :disabled="currentPage <= 1"  aria-label="Previous" @click="movePage(--currentPage )">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
            </button>
            </li>

            <li class="page-item " 
                v-for="page in fromToArr(currentPage,currentPage+5)" 
                :key="page"
                :class="{active:currentPage == page}"
                >
                <button class="page-link" @click="movePage(page)">{{page}}</button>
            </li>
            

            <li class="page-item">
            <button class="page-link"  :disabled="currentPage >= pageCount" aria-label="Next" @click="movePage(++currentPage )">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only" >Next</span>
            </button>
            </li>
        </ul>                
        </nav>
    </div>
</template>

<script>
    export default {
        data(){
        return{
            currentPage:1,           
           
        }
    },
    methods:{
            //переход на конкретную стр.
           movePage:function(page ){
               this.currentPage = page
                this.$store.dispatch('asyncGetItems',{page})
           },
           //формируем ограниченную пагинацию (выводим не все 30 стр а только по 6 шт.)
           fromToArr(start,end){
               if(end > this.pageCount){
                   end = this.pageCount
               }
                let arr=[]
                for(start; start <= end; start++){
                    arr.push(start)
                }
               
                return  arr
            },

        },
        computed:{           
            
            //воврощает колличесво стр.
            pageCount(){
                return this.$store.getters.paginations.pageCount
            },
           
        },
    }
</script>