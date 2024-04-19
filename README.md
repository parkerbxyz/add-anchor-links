# Add Anchor Links

This GitHub Action adds anchor links to Markdown headings. This can be useful for linking to specific headings within a GitHub issue or discussion.

## Example usage

### Reusable workflow

```yaml
name: Render issue template from liquid file

on:
  workflow_call:
    inputs:
      file:
        description: 'The path to the liquid file to render'
        required: true
        type: string
    outputs:
      rendered-content:
        description: 'The rendered content of the liquid file'
        value: ${{ jobs.render-template.outputs.rendered-content }}

jobs:
  render-template:
    runs-on: ubuntu-latest
    outputs:
      rendered-content: ${{ steps.add-anchor-links.outputs.content }}
    steps:
      - uses: actions/checkout@v4
      - id: render-liquid-file
        uses: parkerbxyz/render-liquid-file@v1
        with:
          extname: .md.liquid
          root: templates
          layouts: templates/layouts
          partials: templates/partials
          file: ${{ inputs.file }}

      # Anchor links are not currently supported in issues
      # like they are in Markdown files, so we need to add them manually.
      - name: Add anchor links
        id: add-anchor-links
        uses: parkerbxyz/add-anchor-links@v1
        with:
          content: ${{ steps.render-liquid-file.outputs.rendered-content }}
```

## Inputs

### `content`

The raw Markdown content without anchor links.

## Outputs

### `content`

The Markdown content with anchor links added.
