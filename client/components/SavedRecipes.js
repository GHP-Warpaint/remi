import React, {Component} from 'react'
import {connect} from 'react-redux'

export default class SavedRecipes extends Component {
  render() {
    return (
      <div>
        <h2 className="saved-recipes">Saved Recipes</h2>
        <div className="saved-scroll">
          <ul className="saved-recipes-items">
            <li>
              No Bake S'Mores Cheesecake<span className="saved-recipe-img">
                <img
                  src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_No-Bake-S%27mores-Cheesecake_H2_s4x3.jpg.rend.hgtvcom.406.305.suffix/1537973086627.jpeg"
                  width="200px"
                />
              </span>
            </li>
            <li>
              Warm Chocolate Cakes with Berries<span className="saved-recipe-img">
                <img
                  src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/11/3/0/ei1a03_chocolate_cake.jpg.rend.hgtvcom.966.725.suffix/1387411401590.jpeg"
                  width="200px"
                />
              </span>
            </li>
            <li>
              Osso Buco<span className="saved-recipe-img">
                <img
                  src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/1/31/0/italiancooking_ossobucco.jpg.rend.hgtvcom.966.725.suffix/1431766579357.jpeg"
                  width="200px"
                />
              </span>
            </li>
            <li>
              Cheesy Wonton Nachos<span className="saved-recipe-img">
                <img
                  src="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/219395.jpg?output-format=webp&output-quality=60&resize=600:*"
                  width="200px"
                />
              </span>
            </li>
            <li>
              Chocolate Croissant Bread Pudding<span className="saved-recipe-img">
                <img
                  src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/12/5/0/CCEEC405_chocolate-croissant-bread-pudding-with-bourbon-ice-cream-sauce-recipe_s4x3.jpg.rend.hgtvcom.966.725.suffix/1387411415927.jpeg"
                  width="200px"
                />
              </span>
            </li>
            <li>
              Beer-Braised Chicken<span className="saved-recipe-img">
                <img
                  src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/3/3/1/FNM_040110-W-N-Dinners-004_s4x3.jpg.rend.hgtvcom.966.725.suffix/1371590997973.jpeg"
                  width="200px"
                />
              </span>
            </li>
            <li>
              Amaretto Chocolate Brownies with Walnuts<span className="saved-recipe-img">
                <img
                  src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/2/8/0/TU0404_Amaretto_Chcolate_Brownies.jpg.rend.hgtvcom.966.725.suffix/1387416656046.jpeg"
                  width="200px"
                />
              </span>
            </li>
            <li>
              Chicken And Waffles Nachos<span className="saved-recipe-img">
                <img
                  src="https://s3.amazonaws.com/video-api-prod/assets/b87eecca2c254f0f87ab806d52454586/Square_THUMB.jpg?output-format=webp&output-quality=60&resize=600:*"
                  width="200px"
                />
              </span>
            </li>
            <li>
              Coffee Caramel Crunch Ice Cream<span className="saved-recipe-img">
                <img
                  src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/5/14/0/FNM_060118-No-Churn-Coffee-Caramel-Ice-Cream_s4x3.jpg.rend.hgtvcom.406.305.suffix/1526308755018.jpeg"
                  width="200px"
                />
              </span>
            </li>
            <li>
              Chickless Pot Pie<span className="saved-recipe-img">
                <img
                  src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/3/26/0/YW0104_Chickless-Pot-Pie_s4x3.jpg.rend.hgtvcom.966.725.suffix/1414181095325.jpeg"
                  width="200px"
                />
              </span>
            </li>
            <li>
              Braised Beef Brisket<span className="saved-recipe-img">
                <img
                  src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/21/1/LR0794H_braised-beef-brisket-with-onions-mushrooms-and-balsamic_s4x3.jpg.rend.hgtvcom.966.725.suffix/1382375811090.jpeg"
                  width="200px"
                />
              </span>
            </li>
            <li>
              Chicken Gyros<span className="saved-recipe-img">
                <img
                  src="https://img.buzzfeed.com/video-api-prod/assets/a360484107084401add1475402287908/1504739525_00001.jpg?output-quality=100&resize=900:*"
                  width="200px"
                />
              </span>
            </li>
            <li>
              Sunny's Double-Chocolate Bread Pudding<span className="saved-recipe-img">
                <img
                  src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/12/19/0/FN_Sunny-Anderson-Double-Chocolate-Bread-Pudding_s4x3.jpg.rend.hgtvcom.966.725.suffix/1389218469311.jpeg"
                  width="200px"
                />
              </span>
            </li>
            <li>
              Smashed Sweet Potatoes<span className="saved-recipe-img">
                <img
                  src="https://www.fillmyrecipebook.com/wp-content/uploads/2018/09/Smashed-Sweet-Potatoes.jpg"
                  width="200px"
                />
              </span>
            </li>
            <li>
              Baked Fudge<span className="saved-recipe-img">
                <img
                  src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/7/8/1/WU0503H_baked-fudge-recipe_s4x3.jpg.rend.hgtvcom.966.725.suffix/1394036353998.jpeg"
                  width="200px"
                />
              </span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

// const mapState = (state) => ({

// })

// const mapDispatch = (dispatch) => ({

// })

// export default connect(mapState, mapDispatch)(SavedRecipes)
