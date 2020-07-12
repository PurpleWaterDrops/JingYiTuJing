import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    UserInfoForLogin: {
      username:'',
      password:''
    },
    UserInfoForRegist: {
      username:'',
      password:'',
      verificationcode:''
    },
    city: '北京'
  },

  getters: {
    city:(state)=>{
      return state.city;
    }
  },

  mutations: {
  	showLoginOrRegistModal:()=>{
  		$('#LoginOrRegistModal').modal({
  			keyboard: false,
  			backdrop: 'static'
  		});
  	},
    LoginByUserinfo:(state)=>{
      state.UserInfoForLogin.username = $('#UsernameForLogin').val();
      state.UserInfoForLogin.password = $('#PasswordForLogin').val();
      console.log('there is some code for future:send request to serve for loginning here.')
      console.log('there is some code for future:info of the request is the Object named UserInfoForLogin in state:');
    },
    SendReqforVeficationCode:(state)=>{
      console.log('there is some code for future:get user telphone number by jquery.val().');
      console.log('there is some code for future:send request to serve for getting verficationCode.')
      console.log('there is some code for future:info of the request is the user telphone number.');
    },
    RegistByUserinfo:(state)=>{
      state.UserInfoForRegist.username = $('#UsernameForRegist').val();
      state.UserInfoForRegist.password = $('#PasswordForRegist').val();
      state.UserInfoForRegist.verificationcode = $('#VerificationCodeForRegist').val();
      console.log('there is some code for future:send request to serve for registing here.')
      console.log('there is some code for future:info of the request is the Object named UserInfoForRegist in state.');
    },
    showChangeCityModal:(state)=>{
      $('#showChangeCityModal').modal({
        keyboard: false,
        backdrop: 'static'
      });
    },
    SendNewCityforWeather:(state)=>{
      state.city = $('#CityForWeather').val();
      $.get('simpleWeather/query?key=a5a06fcaec974fd88d1ed53ad79abb7b&city='+state.city, function(data) {
        $('#WeatherInfo').text(data.result.realtime.info+'/'+data.result.realtime.temperature+'摄氏度');
      },'json');
      $("#showChangeCityModal").modal('hide');
    }
  },

  actions: {
  	showLoginOrRegistModal:({commit})=>{
  		commit('showLoginOrRegistModal');
  	},
    LoginByUserinfo:({commit})=>{
      commit('LoginByUserinfo');
    },
    RegistByUserinfo:({commit})=>{
      commit('RegistByUserinfo');
    },
    SendReqforVeficationCode:({commit})=>{
      commit('SendReqforVeficationCode');
    },
    showChangeCityModal:({commit})=>{
      commit('showChangeCityModal');
    },
    SendNewCityforWeather:({commit})=>{
      commit('SendNewCityforWeather');
    }
  },

  modules: {

  }
})
