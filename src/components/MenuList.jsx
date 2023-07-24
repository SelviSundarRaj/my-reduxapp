import menuimg1 from "../image/Grocery.webp";
import menuimg2 from "../image/Mobiles.webp";
import menuimg3 from "../image/Fashion.webp";
import menuimg4 from "../image/Electronics.webp";
import menuimg5 from "../image/furniture.webp";
import menuimg6 from "../image/Appliances.webp";
import menuimg7 from "../image/Plane.webp"
import menuimg8 from "../image/Toys.webp";
import menuimg9 from "../image/Bike.webp";
import '../css/form.css';





function MenuList(){
    return(
        <>
             <div className="menuList"  >
        <div>
            <img src={menuimg1} alt="" />
            <div className="menuName">Grocery</div>
        </div>
        <div>
            <img src={menuimg2} alt="" />
            <div className="menuName">Mobiles</div>
        </div>
        <div>
            <img src={menuimg3} alt="" />
            <div className="menuName">Fashion</div>
        </div>
        <div>
            <img src={menuimg4} alt="" />
            <div  className="menuName">Electronics</div>
        </div>
        <div>
            <img src={menuimg5} alt="" />
            <div  className="menuName">Home&Furniture</div>
        </div>
        <div>
            <img src={menuimg6} alt="" />
            <div  className="menuName">Appliance</div>
        </div>
        <div>
            <img src={menuimg7} alt="" />
            <div  className="menuName">Travel</div>
        </div>
        <div>
            <img src={menuimg8} alt="" />
            <div  className="menuName">Beauty&Toys</div>
        </div>
        <div>
            <img src={menuimg9} alt="" />
            <div  className="menuName">Two wheelers</div>
        </div>
    </div>

        </>
    )
}
export default MenuList;