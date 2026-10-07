const teams=[
 ['MI','mi','Mumbai'],['CSK','csk','Chennai'],['RCB','rcb','Bangalore'],['KKR','kkr','Kolkata'],['DC','dc','Delhi'],
 ['PBKS','pbks','Punjab'],['RR','rr','Rajasthan'],['SRH','srh','Hyderabad'],['GT','gt','Gujarat'],['LSG','lsg','Lucknow']
];
const players=[
 ['Virat Kohli','Batter','₹2.00 Cr'],['Rohit Sharma','Batter','₹2.00 Cr'],['Jasprit Bumrah','Bowler','₹2.00 Cr'],
 ['MS Dhoni','Wicketkeeper','₹1.50 Cr'],['Suryakumar Yadav','Batter','₹2.00 Cr']
];
let state={screen:'home',name:'Vramp',team:'RCB',privacy:'public',mode:'IPL 2026 Mock Auction',player:0,bid:2};

function teamButton(t){
 return `<button class="team ${t[1]} ${state.team===t[0]?'selected':''}" onclick="selectTeam('${t[0]}')">${t[0]}</button>`;
}
function header(){return `<div class="top-logo"><div class="clock"></div></div>`}
function promos(){return `<div class="promo-grid">
 <div class="promo promo-orange"><div class="promo-content"><span class="emoji">🔥</span><div class="big">2026 Official List<br>• 350 players</div></div><span class="pill">NEW</span></div>
 <div class="promo promo-purple"><div class="promo-content"><span class="emoji">🚀</span><div class="big">Play IPL<br>Simulation<br>Game!</div></div><span class="pill live">LIVE</span></div>
 <div class="promo promo-green"><div class="promo-content"><span class="emoji">☕</span><div class="big">Enjoyed it? Buy us a coffee!</div></div><span class="pill support">Support</span></div>
 </div>`}
function footer(){return `<div class="footer">Made with ❤️ by <b>Dhiva</b>　•　X　 Reddit　 Discord　 WhatsApp　 Telegram</div>`}

function home(){
 return `<div class="shell">${header()}<div class="hero"><div class="badge">🏏 IPL 2026 Auction Ready</div><h1>Play IPL Auction<span>with Friends</span></h1></div>${promos()}
 <div class="card"><div class="tabs"><div class="tab active">⚡ New Game</div><div class="tab">◴ Recent (10)</div></div>
 <div class="inner"><div class="toggle"><button class="active">🏏 Cricket</button><button>⚽ Football</button></div>
 <label>Your Name</label><input id="name" value="${state.name}" oninput="state.name=this.value">
 <label>Choose Your Team</label><div class="teams">${teams.map(teamButton).join('')}</div>
 <button class="primary" onclick="go('create')">ϟ　Create Room</button>
 <button class="secondary" onclick="go('create')">◎　Browse Live Auction Rooms <span style="float:right;color:#00d66b">◉ 38</span></button>
 </div></div>${footer()}</div>`;
}

function create(){
 return `<div class="create-shell shell">${header()}${promos()}<div class="card">
 <div class="inner"><div class="back" onclick="go('home')">← Back</div>
 <div class="room-head"><b>Room setup</b><span class="mini-team"><i>RCB</i> ${state.name}</span></div>
 <div class="mode-grid" style="margin-top:22px"><div class="mode active" onclick="state.privacy='public';render()"><strong>🔓 Public</strong><small>Anyone can find & join</small></div><div class="mode" onclick="state.privacy='private';render()"><strong>🔒 Private</strong><small>Only people you invite</small></div></div>
 <label>Auction Mode</label><div class="auction-modes">
 <div class="auction-mode"><div class="mode-icon">▣</div><div><h3>IPL 2026 Mock Auction　<span class="pill">🔥 Official List</span></h3><p>350 players • 42 sets • Real retentions • Dec 2025</p></div></div>
 <div class="auction-mode"><div class="mode-icon">🏆</div><div><h3>Legends Upgraded　<span class="pill">★ NEW</span></h3><p>248 legends • 26 sets • Marquee to spinners</p></div></div>
 <div class="auction-mode purple"><div class="mode-icon">🏆</div><div><h3>IPL Legends Auction</h3><p>Top 100 batters & bowlers • IPL history 2008-2025</p></div></div>
 <div class="auction-mode gray"><div class="mode-icon">✦</div><div><h3>Mega Auction</h3><p>All players in auction • ₹120 Cr purse • 230+ players</p></div></div>
 </div>
 <button class="primary" onclick="go('room')">ϟ　Create Room</button></div></div>${footer()}</div>`;
}

function room(){
 return `<div class="room shell"><div class="roombar"><span onclick="go('home')">←</span><b>Room: <span class="room-code">94BLYE</span></b><button class="start" onclick="go('auction')">▷ Start</button></div>
 <div class="invite"><b>♧　Invite Friends</b><div class="invite-row" style="margin-top:12px"><input value="https://www.playauctiongame.com/r/94BLYE" readonly><button class="iconbtn">▢</button><button class="iconbtn" style="background:#00a94f">◉</button><button class="iconbtn share">♧ Share</button></div></div>
 <div class="select"><div class="select-title"><span>♧　Select Your Team</span><span class="mini-team"><i>RCB</i> Bangalore</span></div><div class="team-grid">${teams.map(t=>`<div class="teambox ${state.team===t[0]?'selected':''}" onclick="selectTeam('${t[0]}')">${teamButton(t)}<small>${state.team===t[0]?'Vramp':''}</small></div>`).join('')}</div></div>
 <div class="promo promo-purple" style="margin-top:16px;min-height:90px"><div class="promo-content"><span class="emoji">🚀</span><div class="big">Play IPL Simulation Game! <span class="pill live">LIVE</span><br><small style="color:#aaa">24/7 cricket simulation • Play now</small></div></div></div>
 <div class="chatbox" style="padding:0"><div class="room-tabs"><div class="room-tab">♧　1/10</div><div class="room-tab active">◯ Chat</div><div class="room-tab">⚙ Settings</div></div>
 <div class="messages"><div class="msg"><span class="green">♧ Vramp</span> joined</div><div class="msg"><span style="background:#f10c1d;border-radius:50%;padding:7px;font-size:11px">RCB</span>　Vramp selected <span class="red">Bangalore</span></div></div>
 <div class="chat-input"><input placeholder="Say something..."><button class="send">➤</button></div></div>${footer()}</div>`;
}

function auction(){
 const p=players[state.player%players.length];
 return `<div class="auction shell"><div class="roombar"><span>← Room 94BLYE</span><b>IPL 2026 AUCTION</b><span class="purse">₹${(120-state.bid).toFixed(2)} Cr</span></div>
 <div class="player-card"><div class="player-avatar">🏏</div><div class="player-name">${p[0]}</div><div class="base">${p[1]} • Base ${p[2]}</div><div class="bid">₹${state.bid.toFixed(2)} Cr</div>
 <div class="bid-actions"><button onclick="state.bid+=0.25;render()">+ ₹0.25 Cr</button><button onclick="state.bid+=0.50;render()">+ ₹0.50 Cr</button><button class="sell" onclick="state.player++;state.bid=2;render()">SOLD ✓</button></div>
 <button class="skip" style="width:100%;margin-top:12px;padding:16px;border:0;border-radius:15px;background:#333;color:#fff;font-weight:800" onclick="state.player++;state.bid=2;render()">Unsold / Next Player</button>
 </div>${footer()}</div>`;
}
function selectTeam(t){state.team=t;render()}
function go(s){state.screen=s;render()}
function render(){document.getElementById('app').innerHTML=state.screen==='home'?home():state.screen==='create'?create():state.screen==='room'?room():auction()}
render();
