const TEXTURES = {
  grass: [
["#539C24","#6CB53D","#5AA32B","#79C24A","#62AB33","#7FC850","#81CA52","#62AB33","#5FA830","#70B941","#6CB53D","#63AC34","#62AB33","#6EB73F","#65AE36","#62AB33"],["#6EB73F","#6EB73F","#5EA72F","#60A931","#5AA32B","#65AE36","#5DA62E","#7FC850","#62AB33","#7AC34B","#58A129","#67B038","#74BD45","#6BB43C","#64AD35","#5EA72F"],["#529B23","#69B23A","#62AB33","#69B23A","#5EA72F","#7FC850","#59A22A","#5EA72F","#539C24","#65AE36","#79C24A","#6AB33B","#69B23A","#529B23","#438C14","#6FB840"],["#62AB33","#58A129","#61AA32","#509921","#5FA830","#529B23","#67B038","#66AF37","#74BD45","#539C24","#549D25","#57A028","#5AA32B","#569F27","#71BA42","#76BF47"],["#6FB840","#65AE36","#59A22A","#5DA62E","#5EA72F","#62AB33","#75BE46","#5DA62E","#569F27","#61AA32","#6AB33B","#66AF37","#6AB33B","#58A129","#63AC34","#5DA62E"],["#71BA42","#539C24","#68B139","#5CA52D","#5BA42C","#479018","#62AB33","#65AE36","#67B038","#5FA830","#5CA52D","#7AC34B","#66AF37","#5EA72F","#74BD45","#539C24"],["#78C149","#5DA62E","#6BB43C","#70B941","#5CA52D","#60A931","#65AE36","#5CA52D","#72BB43","#6FB840","#71BA42","#72BB43","#72BB43","#66AF37","#519A22","#77C048"],["#408911","#6AB33B","#7AC34B","#60A931","#5CA52D","#5FA830","#78C149","#62AB33","#63AC34","#509921","#68B139","#5FA830","#72BB43","#72BB43","#5EA72F","#5EA72F"],["#65AE36","#72BB43","#5EA72F","#72BB43","#65AE36","#5FA830","#6DB63E","#65AE36","#549D25","#68B139","#62AB33","#71BA42","#61AA32","#559E26","#5CA52D","#5FA830"],["#70B941","#7CC54D","#70B941","#68B139","#549D25","#6AB33B","#74BD45","#68B139","#71BA42","#6CB53D","#5DA62E","#63AC34","#68B139","#5BA42C","#78C149","#57A028"],["#70B941","#5CA52D","#6AB33B","#509921","#5EA72F","#59A22A","#57A028","#61AA32","#77C048","#6FB840","#559E26","#4F9820","#73BC44","#57A028","#6BB43C","#5CA52D"],["#73BC44","#73BC44","#6DB63E","#5DA62E","#569F27","#7CC54D","#6FB840","#529B23","#58A129","#63AC34","#79C24A","#67B038","#4E971F","#70B941","#479018","#6CB53D"],["#5FA830","#5EA72F","#6BB43C","#6DB63E","#5AA32B","#5AA32B","#6BB43C","#6DB63E","#57A028","#6FB840","#65AE36","#61AA32","#65AE36","#5FA830","#70B941","#519A22"],["#63AC34","#67B038","#7AC34B","#71BA42","#64AD35","#6AB33B","#5BA42C","#58A129","#519A22","#62AB33","#5FA830","#6DB63E","#59A22A","#66AF37","#5FA830","#7FC850"],["#57A028","#77C048","#6FB840","#58A129","#70B941","#408911","#76BF47","#59A22A","#68B139","#75BE46","#539C24","#4F9820","#90D961","#5AA32B","#66AF37","#60A931"],["#539C24","#5BA42C","#60A931","#5FA830","#75BE46","#68B139","#6BB43C","#81CA52","#6BB43C","#68B139","#61AA32","#6CB53D","#569F27","#59A22A","#57A028","#539C24"]],
  stone: [
["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#404040","#404040","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#808080","#404040","#404040","#FFFFFF","#808080"],["#FFFFFF","#808080","#808080","#000000","#404040","#FFFFFF","#404040","#000000","#000000","#808080","#808080","#000000","#404040","#FFFFFF","#404040","#808080"],["#404040","#808080","#000000","#404040","#FFFFFF","#808080","#808080","#000000","#404040","#000000","#000000","#404040","#FFFFFF","#808080","#404040","#404040"],["#000000","#000000","#404040","#FFFFFF","#808080","#808080","#000000","#404040","#FFFFFF","#404040","#404040","#404040","#FFFFFF","#808080","#808080","#808080"],["#FFFFFF","#FFFFFF","#404040","#404040","#000000","#000000","#404040","#FFFFFF","#808080","#808080","#808080","#404040","#404040","#808080","#808080","#808080"],["#808080","#808080","#808080","#404040","#404040","#404040","#404040","#FFFFFF","#808080","#808080","#808080","#808080","#808080","#000000","#000000","#000000"],["#808080","#808080","#000000","#404040","#404040","#FFFFFF","#404040","#404040","#808080","#808080","#808080","#808080","#808080","#000000","#404040","#FFFFFF"],["#808080","#000000","#404040","#404040","#FFFFFF","#FFFFFF","#808080","#404040","#404040","#000000","#808080","#808080","#808080","#404040","#404040","#FFFFFF"],["#000000","#404040","#404040","#FFFFFF","#808080","#000000","#404040","#FFFFFF","#FFFFFF","#000000","#000000","#000000","#000000","#404040","#FFFFFF","#FFFFFF"],["#404040","#404040","#FFFFFF","#808080","#808080","#000000","#404040","#FFFFFF","#808080","#808080","#404040","#404040","#404040","#FFFFFF","#FFFFFF","#808080"],["#404040","#404040","#FFFFFF","#808080","#808080","#000000","#404040","#404040","#808080","#808080","#808080","#404040","#000000","#FFFFFF","#808080","#000000"],["#FFFFFF","#404040","#404040","#000000","#000000","#000000","#FFFFFF","#404040","#404040","#808080","#000000","#000000","#404040","#404040","#404040","#808080"],["#FFFFFF","#FFFFFF","#404040","#404040","#404040","#FFFFFF","#808080","#808080","#404040","#000000","#404040","#404040","#FFFFFF","#808080","#404040","#000000"],["#808080","#808080","#404040","#FFFFFF","#FFFFFF","#808080","#808080","#808080","#000000","#404040","#404040","#FFFFFF","#808080","#808080","#404040","#000000"],["#808080","#808080","#000000","#404040","#404040","#404040","#808080","#808080","#404040","#404040","#FFFFFF","#808080","#808080","#404040","#000000","#FFFFFF"],["#808080","#808080","#808080","#000000","#000000","#000000","#000000","#808080","#404040","#FFFFFF","#808080","#404040","#000000","#000000","#FFFFFF","#808080"]],
  sword: [
[null,null,null,null,null,null,null,null,null,null,null,null,null,"#23594F","#20554B","#103F36"],["#FFFFFF","#808080","#808080","#000000","#404040","#FFFFFF","#404040","#000000","#000000","#808080","#808080","#000000","#404040","#316B61","#7AD0C3","#7FCCC1","#1C413B"],["#404040","#808080","#000000","#404040","#FFFFFF","#808080","#808080","#000000","#404040","#000000","#000000","#404040","#326B62","#70CCBE","#5BDAC5","#79CABE","#1E413B"],["#000000","#000000","#404040","#FFFFFF","#808080","#808080","#000000","#404040","#FFFFFF","#404040","#404040","#404040","#326B61","#6ECCBD","#4ED8C0","#6DC7B9","#2E5751",null],["#FFFFFF","#FFFFFF","#404040","#404040","#000000","#000000","#404040","#FFFFFF","#808080","#808080","#808080","#404040","#326B62","#6FCCBE","#43D6BD","#2CBEA4","#21564D",null],["#808080","#808080","#808080","#404040","#404040","#404040","#404040","#FFFFFF","#808080","#808080","#808080","#808080","#246A5D","#6DCCBD","#43D6BC","#2ABEA4","#135448",null],["#808080","#808080","#000000","#404040","#404040","#FFFFFF","#404040","#404040","#808080","#808080","#808080","#808080","#166959","#2CC3A8","#38D5BA","#2BBEA4","#135549",null],["#808080","#000000","#404040","#404040","#FFFFFF","#FFFFFF","#808080","#404040","#404040","#000000","#808080","#808080","#166859","#29BDA3","#2DD2B5","#29BEA4","#135449",null],["#000000","#404040","#404040","#FFFFFF","#808080","#000000","#404040","#FFFFFF","#FFFFFF","#000000","#000000","#000000","#104D41","#186F60","#125146","#26B198","#135549",null],["#404040","#404040","#FFFFFF","#808080","#808080","#000000","#404040","#FFFFFF","#808080","#808080","#404040","#404040","#0F493E","#197868","#1A7868","#1A7C6B","#135449",null],["#404040","#404040","#FFFFFF","#808080","#808080","#000000","#404040","#404040","#808080","#808080","#808080","#404040","#1A4D3D","#145A4D","#0F463C","#0E3F36",null],["#FFFFFF","#404040","#404040","#000000","#000000","#000000","#FFFFFF","#404040","#404040","#808080","#000000","#000000","#543E18","#4C421E","#143227","#0C3931",null],["#FFFFFF","#FFFFFF","#404040","#404040","#404040","#FFFFFF","#808080","#808080","#404040","#000000","#404040","#404040","#533E19","#684E1D","#3B2C0F","#092822",null],["#808080","#808080","#404040","#FFFFFF","#FFFFFF","#808080","#808080","#808080","#000000","#404040","#404040","#FFFFFF","#0D4036","#184436","#4C421E","#3B2C10",null],["#808080","#808080","#000000","#404040","#404040","#404040","#808080","#808080","#404040","#404040","#FFFFFF","#808080","#0D4036","#124D42","#142F25",null],["#808080","#808080","#808080","#000000","#000000","#000000","#000000","#808080","#404040","#FFFFFF","#808080","#404040","#092923","#092C26","#082521",null]],
  mattock: [
[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#404040","#404040","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#808080","#404040","#404040","#FFFFFF","#808080"],["#FFFFFF","#808080","#808080","#000000","#404040","#FFFFFF","#404040","#000000","#000000","#808080","#808080","#000000","#404040","#13564A","#125347","#115045","#115044","#115145"],["#404040","#808080","#000000","#404040","#FFFFFF","#808080","#808080","#000000","#404040","#000000","#000000","#404040","#125549","#26AF97","#23A48D","#20937F","#209682","#23A58F","#1B5A4A","#4C3E1B","#5E451A"],["#000000","#000000","#404040","#FFFFFF","#808080","#808080","#000000","#404040","#FFFFFF","#404040","#404040","#404040","#125348","#0D3F36","#0C3830","#10483E","#269B84","#2FA185","#626839","#362C12"],["#FFFFFF","#FFFFFF","#404040","#404040","#000000","#000000","#404040","#FFFFFF","#808080","#808080","#808080","#404040","#404040","#435434","#2FA387","#2D9D83","#14463A"],["#808080","#808080","#808080","#404040","#404040","#404040","#404040","#FFFFFF","#808080","#808080","#808080","#808080","#543E17","#554019","#2E452E","#239883","#22A08A","#0C3A32"],["#808080","#000000","#404040","#404040","#FFFFFF","#FFFFFF","#808080","#404040","#404040","#000000","#808080","#808080","#543E18","#684E1C","#3B2C10","#0F483E","#20937F","#0C3932"],["#000000","#404040","#404040","#FFFFFF","#808080","#000000","#404040","#FFFFFF","#FFFFFF","#000000","#000000","#000000","#543E18","#564018","#3B2C10","#0C3831","#1F8F7C","#0C3932"],["#404040","#404040","#FFFFFF","#808080","#808080","#000000","#404040","#FFFFFF","#808080","#808080","#404040","#404040","#543E18","#684E1D","#3B2C10","#0D3D34","#22A08A","#0D3D34"],["#404040","#404040","#FFFFFF","#808080","#808080","#000000","#404040","#404040","#808080","#808080","#808080","#404040","#543E18","#564018","#3B2C10","#0D4037","#24A790","#0D4037"],["#FFFFFF","#404040","#404040","#000000","#000000","#000000","#FFFFFF","#404040","#404040","#808080","#000000","#000000","#543E18","#4C421E","#3B2C10","#0D3F36"],["#FFFFFF","#FFFFFF","#404040","#404040","#404040","#FFFFFF","#808080","#808080","#404040","#000000","#404040","#404040","#543E18","#564018","#3B2C10"],["#808080","#808080","#404040","#FFFFFF","#FFFFFF","#808080","#808080","#808080","#000000","#404040","#404040","#FFFFFF","#4C3815","#674D1D","#3B2C10"],["#808080","#808080","#000000","#404040","#404040","#404040","#808080","#808080","#404040","#404040","#FFFFFF","#808080","#2E220C","#34270E"],["#808080","#808080","#808080","#000000","#000000","#000000","#000000","#808080","#404040","#FFFFFF","#808080","#404040"]]
};

export class GameRoom extends DurableObject {
  constructor(state, env) {
    super(state, env);
    this.state = state;
    this.env = env;
    this.sockets = new Map();
    this.players = new Map();
    this.worldBlocks = new Map();
    this.sessions = new Map();
    this.blockRegistry = new Map();
    this.weaponRegistry = new Map();
    this.toolRegistry = new Map();
    this.playerUI = new Map();
    this.rooms = new Map();
    
    this.PLATFORM_SIZE = 30;
    this.PLATFORM_HEIGHT = 40;
    this.MAX_CHAT_HISTORY = 100;
    this.chatHistory = [];
    
    this.premadeMessages = [
      "Hello!", "GG!", "Nice!", "Help!", "Follow me!",
      "Watch out!", "Thanks!", "Good luck!", "Fight?", "Peace!",
      "Over here!", "Nice build!", "Bye!", "LOL", "Oops!"
    ];
    
    this.SERVER_CONFIG = {
      name: "WORLDS Official",
      description: "The official WORLDS server - Build, Fight, Survive!",
      maxPlayers: 50,
      previewBlock: "grass",
      requireLogin: true,
      version: "0.7.0-beta"
    };
    
    this.loginFormConfig = {
      title: "Welcome",
      subtitle: "Enter your credentials",
      backgroundColor: "#0a0a15",
      accentColor: "#8b5cf6",
      buttonText: "ENTER WORLD",
      registerButtonText: "CREATE ACCOUNT",
      showRememberMe: true,
      logoText: "WORLDS",
      customCSS: ""
    };
    
    this.initializeTextures();
    this.generateWorld();
  }

  initializeTextures() {
    const grassTexture = TEXTURES.grass;
    const stoneTexture = TEXTURES.stone;
    const swordTexture = TEXTURES.sword;
    const mattockTexture = TEXTURES.mattock;
    
    this.blockRegistry.set('grass', { name: 'grass', displayName: 'Grass Block', hardness: 0.6, drops: 'grass', transparent: false, solid: true, blastResistance: 1.0, lightLevel: 0, flammable: false, texture: grassTexture });
    this.blockRegistry.set('stone', { name: 'stone', displayName: 'Stone', hardness: 1.5, drops: 'stone', transparent: false, solid: true, blastResistance: 1.5, lightLevel: 0, flammable: false, texture: stoneTexture });
    this.weaponRegistry.set('sword', { name: 'sword', displayName: 'Iron Sword', damage: 25, attackSpeed: 0.4, knockback: 0.8, range: 3.5, critChance: 0.15, critMultiplier: 1.5, durability: -1, enchantable: true, texture: swordTexture });
    this.toolRegistry.set('mattock', { name: 'mattock', displayName: 'Iron Mattock', breakSpeed: 2.5, durability: 100, efficiency: { stone: 2.0, grass: 1.5 }, damage: 5, texture: mattockTexture });
  }

  createDefaultTexture(primary, secondary, highlight) {
    const texture = [];
    for (let y = 0; y < 16; y++) {
      const row = [];
      for (let x = 0; x < 16; x++) {
        if ((x + y) % 7 === 0 && Math.random() > 0.5) row.push(highlight);
        else if (Math.random() > 0.7) row.push(secondary);
        else row.push(primary);
      }
      texture.push(row);
    }
    return texture;
  }

  generateWorld() {
    this.worldBlocks.clear();
    for (let x = -this.PLATFORM_SIZE; x <= this.PLATFORM_SIZE; x++) {
      for (let z = -this.PLATFORM_SIZE; z <= this.PLATFORM_SIZE; z++) {
        this.worldBlocks.set(`${x},${this.PLATFORM_HEIGHT},${z}`, 'grass');
      }
    }
    for (let x = -this.PLATFORM_SIZE; x <= this.PLATFORM_SIZE; x++) {
      for (let z = -this.PLATFORM_SIZE; z <= this.PLATFORM_SIZE; z++) {
        this.worldBlocks.set(`${x},${this.PLATFORM_HEIGHT - 1},${z}`, 'stone');
        if (Math.random() < 0.7) this.worldBlocks.set(`${x},${this.PLATFORM_HEIGHT - 2},${z}`, 'stone');
      }
    }
  }

  async acceptWebSocket(webSocket) {
    const id = crypto.randomUUID();
    const socketData = { socket: webSocket, id, username: null, sessionToken: null, connected: false, sid: id.slice(0, 20) };
    this.sockets.set(id, socketData);
    this.rooms.set(id, new Set());
    
    webSocket.accept();
    
    webSocket.addEventListener('message', async (event) => {
      try {
        const text = event.data;
        this.handleSocketMessage(socketData, text);
      } catch (err) { console.error('Message error:', err); }
    });
    
    webSocket.addEventListener('close', () => this.handleDisconnect(socketData));
  }

  handleSocketMessage(socketData, text) {
    if (text === '2') { this.send(socketData, '3'); return; }
    if (text.startsWith('0')) { this.send(socketData, `0{"sid":"${socketData.sid}","upgrades":[],"pingInterval":25000,"pingTimeout":20000}`); return; }
    if (text.startsWith('40')) { socketData.connected = true; this.send(socketData, '40'); return; }
    if (text.startsWith('42')) {
      const msg = text.slice(2);
      try {
        const [event, data] = JSON.parse(msg);
        this.handleSocketEvent(socketData, event, data);
      } catch (e) {}
    }
  }

  send(socketData, message) {
    try { socketData.socket.send(message); } catch (err) {}
  }

  emit(socketData, event, data) {
    const msg = JSON.stringify([event, data]);
    this.send(socketData, '42' + msg);
  }

  broadcast(event, data, excludeId = null) {
    for (const [id, socketData] of this.sockets) {
      if (id !== excludeId && socketData.connected) this.emit(socketData, event, data);
    }
  }

  handleSocketEvent(socketData, event, data) {
    switch (event) {
      case 'register': this.handleRegister(socketData, data); break;
      case 'login': this.handleLogin(socketData, data); break;
      case 'move': this.handleMove(socketData, data); break;
      case 'breakBlock': this.handleBreakBlock(socketData, data); break;
      case 'placeBlock': this.handlePlaceBlock(socketData, data); break;
      case 'attack': this.handleAttack(socketData, data); break;
      case 'respawn': this.handleRespawn(socketData); break;
      case 'chat': this.handleChat(socketData, data); break;
    }
  }

  handleRegister(socketData, data) {
    this.registerUser(data.username, data.password).then(result => {
      this.emit(socketData, 'registerResult', result);
      if (result.success) {
        this.loginUser(data.username, data.password).then(loginResult => {
          if (loginResult.success) this.initializePlayer(socketData, data.username, loginResult);
        });
      }
    });
  }

  handleLogin(socketData, data) {
    this.loginUser(data.username, data.password).then(result => {
      if (result.success) this.initializePlayer(socketData, data.username, result);
      else this.emit(socketData, 'loginResult', result);
    });
  }

  async registerUser(username, password) {
    const existing = await this.env.USERS.get(username);
    if (existing) return { success: false, error: 'Username taken' };
    if (username.length < 3 || username.length > 16) return { success: false, error: 'Username: 3-16 characters' };
    if (password.length < 4) return { success: false, error: 'Password: 4+ characters' };
    if (!/^[a-zA-Z0-9_]+$/.test(username)) return { success: false, error: 'Letters, numbers, underscore only' };
    const salt = crypto.randomUUID();
    const hash = await this.hashPassword(password, salt);
    const userData = { passwordHash: hash, salt, createdAt: Date.now(), data: { position: null, inventory: null, lastSeen: Date.now() } };
    await this.env.USERS.put(username, JSON.stringify(userData));
    return { success: true };
  }

  async loginUser(username, password) {
    const userStr = await this.env.USERS.get(username);
    if (!userStr) return { success: false, error: 'User not found' };
    const user = JSON.parse(userStr);
    const hash = await this.hashPassword(password, user.salt);
    if (hash !== user.passwordHash) return { success: false, error: 'Wrong password' };
    const token = crypto.randomUUID();
    this.sessions.set(token, username);
    return { success: true, token, userData: user.data };
  }

  async hashPassword(password, salt) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password + salt);
    const hashBuffer = await crypto.subtle.digest('SHA-512', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  async saveUserData(username, data) {
    const userStr = await this.env.USERS.get(username);
    if (userStr) {
      const user = JSON.parse(userStr);
      user.data = { ...user.data, ...data, lastSeen: Date.now() };
      await this.env.USERS.put(username, JSON.stringify(user));
    }
  }

  initializePlayer(socketData, username, loginResult) {
    socketData.username = username;
    socketData.sessionToken = loginResult.token;
    const userData = loginResult.userData;
    const spawn = { x: userData.position?.x ?? (Math.random() * 10 - 5), y: userData.position?.y ?? (this.PLATFORM_HEIGHT + 3), z: userData.position?.z ?? (Math.random() * 10 - 5) };
    const defaultInv = [{ name: 'Sword', type: 'weapon', art: 'sword' }, { name: 'Mattock', type: 'tool', art: 'mattock' }, null, null, null, null, null, null, null];
    const blockTextures = Object.fromEntries(Array.from(this.blockRegistry.entries()).map(([k, v]) => [k, v.texture]));
    const itemTextures = {};
    for (const [k, v] of this.weaponRegistry) itemTextures[k] = v.texture;
    for (const [k, v] of this.toolRegistry) itemTextures[k] = v.texture;
    const player = { id: socketData.id, username, position: spawn, rotation: { x: 0, y: 0 }, health: 100, heldItem: 0, inventory: userData.inventory || defaultInv, isSwinging: false, isDead: false };
    this.players.set(socketData.id, player);
    this.emit(socketData, 'serverInfo', { name: this.SERVER_CONFIG.name, description: this.SERVER_CONFIG.description, maxPlayers: this.SERVER_CONFIG.maxPlayers, currentPlayers: this.players.size, requireLogin: this.SERVER_CONFIG.requireLogin, version: this.SERVER_CONFIG.version, previewTexture: this.blockRegistry.get('grass')?.texture, loginForm: this.loginFormConfig });
    this.emit(socketData, 'loginResult', { success: true, autoLogin: true });
    this.emit(socketData, 'init', { id: socketData.id, username, players: Array.from(this.players.values()).filter(p => p.id !== socketData.id), world: Array.from(this.worldBlocks.entries()), premadeMessages: this.premadeMessages, blockTextures, itemTextures, weapons: Object.fromEntries(this.weaponRegistry), tools: Object.fromEntries(this.toolRegistry), blocks: Object.fromEntries(this.blockRegistry) });
    this.broadcast('chat', { type: 'join', username }, socketData.id);
    this.broadcast('playerJoin', player, socketData.id);
  }

  handleMove(socketData, data) {
    const p = this.players.get(socketData.id);
    if (p && !p.isDead) {
      Object.assign(p, { position: data.position, rotation: data.rotation, heldItem: data.heldItem, isSwinging: data.isSwinging || false });
      if (data.inventory) p.inventory = data.inventory;
      this.broadcast('playerMove', { id: socketData.id, ...data }, socketData.id);
    }
  }

  handleBreakBlock(socketData, data) {
    const key = `${data.x},${data.y},${data.z}`;
    const blockType = this.worldBlocks.get(key);
    if (blockType) {
      this.worldBlocks.delete(key);
      const block = this.blockRegistry.get(blockType);
      this.broadcast('blockBroken', { x: data.x, y: data.y, z: data.z, by: socketData.id, type: block?.drops ?? blockType });
    }
  }

  handlePlaceBlock(socketData, data) {
    const key = `${data.x},${data.y},${data.z}`;
    if (!this.worldBlocks.has(key) && this.blockRegistry.has(data.type)) {
      this.worldBlocks.set(key, data.type);
      this.broadcast('blockPlaced', { x: data.x, y: data.y, z: data.z, type: data.type, by: socketData.id });
    }
  }

  handleAttack(socketData, data) {
    const target = this.players.get(data.targetId);
    const attacker = this.players.get(socketData.id);
    if (!target || !attacker || target.isDead || attacker.isDead) return;
    const item = attacker.inventory[attacker.heldItem];
    const weapon = item?.type === 'weapon' ? this.weaponRegistry.get(item.art) : null;
    const damage = weapon?.damage ?? 10;
    const knockbackStr = weapon?.knockback ?? 0.3;
    let finalDamage = damage;
    let isCrit = false;
    if (weapon && Math.random() < (weapon.critChance ?? 0)) { finalDamage = Math.floor(damage * (weapon.critMultiplier ?? 1.5)); isCrit = true; }
    target.health -= finalDamage;
    const dx = target.position.x - attacker.position.x;
    const dz = target.position.z - attacker.position.z;
    const dist = Math.sqrt(dx * dx + dz * dz) || 1;
    this.broadcast('playerHit', { id: data.targetId, health: target.health, by: socketData.id, damage: finalDamage, isCrit, knockback: { x: (dx / dist) * knockbackStr, y: 0.25, z: (dz / dist) * knockbackStr } });
    if (target.health <= 0) { target.isDead = true; this.broadcast('playerDeath', { id: data.targetId, killerName: attacker.username, victimName: target.username }); }
  }

  handleRespawn(socketData) {
    const p = this.players.get(socketData.id);
    if (p) {
      p.health = 100;
      p.isDead = false;
      p.position = { x: Math.random() * 10 - 5, y: this.PLATFORM_HEIGHT + 3, z: Math.random() * 10 - 5 };
      this.broadcast('playerRespawn', { id: socketData.id, position: p.position, health: 100 });
    }
  }

  handleChat(socketData, data) {
    const p = this.players.get(socketData.id);
    if (p && data >= 0 && data < this.premadeMessages.length) this.broadcast('chat', { type: 'message', username: p.username, message: this.premadeMessages[data] });
  }

  handleDisconnect(socketData) {
    const p = this.players.get(socketData.id);
    if (p) {
      if (socketData.username) this.saveUserData(socketData.username, { position: p.position, inventory: p.inventory });
      this.broadcast('chat', { type: 'leave', username: p.username });
      this.broadcast('playerLeave', { id: socketData.id });
      this.players.delete(socketData.id);
      this.playerUI.delete(socketData.id);
      if (socketData.sessionToken) this.sessions.delete(socketData.sessionToken);
    }
    this.sockets.delete(socketData.id);
    this.rooms.delete(socketData.id);
  }
}
