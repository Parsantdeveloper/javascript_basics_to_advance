class version1{
    order="order"
    print(){
        console.log(this.order)
    }
}
class version2 extends version1{
    user="user"
        print(){
        super.print()
        console.log(this.user)
}
}
const v=new version2();
v.print()