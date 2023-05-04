import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => (
        <Card
            img="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
            title="Meet Codux"
            description="This is the descriptuion"
        />
    ),
    environmentProps: {
        windowWidth: 1024,
    },
});
