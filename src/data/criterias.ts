type Criterias = {
  name: string,
  level: 'A' | 'AA' | 'AAA',
  reference: string
}

type GuideLines = {
  name: string,
  criterias: Criterias[]
}

type WCAG = {
  name: string,
  guideLines: GuideLines[]
}

export const WCAG: WCAG[] = [
  {
    name: "Perceivable",
    guideLines: [
      {
        name: 'Guideline 1.1 – Text Alternatives',
        criterias: [
          {
            name: '1.1.1 Non-text Content',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#non-text-content'
          }
        ]
      },
      {
        name: 'Guideline 1.2 – Time-based media',
        criterias: [
          {
            name: '1.2.1 Audio-only and Video-only (prerecorded)',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#audio-only-and-video-only-prerecorded'
          },
          {
            name: '1.2.2 Captions (Prerecorded)',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#captions-prerecorded'
          },
          {
            name: '1.2.3 Audio Description or Media Alternative (Prerecorded)',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#audio-description-or-media-alternative-prerecorded'
          },
          {
            name: '1.2.4 Captions (live)',
            level: 'AA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#captions-live'
          },
          {
            name: '1.2.5 Audio Description (Prerecorded)',
            level: 'AA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#audio-description-prerecorded'
          },
          {
            name: '1.2.6 Sign Language (Prerecorded)',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#sign-language-prerecorded'
          },
          {
            name: '1.2.7 Extended Audio Description (Prerecorded)',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#extended-audio-description-prerecorded'
          },
          {
            name: '1.2.8 Media Alternative (Prerecorded)',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#media-alternative-prerecorded'
          },
          {
            name: '1.2.9 Audio-only (live)',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#audio-only-live'
          }
        ]
      },
      {
        name: 'Guideline 1.3 – Adaptable',
        criterias: [
          {
            name: '1.3.1 Info and Relationship',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationshipsd'
          },
          {
            name: '1.3.2 Meaningful sequence',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#meaningful-sequence'
          },
          {
            name: '1.3.3 Sensory characteristics',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#sensory-characteristics'
          },
          {
            name: '1.3.4 Orientation',
            level: 'AA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#orientation'
          },
          {
            name: '1.3.5 Identify Input Purpose',
            level: 'AA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#identify-input-purpose'
          },
          {
            name: '1.3.6 Identify Purpose',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#identify-purpose'
          }
        ]
      },
      {
        name: 'Guideline 1.4 – Distinguishable',
        criterias: [
          {
            name: '1.4.1 Use of color',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#use-of-color'
          },
          {
            name: '1.4.2 Audio Control',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#audio-control'
          },
          {
            name: '1.4.3 Contrast (minimum)',
            level: 'AA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#contrast-minimum'
          },
          {
            name: '1.4.4 Resize text',
            level: 'AA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#resize-text'
          },
          {
            name: '1.4.5 Images of Text',
            level: 'AA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#images-of-text'
          },
          {
            name: '1.4.6 Contrast (Enhanced)',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#contrast-enhanced'
          },
          {
            name: '1.4.7 Low or No Background Audio',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#low-or-no-background-audio'
          },
          {
            name: '1.4.8 Visual Presentation',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#visual-presentation'
          },
          {
            name: '1.4.9 Images of Text (no exception)',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#images-of-text-no-exception'
          },
          {
            name: '1.4.10 Reflow',
            level: 'AA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#reflow'
          },
          {
            name: '1.4.11 Non-text Contrast',
            level: 'AA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#non-text-contrast'
          },
          {
            name: '1.4.12 Text Spacing',
            level: 'AA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#text-spacing'
          },
          {
            name: '1.4.13 Content on Hover or Focus',
            level: 'AA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#content-on-hover-or-focus'
          }
        ]
      }
    ]
  },
  {
    name: "Operable",
    guideLines: [
      {
        name: 'Guideline 2.1 – Keyboard Accessible',
        criterias: [
          {
            name: '2.1.1 Keyboard',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#keyboard'
          },
          {
            name: '2.1.2 No Keyboard Trap',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#no-keyboard-trap'
          },
          {
            name: '2.1.3 Keyboard (No Exception)',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#keyboard-no-exception'
          },
          {
            name: '2.1.4 Character Key Shortcuts',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#character-key-shortcuts'
          }
        ]
      },
      {
        name: 'Guideline 2.2 – Enough Time',
        criterias: [
          {
            name: '2.2.1 Timing Adjustable',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#timing-adjustable'
          },
          {
            name: '2.2.2 Pause, Stop, Hide',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#pause-stop-hide'
          },
          {
            name: '2.2.3 No Timing',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#no-timing'
          },
          {
            name: '2.2.4 Interruptions',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#interruptions'
          },
          {
            name: '2.2.5 Re-Authenticating',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#re-authenticating'
          },
          {
            name: '2.2.6 Timeouts',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#timeouts'
          }
        ]
      },
      {
        name: 'Guideline 2.3 – Seizures and Physical Reactions',
        criterias: [
          {
            name: '2.3.1 Three Flashes or Below Treshold',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#three-flashes-or-below-threshold'
          },
          {
            name: '2.3.2 Three Flashes',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#three-flashes'
          },
          {
            name: '2.3.3 Animation from Interactions',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#animation-from-interactions'
          }
        ]
      },
      {
        name: 'Guideline 2.4 – Navigable',
        criterias: [
          {
            name: '2.4.1 Bypass Blocks',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#bypass-blocks'
          },
          {
            name: '2.4.2 Page Titled',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#page-titled'
          },
          {
            name: '2.4.3 Focus Order',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#focus-order'
          },
          {
            name: '2.4.4 Link Purpose (In Context)',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#link-purpose-in-context'
          },
          {
            name: '2.4.5 Multiple Ways',
            level: 'AA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#multiple-ways'
          },
          {
            name: '2.4.6 Headings and Labels',
            level: 'AA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#headings-and-labels'
          },
          {
            name: '2.4.7 Focus Visbible',
            level: 'AA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#focus-visible'
          },
          {
            name: '2.4.8 Location',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#location'
          },
          {
            name: '2.4.9 Link Purpose (Link-only)',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#link-purpose-link-only'
          },
          {
            name: '2.4.10 Section Headings',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#section-headings'
          },
          {
            name: '2.4.11 Focus not Obscured (Minium)',
            level: 'AA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#focus-not-obscured-minimum'
          },
          {
            name: '2.4.12 Focus not Obscured (Enhanced)',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#focus-not-obscured-enhanced'
          },
          {
            name: '2.4.13 Focus Appearance',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#focus-appearance'
          }
        ]
      },
      {
        name: 'Guideline 2.5 – Input Modalities',
        criterias: [
          {
            name: '2.5.1 Pointer Gestures',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#pointer-gestures'
          },
          {
            name: '2.5.2 Pointer Cancellation',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#pointer-cancellation'
          },
          {
            name: '2.5.3 Label in Name',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#label-in-name'
          },
          {
            name: '2.5.4 Motion Actuation',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#motion-actuation'
          },
          {
            name: '2.5.5 Target Site (Enhanced)',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#target-size-enhanced'
          },
          {
            name: '2.5.6 Concurrent Input Mechanisms',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#concurrent-input-mechanisms'
          },
          {
            name: '2.5.7 Dragging Movements',
            level: 'AA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#dragging-movements'
          },
          {
            name: '2.5.8 Target Size (Minimum)',
            level: 'AA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#target-size-minimum'
          }
        ]
      }
    ]
  },
  {
    name: "Understandable",
    guideLines: [
      {
        name: 'Guideline 3.1 – Readable',
        criterias: [
          {
            name: '3.1.1 Language of Page',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#language-of-page'
          },
          {
            name: '3.1.2 Language of Parts',
            level: 'AA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#language-of-parts'
          },
          {
            name: '3.1.3 Unusual Words',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#unusual-words'
          },
          {
            name: '3.1.4 Abbreviations',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#abbreviations'
          },
          {
            name: '3.1.5 Reading Level',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#reading-level'
          },
          {
            name: '3.1.6 Pronunciation',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#pronunciation'
          }
        ]
      },
      {
        name: 'Guideline 3.2 – Predictable',
        criterias: [
          {
            name: '3.2.1 On Focus',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#on-focus'
          },
          {
            name: '3.2.2 On Input',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#on-input'
          },
          {
            name: '3.2.3 Consistent Navigation',
            level: 'AA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#consistent-navigation'
          },
          {
            name: '3.2.4 Consistent Identification',
            level: 'AA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#consistent-identification'
          },
          {
            name: '3.2.5 Change on Request',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#change-on-request'
          },
          {
            name: '3.2.6 Consistent Help',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#consistent-help'
          }
        ]
      },
      {
        name: 'Guideline 3.3 – Input Assistance',
        criterias: [
          {
            name: '3.3.1 Error Identification',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#error-identification'
          },
          {
            name: '3.3.2 Labels or Instructions',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions'
          },
          {
            name: '3.3.3 Error Suggestion',
            level: 'AA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#error-suggestion'
          },
          {
            name: '3.3.4 Error Prevention (Legal, Financial, Data)',
            level: 'AA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#error-prevention-legal-financial-data'
          },
          {
            name: '3.3.5 Help',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#help'
          },
          {
            name: '3.3.6 Error Prevention (all)',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#error-prevention-all'
          },
          {
            name: '3.3.7 Redundant Entry',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#redundant-entry'
          },
          {
            name: '3.3.8 Accessible Authentication (Minimum)',
            level: 'AA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#accessible-authentication-minimum'
          },
          {
            name: '3.3.9 Accessible Authentication (Enhanced)',
            level: 'AAA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#accessible-authentication-enhanced'
          }
        ]
      }
    ]
  },
  {
    name: "Robust",
    guideLines: [
      {
        name: 'Guideline 4.1 – Compatible',
        criterias: [
          {
            name: '4.1.2 Name, Role, Value',
            level: 'A',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#name-role-value'
          },
          {
            name: '4.1.3 Status Messages',
            level: 'AA',
            reference: 'https://www.w3.org/WAI/WCAG22/quickref/#status-messages'
          }
        ]
      }
    ]
  }
]
