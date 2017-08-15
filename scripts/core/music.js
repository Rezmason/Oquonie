function Music()
{
  this.track_ambient = new Audio();
  this.track_effect = new Audio();
  this.track_interface = new Audio();
  this.track_dialog = new Audio();
  this.volume = 1;

  this.audio_catalog = {};

  this.is_muted = false;

  this.play_effect = function(name)
  {
    console.log("Effect: ",name);
    this.track_effect = this.fetch_audio(name, "effect", "media/audio/effect/"+name+".ogg");
    this.track_effect.volume = this.volume;
    this.track_effect.play()
  }

  this.play_interface = function(name)
  {
    console.log("Interface: ",name);
    this.track_interface = this.fetch_audio(name, "interface", "media/audio/interface/"+name+".ogg");
    this.track_interface.volume = this.volume;
    this.track_interface.play()
  }

  this.play_dialog = function(name)
  {
    console.log("Dialog: ",name);
    this.track_dialog = this.fetch_audio(name, "dialog", "media/audio/dialog/"+name+".ogg");
    this.track_dialog.volume = this.volume;
    this.track_dialog.play();
  }

  this.play_ambient = function(name)
  {
    if(this.track_ambient.name == name){ return; }
    if(DEBUG){ return; }

    // Fadeout
    var volume = this.volume;
    $(this.track_ambient).animate({volume: 0}, 1000, function(){
      console.log("Music: ",name);

      oquonie.music.track_ambient.pause();
      oquonie.music.track_ambient = oquonie.music.fetch_audio(name, "ambient", "media/audio/ambient/"+name+".mp3", true);
      if(oquonie.music.is_muted == false){ oquonie.music.track_ambient.play(); }
      $(oquonie.music.track_ambient).animate({volume: volume}, 1000);
    });
  }

  this.set_volume = function(value)
  {
    this.volume = Math.min(1, Math.max(0, value));
    if (this.track_ambient != null) { this.track_ambient.volume = this.volume; }
    if (this.track_effect != null) { this.track_effect.volume = this.volume; }
    if (this.track_interface != null) { this.track_interface.volume = this.volume; }
    if (this.track_dialog != null) { this.track_dialog.volume = this.volume; }
  }

  this.fetch_audio = function(name, role, src, loop = false)
  {
      var audio_id = role + "_" + name;
      if (!(audio_id in this.audio_catalog))
      {
        var audio = new Audio();
        audio.name = name;
        audio.src = src;
        audio.loop = loop;
        this.audio_catalog[audio_id] = audio;
      }
      this.audio_catalog[audio_id].currentTime = 0;
      return this.audio_catalog[audio_id];
  }

  this.pause_ambience = function()
  {
    this.is_muted = true;

    $(this.track_ambient).animate({volume: 0}, 1000, function(){
      oquonie.music.track_ambient.pause();
    });
  }

  this.resume_ambience = function()
  {
    this.track_ambient.play();
    this.track_ambient.volume = 0;
    $(this.track_ambient).animate({volume: 1}, 1000);
    this.is_muted = false;
  }
}
