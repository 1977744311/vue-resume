Vue.component('share',{
    props:['sharelink'],
    template:`
    <div class="share" v-cloak>
        <h2>
            请将下面链接分享给面试官
        </h2>
        <div>
            <textarea readonly>{{sharelink}}</textarea>
        </div>
    </div>
    `
})