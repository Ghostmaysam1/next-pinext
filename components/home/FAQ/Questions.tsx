import { useCallback } from 'react';
import Question from "./Question";

import type { QuestionType } from './Screen';

function Questions(
    { onQuestion, questionList }
    : {onQuestion: (id: number)=> void, questionList: QuestionType[]}
) {
    const askedQuestionsSet = new Set();

    const handleQuestionClick = useCallback((id: number) => {
        if (!askedQuestionsSet.has(id as never)) {
            onQuestion(id);
        }
    }, [onQuestion, askedQuestionsSet]);

    return (
        <div className="h-max flex items-center justify-center relative bg-gradient-to-r from-transparent via-white/5 to-transparent px-1 md:px-8">
            <div className='flex gap-6 overflow-x-auto p-4 
                scrollbar-thin 
                scrollbar-thumb-white/20 
                scrollbar-track-transparent 
                hover:scrollbar-thumb-white/30
                scrollbar-thumb-rounded-full'>
                {questionList.map(q => (
                    <div key={`first-${q.id}`} className="flex-shrink-0">
                        <Question
                            onClick={() => handleQuestionClick(q.id)}
                            text={q.text}
                            isActive={askedQuestionsSet.has(q.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Questions;