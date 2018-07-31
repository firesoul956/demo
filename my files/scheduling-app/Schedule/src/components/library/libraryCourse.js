import React, { component } from 'react';

class LibraryCourse extends component {
    render() {
        return (
            <div className="library-course">
                <label className="Library-Course__title">
                    problem solving
                </label>
                {/*Icon*/}
                {/*arrow*/}
                {/*action*/}
                <div className="library-course__Description">
                    <label>
                        problem solving
                    </label>
                    <p>
                    The Darkness is falling
                    And I hear her calling
                    The shadows are coming to life
                    But I won't rekindle
                    The embers that dwindle
                    Cause I sing my undead lullaby
                    </p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;