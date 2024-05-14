import Home from "../views/home.vue";
import Mine from "../views/mine.vue";
import Found from "../views/found.vue";
import Star from "../views/star.vue";
import Login from "../views/login.vue";
import Sup from "../views/sup/sup.vue";
import Composition from "../views/composition.vue";
import Foo from "../views/foo.vue";
import Search from "../views/sup/search.vue";
import Test from "../views/index.vue";
import Mv from "../views/sup/Mv.vue";
import videoPlayerView from "../views/videoPlayerView.vue";
import RecommdSongs from "../views/recommdSongs.vue";
import playMusic from "../views/playMusic.vue";
import PersonalCenter from "../views/personalCenter.vue";
export default [
  { path: "/", component: Sup },
  { path: "/mine", component: Mine },
  { path: "/found", component: Found },
  { path: "/star", component: Star },
  { path: "/login", component: Login },
  { path: "/sup", component: Sup },
  { path: "/composition", component: Composition },
  { path: "/foo", component: Foo },
  { path: "/search", component: Search },
  { path: "/test", component: Test },
  { path: "/Mv", component: Mv },
  { path: "/videoPlayerView", component: videoPlayerView },
  { path: "/recommdSongs", component: RecommdSongs },
  { path: "/playMusic/:List/:name", component: playMusic },
  { path: "/personalCenter", component: PersonalCenter },
];
