import React from 'react'
import { FirestoreCollection } from 'react-firestore';

const FireClientList = () => {
    return (
        <FirestoreCollection

            path="stories"            
            render={({ isLoading, data }) => {                
                return isLoading ? (
                    <h1>Cargando</h1>
                ) : (
                    <div>
                        <h1>Historias</h1>
                        <ul>
                            {data.map(story => (                                
                                <li key={story.id}>
                                    {story.title} - {story.authorName}
                                </li>
                            ))                          
                            }
                        </ul>
                    </div>
                );
            }}

        />
    )
}

export default FireClientList;
