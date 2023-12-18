import { createStore } from 'vuex';

//import product image
import duasap from '../assets/imgs/product/duasap.jpg'
import banhdauxanh from '../assets/imgs/product/banh-dau-xanh.jpg'
import duongdua from '../assets/imgs/product/duong-dua.png'
import ruoucan from '../assets/imgs/product/ruou-can.jpg'
import tracungdinh from '../assets/imgs/product/tra-cung-dinh.png'
import nemchua from '../assets/imgs/product/Nem-chua-Thanh-hoa.jpg'
import banhcay from '../assets/imgs/product/banh-cay.jpg'
import keocudo from '../assets/imgs/product/keo-cu-do.png'
import nemnam from '../assets/imgs/product/nem-nam.jpg'
import banhpia from '../assets/imgs/product/banh-pia.jpg'
import keomexung from '../assets/imgs/product/keo-me-xung.jpg'
import ruousim from '../assets/imgs/product/ruou-sim-phu-quoc.png'
import chabo from '../assets/imgs/product/cha-bo-danang.jpg'

// tạo một instance store mới
export const store = createStore({
    state(){
        return{
            allProduct: [
                {id_product: '001', name: 'Bánh đậu xanh', url: banhdauxanh, price: 100000, describe: '', id_area: 'mienbac', id_category: 'ct02', favourite: false},
                {id_product: '002', name: 'dừa sáp', url: duasap, price: 200000, describe: '', id_area: 'miennam', id_category: 'ct01', favourite: false},
                {id_product: '003', name: 'đuông dừa', url: duongdua, price: '45000', describe: '', id_area: 'miennam', id_category: 'ct03', favourite: false},
                {id_product: '004', name: 'Rượu cần hòa bình', url: ruoucan, price: '', describe: '', id_area: 'mienbac', id_category: 'ct04', favourite: false},
                {id_product: '005', name: 'Trà cung đình Huế', url: tracungdinh, price: '', describe: '', id_area: 'mientrung', id_category: 'ct04', favourite: false},
                {id_product: '006', name: 'Nem chua thanh hóa', url: nemchua, price: '', describe: '', id_area: 'mientrung', id_category: 'ct03', favourite: false},
                {id_product: '007', name: 'Bánh cáy Thái bình', url: banhcay, price: '', describe: '', id_area: 'mienbac', id_category: 'ct02', favourite: false},
                {id_product: '008', name: 'Kẹo cu đơ Hà Tĩnh', url: keocudo, price: '', describe: '', id_area: 'mientrung', id_category: 'ct02', favourite: false},
                {id_product: '009', name: 'Rượu Sim phú quốc', url: ruousim, price: '', describe: '', id_area: 'miennam', id_category: 'ct04', favourite: false},
                {id_product: '010', name: 'Nem nắm giao thủy', url: nemnam, price: '', describe: '', id_area: 'mienbac', id_category: 'ct03', favourite: false},
                {id_product: '011', name: 'Chả bò đà nẵng', url: chabo, price: '', describe: '', id_area: 'mientrung', id_category: 'ct03', favourite: false},
                {id_product: '012', name: 'Kẹo mè xửng Huế', url: keomexung, price: '', describe: '', id_area: 'mientrung', id_category: 'ct02', favourite: false},
                {id_product: '013', name: 'Bánh pía Sóc Trăng', url: banhpia, price: '', describe: '', id_area: 'miennam', id_category: 'ct02', favourite: false},
            ],
            allArea: [
                {name: 'Miền Bắc', id_area: 'mienbac', path: 'mienbac', src: banhdauxanh, alt: 0},
                {name: 'Miền Trung', id_area: 'mientrung', path: 'mientrung', src: keocudo, index: 1},
                {name: 'Miền Nam', id_area: 'miennam', path: 'miennam', src: banhpia, index: 2},
            ],
            select: '',
            path: '/sanpham',
            areaIsRunning: '',
            productIsRunning: ''
        }
    },
    mutations:{
        updateSelect(state, [newSelect, newPath]){
            state.select = newSelect
            state.path = newPath
        },
        areaIsRunningUpdate(state,value){
            state.areaIsRunning = value
        },
        productIsRunningUpdate: (state,value) => {
            state.productIsRunning = value;
          },
    },

})


// đặt store thành export mặc định
export default store


