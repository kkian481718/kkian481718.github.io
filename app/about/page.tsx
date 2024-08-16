import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author1 = allAuthors.find((p) => p.slug === 'default') as Authors
  const author2 = allAuthors.find((p) => p.slug === 'ivy') as Authors
  const mainContent1 = coreContent(author1)
  const mainContent2 = coreContent(author2)

  return (
    <>
      <AuthorLayout content={mainContent1}>
        <MDXLayoutRenderer code={author1.body.code} />
      </AuthorLayout>
      <AuthorLayout content={mainContent2}>
        <MDXLayoutRenderer code={author2.body.code} />
      </AuthorLayout>
    </>
  )
}
