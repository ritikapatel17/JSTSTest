function InvalidCouponCode(Coupon=123) {
    try{
        if(Coupon=!Coupon){

        throw new Error("Invalid Coupon")
    }else{
        console.log("Valid Coupon");
        
    }
}   catch (error){
        console.log(error.message);
        
    }
}
function CouponCode(Coupon) {
    InvalidCouponCode(Coupon)
}
CouponCode(456);
CouponCode(123);

