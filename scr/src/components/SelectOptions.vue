<template>
    <div class="menu">
        <label for="city_options" class="label">Tỉnh/Thành phố</label>
        <select id="city_options" class="select" v-model="selectedOption"  @change="emitSelected">
            <option v-for="item in citys" :key="item.id" class="options"
             :value="item.id" >{{ item.name }}</option>
        </select>
    </div>
</template>

<script>
export default{
    name: 'SelectOptions',
    props:['citys'],
    data(){
        return{
            selectedOption:null,
        }
    },
    methods: {
        emitSelected() {
      this.$emit('selected-Option', this.selectedOption);
    }
  }
}

</script>

<style scoped> 
.menu{
    display: flex;
    flex-direction: column;
    width: 300px;
    align-items: center;

}
.label{
    font-size: 20px;
    font-weight: bolder;
    padding: 10px;
    text-transform: uppercase;
}
.select{
    border: 1px solit ;
    border-radius: 5px;
    width: 200px;
    height: 40px;
    font-weight: bolder;
    line-height: 1.5;
    font-size: 16px;
    font-family:inherit ;
    padding: 5px 0;
    
}
.option{
    color: blue;
    background-color: chartreuse;
}
</style>