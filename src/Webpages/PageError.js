import React from 'react'
import { NavLink } from 'react-router-dom';

const PageError = () => {
	return (
        <>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>WE ARE SORRY, PAGE NOT FOUND</h2>
                    <p>THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD IT's NAME CHANGED OR TEMPORARY AVAILABLE</p>
                    <button class="btn btn-style btn-style-border" type="submit"><NavLink to="/"> Go to homepagesdasdf</NavLink></button>
                </div>
            </div>
        </>
		);
};
export default PageError; 