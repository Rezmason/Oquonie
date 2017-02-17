function World()
{
  this.rooms = [];
  
  this.install = function()
  {
    this.createLobby();
    this.createNecomedre();
    this.createNephtaline();
    this.createNeomine();
    this.createNestorine();
    this.createNemedique();
    this.createNastazie();
    this.createSecrets();
  }
  
  this.createLobby = function()
  {
    var room = new Room();
    
    room.floors = [ 0,25,2, 2,8,4, 2,2,2 ];
    room.walls  = [ 0,5,2,2,12,15 ];
    room.steps  = [ 0,0,0, 0,0,0 ];
    room.audio  = "lobby";
    room.theme  = "white";
    room.add_event(new Blocker(1,1,10));
    room.add_event(new Pillar(1,-1,"nephtaline"));
    room.add_event(new Gate("nephtaline",0,2,40,-1,-1));
    room.add_event(new Door(2,0,2,-1,0));
    this.rooms[1] = room;
    
    room = new Room();
    room.floors = [ 1,4,1, 1,5,1, 1,1,5 ];
    room.walls  = [ 16,12,19, 25,25,25 ];
    room.steps  = [ 0,7,0, 0,0,0 ];
    room.audio  = "lobby";
    room.theme  = "white";
    room.add_event(new Blocker(1,1,24));
    room.add_event(new Ramen(1,0,true));
    room.add_event(new Plan(-1,2,"lobby"));
    room.add_event(new Door(-2,0,1,1,0));
    room.add_event(new Door(0,2,3,0,-1));
    this.rooms[2] = room;
    
    room = new Room();
    room.floors = [ 1,23,1, 6,5,1, 1,1,4 ];
    room.walls  = [ 1,7,1, 1,1,1 ];
    room.steps  = [ 0,7,0, 0,7,0];
    room.audio  = "lobby";
    room.theme  = "white";
    room.add_event(new Pillar(-1,1,"neomine"));
    room.add_event(new Owl(1,1));
    room.add_event(new Blocker(-1,-1,1));
    room.add_event(new Gate("neomine",0,2,60,0,-1));
    room.add_event(new Door(-2,0,4,1,0));
    room.add_event(new Door(0,-2,2,0,1));
    // room.add_event(new DoorBroken(2,0,111,-1,0))
    this.rooms[3] = room
    
    room = new Room();
    room.floors = [ 1,1,1, 6,5,6, 1,1,1 ];
    room.walls  = [ 26,14,26,1,12,1 ];
    room.steps  = [ 0,0,0, 0,7,0 ];
    room.audio  = "lobby";
    room.theme  = "white";
    room.add_event(new Blocker(1,1,9));
    room.add_event(new Speaker(-1,1));
    room.add_event(new Door(0,2,14,0,-1));
    room.add_event(new Door(2,0,3,-1,0));
    room.add_event(new Door(0,-2,5,0,1));
    this.rooms[4] = room;
    
    room = new Room();
    room.floors = [ 9,10,9, 4,5,14, 9,9,6 ]
    room.walls  = [ 3,14,3, 3,4,3 ]
    room.steps  = [ 0,7,0, 0,7,0 ]
    room.audio  = "lobby";
    room.theme  = "white";
    room.add_event(new Pillar(1,1,"necomedre"));
    room.add_event(new Blocker(-1,1,30));
    room.add_event(new Door(0,2,4,0,-1));
    room.add_event(new Gate("necomedre",2,0,32,-1,0));
    room.add_event(new Door(-2,0,9,1,0));
    room.add_event(new Door(0,-2,6,0,1));
    this.rooms[5] = room;
    
    room = new Room();
    room.floors = [ 9,4,9, 10,5,6, 9,10,9 ]
    room.walls  = [ 3,13,3, 26,13,26 ]
    room.steps  = [ 0,0,0, 0,0,0 ]
    room.audio  = "lobby";
    room.theme  = "white";
    room.add_event(new Blocker(1,1,5));
    room.add_event(new Shark(1,-1));
    room.add_event(new Door(0,2,5,0,-1));
    room.add_event(new Door(2,0,7,-1,0));
    this.rooms[6] = room;
    
    room = new Room();
    room.floors = [ 9,10,0, 0,5,12, 9,0,4 ]
    room.walls  = [ 19,0,0, 0,8,0 ]
    room.steps  = [ 0,7,0, 0,0,0 ]
    room.audio  = "lobby";
    room.theme  = "white";
    room.add_event(new Pillar(-1,-1,"nestorine"));
    room.add_event(new Blocker(0,1,11));
    room.add_event(new Gate("nestorine",2,0,96,-1,0));
    room.add_event(new Door(-2,0,6,1,0));
    this.rooms[7] = room;
    
    room = new Room();
    room.floors = [ 10,27,10, 6,4,5, 0,9,10 ];
    room.walls  = [ 18,9,18, 3,13,3 ];
    room.steps  = [ 0,0,0, 0,7,0 ];
    room.audio  = "lobby";
    room.theme  = "white";
    room.add_event(new Pillar(-1,1,"nemedique"));
    room.add_event(new Gate("nemedique",0,2,100,0,-1));
    room.add_event(new Door(2,0,5,-1,0));
    room.add_event(new Door(0,-2,11,0,1));
    this.rooms[9] = room;
  
    room = new Room();
    room.floors = [ 4,5,6, 5,33,4, 4,6,5 ];
    room.walls  = [ 36,13,36, 3,37,3 ];
    room.steps  = [ 0,0,0, 0,0,0 ];
    room.audio  = "lobby";
    room.theme  = "white";
    room.add_event(new Door(0,2,9,0,-1));
    room.add_event(new Tree(0,0));
    this.rooms[11] = room;
    
    room = new Room();
    room.floors = [ 0,900,0, 5,5,0, 0,0,0 ];
    room.walls  = [ 0,0,0, 0,0,0 ];
    room.steps  = [ 0,0,0, 0,7,0 ];
    room.audio  = "lobby";
    room.theme  = "white";
    room.add_event(new Noface(0,1));
    room.add_event(new Door(0,-2,4,0,1));
    this.rooms[14] = room;
  }
  
  this.createNecomedre = function()
  {
    var room = new Room();
  
    room = new Room();
    room.floors = [ 21,21,21, 21,21,21, 21,21,21 ];
    room.walls  = [ 20,20,20, 24,21,20 ];
    room.steps  = [ 0,0,0, 10,0,0 ];
    room.audio  = "office";
    room.theme  = "white";
    room.add_event(new Blocker(0,0,14));
    room.add_event(new Door(2,1,24,-1,1));
    room.add_event(new Door(-1,-2,22,1,1));
    this.rooms[21] = room;
    
    room = new Room();
    room.floors = [ 21,21,21, 21,21,21, 21,21,21 ];
    room.walls  = [ 24,20,20, 20,21,20 ];
    room.steps  = [ 0,0,0, 0,10,0 ];
    room.audio  = "office";
    room.theme  = "white";
    room.add_event(new Blocker(1,1,15));
    room.add_event(new Blocker(-1,0,16));
    room.add_event(new Door(-1,2,21,-1,-1));
    room.add_event(new Door(0,-2,23,0,1));
    this.rooms[22] = room;
    
    room = new Room();
    room.floors = [ 21,21,21, 21,17,21, 21,21,21 ];
    room.walls  = [ 19,1,19, 19,1,19 ];
    room.steps  = [ 0,10,0, 0,0,0 ];
    room.audio  = "office";
    room.theme  = "white";
    room.add_event(new Wizard(-1,1,"document"));
    room.add_event(new Blocker(1,1,15));
    room.add_event(new Blocker(1,-1,15));
    room.add_event(new Door(-2,0,28,1,0));
    this.rooms[23] = room;
    
    room = new Room();
    room.floors = [ 21,21,21, 21,21,21, 21,21,21 ];
    room.walls  = [ 20,24,20, 20,24,21 ];
    room.steps  = [ 10,0,0, 0,10,0 ];
    room.audio  = "office";
    room.theme  = "white";
    room.add_event(new Blocker(1,1,14));
    room.add_event(new Blocker(-1,-1,16));
    room.add_event(new Door(0,2,23,0,-1));
    room.add_event(new Door(2,0,27,-1,0));
    room.add_event(new Door(-2,1,21,1,1));
    room.add_event(new Door(0,-2,25,0,1));
    this.rooms[24] = room;
    
    room = new Room();
    room.floors = [ 21,21,21, 21,18,21, 21,21,21 ];
    room.walls  = [ 21,20,20, 20,24,20 ];
    room.steps  = [ 0,0,0, 0,0,0 ];
    room.audio  = "office";
    room.theme  = "white";
    room.add_event(new Blocker(-1,1,15));
    room.add_event(new Blocker(1,1,16));
    room.add_event(new Wizard(1,-1,"document"));
    room.add_event(new Door(2,0,28,-1,0));
    this.rooms[25] = room;
    
    room = new Room();
    room.floors = [ 21,21,21, 21,21,21, 21,21,21 ];
    room.walls  = [ 20,24,20, 20,20,21 ];
    room.steps  = [ 0,10,0, 0,0,0 ];
    room.audio  = "office";
    room.theme  = "white";
    room.add_event(new Blocker(-1,1,14));
    room.add_event(new Blocker(-1,0,16));
    room.add_event(new Door(0,2,25,0,-1));
    room.add_event(new Door(-2,0,23,1,0));
    this.rooms[26] = room;
    
    room = new Room();
    room.floors = [ 21,21,21, 21,19,21, 21,21,21 ];
    room.walls  = [ 19,19,19, 19,21,20 ];
    room.steps  = [ 0,0,0, 0,10,0 ];
    room.audio  = "office";
    room.theme  = "black";
    room.add_event(new Blocker(-1,1,15));
    room.add_event(new Speaker(0,1));
    room.add_event(new Blocker(1,1,15));
    room.add_event(new Blocker(1,-1,16));
    room.add_event(new Door(0,-2,28,0,1));
    this.rooms[27] = room;
    
    room = new Room();
    room.floors = [ 21,21,21, 21,21,21, 21,21,21 ];
    room.walls  = [ 20,24,20, 20,24,21 ];
    room.steps  = [ 0,10,0, 0,10,0 ];
    room.audio  = "office";
    room.theme  = "white";
    room.add_event(new Blocker(-1,1,14));
    room.add_event(new Wizard(1,1,"document"));
    room.add_event(new Blocker(-1,-1,16));
    room.add_event(new Door(0,2,27,0,-1));
    room.add_event(new Door(2,0,23,-1,0));
    room.add_event(new Door(-2,0,25,1,0));
    room.add_event(new Door(0,-2,29,0,1));
    this.rooms[28] = room;
    
    room = new Room();
    room.floors = [ 21,21,21, 21,8,21, 21,21,21 ];
    room.walls  = [ 20,24,20, 20,24,21 ];
    room.steps  = [ 0,0,0, 0,0,0 ];
    room.audio  = "office";
    room.theme  = "white";
    room.add_event(new Blocker(-1,1,15));
    room.add_event(new Blocker(1,-1,16));
    room.add_event(new Door(0,2,28,0,-1));
    room.add_event(new Gate("document",2,0,30,-1,0));
    this.rooms[29] = room;
    
    room = new Room();
    room.floors = [ 21,21,21, 21,1,1, 21,21,1 ];
    room.walls  = [ 20,20,20, 20,21,20 ];
    room.steps  = [ 0,3,0, 0,0,0 ];
    room.audio  = "office";
    room.theme  = "white";
    room.add_event(new Blocker(-1,1,16));
    room.add_event(new Blocker(1,-1,1));
    // room.add_event(new Boss(1,0));
//    room.add_event(new Door(0,2,31,0,-1))
//    room.add_event(new Door(-2,0,29,1,0))
    this.rooms[30] = room
    
    room = new Room();
    room.floors = [ 4,5,6, 4,5,4, 5,5,6 ];
    room.walls  = [ 26,26,26, 26,40,15 ];
    room.steps  = [ 0,3,0, 0,0,0 ];
    room.audio  = "pillar";
    room.theme  = "black";
    // room.add_event(new Red(0,1));
//    room.add_event(new Door(2,0,necomedre))
    this.rooms[31] = room;
    
    room = new Room();
    room.floors = [ 33,33,33, 6,4,5, 33,33,14 ];
    room.walls  = [ 36,16,36, 19,12,19 ];
    room.steps  = [ 0,5,0, 0,6,0 ];
    room.audio  = "necomedre";
    room.theme  = "white";
    room.add_event(new Blocker(-1,1,23));
    room.add_event(new Owl(1,1));
    room.add_event(new Plan(0,2,"necomedre"));
    room.add_event(new Door(2,0,33,-1,0));
    room.add_event(new Gate("necomedre",-2,0,5,1,0));
    room.add_event(new Door(0,-2,35,0,1));
    this.rooms[32] = room;
    
    room = new Room();
    room.floors = [ 33,33,33, 33,4,6, 33,4,5 ];
    room.walls  = [ 36,36,26, 19,12,15 ];
    room.steps  = [ 0,7,0, 0,0,6 ];
    room.audio  = "necomedre";
    room.theme  = "white";
    room.add_event(new Wizard(0,1,"nephtaline"));
    room.add_event(new Door(2,0,34,-1,0));
    room.add_event(new Door(-2,0,32,1,0));
    room.add_event(new Door(1,-2,36,1,1));
    this.rooms[33] = room;
    
    room = new Room();
    room.floors = [ 33,35,35, 35,6,5, 33,35,4 ];
    room.walls  = [ 36,25,8, 36,12,26 ];
    room.steps  = [ 0,6,0, 0,0,0 ];
    room.audio  = "necomedre";
    room.theme  = "white";
    room.add_event(new Wizard(0,1,"nestorine", true));
    room.add_event(new Blocker(-1,1,11));
    room.add_event(new Gate("nestorine",1,2,120,0,-1));
    room.add_event(new Door(2,0,35,-1,0));
    room.add_event(new Door(-2,0,33,1,0));
    this.rooms[34] = room;
    
    room = new Room();
    room.floors = [ 33,33,33, 33,33,33, 33,33,33 ];
    room.walls  = [ 26,12,26, 19,12,19 ];
    room.steps  = [ 0,6,0, 0,0,0 ];
    room.audio  = "necomedre";
    room.theme  = "white";
    room.add_event(new Ramen(0,0,"necomedre"));
    room.add_event(new Speaker(-1,1));
    room.add_event(new Door(0,2,32,0,-1));
    room.add_event(new Door(2,0,36,-1,0));
    room.add_event(new Door(-2,0,34,1,0));
    this.rooms[35] = room;
    
    room = new Room();
    room.floors = [ 33,0,4, 0,0,4, 33,4,33 ]
    room.walls  = [ 26,0,12, 19,12,19 ]
    room.steps  = [ 0,6,0, 0,0,0 ]
    room.audio  = "necomedre"
    room.theme  = "white"
    room.add_event(new Wizard(-1,1,"nephtaline"))
    // room.add_event(new Red(1,-1))
    room.add_event(new Door(1,2,33,1,-1))
    room.add_event(new Door(2,0,37,-1,0))
    room.add_event(new Door(-2,0,35,1,0))
    this.rooms[36] = room;
    
    room = new Room();
    room.floors = [ 33,4,4, 4,33,4, 33,4,33 ]
    room.walls  = [ 36,26,26, 26,12,26 ]
    room.steps  = [ 0,6,0, 0,0,0 ]
    room.audio  = "necomedre"
    room.theme  = "white"
    room.add_event(new Wizard(0,1,"nemedique", true,))
    room.add_event(new Blocker(0,-1,23))
    room.add_event(new Door(2,0,38,-1,0))
    room.add_event(new Door(-2,0,36,1,0))
    this.rooms[37] = room
    
    room = new Room();
    room.floors = [ 9,33,33, 33,33,13, 9,33,4 ]
    room.walls  = [ 26,26,26, 18,5,18 ]
    room.steps  = [ 0,6,0, 0,0,0 ]
    room.audio  = "necomedre"
    room.theme  = "white"
    room.add_event(new Wizard(0,1,"nephtaline"))
    room.add_event(new Blocker(-1,-1,5))
    room.add_event(new Gate("nephtaline",2,0,39,-1,0));
    room.add_event(new Door(-2,0,37,1,0))
    this.rooms[38] = room
    
    room = new Room();
    room.floors = [ 33,33,4, 33,7,33, 5,33,18 ]
    room.walls  = [ 26,19,36, 36,19,19 ]
    room.steps  = [ 0,7,0, 0,0,0 ]
    room.audio  = "warp"
    room.theme  = "white"
    room.add_event(new Teleport(0,0,0,0))
    room.add_event(new Door(-2,0,38,1,0))
    this.rooms[39] = room
    
    room = new Room();
    room.floors = [ 4,9,5, 9,8,9, 5,6,9 ]
    room.walls  = [ 36,37,36, 36,37,36 ]
    room.steps  = [ 0,0,0, 0,6,0 ]
    room.audio  = "pillar"
    room.theme  = "pillar"
    room.add_event(new Pillar("necomedre"))
    room.add_event(new Door(0,-2,34,1,1))
    this.rooms[120] = room
  }
  
  this.createNephtaline = function()
  {
    var room = new Room();
  
    room = new Room();
    room.floors = [ 18,6,4, 0,0,30, 25,32,5 ]
    room.walls  = [ 0,0,0, 12,0,3 ]
    room.steps  = [ 0,0,0, 6,0,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    // room.add_event(new Red(1,-1))
    room.add_event(new Door(2,1,41,-1,1))
    room.add_event(new Gate("nephtaline",-1,-2,1,0,1))
    this.rooms[40] = room
    
    room = new Room();
    room.floors = [ 4,5,19, 30,0,6, 32,5,0 ]
    room.walls  = [ 0,0,0, 0,0,0 ]
    room.steps  = [ 7,0,0, 0,0,7 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Door(-2,1,40,1,1))
    room.add_event(new Door(1,-2,42,1,1))
    this.rooms[41] = room
    
    room = new Room();
    room.floors = [ 32,0,5, 6,0,4, 4,17,30 ]
    room.walls  = [ 3,0,13, 0,0,0 ]
    room.steps  = [ 0,0,7, 0,0,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Wizard(-1,1, "nemedique", true))
    room.add_event(new Door(1,2,41,1,-1))
    room.add_event(new Door(-2,-1,43,1,-1))
    this.rooms[42] = room
    
    room = new Room();
    room.floors = [ 4,30,32, 4,0,0, 16,4,4 ]
    room.walls  = [ 13,0,3, 3,0,13 ]
    room.steps  = [ 0,0,0, 0,0,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Blocker(1,1,10))
    room.add_event(new Door(-1,2,44,-1,-1))
    room.add_event(new Door(2,-1,42,-1,-1))
    this.rooms[43] = room
    
    room = new Room();
    room.floors = [ 18,4,4, 0,0,30, 4,32,4 ]
    room.walls  = [ 0,0,0, 12,0,0 ]
    room.steps  = [ 0,0,0, 7,0,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Wizard(1,-1, "neomine"))
    room.add_event(new Door(2,1,45,-1,1))
    room.add_event(new Door(-1,-2,43,-1,1))
    this.rooms[44] = room
    
    room = new Room();
    room.floors = [ 4,4,17, 0,0,4, 32,4,30 ]
    room.walls  = [ 0,0,0, 0,0,0 ]
    room.steps  = [ 7,0,0, 0,0,7 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Blocker(-1,-1,7))
    room.add_event(new Door(-2,1,46,1,1))
    room.add_event(new Door(1,-2,42,1,1))
//    room.add_event(new Wizard(1,-2, spell: catDoorFork))
    this.rooms[45] = room
    
    room = new Room();
    room.floors = [ 3,5,6, 3,4,3, 3,3,17 ]
    room.walls  = [ 18,18,18, 13,18,18 ]
    room.steps  = [ 0,7,0, 0,7,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Blocker(-1,1,13))
    room.add_event(new Wizard(1,0,"neomine"))
//    room.add_event(new Door(0,2,photobooth))
    room.add_event(new Door(2,1,41,-1,1))
    room.add_event(new Door(-2,0,47,1,0))
    room.add_event(new Door(0,-2,51,0,1))
    this.rooms[46] = room
    
    room = new Room();
    room.floors = [ 0,0,4, 5,10,5, 0,0,0 ]
    room.walls  = [ 0,0,0, 3,13,3 ]
    room.steps  = [ 0,0,0, 0,7,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Wizard(1,1,"necomedre", true))
    room.add_event(new Door(2,0,46,-1,0))
    room.add_event(new Door(0,-2,48,0,1))
    this.rooms[47] = room
    
    room = new Room();
    room.floors = [ 0,5,0, 0,10,5, 0,0,0 ]
    room.walls  = [ 0,13,0, 0,13,0 ]
    room.steps  = [ 0,0,0, 0,0,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Door(0,2,47,0,-1))
    room.add_event(new Door(2,0,49,-1,0))
    this.rooms[48] = room
    
    room = new Room();
    room.floors = [ 0,5,0, 0,10,0, 0,0,5 ]
    room.walls  = [ 0,13,0, 0,0,0 ]
    room.steps  = [ 0,7,0, 0,0,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Door(0,2,50,0,-1))
    room.add_event(new Door(-2,0,48,1,0))
    this.rooms[49] = room
    
    room = new Room();
    room.floors = [ 3,32,3, 32,31,32, 3,3,32 ]
    room.walls  = [ 3,9,3, 2,16,2 ]
    room.steps  = [ 0,7,0, 0,7,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Owl(1,1))
    room.add_event(new Blocker(1,-1,21))
    room.add_event(new Gate("nemedique",0,2,121,0,-1))
    room.add_event(new Plan(2,0,"nephtaline"))
    room.add_event(new Door(-2,0,47,1,0))
    room.add_event(new Door(0,-2,55,0,1))
    this.rooms[50] = room
    
    room = new Room();
    room.floors = [ 0,5,5, 0,10,5, 0,0,5 ]
    room.walls  = [ 3,13,3, 0,0,0 ]
    room.steps  = [ 0,7,0, 0,0,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Speaker(1,1))
    room.add_event(new Door(0,2,50,0,-1))
    room.add_event(new Door(-2,0,48,1,0))
    this.rooms[51] = room
    
    room = new Room();
    room.floors = [ 0,5,0, 0,10,5, 0,0,0 ]
    room.walls  = [ 0,13,0, 0,13,0 ]
    room.steps  = [ 0,0,0, 0,0,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Door(0,2,47,0,-1))
    room.add_event(new Door(2,0,49,-1,0))
    this.rooms[52] = room
    
    room = new Room();
    room.floors = [ 0,0,0, 5,10,5, 0,0,0 ]
    room.walls  = [ 0,0,0, 3,13,3 ]
    room.steps  = [ 0,0,0, 0,7,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Door(2,0,41,-1,0))
    room.add_event(new Door(0,-2,48,0,1))
    this.rooms[53] = room
    
    room = new Room();
    room.floors = [ 3,4,3, 5,10,3, 3,3,4 ]
    room.walls  = [ 3,8,3, 3,3,3 ]
    room.steps  = [ 0,7,0, 0,7,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
//    room.add_event(new Wizard(1,1, spell: null))
//    > gateNestorine
//    10 > 8|gateNestorine
    room.add_event(new Door(-2,0,47,1,0))
    room.add_event(new Door(0,-2,51,0,1))
    this.rooms[54] = room
    
    room = new Room();
    room.floors = [ 0,5,0, 0,10,0, 0,0,5 ]
    room.walls  = [ 0,13,0, 0,0,0 ]
    room.steps  = [ 0,7,0, 0,0,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Door(0,2,50,0,-1))
    room.add_event(new Door(-2,0,56,1,0))
    this.rooms[55] = room
    
    room = new Room();
    room.floors = [ 0,5,0, 0,10,5, 0,0,0 ]
    room.walls  = [ 0,13,0, 0,13,0 ]
    room.steps  = [ 0,0,0, 0,0,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Door(0,2,57,0,-1))
    room.add_event(new Door(2,0,55,-1,0))
    this.rooms[56] = room
    
    room = new Room();
    room.floors = [ 0,5,5, 5,10,5, 0,0,0 ]
    room.walls  = [ 0,0,0, 3,13,3 ]
    room.steps  = [ 0,0,0, 0,7,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    // room.add_event(new ramen_nephtaline)
    room.add_event(new Door(2,0,58,-1,0))
    room.add_event(new Door(0,-2,56,0,1))
    this.rooms[57] = room
    
    room = new Room();
    room.floors = [ 31,4,31, 31,5,31, 31,31,4 ]
    room.walls  = [ 18,7,18, 18,18,18 ]
    room.steps  = [ 0,7,0, 0,0,0 ]
    room.audio  = "nephtaline"
    room.theme  = "white"
    room.add_event(new Wizard(1,0,"neomine"))
    room.add_event(new Gate("neomine",0,2,59,0,-1))
    room.add_event(new Door(-2,0,47,1,0))
    this.rooms[58] = room
    
    room = new Room();
    room.floors = [ 32,29,32, 5,7,29, 32,32,29 ]
    room.walls  = [ 3,2,3, 3,2,3 ]
    room.steps  = [ 0,0,0, 0,4,0 ]
    room.audio  = "warp"
    room.theme  = "white"
    room.add_event(new Teleport(0,0,0,0))
    room.add_event(new Gate("neomine",0,-2,58,0,1))
    this.rooms[59] = room
    
    room = new Room();
    room.floors = [ 97,31,97, 31,8,31, 98,98,31 ]
    room.walls  = [ 25,18,25, 25,18,25 ]
    room.steps  = [ 0,0,0, 0,3,0 ]
    room.audio  = "pillar"
    room.theme  = "pillar"
    // room.add_event(new pillar_nephtaline)
    room.add_event(new Gate("nemedique",0,-2,50,0,1))
    this.rooms[121] = room
  }
  
  this.createNeomine = function()
  {
    var room = new Room();
  
    room = new Room();
    room.floors = [ 1,4,18, 23,4,1, 1,1,1 ]
    room.walls  = [ 33,31,33, 30,16,14 ]
    room.steps  = [ 0,0,0, 0,4,0 ]
    room.audio  = "neomine"
    room.theme  = "black"
    room.add_event(new Blocker(0,1,13))
    room.add_event(new Door(2,1,62,-1,1))
    room.add_event(new Plan(2,0,"neomine"))
    room.add_event(new Door(0,-2, "neomine",3,0,1))
    room.add_event(new Door(2,-1,61,-1,-1))
    this.rooms[60] = room
    
    room = new Room();
    room.floors = [ 1,1,1, 1,1,38, 1,1,38 ]
    room.walls  = [ 31,30,31, 33,31,33 ]
    room.steps  = [ 0,0,3, 0,0,0 ]
    room.audio  = "neomine"
    room.theme  = "black"
    room.add_event(new Blocker(-1,1,19))
    room.add_event(new Wizard(0,1,"nestorine"))
    room.add_event(new Blocker(1,1,19))
    room.add_event(new Door(-2,-1,60,1,-1))
    this.rooms[61] = room
    
    room = new Room();
    room.floors = [ 4,5,6, 4,6,33, 6,5,5 ]
    room.walls  = [ 32,31,32, 36,4,36 ]
    room.steps  = [ 3,0,3, 0,0,0 ]
    room.audio  = "neomine"
    room.theme  = "black"
    room.add_event(new Wizard(1,1,"necomedre",true)) // requiresPillar
    room.add_event(new Blocker(1,-1,23))
    room.add_event(new Gate("necomedre",2,0,71,-1,0))
    room.add_event(new Door(-2,1,60,1,1))
    room.add_event(new Door(-2,-1,63,1,-1))
    this.rooms[62] = room
    
    room = new Room();
    room.floors = [ 10,10,10, 10,0,10, 10,9,10 ]
    room.walls  = [ 32,33,32, 14,30,14 ]
    room.steps  = [ 0,0,0, 0,0,0 ]
    room.audio  = "neomine"
    room.theme  = "black"
    // room.add_event(new ramen_neomine)
    room.add_event(new Blocker(0,0,9))
    room.add_event(new Door(2,1,66,-1,1))
    room.add_event(new Door(2,0,64,-1,0))
    room.add_event(new Door(2,-1,62,-1,-1))
    this.rooms[63] = room
    
    room = new Room();
    room.floors = [ 39,1,39, 36,32,36, 39,1,36 ]
    room.walls  = [ 33,33,33, 31,31,15 ]
    room.steps  = [ 3,3,3, 0,0,0 ]
    room.audio  = "neomine"
    room.theme  = "black"
    room.add_event(new Blocker(1,1,21))
    room.add_event(new Wizard(1,0,"nephtaline",true))
    room.add_event(new Door(-2,1,68,1,1))
    room.add_event(new Door(-2,0,63,1,0))
    room.add_event(new Door(-2,-1,65,1,-1))
    this.rooms[64] = room
    
    room = new Room();
    room.floors = [ 0,33,1, 33,33,1, 1,33,1 ]
    room.walls  = [ 0,3,3, 3,15,14 ]
    room.steps  = [ 0,0,0, 0,0,0 ]
    room.audio  = "neomine"
    room.theme  = "black"
    room.add_event(new Wizard(0,1,"nestorine"))
    room.add_event(new Blocker(1,0,1))
    room.add_event(new Door(2,-1,64,-1,-1))
    this.rooms[65] = room
    
    room = new Room();
    room.floors = [ 39,36,39, 36,28,29, 39,39,36 ]
    room.walls  = [ 31,31,31, 33,32,33 ]
    room.steps  = [ 3,3,3, 0,0,0 ]
    room.audio  = "neomine"
    room.theme  = "black"
    room.add_event(new Blocker(1,1,13))
    room.add_event(new Owl(1,0))
//    room.add_event(new Door(0,2,photoBooth))
    room.add_event(new Door(-2,1,63,1,1))
    room.add_event(new Door(-2,0,67,1,0))
    room.add_event(new Door(-2,-1,68,1,-1))
    this.rooms[66] = room
    
    room = new Room();
    room.floors = [ 1,36,1, 1,39,36, 1,1,1 ]
    room.walls  = [ 25,25,25, 31,30,31 ]
    room.steps  = [ 0,0,0, 0,0,0 ]
    room.audio  = "neomine"
    room.theme  = "black"
    room.add_event(new Wizard(0,1,"nestorine"))
    room.add_event(new Door(2,0,66,-1,0))
    this.rooms[67] = room
    
    room = new Room();
    room.floors = [ 38,10,38, 6,9,10, 5,10,4 ]
    room.walls  = [ 35,38,20, 30,30,30 ]
    room.steps  = [ 0,0,0, 0,0,0 ]
    room.audio  = "neomine"
    room.theme  = "black"
    // room.add_event(new Red(-1,1))
    // room.add_event(new DoorBroken(0,2,113,0,-1))
    room.add_event(new Door(2,1,64,-1,1))
    room.add_event(new Door(2,0,69,-1,0))
    room.add_event(new Door(2,-1,66,-1,-1))
    this.rooms[68] = room
    
    room = new Room();
    room.floors = [ 35,35,34, 35,35,12, 35,34,35 ]
    room.walls  = [ 35,34,35, 34,8,34 ]
    room.steps  = [ 0,3,0, 0,0,0 ]
    room.audio  = "neomine"
    room.theme  = "black"
    room.add_event(new Speaker(1,1))
    room.add_event(new Door(2,0, "nestorine",70,-1,0))
    room.add_event(new Door(-2,0,68,1,0))
    this.rooms[69] = room
    
    room = new Room();
    room.floors = [ 39,40,39, 40,7,40, 39,39,40 ]
    room.walls  = [ 29,29,29, 29,29,29 ]
    room.steps  = [ 0,7,0, 0,0,0 ]
    room.audio  = "warp"
    room.theme  = "black"
    room.add_event(new Teleport(0,0,0,0))
    room.add_event(new Door(-1,2,70,-1,-1))
    room.add_event(new Door(0,2,70,0,-1))
    room.add_event(new Door(1,2,70,1,-1))
    room.add_event(new Door(2,1,70,-1,1))
    room.add_event(new Door(2,0,70,-1,0))
    room.add_event(new Door(2,-1,70,-1,1))
    room.add_event(new Door(-2,0, "nestorine",69,1,0))
    this.rooms[70] = room
    
    room = new Room();
    room.floors = [ 1,29,1, 29,8,29, 1,1,29 ]
    room.walls  = [ 18,17,18, 18,17,18 ]
    room.steps  = [ 0,3,0, 0,0,0 ]
    room.audio  = "pillar"
    room.theme  = "pillar"
    // room.add_event(new pillar_neomine)
    room.add_event(new Gate("necomedre",-2,0,62,1,0))
    this.rooms[71] = room
  }
  
  this.createNestorine = function()
  {
    var room = new Room();
  
    room = new Room();
    room.floors = [ 35,35,7, 34,8,35, 35,35,34 ]
    room.walls  = [ 35,15,35, 34,15,34 ]
    room.steps  = [ 0,7,0, 0,7,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
    room.add_event(new Blocker(-1,1,23))
    room.add_event(new Teleport(1,1,7,0,0))
    room.add_event(new Door(-2,0,81,1,0))
    room.add_event(new Door(0,-2,82,0,1))
    this.rooms[80] = room
    
    room = new Room();
    room.floors = [ 34,35,35, 35,35,35, 34,34,35 ]
    room.walls  = [ 34,35,34, 25,15,25 ]
    room.steps  = [ 0,1,0, 0,1,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
    room.add_event(new Door(-2,0,83,1,0))
    room.add_event(new Door(0,-2,84,0,1))
    this.rooms[81] = room
    
    room = new Room();
    room.floors = [ 34,35,34, 35,35,34, 34,34,35 ]
    room.walls  = [ 25,15,25, 35,34,35 ]
    room.steps  = [ 0,1,0, 0,1,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
    room.add_event(new Blocker(-1,-1,11))
    room.add_event(new Door(-2,0,84,1,0))
    room.add_event(new Door(0,-2,85,0,1))
    this.rooms[82] = room
    
    room = new Room();
    room.floors = [ 34,34,34, 35,35,35, 35,0,35 ]
    room.walls  = [ 35,34,35, 26,15,26 ]
    room.steps  = [ 0,1,0, 0,1,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
    room.add_event(new Blocker(-1,-1,23))
    room.add_event(new Door(-2,0,86,1,0))
    room.add_event(new Door(0,-2,87,0,1))
    this.rooms[83] = room
    
    room = new Room();
    room.floors = [ 34,35,35, 35,35,35, 35,34,35 ]
    room.walls  = [ 35,15,34, 34,15,35 ]
    room.steps  = [ 0,1,0, 0,1,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
    room.add_event(new Owl(1,1))
    room.add_event(new Blocker(-1,-1,11))
    room.add_event(new Door(-2,0,87,1,0))
    room.add_event(new Door(0,-2,88,0,1))
    this.rooms[84] = room
    
    room = new Room();
    room.floors = [ 34,35,35, 35,35,35, 0,34,35 ]
    room.walls  = [ 26,15,26, 34,16,34 ]
    room.steps  = [ 0,1,0, 0,1,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
    // room.add_event(new Red(1,0))
    room.add_event(new Plan(2,0,"nestorine"))
    room.add_event(new Door(-2,0,88,1,0))
    room.add_event(new Door(0,-2,89,0,1))
    this.rooms[85] = room
    
    room = new Room();
    room.floors = [ 34,10,34, 0,35,35, 34,34,35 ]
    room.walls  = [ 34,34,34, 25,15,25 ]
    room.steps  = [ 0,1,0, 0,0,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
    room.add_event(new Door(-2,0,80,1,0))
    this.rooms[86] = room
    
    room = new Room();
    room.floors = [ 35,35,35, 35,35,35, 35,0,35 ]
    room.walls  = [ 25,15,25, 26,15,26 ]
    room.steps  = [ 0,0,0, 0,1,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
    room.add_event(new Speaker(1,1))
    room.add_event(new Door(0,-2,91,0,1))
    this.rooms[87] = room
    
    room = new Room();
    room.floors = [ 34,35,35, 34,35,35, 34,0,35 ]
    room.walls  = [ 36,15,36, 36,15,0 ]
    room.steps  = [ 0,1,0, 0,0,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
    // room.add_event(new ramen_nestorine)
    room.add_event(new Door(-2,0,91,1,0))
    this.rooms[88] = room
    
    room = new Room();
    room.floors = [ 34,35,0, 35,35,34, 34,34,34 ]
    room.walls  = [ 26,15,0, 0,34,34 ]
    room.steps  = [ 0,0,0, 0,1,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
//    room.add_event(new Door(2,0,photobooth))
    room.add_event(new Door(0,-2,80,0,1))
    this.rooms[89] = room
    
    room = new Room();
    room.floors = [ 35,34,35, 34,8,34, 35,35,34 ]
    room.walls  = [ 0,0,0, 0,0,0 ]
    room.steps  = [ 0,0,0, 0,6,0 ]
    room.audio  = "pillar"
    room.theme  = "pillar"
    // room.add_event(new pillar_nestorine)
    room.add_event(new Gate("nephtaline",0,-2,93,0,1))
    this.rooms[90] = room
    
    room = new Room();
    room.floors = [ 34,35,35, 35,35,35, 34,35,35 ]
    room.walls  = [ 25,15,25, 25,15,25 ]
    room.steps  = [ 0,1,0, 0,1,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
    room.add_event(new Wizard(1,1,"nephtaline",true))// requiresPillar:
    room.add_event(new Blocker(-1,-1,23))
    room.add_event(new Door(-2,0,93,1,0))
    room.add_event(new Door(0,-2,94,0,1))
    this.rooms[91] = room
    
    room = new Room();
    room.floors = [ 28,38,28, 38,7,36, 28,28,36 ]
    room.walls  = [ 31,37,31, 31,37,31 ]
    room.steps  = [ 0,1,0, 0,0,0 ]
    room.audio  = "warp"
    room.theme  = "white"
    room.add_event(new Teleport(0,0,0,0))
    room.add_event(new Door(-2,0,94,1,0))
    this.rooms[92] = room
    
    room = new Room();
    room.floors = [ 35,34,35, 35,32,35, 35,35,35 ]
    room.walls  = [ 1,5,1, 25,15,25 ]
    room.steps  = [ 0,1,0, 0,1,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
    room.add_event(new Wizard(1,1,"nemedique"))
    room.add_event(new Blocker(-1,1,11))
    room.add_event(new Door(0,2,"nephtaline",90,0,-1))
    room.add_event(new Door(-2,0,80,1,0))
    room.add_event(new Door(0,-2,95,0,1))
    this.rooms[93] = room
    
    room = new Room();
    room.floors = [ 5,4,3, 10,9,11, 4,3,10 ]
    room.walls  = [ 25,15,25, 3,9,3 ]
    room.steps  = [ 0,3,0, 0,0,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
    room.add_event(new Wizard(1,1,"nemedique"))
    room.add_event(new Door(2,0,"nemedique",92,-1,0))
    room.add_event(new Door(-2,0,95,1,0))
    this.rooms[94] = room
    
    room = new Room();
    room.floors = [ 34,35,35, 35,35,35, 35,0,35 ]
    room.walls  = [ 25,15,25, 26,15,0 ]
    room.steps  = [ 0,1,0, 0,1,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
    room.add_event(new Wizard(1,1,"nemedique"))
    room.add_event(new Blocker(-1,-1,23))
    room.add_event(new Door(-2,0,80,1,0))
    room.add_event(new Door(0,-2,80,0,1))
    this.rooms[95] = room
    
    room = new Room();
    room.floors = [ 35,35,35, 35,7,35, 35,35,34 ]
    room.walls  = [ 34,35,34, 19,19,19 ]
    room.steps  = [ 0,1,0, 0,0,0 ]
    room.audio  = "warp"
    room.theme  = "white"
    room.add_event(new Teleport(0,0,80,0,0))
    room.add_event(new Gate("nestorine",-2,0,7,1,0))
    this.rooms[96] = room
    
    room = new Room();
    room.floors = [ 35,35,35, 35,7,35, 35,35,35 ]
    room.walls  = [ 25,15,25, 0,0,0 ]
    room.steps  = [ 0,0,0, 0,0,0 ]
    room.audio  = "nestorine"
    room.theme  = "white"
    room.add_event(new Door(0,2,94,0,-1))
    this.rooms[97] = room
  }
  
  this.createNemedique = function()
  {
    var room = new Room();
    
    room = new Room();
    room.floors = [ 10,10,10, 5,4,6, 10,10,10 ]
    room.walls  = [ 18,29,18, 18,12,18 ]
    room.steps  = [ 0,0,0, 0,7,0 ]
    room.audio  = "nemedique"
    room.theme  = "white"
    room.add_event(new Wizard(-1,1,"nestorine",true))
    // room.add_event(new DoorRed(0,2,104,0,-1))
    room.add_event(new Door(2,0,101,-1,0))
    room.add_event(new Door(0,-2,"nemedique",9,0,1))
    this.rooms[100] = room
    
    room = new Room();
    room.floors = [ 10,5,10, 10,6,6, 10,10,6 ]
    room.walls  = [ 18,13,18, 18,4,18 ]
    room.steps  = [ 0,7,0, 0,0,0 ]
    room.audio  = "nemedique"
    room.theme  = "white"
    room.add_event(new Speaker(1,1))
    room.add_event(new Door(0,2,102,0,-1))
    room.add_event(new Door(2,0,"necomedre",103,-1,0))
    room.add_event(new Door(-2,0,100,1,0))
    this.rooms[101] = room
    
    room = new Room();
    room.floors = [ 10,5,10, 5,5,10, 10,10,10 ]
    room.walls  = [ 18,18,18, 18,18,18 ]
    room.steps  = [ 0,0,0, 0,7,0 ]
    room.audio  = "nemedique"
    room.theme  = "white"
    room.add_event(new Shark(0,1))
    //    room.add_event(new Door(2,0,photoBooth))
    room.add_event(new Door(0,-2,101,0,1))
    // room.add_event(new DoorBroken(2,0,110,-1,0))
    
    this.rooms[102] = room
    
    room = new Room();
    room.floors = [ 33,2,33, 2,8,2, 33,33,2 ]
    room.walls  = [ 3,31,3, 3,31,3 ]
    room.steps  = [ 0,6,0, 0,0,0 ]
    room.audio  = "pillar"
    room.theme  = "pillar"
    // room.add_event(new pillar_nemedique)
    room.add_event(new Door(-2,0,"necomedre",101,1,0))
    this.rooms[103] = room
    
    room = new Room();
    room.floors = [ 41,42,43, 48,45,46, 47,49,44 ]
    room.walls  = [ 39,33,39, 39,33,39 ]
    room.steps  = [ 0,0,0, 0,11,0 ]
    room.audio  = "nepturne"
    room.theme  = "black"
    // room.add_event(new RedEnd(0,1))
    this.rooms[104] = room
    
    room = new Room();
    room.floors = [ 3,3,3, 3,7,3, 3,3,3 ]
    room.walls  = [ 0,0,0, 0,0,0 ]
    room.steps  = [ 0,6,0, 0,0,0 ]
    room.audio  = "warp"
    room.theme  = "white"
    room.add_event(new Teleport(0,0,0,0))
    room.add_event(new Door(-2,0,101,1,0))
    this.rooms[105] = room
    
    room = new Room();
    room.floors = [ 40,40,40, 40,8,40, 40,40,40 ]
    room.walls  = [ 29,29,29, 29,29,29 ]
    room.steps  = [ 0,0,0, 0,0,0 ]
    room.audio  = "nepturne"
    room.theme  = "black"
    room.add_event(new Door(-1,2,107,-1,-1))
    room.add_event(new Door(0,2,107,0,-1))
    room.add_event(new Door(1,2,107,1,-1))
    room.add_event(new Door(2,1,107,-1,1))
    room.add_event(new Door(2,0,107,-1,0))
    room.add_event(new Door(2,-1,107,-1,-1))
    this.rooms[106] = room
    
    room = new Room();
    room.floors = [ 40,40,40, 40,40,40, 40,40,40 ]
    room.walls  = [ 29,29,29, 29,29,29 ]
    room.steps  = [ 0,0,0, 0,0,0 ]
    room.audio  = "nepturne"
    room.theme  = "black"
    room.add_event(new Credit(0,0,"rekka"))
    room.add_event(new Door(-1,2,108,-1,-1))
    room.add_event(new Door(0,2,108,0,-1))
    room.add_event(new Door(1,2,108,1,-1))
    room.add_event(new Door(2,1,108,-1,1))
    room.add_event(new Door(2,0,108,-1,0))
    room.add_event(new Door(2,-1,108,-1,-1))
    this.rooms[107] = room
    
    room = new Room();
    room.floors = [ 40,40,40, 40,40,40, 40,40,40 ]
    room.walls  = [ 29,29,29, 29,29,29 ]
    room.steps  = [ 0,0,0, 0,0,0 ]
    room.audio  = "nepturne"
    room.theme  = "black"
    room.add_event(new Credit(0,0,"devine"))
    room.add_event(new Door(-1,2,11,-1,-1))
    room.add_event(new Door(0,2,11,0,-1))
    room.add_event(new Door(1,2,11,1,-1))
    room.add_event(new Door(2,1,11,-1,1))
    room.add_event(new Door(2,0,11,-1,0))
    room.add_event(new Door(2,-1,11,-1,-1))
    this.rooms[108] = room
    
    room = new Room();
    room.floors = [ 4,5,6, 5,2,6, 6,5,4 ]
    room.walls  = [ 13,13,13, 13,13,13 ]
    room.steps  = [ 0,0,0, 0,6,0 ]
    room.audio  = "nepturne"
    room.theme  = "black"
    room.add_event(new Wizard(0,0,"catfishbird"))
    room.add_event(new Door(0,-2,100,0,1))
    this.rooms[109] = room
  }
  
  this.createNastazie = function()
  {
    var room = new Room();
  
    room = new Room();
    room.floors = [ 36,39,36, 39,8,39, 36,36,39 ]
    room.walls  = [ 30,99,100, 99,30,99 ]
    room.steps  = [ 0,0,0, 0,0,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Wizard(0,1,"nastazie"))
    room.add_event(new Door(-1,2,131,-1,-1))
    room.add_event(new Door(2,0,"nastazie", 147,-1, 0))
    this.rooms[130] = room
    
    room = new Room();
    room.floors = [ 101,10,101, 10,9,10, 101,101,10 ]
    room.walls  = [ 101,30,101, 101,30,101 ]
    room.steps  = [ 0,0,0, 3,0,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Blocker(1,1,30))
    room.add_event(new Door(0,2,142,0,-1))
    room.add_event(new Door(2,0,133,-1,0))
    room.add_event(new Door(-1,-2,130,-1,1))
    this.rooms[131] = room
    
    room = new Room();
    room.floors = [ 36,39,9, 39,32,10, 36,10,39 ]
    room.walls  = [ 99,99,30, 99,99,19 ]
    room.steps  = [ 3,0,0, 0,0,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Wizard(1,0,"nemedique"))
    room.add_event(new Door(1,2,143,1,-1))
    room.add_event(new Door(-2,1,140,1,1))
    this.rooms[132] = room
    
    room = new Room();
    room.floors = [ 36,39,10, 39,32,9, 36,10,39 ]
    room.walls  = [ 99,29,99, 99,19,101 ]
    room.steps  = [ 0,3,0, 0,0,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Wizard(1,0,"neomine"))
    room.add_event(new Door(0,2,142,0,-1))
    room.add_event(new Door(-2,0,139,1,0))
    this.rooms[133] = room
    
    room = new Room();
    room.floors = [ 36,39,10, 39,32,10, 36,9,39 ]
    room.walls  = [ 12,99,99, 99,99,99 ]
    room.steps  = [ 0,0,3, 0,0,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Wizard(1,0,"nephtaline"))
    room.add_event(new Door(-1,2,141,-1,-1))
    room.add_event(new Door(-2,-1,138,1,-1))
    this.rooms[134] = room
    
    room = new Room();
    room.floors = [ 36,39,36, 10,31,39, 10,9,39 ]
    room.walls  = [ 99,99,12, 99,99,12 ]
    room.steps  = [ 0,0,0, 0,0,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Wizard(0,1,"nemedique"))
    room.add_event(new Door(1,2,143,1,-1))
    room.add_event(new Door(2,-1,134,-1,-1))
    this.rooms[135] = room
    
    room = new Room();
    room.floors = [ 36,39,36, 9,19,39, 10,10,39 ]
    room.walls  = [ 99,29,99, 99,29,99 ]
    room.steps  = [ 0,0,0, 0,8,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Wizard(1,1,"nastazie"))
    room.add_event(new Door(0,2,142,0,-1))
    room.add_event(new Door(2,0,133,-1,0))
    room.add_event(new Door(0,-2,131,0,1))
    this.rooms[136] = room
    
    room = new Room();
    room.floors = [ 36,39,36, 10,31,39, 9,10,39 ]
    room.walls  = [ 30,99,99, 30,99,99 ]
    room.steps  = [ 0,0,0, 0,0,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Door(-1,2,141,-1,-1))
    room.add_event(new Door(2,1,132,-1,1))
    this.rooms[137] = room
    
    room = new Room();
    room.floors = [ 10,39,36, 39,8,39, 9,36,10 ]
    room.walls  = [ 25,14,25, 99,99,29 ]
    room.steps  = [ 0,0,0, 8,0,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Wizard(1,1,"nemedique"))
    room.add_event(new Door(0,2,142,0,-1))
    room.add_event(new Door(2,-1,134,-1,-1))
    room.add_event(new Door(-1,-2,137,-1,1))
    this.rooms[138] = room
    
    room = new Room();
    room.floors = [ 10,39,36, 39,17,39, 10,36,9 ]
    room.walls  = [ 30,99,100, 99,29,99 ]
    room.steps  = [ 0,8,0, 0,8,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Wizard(1,1,"neomine"))
    room.add_event(new Door(-1,2,141,-1,-1))
    room.add_event(new Door(2,0,133,-1,0))
    room.add_event(new Door(-2,0,131,1,0))
    room.add_event(new Door(0,-2,136,0,1))
    this.rooms[139] = room
    
    room = new Room();
    room.floors = [ 9,39,36, 39,8,39, 10,36,10 ]
    room.walls  = [ 12,99,99, 12,99,99 ]
    room.steps  = [ 0,0,0, 0,0,8 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Wizard(1,0,"nephtaline"))
    room.add_event(new Door(-1,2,141,-1,-1))
    room.add_event(new Door(2,1,132,-1,1))
    room.add_event(new Door(1,-2,135,1,1))
    this.rooms[140] = room
    
    room = new Room();
    room.floors = [ 9,10,10, 39,33,39, 36,36,39 ]
    room.walls  = [ 99,5,99, 99,99,99 ]
    room.steps  = [ 8,0,0, 8,0,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Blocker(1,1,30))
    room.add_event(new Door(0,2,"nephtaline",144,0,-1))
    room.add_event(new Door(-2,1,140,1,1))
    room.add_event(new Door(-1,-2,137,-1,1))
    this.rooms[141] = room
    
    room = new Room();
    room.floors = [ 10,9,10, 39,33,39, 36,36,39 ]
    room.walls  = [ 19,5,99, 99,99,99 ]
    room.steps  = [ 0,8,0, 0,8,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Blocker(1,1,30))
    room.add_event(new Door(0,2, "neomine",145,0,-1))
    // room.add_event(new DoorBroken(2,0,112,-1,0))
    room.add_event(new Door(-2,0,139,1,0))
    room.add_event(new Door(0,-2,136,0,1))
    this.rooms[142] = room
    
    room = new Room();
    room.floors = [ 10,10,9, 39,33,39, 36,36,39 ]
    room.walls  = [ 99,5,99, 99,99,99 ]
    room.steps  = [ 0,0,3, 0,0,8 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Blocker(1,1,30))
    room.add_event(new Door(0,2,"nemedique",146,0,-1))
    room.add_event(new Door(-2,-1,138,1,-1))
    room.add_event(new Door(1,-2,135,1,1))
    this.rooms[143] = room
    
    room = new Room();
    room.floors = [ 36,39,3, 39,28,39, 36,36,39 ]
    room.walls  = [ 99,99,99, 99,99,99 ]
    room.steps  = [ 0,0,0, 0,8,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Wizard(1,1,"nastazie"))
    room.add_event(new Door(0,-2,141,0,1))
    this.rooms[144] = room
    
    room = new Room();
    room.floors = [ 36,39,36, 39,28,39, 36,36,39 ]
    room.walls  = [ 99,99,99, 99,99,99 ]
    room.steps  = [ 0,0,0, 0,8,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Wizard(1,1,"nephtaline"))
    room.add_event(new Door(0,-2,142,0,1))
    this.rooms[145] = room
    
    room = new Room();
    room.floors = [ 36,39,36, 39,28,39, 36,36,39 ]
    room.walls  = [ 99,99,99, 99,99,99 ]
    room.steps  = [ 0,0,0, 0,8,0 ]
    room.audio  = "nastazie"
    room.theme  = "black"
    room.add_event(new Wizard(1,1,"neomine"))
    room.add_event(new Door(0,-2,143,0,1))
    this.rooms[146] = room
    
    room = new Room();
    room.floors = [ 101,39,101, 39,8,1, 101,101,1 ]
    room.walls  = [ 99,99,99, 99,100,99 ]
    room.steps  = [ 0,8,0, 0,0,0 ]
    room.audio  = "glitch"
    room.theme  = "pillar"
    // room.add_event(new pillar_nastazie)
    room.add_event(new Door(-2,0,130,1,0))
    this.rooms[147] = room
  }
  
  this.createSecrets = function()
  {
    var room = new Room();
    
    // Second cat
    
    room = new Room();
    room.floors = [ 1,1,1, 1,1,38, 1,1,38 ]
    room.walls  = [ 31,31,31, 31,31,31 ]
    room.steps  = [ 0,3,0, 0,0,0 ]
    room.audio  = "neomine"
    room.theme  = "black"
    room.add_event(new Wizard(1,0,"catfishbird"))
    room.add_event(new Door(-2,0,102,1,0))
    this.rooms[110] = room
    
    // Third cat
    
    room = new Room();
    room.floors = [ 1,2,3, 4,5,6, 10,10,9 ]
    room.walls  = [ 1,2,1, 2,1,2 ]
    room.steps  = [ 0,3,0, 0,0,0 ]
    room.audio  = "neomine"
    room.theme  = "black"
    room.add_event(new Wizard(1,0,"catfishbird"))
    room.add_event(new Door(-2,0,3,1,0))
    this.rooms[111] = room
    
    // Secret in Nastazie
    
    room = new Room();
    room.floors = [ 1,2,3, 4,5,6, 10,10,9 ]
    room.walls  = [ 1,2,1, 2,1,2 ]
    room.steps  = [ 0,3,0, 0,0,0 ]
    room.audio  = "neomine"
    room.theme  = "black"
    room.add_event(new Door(-2,0,142,1,0))
    room.add_event(new Petunia(1,0))
    this.rooms[112] = room
    
    // Hiversaires Room
    
    room = new Room();
    room.floors = [ 109,107,105, 110,0,106, 112,108,111 ]
    room.walls  = [ 102,103,102, 0,0,0 ]
    room.steps  = [ 0,0,0, 0,7,0 ]
    room.audio  = "glitch"
    room.theme  = "pillar"
    room.add_event(new Door(0,-2,68,0,1))
    // room.add_event(new Blocker(0,0,"sauvegarde", newDialog:dialogs.sauveguarde()))
    this.rooms[113] = room
  }
}