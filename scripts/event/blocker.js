function Blocker(x,y,id)
{
  Event.call(this,"blocker");

  this.x = x;
  this.y = y;

  this.is_collider = function()
  {
    return true;
  }

  var bg = "url(media/graphics/blocker/"+id+".png)";

  var p = this.position_at(x,y,100);
  var top = p[0];
  var left = p[1];
  var zIndex = p[2];

  this.element.setAttribute("style","background-image:"+bg+"; left:"+left+"; top:"+top+";z-index:"+zIndex);
}