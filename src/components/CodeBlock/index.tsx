import { useCopy } from '@/hooks'
import { DuplicateIcon } from '@heroicons/react/outline'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

type Props = {
  className?: string
  codeString?: string
}

export const CodeBlock = ({ className, codeString = '' }: Props) => {
  const { handleCopy } = useCopy()

  return (
    <div className={`relative ${className}`}>
      <SyntaxHighlighter
        language='typescript'
        className='text-sm scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-700 dark:scrollbar-thumb-zinc-700 shadow-xl shadow-zinc-700'
        style={dracula}
      >
        {codeString}
      </SyntaxHighlighter>
      <DuplicateIcon
        onClick={() => handleCopy(codeString)}
        className='absolute right-3 top-5 w-6 h-6 text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer'
      />
    </div>
  )
}
