import PropTypes from 'prop-types'
import css from "./FeedbackOptions.module.css"
export const FeedbackOptions = ({ options, handleLeaveFeedback }) => {
    return (<div className={css.option_container}>
        {options.map(option => (
            <button className={css.option_button}
                type='button'
                key={option}
                onClick={() => handleLeaveFeedback(option)}>
                {option}
            </button>
        ))}
    </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}