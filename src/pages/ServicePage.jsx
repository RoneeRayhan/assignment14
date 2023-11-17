import { Helmet } from 'react-helmet';
import Subscribe from '../Components/Home/Subscribe';
import ServicesCard from '../Components/Services/ServicesCard';
import NavBar from './NavBar';

const ServicePage = () => {
    return (
        <NavBar>
            <Helmet><title>Design Agency | Services</title></Helmet>
            <div className=' p-16 bg-base-200 '>
                <h1 className='text-xl font-bold'>Team</h1>
                <p className='font-semibold my-4'>{'Home  > '} <span className='text-green-400'>Our Services</span> </p>
            </div>
            <ServicesCard />
            <Subscribe />
        </NavBar>
    );
};

export default ServicePage;