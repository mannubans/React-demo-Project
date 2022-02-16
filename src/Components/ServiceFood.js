import React,{useState} from 'react'
import Menu from '../API/RestMenuApi';
const ServiceFood = () => {
  const [images,setImage]  = useState(Menu)
  const allItem =()=>{
    const finalData = Menu.filter((value)=>{
      return value;
    })
    setImage(finalData)
  }
  const breakfast =(categoryItem)=>{
    const finalData = Menu.filter((value)=>{
      return value.category == categoryItem
    })
    setImage(finalData)
  }
  const evening =(categoryItem)=>{
    const finalData = Menu.filter((value)=>{
      return value.category == categoryItem
    })
    setImage(finalData)
  }
  const lunch =(categoryItem)=>{
    const finalData = Menu.filter((value)=>{
      return value.category == categoryItem
    })
    setImage(finalData)
  }
  const dinner =(categoryItem)=>{
    const finalData = Menu.filter((value)=>{
      return value.category == categoryItem
    })
    setImage(finalData)
  }
  return (
    <>
    <nav className="text-center rest-nav cmnptb">
      <div className="btn-group">
        <button className="btn-group__item" onClick={()=>breakfast('breakfast')}>Breakfast</button>
        <button className="btn-group__item" onClick={()=>evening('evening')}>Evening</button>
        <button className="btn-group__item" onClick={()=>lunch('lunch')}>Lunch</button>
        <button className="btn-group__item" onClick={()=>dinner('dinner')}>Dinner</button>
        <button className="btn-group__item" onClick={allItem}>All</button>
      </div>
    </nav>
    <section className="rest-menu-card cmnmb">
      <div className="container">
        <div className="row">
          {images.map((value)=>{
            const { id, name, category, image } = value;
              return (
                <>
                <div className="col-lg-4 col-sm-6 col-md-6 col-12">
                  <div className="card-container" key={id}>
                    <div className="card ">
                      <div className="card-body">
                        <span className="card-author subtle"> {category}</span>
                        <h4 className="card-title"> {name}</h4>
                      </div>
                      <div className="sclimg-item bd-rd-none">
                        <img src={image} alt="images" className="card-media" />      
                        </div>                
                    </div>
                    <span className="btn btn-style order-btn">Order Now</span>
                  </div>
                  </div>
                </>
              );
            })
          }
        </div>
      </div>
    </section>
    </>
  );
}
export default ServiceFood;