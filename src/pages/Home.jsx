import React from 'react'
import SlideComp from '../componnets/Slider';
import cate1 from "../assets/wp.images/img-cate1.png";
import '../assets/css/home.css'
function Home() {





  return (
    <div>
      <SlideComp />
      <div className='home-banner layout1'>

        <div className='container'>
          {/* add contant */}
        </div>

        <div className='container'>
          {/* add contant */}

        </div>

        <div className='container'>
          {/* add contant */}

        </div>


      </div>
      <div className='layout2'>
        <div className='layout2_header'>
          <p>Shop By Categories</p>
          <h1>
            <span>Featured Categories</span>
          </h1>
        </div>
        <div className='category-item-inner'>

          <div className='category-item'>
            <a href="">
              <img src={`${cate1}`} alt="" className='category-img' />
            </a>
            <div className='category-contant'>
              <a href="">
                fruits
              </a>
            </div>
          </div>

          <div className='category-item'>
            <a href="">
            <img src={`${cate1}`} alt="" className='category-img' />
            </a>
            <div className='category-contant'>
              <a href="">
              fruits
              </a>
            </div>
          </div>

          <div className='category-item'>
            <a href="">
            <img src={`${cate1}`} alt="" className='category-img' />
            </a>
            <div className='category-contant'>
              <a href="">
              fruits
              </a>
            </div>
          </div>

          <div className='category-item'>
            <a href="">
            <img src={`${cate1}`} alt="" className='category-img' />
            </a>
            <div className='category-contant'>
              <a href="">
              fruits
              </a>
            </div>
          </div>

          <div className='category-item'>
            <a href="">
            <img src={`${cate1}`} alt="" className='category-img' />
            </a>
            <div className='category-contant'>
              <a href="">
              fruits
              </a>
            </div>
          </div>

          <div className='category-item'>
            <a href="">
            <img src={`${cate1}`} alt="" className='category-img' />
            </a>
            <div className='category-contant'>
              <a href="">
              fruits
              </a>
            </div>
          </div>
        </div>

        <div className="layout2_footer">
          
        </div>
      </div>
    </div>
  )
}

export default Home
