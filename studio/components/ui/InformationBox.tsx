import { FC, ReactNode, useState } from 'react'
import { IconMaximize2, IconMinimize2, Typography } from '@supabase/ui'

interface Props {
  icon?: ReactNode
  title: ReactNode | string
  description?: ReactNode | string
  url?: string
  urlLabel?: string
  defaultVisibility?: boolean
  hideCollapse?: boolean
}

const InformationBox: FC<Props> = ({
  icon,
  title,
  description,
  url,
  urlLabel = 'Read more',
  defaultVisibility = false,
  hideCollapse = false,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultVisibility)
  return (
    <div className="block w-full bg-gray-100 dark:bg-gray-600 py-3 border border-gray-600 dark:border-gray-500 border-opacity-20 rounded">
      <div className="flex flex-col">
        <div className="flex items-center justify-between px-3">
          <div className="flex space-x-3 w-full lg:items-center">
            <Typography.Text>{icon}</Typography.Text>
            <div className="flex-grow">
              <Typography.Text>{title}</Typography.Text>
            </div>
          </div>
          {description && !hideCollapse ? (
            <div className="cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
              <Typography>
                {isExpanded ? (
                  <IconMinimize2 size={14} strokeWidth={1.5} />
                ) : (
                  <IconMaximize2 size={14} strokeWidth={1.5} />
                )}
              </Typography>
            </div>
          ) : null}
        </div>
        <div
          className={`transition-all flex flex-col space-y-3 overflow-hidden ${
            isExpanded ? 'mt-3' : ''
          }`}
          style={{ maxHeight: isExpanded ? 500 : 0 }}
        >
          <div className="px-3">
            <Typography.Text type="secondary" small>
              {description}
            </Typography.Text>
          </div>
          {url && (
            <div className="px-3">
              <a href={url} target="_blank">
                <Typography.Text small>{urlLabel}</Typography.Text>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default InformationBox
