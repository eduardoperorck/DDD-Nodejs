import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { CreateQuestionUseCase } from './create-question'
import { AnswerQuestionUseCase } from './answer-question'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase

describe('Create Answer', () => {
    beforeEach(() => {
        inMemoryAnswersRepository = new InMemoryAnswersRepository()
        sut = new AnswerQuestionUseCase(inMemoryAnswersRepository)
    })

    // sut - system under test

    it('should be able to create an answer', async () => {

        const { answer } = await sut.execute({
            questionId: '1',
            instructorId: '1',
            content: 'Conteudo da resposta'
        })

        expect(answer.id).toBeTruthy()
        expect(inMemoryAnswersRepository.items[0].id).toEqual(answer.id)
    })

})

