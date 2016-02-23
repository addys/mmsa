var companySection = 
{
  'id':'1',
  'title':'Company',
  'questions': 
  [
    { 'id': '1.1',
      'title':'Talent',
      'subtitle':'Do we have the necessary key players?',
       'options': 
       [
         {'number': 1, 'text': 'Team has skills and experience in all areas required for generating the MVP:  problem domain expertise, related technologies, relevant business verticals'},
         {'number': 2, 'text': 'Team is more than 2 people; everyone has a well-defined job title;  roles & responsibilities are clear'},
         {'number': 3, 'text': 'Team has skills and experience in all areas relevant to real-world product development: software or hardware dev, testing, UX development.  Team has some of the skills necessary for business success (including sales, marketing, supply chain, Devops, support, legal,HR,etc). '},
         {'number': 4, 'text': 'Team knows how the HR is going to look like a year from now and already have relevant personal for business success.'},
         {'number': 5, 'text': 'Team has skills and experience in all areas necessary for business success (including sales, marketing, supply chain, Devops, support, legal, HR, etc).  '}
       ]
    },
    
    { 'id': '1.2',
      'title':'Finances',
      'subtitle':'Are we able to responsibly manage our money?',
       'options': 
       [
         {'number': 1, 'text': 'Company is legally registered and has a bank account, preferably not empty.  Rough fiscal planning documents in use. '},
         {'number': 2, 'text': 'Between 1 & 3'},
         {'number': 3, 'text': 'Bank Account and Credit Cards with agreed-on policies for use. CFO or accountant (at least shared or part-time). Company has recieved fanancial guidance regarding taxes, options and incentives.'},
         {'number': 4, 'text': 'Between 3 & 5'},
         {'number': 5, 'text': 'Periodic reviews of actual spending vs plan (plan described in ‎2.6), CFO and accountant'}
       ]
    },
    
    { 'id': '1.3',
      'title':'Hiring',
      'subtitle':'Will we be able to scale up our team?',
       'options': 
       [
         {'number': 1, 'text': 'Recruiting through friends & connections.  Hiring process is ad-hoc.'},
         {'number': 2, 'text': 'Employess are signed on  agreements define hiring policy and process'},
         {'number': 3, 'text': 'Legal requirements are known/followed.  The hiring & onboarding (new hire ramp-up) is predictable/repeatable enough to not cause major interruptions.  '},
         {'number': 4, 'text': 'Have an on-boarding plan for new employees;  Specific HR role defined, possibly part-time; clear compensation structure and ESOP allocation structure'},
         {'number': 5, 'text': 'Established recruiting process & pipeline. Policies defining the work culture and environment exist and cover topics such as new hire equipment & training, job perks/benefits, etc.  Legal requirements are known and followed.'}
       ]
    },
    
    { 'id': '1.4',
      'title':'Back-Office',
      'subtitle':'Do we have the backend tools for running a company?',
       'options': 
       [
         {'number': 1, 'text': 'Company documents are stored locally (laptops) and shared via email or dropbox.  '},
         {'number': 2, 'text': 'Documents are stored/shared using centralized tools with appropriate permissions.'},
         {'number': 3, 'text': 'Employees own (and use) company-domain email addresses.  Company uses a CRM with appropriate permissions.'},
         {'number': 4, 'text': 'Company documents are searchable and connected to CRM and dashboard is installed'},
         {'number': 5, 'text': 'Document storage with explicit DLP / retention / audit policies; Sensitive documents (such as HR and legal contracts) are secured with RBAC.  Optionally, sensitive documents are stored by 3rd party such as legal firm.'}
       ]
    }
    
  ]
}

var productSection = 
{
  'id':'2',
  'title':'Product',
  'questions': 
  [
    { 'id': '2.1',
      'title':'Competitive Analysis',
      'subtitle':'What is our claim to fame?',
       'options': 
       [
         {'number': 1, 'text': 'Product category has been identified, other notable players in the category are known'},
         {'number': 2, 'text': 'Product category has been identified, team can say in one sentence why they are unlike others'},
         {'number': 3, 'text': 'Initial high-level competitive analysis.  Most or all of the relevant competitors are known well enough to start comparing feature sets.'},
         {'number': 4, 'text': 'Detailed competitive landscape understanding.  Major competitors are well understood including niches, market share & positioning, business models and GTM tactics. Pin-pointed target market.'},
         {'number': 5, 'text': 'Product’s strengths/weaknesses and differentiating factors relative to the competition is known and used in sales & marketing compete situations.'}
       ]
    },
    
    { 'id': '2.2',
      'title':'Marketing',
      'subtitle':'',
       'options': 
       [
         {'number': 1, 'text': 'Initial branding (we have a logo!), website or landing page with basic messaging, one-pager product description'},
         {'number': 2, 'text': 'We have initial branding and are working on creating our brand persona and our differentiation in the market.  Social outreach with more than 50 followers'},
         {'number': 3, 'text': 'A website with branding persona.  Social account with more than 200 followers.  Publishing content at least once a week.'},
         {'number': 4, 'text': 'Fully validated branding & messaging.  Website with detailed product & GTM-specific pricing information.  Case studies and other marketing collateral.'},
         {'number': 5, 'text': 'Semi-automated marketing and lead generating processes exist. Successful PR efforts.  Regular or ongoing marketing campaigns.'}
       ]
    },
    
    { 'id': '2.3',
      'title':'Storytelling',
      'subtitle':'',
       'options': 
       [
         {'number': 1, 'text': 'One multi-purpose slide deck with all relevant information. Story telling is ad hoc depending on audience and available time. Pitching is usually done by the CEO'},
         {'number': 2, 'text': '2 slide decks, one for investors and one from sales pitching is done by CEO and another person in the company'},
         {'number': 3, 'text': 'Story itself has been refined and proven "on stage" multiple times.  Deck fully supports streamlined storytelling. Unnecessary or distracting content has been removed.  Story includes a demoable mockup/prototype.'},
         {'number': 4, 'text': 'Every person in the company can provide the "canonical" description of what the company does in 3 minutes or less; Partners can also tell the story'},
         {'number': 5, 'text': 'Multiple targeted pitches /w relevant supporting materials and specialized demos.  Memorable & refined content. Polished well-rehearsed stories with consistent delivery in both length & quality.'}
       ]
    },
    
    { 'id': '2.4',
      'title':'Go To Market',
      'subtitle':'',
       'options': 
       [
         {'number': 1, 'text': 'Company have an idea who is the customer and is familiar with the target audience (through previous work experience, connections)'},
         {'number': 2, 'text': 'Company has talked with sufficient number of POC’s (for B2B at least 2) to understands the initial sale cycle'},
         {'number': 3, 'text': 'Initial GTM strategy: Company has identified 2-3 channels for distribution with key KPIs to measure success, has early progress in each channel.'},
         {'number': 4, 'text': 'Between 3 & 5'},
         {'number': 5, 'text': 'Fully fleshed-out GTM strategy inc. audience mapping and analysis, target market, distribution channels and validation'}
       ]
    },
    { 'id': '2.5',
      'title':'Business Model',
      'subtitle':' (B2B specific)',
       'options': 
       [
         {'number': 1, 'text': 'Early thinking about business model. Vague pricing, not yet validated with customers.'},
         {'number': 2, 'text': 'Clear understanding of price point ranges and unit value;  Paid POC with customer'},
         {'number': 3, 'text': 'Business negotiations with customers (based on unit value, but initial sample size) to validate pricing and sales cycle; PO from a customer and at least two more in the pipeline'},
         {'number': 4, 'text': 'Business model includes COGS, Revenue streams; SLA/SLO targets understood'},
         {'number': 5, 'text': 'Proven and predictable business model and revenue stream. Clear identification of the sales cycle.  For B2B: Healthy pipeline of leads.'}
       ]
    },    
   
    { 'id': '2.6',
      'title':'Financial Planning',
      'subtitle':'Do we have the backend tools for running a company?',
       'options': 
       [
         {'number': 1, 'text': 'Rough excel with high level budget for 6 months or less, tracked unregularly, no clear forecast.'},
         {'number': 2, 'text': 'Excel with R&D and S&M expenses for the upcoming 18 months'},
         {'number': 3, 'text': 'Excel with R&D, S&M and G&A for the upcoming 18 months, updated monthly and revenue model as part of the excel'},
         {'number': 4, 'text': 'A full P&L for 18 months reviewed monthly by CEO and CFO'},
         {'number': 5, 'text': 'Clear expense forecast and revenue forecast inc. burn rate for 18 months, tracking on monthly basis. Auditing and approved by BOD.'}
       ]
    }
    
  ]
}


var techSection = 
{
  'id':'3',
  'title':'Tech',
  'questions': 
  [
    { 'id': '3.1',
      'title':'Crawl, Walk, Run',
      'subtitle':'How far along are we in development?',
       'options': 
       [
         {'number': 1, 'text': 'Prototype.  algorithm or UX mockup; code is mostly throwaway;  no performance/scale/maintainability considerations'},
         {'number': 2, 'text': 'Between 1 and 3'},
         {'number': 3, 'text': 'MVP.  "Good enough" for initial customer exposure.  Scale, maintainability, cost-effectiveness all still WIP'},
         {'number': 4, 'text': 'Between 3 and 5'},
         {'number': 5, 'text': 'Production-ready:  fully functional, scalable, secure, maintainable. '}
       ]
    },
    
    { 'id': '3.2',
      'title':'Development Methodology',
      'subtitle':'Do we have a repeatable process for creating software?',
       'options': 
       [
         {'number': 1, 'text': 'No specific methodology (Team\'s schedule and deliverables determined ad-hoc) OR methodology has been chosen but not yet implemented successfully (and is generating more overhead than value)'},
         {'number': 2, 'text': 'Between 1 and 3'},
         {'number': 3, 'text': 'Team has adopted a methodology and is using it day-to-day.  At least one team member has skill/experience with it.  Most tenets are being followed.  Methodology is either starting to prove value or at least is no longer hindering the dev process'},
         {'number': 4, 'text': 'Between 3 and 5'},
         {'number': 5, 'text': 'Methodology is providing clear value.  All tenets are well understood and followed. Members understand their roles & responsibilities in the team.  Management software in use to support the chosen methodology.'}
       ]
    },
    
    { 'id': '3.3',
      'title':'Code Quality',
      'subtitle':'How are we ensuring quality?',
       'options': 
       [
         {'number': 1, 'text': 'Quality of the product is not well known or tracked. Bugs or regressions are commonly found through ad-hoc manual testing. Bug tracking is ad-hoc.'},
         {'number': 2, 'text': 'Between 1 and 3'},
         {'number': 3, 'text': 'The critical codepaths have unit tests. Unit tests are automated and run often or continuously.  Bugs tracking done through tools such as JIRA or VSTS.'},
         {'number': 4, 'text': 'Between 3 and 5'},
         {'number': 5, 'text': 'Quality requirements are first class considerations. Multi-layer testing strategy in place (at least 2 of the following: unit tests, component tests, UX tests, end-to-end scenario tests).  Bug tracking is part of release planning.  Bug & quality metric targets are defined and used as readiness'}
       ]
    },
   
    { 'id': '3.4',
      'title':'Version Control',
      'subtitle':'How do we manage the evolution of our codebase?',
       'options': 
       [
         {'number': 1, 'text': 'VCS (such as Git/GitHub, VSTS, BitBucket, etc) is use consistently.  All components are in VCS.'},
         {'number': 2, 'text': 'Between 1 and 3'},
         {'number': 3, 'text': 'Policies for where/when/who what goes where, who, when are defined and followed. Multiple branches are used, although branching policy may be "naïve" such as branch-per-customer.  Push/commits are tied to peer-review policy.'},
         {'number': 4, 'text': 'Between 3 and 5'},
         {'number': 5, 'text': 'Policies for where/when/who what goes where, who, when are defined and followed. Multiple branches are used, although branching policy may be "naïve" such as branch-per-customer.  Push/commits are tied to peer-review policy.Multiple branches in use.  At least one central "trunk" branch maintained at “deployable/demoable” quality.'}
       ]
    },
    
    { 'id': '3.5',
      'title':'DevOps',
      'subtitle':' Are we able to effectively run in the cloud?',
       'options': 
       [
         {'number': 1, 'text': 'Deployment to cloud requires downtime and involves manual steps.  Most maintenance operations are also manual, some require remote access to the machines'},
         {'number': 2, 'text': 'Between 1 and 3'},
         {'number': 3, 'text': 'Cloud deployment is automated & reliable.'},
         {'number': 4, 'text': 'Between 3 and 5'},
         {'number': 5, 'text': 'Regular & frequent deployment cadence. Common maintenance operations are automated.  Troubleshooting guides written and kept up to date.'}
       ]
    },    
   
    { 'id': '3.6',
      'title':'Cloud Reliability & Availability',
      'subtitle':'Can we hit our business SLAs?',
       'options': 
       [
         {'number': 1, 'text': 'No specific design or implementation focus on reliability & availability. The possible failure modes and reasons not clearly mapped/understood.'},
         {'number': 2, 'text': 'Between 1 and 3'},
         {'number': 3, 'text': 'No single point of failure by design (although possibly not fully validated). Ability to determine health & availability through active and/or passive monitoring.'},
         {'number': 4, 'text': 'Between 3 and 5'},
         {'number': 5, 'text': 'SLAs consistently met. Failure Mode Analysis completed.  System has proven resilience through various simulations of top failure modes.  Support for partial outages via graceful degradation paths.'}
       ]
    },
    
    { 'id': '3.7',
      'title':'Cloud Scalability',
      'subtitle':'Can we cost-effectively handle large or sudden variations in load?',
       'options': 
       [
         {'number': 1, 'text': 'Code currently running on dev machine only.  Or in IaaS VMs with same configuration as dev machine.'},
         {'number': 2, 'text': 'Between 1 and 3'},
         {'number': 3, 'text': 'Deployment is single-instance (static # of nodes) and/or single-tenant.  Changes to scale model are manual operations and/or require downtime.'},
         {'number': 4, 'text': 'Between 3 and 5'},
         {'number': 5, 'text': 'Multi-tenancy and elasticity are supported where necessary. Scale model is well understood (including cost!) and can be automated via policies.  Ability to both auto-grow and auto-shrink are implemented.'}
       ]
    },
    
    { 'id': '3.8',
      'title':'Knowledge Sharing',
      'subtitle':'',
       'options': 
       [
         {'number': 1, 'text': 'Components have single owners working in silos.  Variety of different toolsets, libraries and platforms in use requiring unique expertise.  Documentation, including in-code comments, is sparse or ad-hoc.'},
         {'number': 2, 'text': 'Between 1 and 3'},
         {'number': 3, 'text': 'Components have shared ownership or are developed collaboratively.  Ad-hoc code-reviews or other mechanism for code-sharing.   New hires can ramp-up quickly on most components'},
         {'number': 4, 'text': 'Between 3 and 5'},
         {'number': 5, 'text': 'Most devs are familiar with most components in their area.  Areas of single ownership are rare to non-existent.  Well-defined conventions exist for documentation (in-code and/or external), and are followed.  Culture of peer-review is well established.'}
       ]
    }
  ]
}

exports.sections = [companySection, productSection, techSection]