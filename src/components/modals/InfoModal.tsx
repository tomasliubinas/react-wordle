import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Žaidimo taisyklės" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Atspėkite žodį iš 6 spėjimų. Po kiekvieno spėjimo raidžių spalva parodys ar priartėjote prie tikslo.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="Ž"
          status="correct"
        />
        <Cell isRevealing={true} isCompleted={true}  status="absent"  value="I" />
        <Cell isRevealing={true} isCompleted={true}  status="absent"  value="N" />
        <Cell isRevealing={true} isCompleted={true}  status="absent"  value="I" />
        <Cell isRevealing={true} isCompleted={true}  status="absent"  value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Raidė Ž yra žodyje teisingoje vietoje
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell isRevealing={true} isCompleted={true}  status="absent" value="M" />
        <Cell isRevealing={true} isCompleted={true}  status="absent" value="Ū" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="R"
          status="present"
        />
        <Cell isRevealing={true} isCompleted={true}  status="absent" value="A" />
        <Cell isRevealing={true} isCompleted={true}  status="absent" value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Raidė R yra žodyje, bet kitoje vietoje
      </p>


      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
            {' '}
        <a
          href="https://github.com/tomasliubinas/react-wordle"
          className="underline font-bold"
        >
          React Wordle yra atvirojo kodo žaidimo versija
        </a>{' '}

      </p>
    </BaseModal>
  )
}
