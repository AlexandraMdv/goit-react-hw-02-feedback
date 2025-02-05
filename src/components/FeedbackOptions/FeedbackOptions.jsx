import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return ( 
    <div className={styles.buttons}>
        {options.map((option) => (
            <button 
                key={option}
                onClick={() => onLeaveFeedback(option)}
                className={styles.button}
            >{option}</button>
        ))}
    </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;

// import { Component } from "react";
// import styles from './Feedback.module.css';

// class Feedback extends Component {
//     state = {
//         good: 0,
//         neutral: 0, 
//         bad: 0,
//     }

//     handleClick = (ev) => {
//         let scope = ev.currentTarget.dataset.scope;

//         this.setState((prevState) => ({
//             [scope]: prevState[scope] + 1,
//         }))  
//     }

//     countTotalFeedback = () => {
//         return this.state.good + this.state.neutral + this.state.bad;
//     }

//     countPositiveFeedbackPercentage = () => {
//         return this.countTotalFeedback() > 0 ? (Math.round(this.state.good / Number(this.countTotalFeedback()) * 100) + '%') : 0;
//     }

//     render() {
//         return (
//             <div className={styles.feedback}>
//                 <h1 className={styles.title}> Please leave feedback</h1>

//                 <div className={styles.buttons}>
//                     <button className={styles.goodBtn} onClick={this.handleClick} data-scope="good">Good</button>
//                     <button className={styles.neutralBtn} onClick={this.handleClick} data-scope="neutral">Neutral</button>
//                     <button className={styles.badBtn} onClick={this.handleClick} data-scope="bad">Bad</button>
//                 </div>
                

//                 <p className={styles.statisticsTitle}>Statistics</p>
//                 <ul className={styles.statisticsList}>
//                     <li className={styles.statisticsListItem}>Good: {this.state.good}</li>
//                     <li className={styles.statisticsListItem}>Neutral: {this.state.neutral}</li>
//                     <li className={styles.statisticsListItem}>Bad: {this.state.bad}</li>
//                     <li className={styles.statisticsListItem}>Total: {this.countTotalFeedback()}</li>
//                     <li className={styles.statisticsListItem}> Positive Feedback: {this.countPositiveFeedbackPercentage()}</li>
//                 </ul>
//             </div>
//         )
//     }
// }

// export default Feedback;