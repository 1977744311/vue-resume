Vue.component('signUp',{
    data(){
        return{
            signUp: {
                email: '',
                password: ''
            }
        }
    },
    methods:{
        onSignUp(e){
            const user = new AV.User()
            user.setUsername(this.signUp.email)
            user.setPassword(this.signUp.password)
            user.setEmail(this.signUp.email)
            user.signUp().then((user) => {
                alert('注册成功')
                user = user.toJSON()
                this.$emit('signUp')
            }, (error) => {
                alert(error.rawMessage)
            })
        },
        onClickLogin(){
            this.$emit('gotologin')
        }
    },
    template:`
    <div class="signUp" v-cloak>
        <form class="form" @submit.prevent="onSignUp">
            <h2>注册</h2>
            <button type="button" @click="loginVisible = false">关闭</button>
            <div class="row">
                <label>邮箱</label>
                <input type="text" v-model="signUp.email">
            </div>
            <div class="row">
                <label>密码</label>
                <input type="password" v-model="signUp.password">
            </div>
            <div class="actions">
                <button type="submit">提交</button>
                <a href="#" @click="onClickLogin">登录</a>
            </div>
        </form>
    </div>
    `
})