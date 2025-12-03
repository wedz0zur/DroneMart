import React from 'react'
import './News_block.css'

const News_block = () =>{

    return(
        <section className='news-block container'>
            <h1 className='news-block-title'>Новости</h1>
            <div className='blocks flex'>
                <div className='news-block-big'>
                    <div className='news-block-big-img'></div>
                    <p className='news-block-big-text'>DJI Flip вместо Mini 5?</p>
                </div>
                <div className='news-blocks-mini flex'>
                    <div className='news-block-mini'>
                        <div className='news-block-mini-img-1 news-block-mini-img'></div>
                        <p className='news-block-mini-text'>DJI Neo. Известно почти всё</p>
                    </div>
                    <div className='news-block-mini'>
                        <div className='news-block-mini-img-2 news-block-mini-img'></div>
                        <p className='news-block-mini-text'>Стала известна дата анонса DJI Neo</p>
                    </div>
                    <div className='news-block-mini'>
                        <div className='news-block-mini-img-3 news-block-mini-img'></div>
                        <p className='news-block-mini-text'>DJI Neo скоро появится. Новый сверхкомпактный дрон от DJI.</p>
                    </div>
                    <div className='news-block-mini'>
                        <div className='news-block-mini-img-4 news-block-mini-img'></div>
                        <p className='news-block-mini-text'>DJI Mini 4K будет представлен 29 апреля</p>
                    </div>
                    <div className='news-block-mini'>
                        <div className='news-block-mini-img-5 news-block-mini-img'></div>
                        <p className='news-block-mini-text'>Ждём DJI Mini 4K</p>
                    </div>
                    <div className='news-block-mini'>
                        <div className='news-block-mini-img-6 news-block-mini-img'></div>
                        <p className='news-block-mini-text'>Владельцам Toolkit, обращающимся к нам по вопросам гарантийного обслуживания</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News_block