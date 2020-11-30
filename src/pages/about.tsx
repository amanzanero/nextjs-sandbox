import Link from 'next/link'
import { useCount, useDispatchCount } from '../components/Counter'

const AboutPage = ({ stuff }) => {
    const count = useCount()
    const dispatch = useDispatchCount()

    const handleIncrease = (event) =>
        dispatch({
            type: 'INCREASE',
        })
    const handleIncrease15 = (event) =>
        dispatch({
            type: 'INCREASE_BY',
            payload: 15,
        })

    return (
        <>
            <h1>ABOUT</h1>
            {stuff}
            <p>Counter: {count}</p>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleIncrease15}>Increase By 15</button>
            <p>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </p>
        </>
    );
}

export async function getServerSideProps(context: any) {
    try {
      const res = await fetch('https://google.com');
      const json = await res.text();
      return {
        props: {stuff: JSON.stringify(json)}
      }
    } catch (e) {
      console.error('Err:', e);
      return {
       props: { stuff: JSON.stringify(e)}
      }
    }
}
export default AboutPage;
