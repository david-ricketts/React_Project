import { Container } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import SubHeader from '../components/SubHeader';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';

const CampsitesDirectoryPage = () => {
    return (

        <Container>
            <SubHeader current="Directory" />
            <CampsitesList />
        </Container>
    );
};

export default CampsitesDirectoryPage;
