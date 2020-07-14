var x = Vue.component('card_assembl', 
{
    props: 
    {
        id:
        {
            type: Number,
        },
        imageq:
        {
            type: String,
        },
        imageq2:
        {
            type: String,
        },
        name:
        {
            type: String,
        },
        text:
        {
            type: String,
        }
    },
    data: function()
    {
        return{
            imgs: this.imageq,
            imgs2: this.imageq2,
        }
    },
    template:
    `
    <div class="card">
        <img :src="imgs" class="img1" />
        <br>
        <p class="name-card">{{name}}</p>
        <br>
        <p class="text-card">{{text}}</p>
        <img :src="imgs2" class="img2" />
        <div style="display:flex; width:100%; height:15px; padding-left:20px; padding-right:20px;">
            <div style="padding-right:20px">
                <p style="padding-left:20px; padding-right:20px; width:175px; font-family: Rubik; font-size: 10px; line-height: 14px; color:#7D7D7D">необходимо собрать</p>
            </div>
            <div>
                <p style="width:77px; font-family: Rubik; font-size: 10px; line-height: 14px; color:#7D7D7D">конец</p>
            </div>
        </div>
        <div style="display:flex; width:100%; height:15px; padding-left:20px; padding-right:20px;">
            <div>
                <b style="padding-left:20px; font-family: Rubik; font-size: 12px; font-weight: bold; line-height: 20px; color:#8DCA78">45 194</b>
            </div>
            <div style="padding-left:5px;" style="padding-right:17px">
                <b style="padding-right:20px; font-family:Rubik; font-size:12px; font-weight:bold; line-height:20px; color:#7D7D7D">из 1 000 000 RUB</b>
            </div>
            <div>
                <b style="font-family: Rubik; font-size: 12px; line-height: 20px; color:#7D7D7D">завтра</b>
            </div>
        </div>         
                        
                    
        <div style="padding-left: 20px; padding-top: 22px">
            <button disabled class="tagq">помочь нуждающимся</button>
            <button disabled class="tagq">закят</button>
        </div>
        <br>
        <div style="margin:auto;">
            <button class="button_circle">+</button>
        </div>
    </div>
    `
})

new Vue({
    el: "#app",
    components: {x},
    data:{},
    methods: {}
});
