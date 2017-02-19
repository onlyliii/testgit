/**
 * Created by liping on 2017/2/19.
 */
var vm = new Vue({
    el: '#app',
    data: {
        title: 'hello Vue！'
    },
    filters: {

    },
    mounted: function () {
        this.cartView()
    },
    methods: {
        cartView: function () {
            this.title = 'vue hello'
        }
    }
});