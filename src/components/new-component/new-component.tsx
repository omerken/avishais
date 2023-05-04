import classNames from 'classnames';
import styles from './new-component.module.scss';
import Image from 'react-bootstrap/Image';

export interface NewComponentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-new-components-and-templates
 */
export const NewComponent = ({ className }: NewComponentProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            NewComponent
            <Image src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&amp;ext=jpg" />
        </div>
    );
};
