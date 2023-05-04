import classNames from 'classnames';
import styles from './card.module.scss';
import Image from 'react-bootstrap/Image';

export interface CardProps {
    className?: string;
    img?: string;
    title?: string;
    description?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cards-and-templates
 */
export const Card = ({ img, className, title, description }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Image src={img} />
            <div>
                <div className={styles.content}>
                    <h1 className={styles.cardTitle}>Heading 1</h1>
                    <p className={styles.createdBy}>
                        Created by<button className={styles.btn}>Button</button>
                    </p>
                </div>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};
