
import PropTypes from 'prop-types'

export const Statistics = ({ goodCounter, neutralCounter, badCounter, total, positivePercentage }) => {
    return (<>
            <ul>
                <li>Good: {goodCounter}</li>
                <li>Neutral: {neutralCounter}</li>
                <li>Bed: {badCounter}</li>
            </ul>
            <p>Total feedbacks: {total}</p>
            <p>Positive Feedbacks: {positivePercentage} %</p>
        </>);
};

Statistics.propTypes = {
    goodCounter: PropTypes.number.isRequired,
    neutralCounter: PropTypes.number.isRequired,
    badCounter: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}