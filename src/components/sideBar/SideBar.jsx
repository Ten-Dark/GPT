import React from 'react'
import cls from './sideBar.module.css'

export const SideBar = () => {
    return (
        <div className={`${cls.sidebar} flex flex-col justify-center px-10 space-y-44`}>
            <div className='h-fit'>GPT</div>
            <div className='h-fit'>Games</div>
            <div className='h-fit'>Customize</div>
            <div className='h-fit'>Settings</div>
        </div>
    )
}
