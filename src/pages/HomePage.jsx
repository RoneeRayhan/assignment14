import NavBar from './NavBar';
import Card from '../Components/Home/Card';
import Subscribe from '../Components/Home/Subscribe';
import WorkList from '../Components/Home/WorkList';
import FeaturedProject from '../Components/Home/FeaturedProject';
import { Helmet } from 'react-helmet';

const HomePage = () => {
    return (
        <NavBar>
            <Helmet><title>Design Agency | Home</title></Helmet>
            <Card />
            <WorkList />
            <FeaturedProject />
            <Subscribe />
        </NavBar>
    );
};

export default HomePage;