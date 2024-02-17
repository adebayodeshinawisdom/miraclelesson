import ClotheList from './components/ClotheList'
import ClotheList2 from './components/ClotheList2'
import Header from './components/Header'
function myApp () {
const clothes = [
  {id: 1,
    name: "Shirt",
    price: 1000,
    description: "This is a quality shirt for office use",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRCQNkfrnCZs3R-ZermcQp30QeQaOpcz-5jeD6Zim5FDd79VXZYERQBTh4IU1BeI_yyzV-Q_ld2vXVcP3r3P1rNlxGMzb1grNgMACV3_r2hKVG8I36-dWRCrLZQxGHyxn2iZHnXwlfECVw&usqp=CAc",

  },
  {id: 2,
    name: "Skirt",
    price: 1500,
    description: "This is a quality skirt for office use",
    image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/V/S/213340_1704745990.jpg",

  },
  {id: 3,
    name: "shoe",
    price: 20000,
    description: "This is a quality shoe for office use",
    image: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Y/A/109330_1643795339.jpg",

  },
  
]
  return(
    
   <>
   <Header/>
   
    <p className="text-green-400 text-2xl font-bold text-center shadow-md"> Latest Clothes</p>
   <ClotheList clothes={clothes}/>
   <ClotheList2 clothes={clothes}/>
   </>
  )
}
export default myApp