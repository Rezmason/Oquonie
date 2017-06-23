function Credit(x,y,id,message,overlay = null)
{
  Event.call(this,"credit");

  this.x = x;
  this.y = y;
  this.id = id;
  this.overlay = overlay;

  this.animator.add(new Animation("idle",[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,2]));

  this.is_collider = function()
  {
    return true;
  }

  this.on_collision = function()
  {
    if (this.overlay != null) {
      oquonie.overlay.show(this.overlay, "black");
    }
    oquonie.dialog.show(this.id,message,"media/graphics/credit/"+this.id+".");
  }

  this.update(20);
}
