import TaroList from './TaroList';
import useFetch from './components/useFetch';

const Home = () => {
    const url = 'https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/';
    const hearder = {
                        method: 'GET',
                        headers: {'Content-Type': 'application/json;charset=utf-8'}
                    }

    const {data: taroList, isPending, error} = useFetch(url, hearder);

    return (
        <div className="home">
            {error && <div> {error}</div>}
            {isPending && <div>Loading...</div>}
            {taroList && <TaroList taros={taroList} title="All Taros!"></TaroList>}
        </div>
    )
}

export default Home;

