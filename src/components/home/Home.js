import logo from './logo.png';

const Home = () => {
    return (
        <div className="d-flex align-items-center flex-column pt-5">
            <h1>React Components Trainer</h1>
            <p><i>“The future belongs to competent. Get good, get better, be the best.” – Brian Tracy</i></p>
            <img src={logo} style={{ maxHeight: '192px', maxWidth: '192px' }} />
        </div>
    );
}
export default Home;