import React, { useContext } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../context/StoreContext'

const ExploreMenu = ({category,setCategory}) => {

  const {menu_list} = useContext(StoreContext);

  return (
    <div className='explore-menu' id='explore-menu'>
      <h2>Explore our sustainable options!</h2>
      <p className='explore-menu-text'>Tasty meals, smaller footprint. Grab something good and feel even better knowing you're helping reduce waste with every bite.</p>
      <div className='explore-menu-list'>
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default ExploreMenu
