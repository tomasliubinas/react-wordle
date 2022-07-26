import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'
import { ENTER_TEXT, DELETE_TEXT } from '../../constants/strings'
import { localeAwareUpperCase } from '../../lib/words'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  solution: string
  guesses: string[]
  isRevealing?: boolean
}

export const Keyboard = ({
                           onChar,
                           onDelete,
                           onEnter,
                           solution,
                           guesses,
                           isRevealing,
                         }: Props) => {
  const charStatuses = getStatuses(solution, guesses)

  const onClick = (value: string) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = localeAwareUpperCase(e.key)
        if (key.length === 1 && (
              key >= 'A' && key <= 'Z' ||
              ['Ą','Č','Ę','Ė','Į','Š','Ų','Ū','Ž'].includes(key)
            )
        ) {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
      <div>
        <div className="flex justify-center mb-1">
          {['Ą', 'Ž', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',  'Ė'].map((key) => (
              <Key
                  value={key}
                  key={key}
                  onClick={onClick}
                  status={charStatuses[key]}
                  isRevealing={isRevealing}
              />
          ))}
          <Key width={65.4} value="DELETE" onClick={onClick}>
            {DELETE_TEXT}
          </Key>
        </div>
        <div className="flex justify-center mb-1">
          {['A', 'S', 'Š', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ų'].map((key) => (
              <Key
                  value={key}
                  key={key}
                  onClick={onClick}
                  status={charStatuses[key]}
                  isRevealing={isRevealing}
              />
          ))}
        </div>
        <div className="flex justify-center">

          {['Z', 'Ū', 'C', 'V', 'B', 'N', 'M', 'Č', 'Ę'].map((key) => (
              <Key
                  value={key}
                  key={key}
                  onClick={onClick}
                  status={charStatuses[key]}
                  isRevealing={isRevealing}
              />
          ))}
          <Key width={120} value="ENTER" onClick={onClick}>
            {ENTER_TEXT}
          </Key>
        </div>
      </div>
  )
}
