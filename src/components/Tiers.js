import React from 'react';
import TowerTier from '../components/img/towertier.jpg';

const Tiers = () => {
    return (
        <div className='container tiers center-align'>
        <h2>The Tower is divided into three tiers!</h2>

        <img src={TowerTier} alt=""/>

        <p><span>Photo by <a href="https://unsplash.com/@anelale?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Anelale Nájera</a> on <a href="https://unsplash.com/collections/80636457/tokyo-tower?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></p>

        <p>Tokyo Tower is divided into three separate sections. At the base of the Tower is the Foot Town which houses cafes, restaurants and souvenir shops.
There is also One-Piece Tower, which is a theme park based on the famous manga and anime.
The other section of the Tower is the main Observatory that is located 150 meters up. This observation area offers memorable views of the city.
There is a look-down window that may be too much for those that are afraid of heights.
For the best views of the city, climb to the Special Observatory area that is 250 metres high.
</p>
        

        </div>
    )
}

export default Tiers