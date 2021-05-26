(this["webpackJsonpreact-snake"]=this["webpackJsonpreact-snake"]||[]).push([[0],{1:function(e,t,n){e.exports={app:"App_app__2I7Ip",header:"App_header__3FcCA",title:"App_title__1Q3k0",container:"App_container__1sINv",grid:"App_grid__3reeh","grid-row":"App_grid-row__3QSIE","grid-col":"App_grid-col__3nvgo",field:"App_field__3Sc6B",blank:"App_blank__3Hh2L",snake:"App_snake__3bEZu",food:"App_food__1B1Br",details:"App_details__2JP0m","score-container":"App_score-container__3oX6c","score-label":"App_score-label___SN2p",score:"App_score__jn5Zk","button-container":"App_button-container__1cB6E",button:"App_button__1sulJ","button-idle":"App_button-idle__30JcN","button-in-progress":"App_button-in-progress__16BBP","button-game-over":"App_button-game-over__BUgVq"}},12:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);n(12);var i=n(2),r=n(7),o=n(11),s=n(9),a=Math.floor(11.44),c=21,u=n(4),d=n.n(u),l=function e(){var t=this;Object(i.a)(this,e),this.position=void 0,this.generatePosition=function(e,n){for(var i=!1,r=0,o=0;!i;){r=Math.floor(Math.random()*(e.x[1]-e.x[0])+e.x[0]),o=Math.floor(Math.random()*(e.y[1]-e.y[0])+e.y[0]);for(var s=0;s<n.length&&(n[s].x!==r||n[s].y!==o);s++)s===n.length-1&&(i=!0)}t.position={x:r,y:o}},this.position=null},h=function e(){Object(i.a)(this,e),this.boundaries=void 0,this.values=void 0,this.boundaries={x:[],y:[]},this.values=[];for(var t=0;t<a;t++)this.values.push([]);for(var n=0;n<a;n++)for(var r=0;r<c;r++){var o={position:{x:r+1-Math.ceil(10.5),y:a-1-n+1-Math.ceil(a/2)},value:"B"};this.values[n].push(o)}this.boundaries.x.push(this.values[0][0].position.x),this.boundaries.x.push(this.values[0][20].position.x),this.boundaries.y.push(this.values[a-1][0].position.y),this.boundaries.y.push(this.values[0][0].position.y)},p=n(10),f=function e(){var t=this;Object(i.a)(this,e),this.startingPosition=void 0,this.currentPosition=void 0,this.direction=void 0,this.speed=void 0,this.reset=function(){t.currentPosition=Object(p.a)(t.startingPosition),t.direction="right",t.speed=5},this.moveRight=function(){return t.currentPosition.push({x:t.currentPosition[t.currentPosition.length-1].x+1,y:t.currentPosition[t.currentPosition.length-1].y}),t.currentPosition.shift()},this.moveDown=function(){return t.currentPosition.push({x:t.currentPosition[t.currentPosition.length-1].x,y:t.currentPosition[t.currentPosition.length-1].y-1}),t.currentPosition.shift()},this.moveLeft=function(){return t.currentPosition.push({x:t.currentPosition[t.currentPosition.length-1].x-1,y:t.currentPosition[t.currentPosition.length-1].y}),t.currentPosition.shift()},this.moveUp=function(){return t.currentPosition.push({x:t.currentPosition[t.currentPosition.length-1].x,y:t.currentPosition[t.currentPosition.length-1].y+1}),t.currentPosition.shift()},this.grow=function(){var e=t.direction;if(t.currentPosition.length>1){var n=t.currentPosition[0],i=t.currentPosition[1];n.x===i.x?e=n.y<i.y?"down":"up":n.y===i.y&&(e=n.x<i.x?"right":"left")}switch(e){case"down":t.currentPosition.unshift({x:t.currentPosition[0].x,y:t.currentPosition[0].y+1});break;case"left":t.currentPosition.unshift({x:t.currentPosition[0].x+1,y:t.currentPosition[0].y});break;case"up":t.currentPosition.unshift({x:t.currentPosition[0].x,y:t.currentPosition[0].y-1});break;default:t.currentPosition.unshift({x:t.currentPosition[0].x-1,y:t.currentPosition[0].y})}},this.hasReachedSpeedCap=function(){return 80===t.speed},this.increaseSpeed=function(e){t.speed=5*(e+1)};var n=[{x:0,y:0}];this.startingPosition=[].concat(n),this.currentPosition=[].concat(n),this.direction="right",this.speed=5},g=n(3),v=n(6),b=n.n(v),m=n(1),k=n.n(m),P=n(0),x=g.title,S=g.highestScoreLabel,_=g.lastScoreLabel,y=g.currentScoreLabel,j=g.startGame,w=g.inProgress,O=g.restartGame,A=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).timeoutID=0,r.timeout=850,r.appRef=void 0,r.grid=new h,r.snake=new f,r.food=new l,r.reset=function(){for(var e=0;e<a;e++)for(var t=0;t<c;t++)r.grid.values[e][t].value="B";r.snake.reset()},r.renderSnake=function(e){for(var t=0;t<e.length;t++)e:for(var n=0;n<a;n++)for(var i=0;i<c;i++)if(e[t].x===r.grid.values[n][i].position.x&&e[t].y===r.grid.values[n][i].position.y){r.grid.values[n][i].value="X";break e}},r.renderFood=function(){if(null!==r.food.position)e:for(var e=0;e<a;e++)for(var t=0;t<c;t++)if(r.food.position.x===r.grid.values[e][t].position.x&&r.food.position.y===r.grid.values[e][t].position.y){r.grid.values[e][t].value="F";break e}},r.moveSnake=function(e){e:for(var t=0;t<a;t++)for(var n=0;n<c;n++)if(e.x===r.grid.values[t][n].position.x&&e.y===r.grid.values[t][n].position.y){r.grid.values[t][n].value="B";break e}},r.game=function(){var e=!1,t=r.snake.currentPosition[r.snake.currentPosition.length-1],n=t.x,i=t.y;switch(r.setState({isKeyPressed:!1}),r.snake.direction){case"down":if(i-1>=r.grid.boundaries.y[0]){var o=r.snake.moveDown();r.moveSnake(o)}else e=!0;break;case"left":if(n-1>=r.grid.boundaries.x[0]){var s=r.snake.moveLeft();r.moveSnake(s)}else e=!0;break;case"up":if(i+1<=r.grid.boundaries.y[1]){var a=r.snake.moveUp();r.moveSnake(a)}else e=!0;break;default:if(n+1<=r.grid.boundaries.x[1]){var c=r.snake.moveRight();r.moveSnake(c)}else e=!0}var u=r.snake.currentPosition[r.snake.currentPosition.length-1];n=u.x,i=u.y;for(var d=0;d<r.snake.currentPosition.length-1;d++)if(n===r.snake.currentPosition[d].x&&i===r.snake.currentPosition[d].y){e=!0;break}if(e){clearTimeout(r.timeoutID);var l=r.state.highestScore;r.state.currentScore>r.state.highestScore&&(l=r.state.currentScore),r.setState({highestScore:l,lastScore:r.state.currentScore,gameStatus:"game-over"})}else r.renderSnake(r.snake.currentPosition),null!==r.food.position&&r.food.position.x===n&&r.food.position.y===i&&(r.setState((function(e){return{currentScore:e.currentScore+1}}),(function(){r.snake.hasReachedSpeedCap()||(r.snake.increaseSpeed(r.state.currentScore),r.timeout-=r.snake.speed)})),r.snake.grow(),r.food.generatePosition(r.grid.boundaries,r.snake.currentPosition),r.renderSnake(r.snake.currentPosition),r.renderFood()),r.setState({doRender:!0}),r.timeoutID=window.setTimeout((function(){r.game()}),r.timeout)},r.handleDirectionChange=function(e){if("in-progress"===r.state.gameStatus&&!r.state.isKeyPressed){switch(e.key){case"ArrowRight":"down"!==r.snake.direction&&"up"!==r.snake.direction||(r.snake.direction="right");break;case"ArrowDown":"right"!==r.snake.direction&&"left"!==r.snake.direction||(r.snake.direction="down");break;case"ArrowLeft":"down"!==r.snake.direction&&"up"!==r.snake.direction||(r.snake.direction="left");break;case"ArrowUp":"right"!==r.snake.direction&&"left"!==r.snake.direction||(r.snake.direction="up");break;default:return}r.setState({isKeyPressed:!0})}},r.handleGame=function(){"idle"!==r.state.gameStatus&&"game-over"!==r.state.gameStatus||(r.appRef&&r.appRef.current&&r.appRef.current.focus(),"game-over"===r.state.gameStatus&&r.reset(),r.setState({currentScore:0,gameStatus:"in-progress"}),r.renderSnake(r.snake.startingPosition),r.food.generatePosition(r.grid.boundaries,r.snake.startingPosition),r.renderFood(),r.timeoutID=window.setTimeout((function(){r.game()}),r.timeout))},r.renderGrid=function(){return r.grid.values.map((function(e,t){return Object(P.jsx)("div",{className:k.a["grid-row"],style:{width:1050},children:e.map((function(e,t){return Object(P.jsx)("div",{className:k.a["grid-col"],style:{width:50,height:50},children:Object(P.jsx)("div",{className:b()(k.a.field,"B"===e.value?k.a.blank:"X"===e.value?k.a.snake:k.a.food)})},t)}))},t)}))},r.appRef=d.a.createRef(),r.state={currentScore:0,lastScore:0,highestScore:0,gameStatus:"idle",isKeyPressed:!1,doRender:!1},r}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state,t=e.currentScore,n=e.lastScore,i=e.highestScore,r=e.gameStatus,o=j;return"in-progress"===r?o=w:"game-over"===r&&(o=O),Object(P.jsxs)("div",{ref:this.appRef,className:k.a.app,tabIndex:0,onKeyDown:this.handleDirectionChange,children:[Object(P.jsx)("div",{className:k.a.header,children:Object(P.jsx)("div",{className:k.a.title,children:x})}),Object(P.jsxs)("div",{className:k.a.container,children:[Object(P.jsx)("div",{className:k.a.grid,style:{height:572},children:this.renderGrid()}),Object(P.jsxs)("div",{className:k.a.details,children:[Object(P.jsxs)("div",{className:k.a["score-container"],children:[Object(P.jsxs)("div",{className:k.a["score-label"],children:["".concat(S,": "),Object(P.jsx)("span",{className:k.a.score,children:i})]}),Object(P.jsxs)("div",{className:k.a["score-label"],children:["".concat(_,": "),Object(P.jsx)("span",{className:k.a.score,children:n})]}),Object(P.jsxs)("div",{className:k.a["score-label"],children:["".concat(y,": "),Object(P.jsx)("span",{className:k.a.score,children:t})]})]}),Object(P.jsx)("div",{className:k.a["button-container"],children:Object(P.jsx)("button",{className:b()(k.a.button,k.a["button-".concat(r)]),onClick:this.handleGame,children:o})})]})]})]})}}]),n}(u.Component),N=n(8),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),i(e),r(e),o(e),s(e)}))};n.n(N).a.render(Object(P.jsx)(d.a.StrictMode,{children:Object(P.jsx)(A,{})}),document.getElementById("root")),R()},3:function(e){e.exports=JSON.parse('{"title":"React Snake Game","highestScoreLabel":"Highest Score","lastScoreLabel":"Last Score","currentScoreLabel":"Current Score","startGame":"Start Game","inProgress":"In Progress","restartGame":"Game Over - Restart Game"}')}},[[18,1,2]]]);
//# sourceMappingURL=main.b87949bd.chunk.js.map