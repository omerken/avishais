import { useState } from 'react';
import styles from './App.module.scss';
import { Card } from './components/card/card';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <Card img="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" />
        </div>
    );
}

export default App;
