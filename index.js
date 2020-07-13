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
        }
    },
    template:
    `
    <div class="card">
        <img :src="imgs" />
        <br>
        <p class="name-card">{{name}}</p>
        <br>
        <p>{{text}}</p>
        <table border="0" cellspacing="10pt">
            <tr>
                <td>
                    <p style="font-family: Rubik; font-size: 10px; line-height: 14px; color:#7D7D7D">необходимо собрать</p>
                </td>
                <td>
                    <p style="font-family: Rubik; font-size: 10px; line-height: 14px; color:#7D7D7D">конец</p>
                </td>
            </tr>
            <tr>
                <td>
                        <b style="font-family: Rubik; font-size: 12px; font-weight: bold; line-height: 20px; color:#8DCA78">45 194</b>
                        <b style="font-family: Rubik; font-size: 12px; font-weight: bold; line-height: 20px; color:#7D7D7D">из 1 000 000 RUB</b>
                </td>
                <td>
                    <b style="font-family: Rubik; font-size: 12px; line-height: 20px; color:#7D7D7D">завтра</b>
                </td>
            </tr>
        </table>
        <div>
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
