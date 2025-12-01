class product {
    Name="Acer Nitro 5";
    Price=70000;
    Category="Laptop";
    Rating={
        vendorRating:{Rate:4.5,Count:1000},
        customerRating:{Rate:4,Count:10000}
    };
    getVendorRating(){
        return this.Rating.vendorRating;
    }
}
let laptop=new product();
console.log(laptop.Name)