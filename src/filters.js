import Vue from 'vue';
import moment from 'moment';

Vue.filter('dataFormate',function(dateStr,dataFormat='YYYY-MM-DD HH:mm:ss'){
        return moment(dateStr).format(dataFormat)
})