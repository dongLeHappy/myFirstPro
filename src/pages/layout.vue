<template>
    <div class="index-wrap">
      <div class="index-left">
        <div class="index-left-block">
          <h2>全部产品</h2>
          <template v-for="(product,index) in productList">
            <h3>{{product.category}}</h3>
            <ul>
              <li v-for="item in product.list">
                <a :href="item.url">{{item.name}}</a>
                <span v-if="item.hot" class="hot-tag">HOT</span>
              </li>
            </ul>
            <div v-if="index % 2 == 0" class="hr"></div>
          </template>
        </div>
      </div>
      <div class="index-right">

      </div>
    </div>
</template>

<script>
    export default {
      name:'layout',
        data() {
            return {
              productList:[
                {
                  category:"手机应用类",
                  list:[
                    {
                      name:"91助手",
                      url:"http://www.wwtliu.com/blog",
                      hot:true
                    },
                    {
                      name:"豌豆荚",
                      url:"http://www.wwtliu.com/blog",
                      hot:false
                    },
                    {
                      name:"金山毒霸",
                      url:"http://www.wwtliu.com/blog",
                      hot:true
                    }
                  ]
                },
                {
                  category:"开发工具",
                  list:[
                    {
                      name:"webstorm",
                      url:"http://www.wwtliu.com/blog",
                      hot:true
                    },
                    {
                      name:"HBiuder",
                      url:"http://www.wwtliu.com/blog",
                      hot:true
                    },
                    {
                      name:"Subline",
                      url:"http://www.wwtliu.com/blog",
                      hot:false
                    },
                    {
                      name:"Atom",
                      url:"http://www.wwtliu.com/blog",
                      hot:true
                    },
                  ]
                }
              ]
            }
        },
      created(){
            this.$axios.get("http://www.wwtliu.com/sxtstu/news/juhenews.php",{
              params:{
                count:10,
                type:"top"
              }
            }).then(res=>{
              console.log(res);
            }).catch(error=>{
              console.log(error);
            })
      }
    }
</script>

<style>
  .index-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .index-left {
    float: left;
    width: 300px;
    text-align: left;
  }
  .index-right {
    float: right;
    width: 900px;
  }
  .swiper-size {
    margin-top: 15px;
    height: 350px;
  }
  .index-left-block {
    margin: 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    height: 350px;
  }
  .index-left-block .hr {
    margin-bottom: 20px;
  }
  .hr {
    height: 1px;
    width: 100%;
    background: #ddd;
  }
  .index-left-block h2 {
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }
  .index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }
  .index-left-block ul {
    padding: 10px 15px;
  }
  .index-left-block li {
    padding: 5px;
  }
  .index-board-list {
    overflow: hidden;
    margin-top: 15px;
  }
  .index-board-item {
    float: left;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .index-board-item-inner {
    min-height: 125px;
    padding-left: 180px;
  }
  .index-board-health1 .index-board-item-inner {
    background: url(../assets/images/health-1.png) no-repeat;
    background-size: contain;
  }
  .index-board-health2 .index-board-item-inner {
    background: url(../assets/images/health-2.png) no-repeat;
    background-size: contain;
  }
  .index-board-health3 .index-board-item-inner {
    background: url(../assets/images/health-3.png) no-repeat;
    background-size: contain;
  }
  .index-board-health4 .index-board-item-inner {
    background: url(../assets/images/health-4.jpg) no-repeat;
    background-size: contain;
  }
  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }
  .line-last {
    margin-right: 0;
  }
  .index-board-button {
    margin-top: 20px;
  }
  .lastest-news {
    min-height: 350px;
  }
  .hot-tag {
    background: red;
    color: #fff;
  }
  .new-item {
    display: inline-block;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .swiper-img {
    width: 100%;
  }
  .button {
    background: mediumseagreen;
    color: white;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }
  .button:hover {
    text-decoration: none;
    background: #40a96f;
  }

</style>
