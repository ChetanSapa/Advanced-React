import React from 'react'
import {useAppSelector} from '../hooks/redux'

export function FavouritesPage() {

    const {favourites} = useAppSelector(state => state.github)

    if (favourites.length === 0) return <p className={'text-center'}>No items in Favourites</p>

    return (
        <div className={'flex justify-center pt-10 mx-auto h-screen w-screen'}>
            <ul className={'list-none'}>
                {favourites.map(i => (
                    <li key={i}>
                        <a href={i} target={'_blank'}>{i}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}