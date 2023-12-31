import { createStore } from 'vuex';

//import product image
import duasap from '../assets/imgs/product/duasap.jpg'
import banhdauxanh from '../assets/imgs/product/banh-dau-xanh.jpg'
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
                {id_product: 'banhdauxanh', name: 'Bánh đậu xanh', url: banhdauxanh, price: 100000, describe: '', id_area: 'mienbac', favourite: false, time: ''},
                {id_product: 'dausap', name: 'dừa sáp', url: duasap, price: 200000, describe: '', id_area: 'miennam', favourite: false, time: ''},
                {id_product: 'ruoucan', name: 'Rượu cần hòa bình', url: ruoucan, price: '300000', describe: '', id_area: 'mienbac', favourite: false, time: ''},
                {id_product: 'tracungdinh', name: 'Trà cung đình Huế', url: tracungdinh, price: '', describe: '', id_area: 'mientrung', favourite: false, time: ''},
                {id_product: 'nemchua', name: 'Nem chua thanh hóa', url: nemchua, price: '50000', describe: '', id_area: 'mientrung', favourite: false, time: ''},
                {id_product: 'banhcay', name: 'Bánh cáy Thái bình', url: banhcay, price: '', describe: '', id_area: 'mienbac', favourite: false, time: ''},
                {id_product: 'keocudo', name: 'Kẹo cu đơ Hà Tĩnh', url: keocudo, price: '50000', describe: '', id_area: 'mientrung', favourite: false, time: ''},
                {id_product: 'ruousim', name: 'Rượu Sim phú quốc', url: ruousim, price: '', describe: '', id_area: 'miennam', favourite: false, time: ''},
                {id_product: 'nemnam', name: 'Nem nắm giao thủy', url: nemnam, price: '69000', describe: '', id_area: 'mienbac', favourite: false, time: ''},
                {id_product: 'chabo', name: 'Chả bò đà nẵng', url: chabo, price: '', describe: '', id_area: 'mientrung', favourite: false, time: ''},
                {id_product: 'keomexung', name: 'Kẹo mè xửng Huế', url: keomexung, price: '', describe: '', id_area: 'mientrung', favourite: false, time: ''},
                {id_product: 'banhpia', name: 'Bánh pía Sóc Trăng', url: banhpia, price: '10000', describe: '', id_area: 'miennam', favourite: false, time: ''},
            ],
            allArea: [
                {name: 'Miền Bắc', id_area: 'mienbac', path: 'mienbac', src: banhdauxanh, index: 0},
                {name: 'Miền Trung', id_area: 'mientrung', path: 'mientrung', src: keocudo, index: 1},
                {name: 'Miền Nam', id_area: 'miennam', path: 'miennam', src: banhpia, index: 2},
            ],
            allMenu: [
                {name: 'Sản Phẩm', path: '/sanpham'},
                {name: 'Tin tức', path: '/'},
                {name: 'Tài Khoản', path: '/'},
                {name: 'Sản phẩm ưa thích', path: '/yourfavourite'}
            ],
            select: '',
            path: '',

            areaSelect: '',
            pathAreaSelect: '',

            productSelect: '',
            pathProductSelect: '',

            areaIsRunning: '',
            productIsRunning: null,

            user: 'admin',
            pass: '123',

            isAdmin: false,
            isLogin: true
        }
    },
    mutations:{
        updateSelect(state, [newSelect, newPath]){
            state.select = newSelect
            state.path = newPath
        },
        updateAreaSelect(state, [newSelect, newPath]){
            state.areaSelect = newSelect
            state.pathAreaSelect = newPath
        },
        updateProductSelect(state, [newSelect, newPath]){
            state.productSelect = newSelect
            state.pathProductSelect = newPath
        },
        areaIsRunningUpdate(state,value){
            state.areaIsRunning = value
        },
        productIsRunningUpdate: (state,value) => {
            state.productIsRunning = value;
        },
        // Thêm sản phẩm mới - dành cho admin
        ADD_DATA(state, newData) {
            state.allProduct.push(newData);
        },
        // Thời gian mà sản phẩm được thêm vào yêu thích
        addToTimeFavourite(state, payload) {
            state.timeFavouriteAdd.push(payload);
        },

    },
    actions: {
        // Action để gọi mutation và thêm dữ liệu
        addData({ commit }, newData) {
          commit('ADD_DATA', newData);
        }
      },
      getters: {
        // Getter để lấy dữ liệu từ trạng thái
        getData: state => state.allProduct
      }

})


// đặt store thành export mặc định
export default store


