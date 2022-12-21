// @ts-check
// This script takes raw Markdown content as input and adds
// anchor links in the form of <a id="toc"></a> above each heading.

import { getInput, setOutput, setFailed } from '@actions/core'

// We export the `run` function for testing
// Call `run()` directly if this file is the entry point

// If this file is being run directly
if (import.meta.url.endsWith(process.argv[1])) {
  const markdownContent = getInput('content')

  setOutput(
    'content',
    await run(markdownContent).catch((error) => {
      setFailed(error)
    })
  )
}

/**
 * Adds anchor links to the line above each heading in the given Markdown content
 * @param {string} markdownContent
 */
export async function run(markdownContent) {
  // If no Markdown content is provided, throw an error
  if (!markdownContent) {
    const noMarkdownContent = new Error('No Markdown content was provided')
    throw noMarkdownContent
  }

  return markdownContent.replace(
    // Match Markdown headings H2-H6 that are not already preceded by an anchor link
    /^(?<!<a id=".+"><\/a>\n+)(#{2,6})\s(.+)/gm,
    (heading, syntax, title) => {
      // Convert the heading title to a lowercase string,
      // replacing any non-alphanumeric characters with a hyphen
      const anchorID = title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      // Put the anchor link followed by a blank line above the heading
      return `<a id="${anchorID}"></a>\n\n${heading}`
    }
  )
}
