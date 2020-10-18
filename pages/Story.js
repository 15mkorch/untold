import Head from 'next/head';
import Navbar from '../components/navbar';

export default function Art() {
    return (
        <div className="background">
            <Navbar />
            <div className="text-panel">

                <div className="book-header">
                    <h1>Color</h1>
                </div>
                <div className="synopsis">
                    <p>Leah, a passionate 17- year old must decide to how to pursue her secret love of music that is prohibited by her narcissistically abusive household. In pursuit of her deepest love, Leah’s guardian angels reveal how her plot, if successful, could lead to her destruction.</p>
                </div>
                <button>Pre-order now</button>
            </div>
            <img className="storyimage" src="book.png" />
        </div>
    )
}  