 /*
class creation and object instantaion
*/

class Students{
   
   constructor(name,age,mclass)
    {this.myname=name;
    this.myage=age;
    this.myclass=mclass;
    }
    
   biodata()
   {  biodata(){document.writeln("i am "+this.myname+". My age is "+this.myage+" and I am studing in "+this.myclass+" class<br/><br/>");}
}//class ended
let st_obj1=new Students('Ahmed Abdullah',17,13);
let st_obj2=new Students('Ali',20,14);
st_obj1.biodata();
st_obj2.biodata();










/*setData(name,age,mclass)
    {this.myname=name;
    this.myage=age;
    this.myclass=mclass;}*/

  //
//st_obj2.setData('Ali',20,14);