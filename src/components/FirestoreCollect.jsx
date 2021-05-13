import React from 'react'
import { FirestoreCollection } from 'react-firestore';

const FirestoreCollect = () => {
    return (
        <FirestoreCollection

            path="stories"            
            render={({ isLoading, data }) => {
                console.log(data);
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

export default FirestoreCollect;
