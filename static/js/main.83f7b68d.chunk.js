(this.webpackJsonpmy_portfolio=this.webpackJsonpmy_portfolio||[]).push([[0],[,,,,,function(e,t,n){e.exports=n.p+"static/media/dj4.e54a3d32.jpg"},,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(2),o=n.n(l),s=(n(13),n(3)),c=n(4),r=n(7),d=n(6),u=n(5),m=n.n(u),p=(n(14),function(e){var t=e.handleSectionClick;return i.a.createElement("div",{className:"sidenav"},i.a.createElement("img",{src:m.a,className:"avatar",alt:"avatar"}),i.a.createElement("h2",{className:"main-name"},"Deepali Jain"),i.a.createElement("p",{className:"subtitle"},'"Fullstack Developer"'),i.a.createElement("div",{className:"sections-list"},i.a.createElement("p",{className:"section-list-element",onClick:function(){return t("about")}},"About Me"),i.a.createElement("p",{className:"section-list-element",onClick:function(){return t("skills")}},"Skills"),i.a.createElement("p",{className:"section-list-element",onClick:function(){return t("projects")}},"Projects")))}),h=(n(15),function(e){var t=e.bio;return i.a.createElement("div",{className:"about-container"},i.a.createElement("p",null,t))}),k=(n(16),function(e){var t=e.skill;return i.a.createElement("div",{className:"skill-card"},t)}),f=(n(17),function(e){var t=e.skills;return i.a.createElement("div",{className:"skills-container"},i.a.createElement("h3",null,"Industry Knowledge"),i.a.createElement("div",{className:"industry-skill-container"},t.industryKnowledge.map((function(e){return i.a.createElement(k,{skill:e})}))),i.a.createElement("h3",null,"Tech Skills"),i.a.createElement("div",{className:"industry-skill-container"},t.techSkills.map((function(e){return i.a.createElement(k,{skill:e})}))),i.a.createElement("h3",null,"Interpersonal Skills"),i.a.createElement("div",{className:"industry-skill-container"},t.interpersonalSkills.map((function(e){return i.a.createElement(k,{skill:e})}))))}),v=(n(18),function(e){var t=e.project;return i.a.createElement("div",{className:"project-card"},i.a.createElement("p",null,i.a.createElement("b",null,"Name:")," ",t.name),i.a.createElement("p",null,i.a.createElement("b",null,"Description:")," ",t.description),i.a.createElement("p",null,i.a.createElement("b",null,"Link:")," ",i.a.createElement("a",{href:t.link},t.link)," "))}),E=(n(19),function(e){var t=e.projects;return i.a.createElement("div",{className:"projects-container"},i.a.createElement("div",{className:"industry-skill-container"},t.projectList.map((function(e){return i.a.createElement(v,{project:e})}))))}),g=(n(20),function(e){var t=e.selectedHeading,n=e.selectedQuote,a=e.selectedSection,l=e.about,o=e.skills,s=e.projects;return i.a.createElement("div",{className:"section-container"},i.a.createElement("div",{className:"section-heading-container"},i.a.createElement("h1",{className:"main-heading"},t),i.a.createElement("p",{className:"main-quote"},n)),i.a.createElement("div",{className:"section-component"},{about:i.a.createElement(h,{bio:l.bio}),skills:i.a.createElement(f,{skills:o}),projects:i.a.createElement(E,{projects:s})}[a]))}),b=(n(21),function(e){var t=e.handleSectionClick,n=e.selectedHeading,a=e.selectedQuote,l=e.selectedSection,o=e.about,s=e.skills,c=e.projects;return i.a.createElement("div",{className:"portfolio-container"},i.a.createElement("div",{className:"sidenav-container"},i.a.createElement(p,{handleSectionClick:t})),i.a.createElement("div",{className:"main-section-container"},i.a.createElement(g,{selectedSection:l,selectedHeading:n,selectedQuote:a,about:o,skills:s,projects:c})))}),j={heading:"About Me",quote:"Get codified...!",bio:"Passionate and hardworking full stack developer who loves to create thoughtful UI designs with perfect back-end. My professional path has taken afew twists and turns - from elearning & leadership trainings to full stack web developement. Creativity is what makes this jump very welcoming to me and I can say very clearly that I love what I do. With my two most impotant traits, passion and hardwork, I have been able to volunteer several hours a week for community service. Whenever possible, I spend my time for Sreeshti, a non-profit organzation, as a Logistics and Media Secretary and raise funds and provide service to people in need. My current project is to help people in NJ for the biggest cause COVID19."},S={heading:"Skills",quote:"Building skills is fun",techSkills:["JavaScript","NodeJS","ReactJS","Redux","C++","C","HTML","CSS","jQuery","Bootstrap","Git","GitHub","MongoDB","MySql","Sequelize","Mongoose"],industryKnowledge:["Software","Marketing","Content Writing","Front-end","Back-end","Web Design","Project Management","Client Relationship Management"],interpersonalSkills:["Communication","Socail Work","Time Management","Leadership","Management"]},y={heading:"Projects",quote:"Lots of code! Lots of fun stuff!",projectList:[{name:"Project 1: GetMed",description:"Get medicine from your preferred pharmacy at your doorstep as soon as want.",link:"https://damp-badlands-68384.herokuapp.com/"},{name:"Project 2: Note Taker",description:"Enables user to write, save, and delete notes.",link:"https://notetaker-dj.herokuapp.com/"},{name:"Project 3: Music Venue Planner",description:"Search music events and concerts in the New York City and plan your next event.",link:"https://deej17.github.io/deepali-homework7/home.html"},{name:"Project 4: Password Generator",description:"Generate a secure password randomaly that meets a certain criteria.",link:"https://deej17.github.io/deepali-homework3/"},{name:"Project 5: Workday Scheduler",description:"Plan workday day and simplify the workflow.",link:"https://deej17.github.io/deej17-homework5/"}]},w=(n(22),function(e){Object(r.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleSectionClick=function(t){e.setState({selectedSection:t,selectedHeading:e.state[t].heading,selectedQuote:e.state[t].quote})},e.state={selectedSection:"",selectedHeading:"",selectedQuote:"",about:null,skills:null,projects:null},e}return Object(c.a)(n,[{key:"componentWillMount",value:function(){this.setState({about:j,skills:S,projects:y,selectedHeading:j.heading,selectedQuote:j.quote,selectedSection:"about"})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(b,{handleSectionClick:this.handleSectionClick,selectedSection:this.state.selectedSection,selectedHeading:this.state.selectedHeading,selectedQuote:this.state.selectedQuote,about:this.state.about,skills:this.state.skills,projects:this.state.projects}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.83f7b68d.chunk.js.map