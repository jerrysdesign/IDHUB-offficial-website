// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
const vision = '<div id="vision"><img class="centered" src="./img/home_vision.jpg" scale="0" align="middle"></div>'
const decoration = '<div id="decoration"><img class="centered" src="./img/home_decoration.jpg" scale="0" align="middle"></div>'
const team = '<div id="team"><div class="section_title">核心团队</div><div id="team_lead" class="team_block centered"><div id="team_lead_box" class="centered"><div id="team_lead_image"><img class="avartar" src="./img/team_qu.png" alt="Qu Ming"></div><div id="team_lead_desc" class="member_desc"><div class="member_name">曲明</div><div class="member_bio"><p>IDHub 创始人</p><p>互联城市咨询委员会 (CCAB) 理事会成员</p></div></div></div></div><div id="team_members" class="team_block centered"><div class="team_member_box"><div class="team_member_image centered"><img src="./img/team_kenneth.png" alt="Kenneth Chen"></div><div class="member_desc centered"><div class="member_name">陈振国</div><div class="member_bio"><p>IDHub 技术总监</p><p>曾任亚太线上 CTO</p><p>威睿科技联合创始人 & CTO</p></div></div></div><div class="team_member_box"><div class="team_member_image centered"><img src="./img/team_mark.png" alt="Mark Su"></div><div class="member_desc centered"><div class="member_name">苏育民</div><div class="member_bio"><p>IDHub 研发总监</p><p>台湾大学创业创新 MBA</p></div></div></div><div class="team_member_box"><div class="team_member_image centered"><img src="./img/team_xiaoyu.png" alt="Xiaoyu Li"></div><div class="member_desc centered"><div class="member_name">李骁宇</div><div class="member_bio"><p>IDHub 核心工程师</p><p>北京交通大学硕士</p></div></div></div><div class="team_member_box"><div class="team_member_image centered"><img src="./img/team_don.png" alt="Don"></div><div class="member_desc centered"><div class="member_name">謝承璋</div><div class="member_bio"><p>IDHub 核心工程师</p></div></div></div><div class="team_member_box"><div class="team_member_image centered"><img src="./img/team_jamie.png" alt="Jamie Lin"></div><div class="member_desc centered"><div class="member_name">林展民</div><div class="member_bio"><p>IDHub 核心工程师</p><p>台湾政治大学理学硕士</p></div></div></div><div class="team_member_box"><div class="team_member_image centered"><img src="./img/team_zaakin.png" alt="Zaakin Yao"></div><div class="member_desc centered"><div class="member_name">姚泽乾</div><div class="member_bio"><p>IDHub 研发工程师</p></div></div></div><div class="team_member_box"><div class="team_member_image centered"><img src="./img/team_jiaqi.png" alt="Jiaqi Li"></div><div class="member_desc centered"><div class="member_name">李嘉淇</div><div class="member_bio"><p>IDHub 研发工程师</p></div></div></div><div class="team_member_box"><div class="team_member_image centered"><img src="./img/team_michael.png" alt="Michael Wang"></div><div class="member_desc centered"><div class="member_name">王沛智</div><div class="member_bio"><p>IDHub 商务拓展经理</p><p>伯明翰大学硕士</p></div></div></div><div class="team_member_box"><div class="team_member_image centered"><img src="./img/team_cecilia.png" alt="Cecilia Wu"></div><div class="member_desc centered"><div class="member_name">吴茜</div><div class="member_bio"><p>IDHub 市场总监</p><p>英国大众传播和媒体研究硕士</p></div></div></div><div class="team_member_box"><div class="team_member_image centered"><img src="./img/team_derek.png" alt="Derek Xue"></div><div class="member_desc centered"><div class="member_name">薛玉成</div><div class="member_bio"><p>IDHub 市场公关经理</p></div></div></div><div class="team_member_box"><div class="team_member_image centered"><img src="./img/team_tsao.png" alt="Tsao"></div><div class="member_desc centered"><div class="member_name">曹磊</div><div class="member_bio"><p>IDHub 市场经理</p></div></div></div><div class="team_member_box"><div class="team_member_image centered"><img src="./img/team_tasya.png" alt="Lekch Tasya"></div><div class="member_desc centered"><div class="member_name">Lekch Tasya</div><div class="member_bio"><p>IDHub 社区运营</p></div></div></div></div></div>'
const investors = '<div id="investors"><div class="section_title">战略投资人</div><div class="investor_block centered"><div class="investor_box"><div class="team_member_image centered"><img src="./img/investor_josh.png" alt="Josh Chen" scale="0" align="middle" class="avartar centered"></div><div class="member_desc centered"><div class="member_name">陈升</div><div class="member_bio"><p>世纪互联</p><p>创始人兼董事长</p></div></div></div><div class="investor_box"><div class="team_member_image centered"><img src="./img/investor_ueno.png" alt="Yoshihisa Ueno" scale="0" align="middle" class="avartar centered"></div><div class="member_desc centered"><div class="member_name">Yoshihisa Ueno</div><div class="member_bio"><p>SMC 合伙人及创始人</p><p>曾任博彦科技董事</p></div></div></div></div></div>'
const news = '<div class="news"><div class="section_title">媒体报道</div><div class="news_logos"><a href="https://www.coindesk.com/local-government-china-trials-blockchain-public-services/" target="_blank" rel="noopener noreferrer"><img class="news_logo" src="./img/news_coindesk.png" border="0" alt="Link to Coindesk news"></a><a href="http://chainb.com/?P=Cont&id=4910" target="_blank" rel="noopener noreferrer"><img class="news_logo" src="./img/news_chainb.jpg" border="0" alt="Link to Coindesk news"></a></div></div>'
const Home = { template: `<div id="home">${vision}${decoration}${team}${investors}${news}</div>` }

const product_component = '<div id="product_component"><img class="centered" src="./img/product_component.jpg" scale="0" align="middle"></div>'
const product_flow = '<div id="product_flow"><img class="centered" src="./img/product_flow.jpg" scale="0" align="middle"></div>'
const product_tech = '<div id="product_tech"><img class="centered" src="./img/product_tech.jpg" scale="0" align="middle"></div>'
const product_roadmap = '<div id="product_roadmap"><img class="centered" src="./img/product_roadmap.jpg" scale="0" align="middle"></div>'
const Product = { template: `<div id="product">${product_component}${product_flow}${product_tech}${product_roadmap}</div>` }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/product', component: Product }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')

// Now the app has started!

console.log('hihi');
console.log(i18n.__("Contact Information"));
