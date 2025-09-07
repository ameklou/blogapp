import { JSX } from 'react'

interface TextNode {
  text: string
  bold?: boolean
  italic?: boolean
  underline?: boolean
  code?: boolean
}

interface ElementNode {
  type: string
  children: (TextNode | ElementNode)[]
  tag?: string
  format?: string
  indent?: number
  version?: number
}

interface RichTextContent {
  root: {
    children: ElementNode[]
    direction: string
    format: string
    indent: number
    type: string
    version: number
  }
}

function renderTextNode(node: TextNode, index: number): JSX.Element {
  let content: JSX.Element = <span key={index}>{node.text}</span>

  if (node.bold) {
    content = <strong key={index}>{content}</strong>
  }
  if (node.italic) {
    content = <em key={index}>{content}</em>
  }
  if (node.underline) {
    content = <u key={index}>{content}</u>
  }
  if (node.code) {
    content = <code key={index} className="bg-gray-100 px-1 py-0.5 rounded text-sm">{content}</code>
  }

  return content
}

function renderElementNode(node: ElementNode, index: number): JSX.Element {
  const children = node.children?.map((child, childIndex) => {
    if ('text' in child) {
      return renderTextNode(child, childIndex)
    }
    return renderElementNode(child, childIndex)
  })

  switch (node.type) {
    case 'paragraph':
      return <p key={index} className="mb-4 leading-relaxed">{children}</p>

    case 'heading':
      const HeadingTag = (node.tag as keyof JSX.IntrinsicElements) || 'h2'
      const headingClasses = {
        h1: 'text-3xl font-bold mb-6 mt-8',
        h2: 'text-2xl font-bold mb-4 mt-6',
        h3: 'text-xl font-bold mb-3 mt-5',
        h4: 'text-lg font-bold mb-2 mt-4',
        h5: 'text-base font-bold mb-2 mt-3',
        h6: 'text-sm font-bold mb-2 mt-2',
      }
      return (
        <HeadingTag key={index} className={headingClasses[HeadingTag] || headingClasses.h2}>
          {children}
        </HeadingTag>
      )

    case 'quote':
      return (
        <blockquote key={index} className="border-l-4 border-gray-300 pl-4 italic my-6 text-gray-700">
          {children}
        </blockquote>
      )

    case 'list':
      const ListTag = node.tag === 'ol' ? 'ol' : 'ul'
      const listClass = ListTag === 'ol' ? 'list-decimal' : 'list-disc'
      return (
        <ListTag key={index} className={`${listClass} list-inside mb-4 space-y-2`}>
          {children}
        </ListTag>
      )

    case 'listitem':
      return <li key={index}>{children}</li>

    case 'link':
      return (
        <a
          key={index}
          href={(node as any).url || '#'}
          className="text-blue-600 hover:text-blue-800 underline"
          target={(node as any).newTab ? '_blank' : undefined}
          rel={(node as any).newTab ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      )

    case 'linebreak':
      return <br key={index} />

    case 'horizontalrule':
      return <hr key={index} className="my-8 border-gray-300" />

    default:
      return <div key={index}>{children}</div>
  }
}

export function RichTextRenderer({ content }: { content: RichTextContent | string }) {
  if (typeof content === 'string') {
    return <div dangerouslySetInnerHTML={{ __html: content }} />
  }

  if (!content?.root?.children) {
    return <div>No content available</div>
  }

  return (
    <div className="prose prose-lg max-w-none">
      {content.root.children.map((node, index) => renderElementNode(node, index))}
    </div>
  )
}