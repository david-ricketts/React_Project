import { Container } from 'reactstrap';
import DisplayList from '../features/display/DisplayList';
import SubHeader from '../components/SubHeader';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';

const HomePage = () => {
    // const { campsiteId } = parseInt(useParams());
    // console.log(campsitieId)
    // const campsite = selectCampsiteById(campsiteId);

    return (
        <Container>
            <SubHeader current="home" />
            <DisplayList />
        </Container>
    );
};

export default HomePage;