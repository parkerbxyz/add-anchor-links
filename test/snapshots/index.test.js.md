# Snapshot report for `add-anchor-links/test/index.test.js`

The actual snapshot is saved in `index.test.js.snap`.

Generated by [AVA](https://avajs.dev).

## Anchor links are added above the expected Markdown headings

> Snapshot 1

    `␊
    # Title␊
    ␊
    Titles should not get anchor links.␊
    ␊
    <a id="heading-2"></a>␊
    ␊
    ## Heading 2␊
    ␊
    Paragraph 2␊
    ␊
    <a id="heading-three-"></a>␊
    ␊
    ### Heading :three:␊
    ␊
    Paragraph 3␊
    ␊
    <a id="heading-4-"></a>␊
    ␊
    #### Heading 4 🍀␊
    ␊
    Paragraph 4␊
    ␊
    <a id="-heading-5"></a>␊
    ␊
    ##### ✋ Heading 5␊
    ␊
    Paragraph 5␊
    ␊
    <a id="heading-6"></a>␊
    ␊
    ###### Heading 6␊
    ␊
    An anchor link is already present above this heading, so a new anchor link should not be added.␊
    ␊
    ####### Heading 7␊
    ␊
    This heading should not get an anchor link, because anchor links are only added to H2-H6 headings.␊
    `
