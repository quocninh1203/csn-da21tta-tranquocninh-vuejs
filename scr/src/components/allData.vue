
<!-- 
    ct01:
    ct02:
    ct03:
    ct04:
 -->
<script>
export default{
    data(){
        return{
            allProduct: [
                {id_product: '', name: '', url: '', price: '', describe: '', id_area: '', id_city: '', id_category: ''},
            ],
            allArea: [
                {name: 'Miền Bắc', id_area: 'mienbac', path: '/sanpham/miennam'},
                {name: 'Miền Trung', id_area: 'mientrung', path: '/sanpham/mientrung'},
                {name: 'Miền Nam', id_area: 'miennam', path: '/sanpham/miennam'},
            ],
            allCitys: [
                {name: '01', id_city: '', id_area: ''},
                {name: '02', id_city: '', id_area: ''},
                {name: '03', id_city: '', id_area: ''},
                {name: '04', id_city: '', id_area: ''},
                {name: '05', id_city: '', id_area: ''},
                {name: '06', id_city: '', id_area: ''},
                {name: '07', id_city: '', id_area: ''},
                {name: '08', id_city: '', id_area: ''},
                {name: '09', id_city: '', id_area: ''},
                {name: '10', id_city: '', id_area: ''},
                {name: '11', id_city: '', id_area: ''},
                {name: '12', id_city: '', id_area: ''},
                {name: '13', id_city: '', id_area: ''},
                {name: '14', id_city: '', id_area: ''},
                {name: '15', id_city: '', id_area: ''},
                {name: '16', id_city: '', id_area: ''},
                {name: '17', id_city: '', id_area: ''},
                {name: '18', id_city: '', id_area: ''},
                {name: '19', id_city: '', id_area: ''},
                {name: '20', id_city: '', id_area: ''},
                {name: '21', id_city: '', id_area: ''},
                {name: '22', id_city: '', id_area: ''},
                {name: '23', id_city: '', id_area: ''},
                {name: '24', id_city: '', id_area: ''},
                {name: '25', id_city: '', id_area: ''},
                {name: '26', id_city: '', id_area: ''},
                {name: '27', id_city: '', id_area: ''},
                {name: '28', id_city: '', id_area: ''},
                {name: '29', id_city: '', id_area: ''},
                {name: '30', id_city: '', id_area: ''},
                {name: '31', id_city: '', id_area: ''},
                {name: '32', id_city: '', id_area: ''},
                {name: '33', id_city: '', id_area: ''},
                {name: '34', id_city: '', id_area: ''},
                {name: '35', id_city: '', id_area: ''},
                {name: '36', id_city: '', id_area: ''},
                {name: '37', id_city: '', id_area: ''},
                {name: '38', id_city: '', id_area: ''},
                {name: '39', id_city: '', id_area: ''},
                {name: '40', id_city: '', id_area: ''},
                {name: '41', id_city: '', id_area: ''},
                {name: '42', id_city: '', id_area: ''},
                {name: '43', id_city: '', id_area: ''},
                {name: '44', id_city: '', id_area: ''},
                {name: '45', id_city: '', id_area: ''},
                {name: '46', id_city: '', id_area: ''},
                {name: '47', id_city: '', id_area: ''},
                {name: '48', id_city: '', id_area: ''},
                {name: '49', id_city: '', id_area: ''},
                {name: '50', id_city: '', id_area: ''},
                {name: '51', id_city: '', id_area: ''},
                {name: '52', id_city: '', id_area: ''},
                {name: '53', id_city: '', id_area: ''},
                {name: '54', id_city: '', id_area: ''},
                {name: '55', id_city: '', id_area: ''},
                {name: '56', id_city: '', id_area: ''},
                {name: '57', id_city: '', id_area: ''},
                {name: '58', id_city: '', id_area: ''},
                {name: '59', id_city: '', id_area: ''},
                {name: '60', id_city: '', id_area: ''},
                {name: '61', id_city: '', id_area: ''},
                {name: '62', id_city: '', id_area: ''},
                {name: '63', id_city: '', id_area: ''},
            ],
            allCategory: [
                {name: '', id_category: 'ct01', path: ''},
                {name: '', id_category: 'ct02', path: ''},
                {name: '', id_category: 'ct03', path: ''},
                {name: '', id_category: 'ct04', path: ''},
            ],
            data: 'fd'
        }
    },
    methods: {
        updateMixinData(newData) {
            this.data = newData;
        },
    }
}
</script>