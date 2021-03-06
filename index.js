module.exports = {
    "rules": {
        "at-rule-empty-line-before": [
            "always",
            {
                "except": [
                    "inside-block"
                ]
            }
        ],
        "at-rule-name-case": "lower",
        "at-rule-no-unknown": null,
        "block-closing-brace-empty-line-before": "never",
        "block-closing-brace-newline-after": "always",
        "block-closing-brace-newline-before": "always",
        "block-closing-brace-space-after": "always-single-line",
        "block-closing-brace-space-before": "always-single-line",
        "block-opening-brace-newline-after": "always",
        "block-opening-brace-newline-before": "always",
        "block-opening-brace-space-after": "always-single-line",
        "block-opening-brace-space-before": "always",
        "color-hex-case": "lower",
        "color-hex-length": "long",
        "declaration-bang-space-after": "never",
        "declaration-bang-space-before": "always",
        "declaration-block-semicolon-newline-after": "always",
        "declaration-block-semicolon-newline-before": "never-multi-line",
        "declaration-block-semicolon-space-after": "always-single-line",
        "declaration-block-semicolon-space-before": "never",
        "declaration-block-trailing-semicolon": "always",
        "declaration-colon-newline-after": "always-multi-line",
        "declaration-colon-space-after": "always-single-line",
        "declaration-colon-space-before": "never",
        "declaration-empty-line-before": "never",
        "function-name-case": "lower",
        "indentation": 4,
        "linebreaks": "unix",
        "max-empty-lines": [
            2,
            {
                "ignore": [
                    "comments"
                ]
            }
        ],
        "media-feature-name-case": "lower",
        "no-descending-specificity": null,
        "no-empty-first-line": true,
        "no-missing-end-of-source-newline": true,
        "order/order": [
            "declarations",
            {
                "name": "media",
                "type": "at-rule"
            },
            {
                "selector": "^&::(before|after)",
                "type": "rule"
            },
            {
                "selector": "^&:\\w",
                "type": "rule"
            },
            {
                "selector": "^&_",
                "type": "rule"
            },
            {
                "selector": "^.",
                "type": "rule"
            }
        ],
        "order/properties-order": [
            [
                "align-content",
                "align-items",
                "align-self",
                "animation-delay",
                "animation-direction",
                "animation-duration",
                "animation-iteration-count",
                "animation-name",
                "animation-play-state",
                "animation-timing-function",
                "animation",
                "background-attachment",
                "background-clip",
                "background-color",
                "background-image",
                "background-origin",
                "background-position-x",
                "background-position-y",
                "background-position",
                "background-repeat",
                "background-size",
                "background",
                "border-bottom-color",
                "border-bottom-left-radius",
                "border-bottom-right-radius",
                "border-bottom-style",
                "border-bottom-width",
                "border-bottom",
                "border-collapse",
                "border-collapse",
                "border-color",
                "border-image-outset",
                "border-image-repeat",
                "border-image-slice",
                "border-image-source",
                "border-image-width",
                "border-image",
                "border-left-color",
                "border-left-style",
                "border-left-width",
                "border-left",
                "border-radius",
                "border-right-color",
                "border-right-style",
                "border-right-width",
                "border-right",
                "border-spacing",
                "border-style",
                "border-top-color",
                "border-top-left-radius",
                "border-top-right-radius",
                "border-top-style",
                "border-top-width",
                "border-top",
                "border-width",
                "border",
                "bottom",
                "box-decoration-break",
                "box-shadow",
                "box-sizing",
                "caption-side",
                "clear",
                "clip",
                "color",
                "content",
                "counter-increment",
                "counter-reset",
                "cursor",
                "display",
                "empty-cells",
                "filter:progid:DXImageTransform.Microsoft.Alpha(Opacity",
                "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader",
                "filter:progid:DXImageTransform.Microsoft.gradient",
                "flex-basis",
                "flex-direction",
                "flex-flow",
                "flex-grow",
                "flex-shrink",
                "flex-wrap",
                "flex",
                "float",
                "font-effect",
                "font-emphasize-position",
                "font-emphasize-style",
                "font-emphasize",
                "font-family",
                "font-size-adjust",
                "font-size",
                "font-smooth",
                "font-stretch",
                "font-style",
                "font-variant",
                "font-weight",
                "font",
                "height",
                "hyphens",
                "justify-content",
                "left",
                "letter-spacing",
                "line-height",
                "list-style-image",
                "list-style-position",
                "list-style-type",
                "list-style",
                "margin-bottom",
                "margin-left",
                "margin-right",
                "margin-top",
                "margin",
                "max-height",
                "max-width",
                "min-height",
                "min-width",
                "nav-down",
                "nav-index",
                "nav-left",
                "nav-right",
                "nav-up",
                "opacity",
                "order",
                "outline-color",
                "outline-offset",
                "outline-style",
                "outline-width",
                "outline",
                "overflow-x",
                "overflow-y",
                "overflow",
                "padding-bottom",
                "padding-left",
                "padding-right",
                "padding-top",
                "padding",
                "pointer-events",
                "position",
                "quotes",
                "resize",
                "right",
                "tab-size",
                "table-layout",
                "text-align-last",
                "text-align",
                "text-decoration",
                "text-emphasis-color",
                "text-emphasis-position",
                "text-emphasis-style",
                "text-emphasis",
                "text-indent",
                "text-justify",
                "text-outline",
                "text-overflow-ellipsis",
                "text-overflow-mode",
                "text-overflow",
                "text-shadow",
                "text-transform",
                "text-transform",
                "text-wrap",
                "top",
                "transform-origin",
                "transform",
                "transition-delay",
                "transition-duration",
                "transition-property",
                "transition-timing-function",
                "transition",
                "user-select",
                "vertical-align",
                "visibility",
                "white-space",
                "width",
                "word-break",
                "word-spacing",
                "word-wrap",
                "z-index",
                "zoom",
                "-moz-animation-delay",
                "-moz-animation-direction",
                "-moz-animation-duration",
                "-moz-animation-iteration-count",
                "-moz-animation-name",
                "-moz-animation-play-state",
                "-moz-animation-timing-function",
                "-moz-animation",
                "-moz-background-clip",
                "-moz-background-size",
                "-moz-border-image-outset",
                "-moz-border-image-repeat",
                "-moz-border-image-slice",
                "-moz-border-image-source",
                "-moz-border-image-width",
                "-moz-border-image",
                "-moz-border-radius-bottomleft",
                "-moz-border-radius-bottomright",
                "-moz-border-radius-topleft",
                "-moz-border-radius-topright",
                "-moz-border-radius",
                "-moz-box-align",
                "-moz-box-direction",
                "-moz-box-flex",
                "-moz-box-ordinal-group",
                "-moz-box-orient",
                "-moz-box-pack",
                "-moz-box-shadow",
                "-moz-box-sizing",
                "-moz-hyphens",
                "-moz-tab-size",
                "-moz-text-align-last",
                "-moz-transform-origin",
                "-moz-transform",
                "-moz-transition-delay",
                "-moz-transition-duration",
                "-moz-transition-property",
                "-moz-transition-timing-function",
                "-moz-transition",
                "-moz-user-select",
                "-ms-animation-delay",
                "-ms-animation-direction",
                "-ms-animation-duration",
                "-ms-animation-iteration-count",
                "-ms-animation-name",
                "-ms-animation-play-state",
                "-ms-animation-timing-function",
                "-ms-animation",
                "-ms-background-position-x",
                "-ms-background-position-y",
                "-ms-filter:\\'progid:DXImageTransform.Microsoft.Alpha",
                "-ms-filter:\\'progid:DXImageTransform.Microsoft.gradient",
                "-ms-flex-align",
                "-ms-flex-direction",
                "-ms-flex-flow",
                "-ms-flex-item-align",
                "-ms-flex-line-pack",
                "-ms-flex-negative",
                "-ms-flex-order",
                "-ms-flex-pack",
                "-ms-flex-positive",
                "-ms-flex-preferred-size",
                "-ms-flex-wrap",
                "-ms-flex",
                "-ms-grid-row-align",
                "-ms-interpolation-mode",
                "-ms-overflow-x",
                "-ms-overflow-y",
                "-ms-text-align-last",
                "-ms-text-justify",
                "-ms-text-overflow",
                "-ms-transform-origin",
                "-ms-transform",
                "-ms-transition-delay",
                "-ms-transition-duration",
                "-ms-transition-property",
                "-ms-transition-timing-function",
                "-ms-transition",
                "-ms-user-select",
                "-ms-word-break",
                "-ms-word-wrap",
                "-ms-writing-mode",
                "-o-animation-delay",
                "-o-animation-direction",
                "-o-animation-duration",
                "-o-animation-iteration-count",
                "-o-animation-name",
                "-o-animation-play-state",
                "-o-animation-timing-function",
                "-o-animation",
                "-o-background-size",
                "-o-border-image-outset",
                "-o-border-image-repeat",
                "-o-border-image-slice",
                "-o-border-image-source",
                "-o-border-image-width",
                "-o-border-image",
                "-o-tab-size",
                "-o-transform-origin",
                "-o-transform",
                "-o-transition-delay",
                "-o-transition-duration",
                "-o-transition-property",
                "-o-transition-timing-function",
                "-o-transition",
                "-webkit-align-content",
                "-webkit-align-items",
                "-webkit-align-self",
                "-webkit-animation-delay",
                "-webkit-animation-direction",
                "-webkit-animation-duration",
                "-webkit-animation-iteration-count",
                "-webkit-animation-name",
                "-webkit-animation-play-state",
                "-webkit-animation-timing-function",
                "-webkit-animation",
                "-webkit-background-clip",
                "-webkit-background-size",
                "-webkit-border-bottom-left-radius",
                "-webkit-border-bottom-right-radius",
                "-webkit-border-image-outset",
                "-webkit-border-image-repeat",
                "-webkit-border-image-slice",
                "-webkit-border-image-source",
                "-webkit-border-image-width",
                "-webkit-border-image",
                "-webkit-border-radius",
                "-webkit-border-top-left-radius",
                "-webkit-border-top-right-radius",
                "-webkit-box-align",
                "-webkit-box-direction",
                "-webkit-box-flex",
                "-webkit-box-ordinal-group",
                "-webkit-box-orient",
                "-webkit-box-pack",
                "-webkit-box-shadow",
                "-webkit-box-sizing",
                "-webkit-flex-basis",
                "-webkit-flex-direction",
                "-webkit-flex-flow",
                "-webkit-flex-grow",
                "-webkit-flex-shrink",
                "-webkit-flex-wrap",
                "-webkit-flex",
                "-webkit-hyphens",
                "-webkit-justify-content",
                "-webkit-order",
                "-webkit-overflow-scrolling",
                "-webkit-text-align-last",
                "-webkit-transform-origin",
                "-webkit-transform",
                "-webkit-transition-delay",
                "-webkit-transition-duration",
                "-webkit-transition-property",
                "-webkit-transition-timing-function",
                "-webkit-transition",
                "-webkit-user-select"
            ],
            {
                "unspecified": "bottom"
            }
        ],
        "property-case": "lower",
        "rule-empty-line-before": "always-multi-line",
        "selector-attribute-brackets-space-inside": "always",
        "selector-attribute-operator-space-after": "always",
        "selector-attribute-operator-space-before": "always",
        "selector-attribute-quotes": "always",
        "selector-combinator-space-after": "always",
        "selector-combinator-space-before": "always",
        "selector-descendant-combinator-no-non-space": true,
        "selector-list-comma-newline-after": "always",
        "selector-list-comma-newline-before": "never-multi-line",
        "selector-list-comma-space-after": "always-single-line",
        "selector-list-comma-space-before": "never",
        "selector-pseudo-class-case": "lower",
        "selector-pseudo-class-parentheses-space-inside": "always",
        "selector-pseudo-element-case": "lower",
        "selector-pseudo-element-colon-notation": "double",
        "selector-type-case": "lower",
        "unit-case": "lower",
        "value-keyword-case": "lower"
    }
}
