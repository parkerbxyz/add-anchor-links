import test from 'ava'
import { run } from '../index.js'

const markdownContent = `
# Title

Titles should not get anchor links.

## Heading 2

Paragraph 2

### Heading :three:

Paragraph 3

#### Heading 4 🍀

Paragraph 4

##### ✋ Heading 5

Paragraph 5

<a id="heading-6"></a>

###### Heading 6

An anchor link is already present above this heading, so a new anchor link should not be added.

####### Heading 7

This heading should not get an anchor link, because anchor links are only added to H2-H6 headings.
`

test('Anchor links are added above the expected Markdown headings', async (t) => {
  t.snapshot(await run(markdownContent))
})

test('An error is thrown if no Markdown content is provided', async (t) => {
  await t.throwsAsync(run())
})
