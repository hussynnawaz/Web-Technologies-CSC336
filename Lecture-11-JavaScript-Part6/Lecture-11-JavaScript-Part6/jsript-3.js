 class Students{
   
   constructor(name,age,mclass)
    {this.myname=name;
    this.myage=age;
    this.myclass=mclass;
    }
   //instance method 
   biodata()
   {  document.writeln("i am "+this.myname+". My age is "+this.myage+
                      " and I am studing in "+this.myclass);}
}//class ended
class Player extends Students
{   
    constructor(name,age,mclass,game)
 {  super(name,age,mclass);
     this.mygame=game;}
  player_biodata()
   {  super.biodata();
       document.writeln("<br/> and I am player of "+this.mygame+"<br/><br/>");}
    
}
let st_obj1=new Player('Abdul Moiz',19,'BSE','Football');

st_obj1.player_biodata();













/*setData(name,age,mclass)
    {this.myname=name;
    this.myage=age;
    this.myclass=mclass;}*/

  //
//st_obj2.setData('Ali',20,14);