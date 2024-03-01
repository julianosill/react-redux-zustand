import { describe, expect, it } from 'vitest'

import { useStore } from '.'

const course = {
  id: 1,
  modules: [
    {
      id: 1,
      title: 'Iniciando com React',
      lessons: [
        { id: 'Jai8w6K_GnY', title: 'CSS Modules', duration: '13:45' },
        { id: 'w-DW4DhDfcw', title: 'Estilização', duration: '10:05' },
      ],
    },
    {
      id: 2,
      title: 'Estrutura da aplicação',
      lessons: [
        { id: 'gE48FQXRZ_o', title: 'Componente', duration: '13:45' },
        { id: 'Ng_Vk4tBl0g', title: 'Responsividade', duration: '10:05' },
      ],
    },
  ],
}

describe('player slice', () => {
  it('should be able to play', () => {
    const { play } = useStore.getState()

    play([1, 2])

    const { currentModuleIndex, currentLessonIndex } = useStore.getState()

    expect(currentModuleIndex).toEqual(1)
    expect(currentLessonIndex).toEqual(2)
  })

  it('should be able to play next video automatically', () => {
    useStore.setState({ course })
    const { next } = useStore.getState()

    next()

    const { currentModuleIndex, currentLessonIndex } = useStore.getState()

    expect(currentModuleIndex).toEqual(1)
    expect(currentLessonIndex).toEqual(2)
  })
})
