import React, { Component } from 'react';
import globStyles from '../../sass/App.module.scss'
import locStyles from './UsersPage.module.scss'

class UsersPage extends Component {
    
    render() {
        return (
            <main className={`${globStyles.Section}`}>
                <div className={locStyles.Sectioncard}>
                    <h2 className={`${globStyles.SectionHead}`}>User</h2>
                    <p className={`${globStyles.SectionMiniOpacityText}`}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore voluptatum quasi fugiat perferendis iusto?
                </p>
                </div>
            </main>
        );
    }
}

export default UsersPage;