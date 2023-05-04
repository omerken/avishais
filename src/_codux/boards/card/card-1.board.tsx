import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card 1',
    Board: () => (
        <Card
            img="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&amp;ext=jpg"
            title="Card Title"
        />
    ),
});
