import alt from "../libs/alt";
import QuizActions from "../actions/QuizActions";

class QuizStore {
    constructor() {
        this.bindActions(QuizActions);
        const questionnaire = [
            {
                title: 'Question 1',
                question: 'In which pair of the following athletic endeavors do TGO employees participate?',
                answer: [
                    'MMA (Mixed Martial Arts) fighting and golf',
                    'Scuba diving and polka dancing',
                    'Bowling and professionalhula hooping',
                    'Marathon running and fencing'
                ],
                correctIndex: [0],
                correctCopy: 'MMA fighting and golf'
            },
            {
                title: 'Question 2',
                question: 'How many languages do TGO employees speak worldwide?',
                answer: [
                    '29',
                    '40',
                    '43',
                    '19'
                ],
                correctIndex: [2],
                correctCopy: '43'
            },
            {
                title: 'Question 3',
                question: 'Which TGO site has the largest percentage of employees with 10-20 years of service?',
                answer: [
                    'Maipu,Chile',
                    'TAPI,Hungary',
                    'Kfar Saba,Israel',
                    'Waterford, Ireland'
                ],
                correctIndex: [3],
                correctCopy: 'Waterford, Ireland (48%)'
            },
            {
                title: 'Question 4',
                question: 'In which of the following are your TGO colleagues currently involved?',
                answer: [
                    'Food drives',
                    'Blood donations',
                    'Kfar SabCancer fundraising',
                    'Helping disabled children',
                    'Scholarships',
                    'All of the above'
                ],
                correctIndex: [5],
                correctCopy: 'All of the above'
            },
            {
                title: 'Question 5',
                question: 'In which of these countries do 3% or more of TGO employees have Master’s degrees?',
                answer: [
                    'Mexico',
                    'Israel',
                    'Maipu, Chile',
                    'Pomona, USA',
                    'Valencia, Venezuela',
                    'Forest, USA',
                    'Munro, Argentina'
                ],
                correctIndex: [],
                correctCopy: 'All of the above'
            },
            {
                title: 'Question 6',
                question: 'Which of these statements is true?',
                answer: [
                    'TGO has more employees with more than 20 years of service than less than 5 years',
                    'TGO has more employees with 5 to  10 years of service than between 10 and 20 years',
                    'TGO has more employees with 10 to  20 years of service  than 35 Years or more'
                ],
                correctIndex: [0, 1],
                correctCopy: 'TGO has more employees with more than 20 years of service than less than 5 years. That’s impressive! We also have more employees with 10 to 20 years of service than 35 years or more'
            },
            {
                title: 'Question 7',
                question: 'Which of the following roles has been filled by a TGO colleague?',
                answer: [
                    'Park Commissioner',
                    'Junior Olympics Swimmer',
                    'Civil War Reenactor',
                    'All of the above'
                ],
                correctIndex: [],
                correctCopy: 'All of the above'
            },
            {
                title: 'Question 8',
                question: 'Which of the following activities that TGO employees are involved with models Teva’s value of Getting It Done Together?',
                answer: [
                    'Leading an after-school program for disadvantaged elementary school girls',
                    'Setting a world record for building the largest cake',
                    'Initiating a connection to natural gas for an entire region',
                    'Rescuing a beached whale'
                ],
                correctIndex: [0],
                correctCopy: 'Leading an after-school program AND initiating a connection to natural gas'
            }
        ];
        const currentIndex = -1;
        const currentQuestion = null;

        this.state = ({questionnaire, currentIndex, currentQuestion});
    }

    startQuiz() {
        console.log("QuizStore startQuiz");
        const currentIndex = 0;
        const currentQuestion = this.state.questionnaire[currentIndex];
        this.setState({currentIndex});
        this.setState({currentQuestion});
    }

    resetQuiz() {
        const currentIndex = -1;
        const currentQuestion = null;
        this.setState({currentIndex});
        this.setState({currentQuestion});
    }

    hasNext() {
        if (this.state.questionnaire[this.state.currentIndex + 1]) {
            return true;
        } else {
            return false;
        }
    }

    next() {
        if (this.hasNext()) {
            const currentIndex = this.state.currentIndex + 1;
            console.log("QuizStore next", currentIndex);
            const currentQuestion = this.state.questionnaire[currentIndex];
            this.setState({currentIndex});
            this.setState({currentQuestion});
        } else {
            this.reset();
        }
    }

    update() {
        //
    }

    reset() {
        this.resetQuiz();
    }
}

export default alt.createStore(QuizStore, 'QuizStore');