(()=>{"use strict";var e={840:(e,t,a)=>{var n=a(751),o=a(641);const i={id:"app"},r=(0,o.Lk)("footer",null," @ 2024 Candace Andrews ",-1);function s(e,t,a,n,s,c){const h=(0,o.g2)("NavbarMenu"),l=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("div",i,[(0,o.bF)(h),(0,o.bF)(l)]),r],64)}const c={class:"navbar"},h={class:"nav-link"};function l(e,t,a,n,i,r){const s=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",c,[(0,o.Lk)("div",h,[(0,o.bF)(s,{to:"/",class:"home-link",exact:""},{default:(0,o.k6)((()=>[(0,o.eW)("Home")])),_:1})])])}const u={name:"NavbarMenu"};var d=a(262);const p=(0,d.A)(u,[["render",l]]),m=p,g={name:"App",components:{NavbarMenu:m}},f=(0,d.A)(g,[["render",s]]),v=f;var w=a(166);const k=a.p+"img/ps1-logo.b2ae0fef.gif",y=a.p+"img/ps1-console.9092fa78.png",b=e=>((0,o.Qi)("data-v-06dac75f"),e=e(),(0,o.jt)(),e),S={class:"home-page"},A=b((()=>(0,o.Lk)("img",{class:"ps1-logo-gif",src:k,alt:"ps1 logo fading in"},null,-1))),C=b((()=>(0,o.Lk)("div",{class:"greeting-section"},[(0,o.Lk)("h1",null,"PlayStation Trivia Quiz"),(0,o.Lk)("p",null,"Test your knowledge on classic PS1 games!"),(0,o.Lk)("img",{class:"console-pic",src:y,alt:"ps1 console"})],-1))),M={class:"games"},q=b((()=>(0,o.Lk)("h1",null,"Game Selection",-1))),O={class:"game-grid"};function W(e,t,a,n,i,r){const s=(0,o.g2)("GameThumbnail");return(0,o.uX)(),(0,o.CE)("div",S,[A,C,(0,o.Lk)("div",M,[q,(0,o.Lk)("div",O,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.ps1Games,(e=>((0,o.uX)(),(0,o.Wv)(s,{key:e.id,game:e},null,8,["game"])))),128))])])])}var I=a(33);const E=["src","alt"];function L(e,t,a,n,i,r){return(0,o.uX)(),(0,o.CE)("div",{class:"game-thumbnail",onClick:t[0]||(t[0]=(...e)=>r.handleNavigateToGameQuiz&&r.handleNavigateToGameQuiz(...e))},[(0,o.Lk)("img",{class:"thumbnail-image",src:a.game.cover,alt:a.game.title},null,8,E),(0,o.Lk)("h3",null,(0,I.v_)(a.game.title),1)])}const F={props:{game:Object},methods:{handleNavigateToGameQuiz(){this.$router.push(`/quiz/${this.game.id}`)}}},G=(0,d.A)(F,[["render",L],["__scopeId","data-v-5e15d49e"]]),x=G,R=[{id:1,title:"Final Fantasy VII",cover:a(812),questions:[{question:"What is the name of the ancient city that serves as the birthplace of the Cetra?",options:["Nibelheim","Wutai","Cosmo Canyon","The Forgotten Capital"],correctAnswer:"The Forgotten Capital"},{question:"What is the name of the final dungeon where players confront Sephiroth in his true form?",options:["Northern Crater","Forgotten City","Crystal Cave","Whirlwind Maze"],correctAnswer:"Northern Crater"},{question:"Which summon materia is obtained after defeating the Midgar Zolom?",options:["Leviathan","Ifrit","Bahamut","Choco/Mog"],correctAnswer:"Leviathan"},{question:"What is the name of the bar owned by Tifa Lockhart in Sector 7 of Midgar?",options:["Seventh Sin","Heaven's Gate"," Seventh Circle","7th Heaven"],correctAnswer:"7th Heaven"},{question:"What is the ultimate Limit Break for Cloud Strife?",options:["Omnislash","Finishing Touch","Blade Beam","Catastrophe"],correctAnswer:"Omnislash"},{question:"Which two characters engage in a memorable fight atop the Sister Ray cannon?",options:["Cloud and Tifa","Barret and Dyne","Cloud and Sephiroth","Tifa and Sephiroth"],correctAnswer:"Cloud and Sephiroth"},{question:"What is the name of the underground prison where Cloud and his party are held captive during the story?",options:["Corel Prison","Nibelheim Prison","Sector 6 Prison","Shinra Building Detention Center"],correctAnswer:"Corel Prison"},{question:"Which character can manipulate time and space using their Limit Break abilities?",options:["Cloud Strife","Aerith Gainsborough","Vincent Valentine","Cait Sith"],correctAnswer:"Vincent Valentine"},{question:"What is the name of the giant cannon that Shinra uses to drain Mako energy from the planet?",options:["Mako Cannon","Omega Weapon","Sister Ray","Jenova Cannon"],correctAnswer:"Sister Ray"},{question:"What is the highest rank that a member of the elite military group SOLDIER can achieve?",options:["SOLDIER First Class","SOLDIER Elite","SOLDIER Captain","SOLDIER Commander"],correctAnswer:"SOLDIER First Class"},{question:"What is another name for an Ancient, the last of which plays a crucial role in the story of Final Fantasy VII?",options:["Cetra","Eternals","Elders","Celestials"],correctAnswer:"Cetra"},{question:"What is the name of the optional super-boss that appears in the Ancient Forest area?",options:["Emerald Weapon","Ruby Weapon","Diamond Weapon","Ultima Weapon"],correctAnswer:"Ruby Weapon"},{question:"What is the name of the robotic creature that accompanies Cait Sith?",options:["Aps","Mog","Tonberry","Boundfat"],correctAnswer:"Mog"},{question:"Which summon materia can be obtained by defeating the optional boss, Ruby Weapon?",options:["Knights of the Round","Phoenix","Alexander","Bahamut ZERO"],correctAnswer:"Bahamut ZERO"},{question:"How many Huge Materia are there in the game?",options:["3 Huge Materia","4 Huge Materia","5 Huge Materia","6 Huge Materia"],correctAnswer:"3 Huge Materia"}]},{id:2,title:"Metal Gear Solid",cover:a(138),questions:[{question:"What is the name of the island where most of Metal Gear Solid's events take place?",options:["Shadow Moses Island","Outer Heaven","Zanzibar Land","Mother Base"],correctAnswer:"Shadow Moses Island"},{question:"What is the name of the stealth camouflage technology used by Snake in Metal Gear Solid?",options:["Solid Eye","Stealth Camo","Active Camouflage","OctoCamo"],correctAnswer:"Stealth Camo"},{question:"What is the name of the device used by Snake to communicate with his support team and save the game in Metal Gear Solid?",options:["Codec","Radar","Walkie-Talkie","Transceiver"],correctAnswer:"Codec"},{question:"Which character betrays Snake and reveals herself to be working with the antagonist?",options:["Meryl Silverburgh","Sniper Wolf","Naomi Hunter","Mei Ling"],correctAnswer:"Naomi Hunter"},{question:"What is the real name of the character known as Deepthroat, who provides Snake with tips and information during the game?",options:["Frank Jaeger","Gray Fox","Liquid Snake","Solid Snake"],correctAnswer:"Frank Jaeger"},{question:"What is the name of the music track that plays during the iconic battle against Psycho Mantis?",options:["Encounter","Snake Eater","The Best is Yet to Come","Metal Gear Solid Main Theme"],correctAnswer:"Encounter"},{question:"What is the name of the government agency that Snake works for in Metal Gear Solid?",options:["CIA","FBI","FOXHOUND","FOXDIE"],correctAnswer:"FOXHOUND"},{question:"Which character sacrifices themselves to save Snake and Otacon during the final battle with Metal Gear Rex?",options:["Gray Fox","Meryl Silverburgh","Naomi Hunter","Mei Ling"],correctAnswer:"Gray Fox"},{question:"What is the name of the scientist who developed Metal Gear Rex and later aids Snake in stopping the weapon?",options:["Hal Emmerich","Frank Jaeger","Decoy Octopus","Donald Anderson"],correctAnswer:"Hal Emmerich"},{question:"What is the name of the virus injected into Snake, threatening his life and serving as a key plot element in Metal Gear Solid?",options:["FOXALIVE","FOXHOUND","FOXDIE-C","FOXDIE"],correctAnswer:"FOXDIE"},{question:"What is the name of the remote-controlled missile launcher used by Snake to destroy obstacles and enemies from a distance in Metal Gear Solid?",options:["Nikita Missile Launcher","Stinger Missile Launcher","FAMAS Assault Rifle","PSG1 Sniper Rifle"],correctAnswer:"Nikita Missile Launcher"},{question:"What is the name of the location where Solid Snake is initially briefed about his mission in Metal Gear Solid?",options:["Docking Bay","Helipad","Briefing Room","Armory"],correctAnswer:"Briefing Room"},{question:"What is the name of the key card system used to access different areas and levels within the Shadow Moses facility in Metal Gear Solid?",options:["PAL Key","Red Card","Blue Card","ID Card"],correctAnswer:""},{question:'What is the significance of the number "141.12" in Metal Gear Solid?',options:["It is the frequency of Otacon's Codec channel.","It is the access code for Metal Gear Rex.","It is the date of the Shadow Moses incident.","It is the identification number of Gray Fox."],correctAnswer:"It is the frequency of Otacon's Codec channel."},{question:"What is the name of the AI system that controls the security and surveillance of the Shadow Moses facility in Metal Gear Solid?",options:["Otacon","ArmsTech","DARPA","Metal Gear Mk. II"],correctAnswer:"ArmsTech"}]},{id:3,title:"Resident Evil 2",cover:a(73)},{id:4,title:"Crash Bandicoot",cover:a(458)},{id:5,title:"Spyro The Dragon",cover:a(204)},{id:6,title:"Tomb Raider",cover:a(816)},{id:7,title:"Silent Hill",cover:a(748)},{id:8,title:"Tekken 3",cover:a(47)}],T=R,D={components:{GameThumbnail:x},data(){return{ps1Games:T}},methods:{navigateToGameQuiz(e){this.$router.push({name:"quizPage",params:{id:e.id}})}}},Q=(0,d.A)(D,[["render",W],["__scopeId","data-v-06dac75f"]]),H=Q,N={class:"game-quiz-page"},X={class:"game-title"},B={key:0},j={class:"question"},P={class:"options"},_=["onClick"],z={key:1},V={class:"results"};function K(e,t,a,n,i,r){return(0,o.uX)(),(0,o.CE)("div",N,[(0,o.Lk)("h1",X,(0,I.v_)(a.game.title),1),r.currentQuestion?((0,o.uX)(),(0,o.CE)("div",B,[(0,o.Lk)("div",j,(0,I.v_)(r.currentQuestion.question),1),(0,o.Lk)("div",P,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.currentQuestion.options,((e,t)=>((0,o.uX)(),(0,o.CE)("button",{key:t,onClick:t=>r.checkAnswer(e)},(0,I.v_)(e),9,_)))),128))]),i.userAnswers.length>0?((0,o.uX)(),(0,o.CE)("button",{key:0,class:"results-button",onClick:t[0]||(t[0]=(...e)=>r.moveToNextQuestion&&r.moveToNextQuestion(...e))},"Results")):(0,o.Q3)("",!0)])):i.showResults?((0,o.uX)(),(0,o.CE)("div",z,[(0,o.Lk)("div",V,[(0,o.Lk)("p",null,"You answered "+(0,I.v_)(i.correctAnswers)+" out of "+(0,I.v_)(a.game.questions.length)+" questions correctly.",1)])])):(0,o.Q3)("",!0)])}const J={props:{game:Object},data(){return{currentQuestionIndex:0,correctAnswers:0,userAnswers:[],showResults:!1}},computed:{currentQuestion(){return this.game.questions&&this.game.questions.length>this.currentQuestionIndex?this.game.questions[this.currentQuestionIndex]:null}},methods:{checkAnswer(e){const t=this.currentQuestion.correctAnswer;e===t&&this.correctAnswers++,this.userAnswers.push(e),this.currentQuestionIndex===this.game.questions.length-1?this.showResults=!0:this.moveToNextQuestion()},moveToNextQuestion(){this.currentQuestionIndex++,this.userAnswers=[]}}},U=(0,d.A)(J,[["render",K],["__scopeId","data-v-1383b38e"]]),Z=U,$=(0,w.aE)({history:(0,w.Bt)(),routes:[{path:"/",component:H},{path:"/quiz/:id",name:"quizPage",component:Z,QuizPage:Z,props:!0}]});$.beforeEach(((e,t,a)=>{if("quizPage"===e.name&&e.params.id){const t=T.find((t=>t.id===parseInt(e.params.id)));t&&(e.params.game=t)}a()}));const Y=$;(0,n.Ef)(v).use(Y).mount("#app")},458:(e,t,a)=>{e.exports=a.p+"img/cover.2c025cac.jpeg"},812:(e,t,a)=>{e.exports=a.p+"img/cover.b9d60ddd.jpeg"},138:(e,t,a)=>{e.exports=a.p+"img/cover.66395bab.jpeg"},73:(e,t,a)=>{e.exports=a.p+"img/cover.3da3d2ac.jpeg"},748:(e,t,a)=>{e.exports=a.p+"img/cover.fae39824.jpeg"},204:(e,t,a)=>{e.exports=a.p+"img/cover.5400501a.jpeg"},47:(e,t,a)=>{e.exports=a.p+"img/cover.4eef2c29.jpeg"},816:(e,t,a)=>{e.exports=a.p+"img/cover.a0d37ec5.png"}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,a),i.exports}a.m=e,(()=>{var e=[];a.O=(t,n,o,i)=>{if(!n){var r=1/0;for(l=0;l<e.length;l++){for(var[n,o,i]=e[l],s=!0,c=0;c<n.length;c++)(!1&i||r>=i)&&Object.keys(a.O).every((e=>a.O[e](n[c])))?n.splice(c--,1):(s=!1,i<r&&(r=i));if(s){e.splice(l--,1);var h=o();void 0!==h&&(t=h)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,o,i]}})(),(()=>{a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{a.p=""})(),(()=>{var e={524:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[r,s,c]=n,h=0;if(r.some((t=>0!==e[t]))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(c)var l=c(a)}for(t&&t(n);h<r.length;h++)i=r[h],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(l)},n=self["webpackChunkplaystation_trivia_app"]=self["webpackChunkplaystation_trivia_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=a.O(void 0,[504],(()=>a(840)));n=a.O(n)})();
//# sourceMappingURL=app.97952f3c.js.map