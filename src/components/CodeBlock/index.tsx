import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

type Props = {
  className?: string
  codeString?: string
}

export const CodeBlock = ({ className, codeString = '' }: Props) => {
  return (
    <SyntaxHighlighter
      language='typescript'
      className={`text-sm scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-700 dark:scrollbar-thumb-zinc-700 shadow-xl shadow-zinc-700 ${className}`}
      style={dracula}
    >
      {codeString}
    </SyntaxHighlighter>
  )
}
