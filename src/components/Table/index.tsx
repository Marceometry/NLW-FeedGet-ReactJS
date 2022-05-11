import bugImg from '@/assets/bug.svg'
import ideaImg from '@/assets/idea.svg'
import thoughtImg from '@/assets/thought.svg'
import { FeedbackModel, FeedbackType, FeedbackTypesEnum } from '@/constants'

type Props = {
  feedbacks: FeedbackModel[]
}

export const Table = ({ feedbacks }: Props) => {
  const getFeedbackTypeIcon = (type: FeedbackType): string => {
    switch (type) {
      case 'BUG':
        return bugImg
      case 'IDEA':
        return ideaImg
      case 'OTHER':
        return thoughtImg
    }
  }

  return (
    <div className='mt-8 col-span-full xl:col-span-6 bg-zinc-800 shadow-lg rounded-sm border border-zinc-700'>
      <header className='px-5 py-4 border-b border-slate-100'>
        <h2 className='font-semibold text-zinc-100'>Feedbacks</h2>
      </header>
      <div className='p-3'>
        <div className='overflow-x-auto'>
          <table className='table-auto w-full'>
            <thead className='text-xs font-semibold uppercase text-zinc-300 bg-zinc-700'>
              <tr>
                <th className='p-2 whitespace-nowrap'>
                  <div className='font-semibold text-left'>Tipo</div>
                </th>
                <th className='p-2 whitespace-nowrap'>
                  <div className='font-semibold text-left'>Comentário</div>
                </th>
                <th className='p-2 whitespace-nowrap'>
                  <div className='font-semibold text-left'>Screenshot</div>
                </th>
              </tr>
            </thead>
            <tbody className='text-sm divide-y divide-zinc-800'>
              {feedbacks.map((item) => (
                <tr>
                  <td className='p-2 whitespace-nowrap max-w-[4rem]'>
                    <div className='flex items-center'>
                      <div className='w-10 h-10 shrink-0 mr-2 sm:mr-3'>
                        <img
                          className='rounded-full'
                          src={getFeedbackTypeIcon(item.type)}
                          width='36'
                          height='36'
                          alt='Alex Shatov'
                        />
                      </div>
                      <div className='font-medium text-zinc-100'>
                        {FeedbackTypesEnum[item.type]}
                      </div>
                    </div>
                  </td>
                  <td className='p-2 whitespace-nowrap'>
                    <div className='text-left'>{item.comment}</div>
                  </td>
                  <td className='p-2 whitespace-nowrap overflow-hidden max-w-[10rem]'>
                    <div className='text-left'>
                      {item.screenshot ? (
                        <a
                          target='_blank'
                          className='underline underline-offset-1'
                          href={item.screenshot}
                        >
                          item.screenshot
                        </a>
                      ) : (
                        '-'
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}