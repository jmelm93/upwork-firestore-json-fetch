import toolInfo from "../JsonData/tool_info.json";

export const HOME = '/';

export const SOURCES = [
  {
    title: 'Opportunity Analysis',
    link: 'opportunity',
    type: 'Strategy Types',
    description: 'Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii.',
    subLinks: [
      {
        title: `${toolInfo.competitiveKeyword[0]["pageName"]}`,
        link: `${toolInfo.competitiveKeyword[0]["link"]}`,
        description: `${toolInfo.competitiveKeyword[0]["shortDescription"]}`,
        req_list: [
          {
            requirement: "SEMRush"
          },
        ],
      },
      {
        title: `${toolInfo.gscSemrushMerged[0]["pageName"]}`,
        link: `${toolInfo.gscSemrushMerged[0]["link"]}`,
        description: `${toolInfo.gscSemrushMerged[0]["shortDescription"]}`,
        req_list: [
          {
            requirement: "SEMRush"
          },{ 
            requirement: "GSC"
          }
        ],
      },
      {
        title: `${toolInfo.gscQueryChecker[0]["pageName"]}`,
        link: `${toolInfo.gscQueryChecker[0]["link"]}`,
        description: `${toolInfo.gscQueryChecker[0]["shortDescription"]}`,
        req_list: [
          { 
            requirement: "GSC"
          }
        ],
      },
    ],
  },
  {
    title: 'Change Analysis',
    description: 'Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii.',
    link: 'change',
    subLinks: [
      {
        title: `${toolInfo.keywordChange[0]["pageName"]}`,
        link: `${toolInfo.keywordChange[0]["link"]}`,
        description: `${toolInfo.keywordChange[0]["shortDescription"]}`,
        req_list: [
          {
            requirement: "SEMRush"
          },
        ],
      },
    ]
  },
  {
    title: 'Categorization',
    link: 'categorization',
    description: 'Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii.',
    subLinks: [
      {
        title: `${toolInfo.urlGroupings[0]["pageName"]}`,
        link: `${toolInfo.urlGroupings[0]["link"]}`,
        description: `${toolInfo.urlGroupings[0]["shortDescription"]}`,
        req_list: [
          {
            requirement: "SEMRush"
          },
        ],
      },
    ]
  },
  {
    title: 'Data Extract',
    link: 'data-extract',
    description: 'Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii.',
    icon: 'cloud-download-alt',
    subLinks: [      
      {
      title: 'Custom Extraction Helper',
      link: 'custom-extraction-helper',
      description: "AHiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii.",
      req_list: [
        {
          requirement: "None"
        },
      ],
      apiUrl: 'h'
    },      
   ]
  },
]
