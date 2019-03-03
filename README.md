# Canvasser

This project was initiated at Contra Costa Civic Hackathon on OpenDataDay March 2, 2019 as `Census-In-Field-Canvassing`.

Empower volunteers to help increase Census participation by creating an Adopt-a-Block system.
Volunteers would electronically select a Census Block to work on and then report back on their outreach efforts for that block.

One of our strategies to reach our hardest to count population is to have an “Adopt-a-Block” program. Community Based Organizations, businesses, and our faith communities can commit to canvassing Census Blocks that are hard to county to encourage residents to fill out their Census forms.
In order to be successful,
volunteers need to be able to track which houses they visited,
if they were able to make contact,
and if so, how the conversation went.
Supporting a canvassing effort helps Contra Costa County achieve a complete count.

The prototype app is available at https://www.canvasser.org.

## Goal

Create a system that allows organizations to adopt blocks which they will manage the canvasing and related data collection.

## Requirements

Both organizations that manage blocks and individuals who are willing to work as canvassers need to sign-up in the system.
Provide for the approval of both organizations and individuals
Allow organizations to
- find individuals by geographic location. I.e., find all approved volunteers in a give zip code.
- assign individuals to one or more blocks

## The Software

The software will be both a web and mobile app

### [Website](https://github.com/OpenWalnutCreek/canvasser-backend)

The website
- enables individuals and organizations to sign-up
- submits individuals and organizations for approval for participation
- notifies individuals and organizations when/if they are approved
Once approved - organizations
- will be able to select one or more blocks to manage
- will be able to search for and find individuals who would be a good fit for the block. For example, The organization could search for all speakers of Cantonese in a given zip code.
- will be able to assign individuals to a block

Once approved - individuals
- will be able to see there assignments
- will have access to resources, perhaps instructional materials, that will help them perform their task.
- will be able to download and sign-into the mobile app

### Mobile app

- An individual will sign-in to the mobile app
- They will see their block on a map which will guide them to the addresses they need to visit
- Will cache relevant download data, such as map, assignments, addresses so they will be available when a cell signal is not available
- For each address visited, the individual will be able to indicate if
  - they had a successful interaction
  - no one was home
  - it appeared someone was home but they would not answer the door
  - enter a brief note

##### Hackathon day challenges for the group

 - It took us some time to understand what the app needed to do. We collected details and organized them into a larger vision and then tried to narrow down to an app we could implement today.
- The data we were provided with was in ESRI format and we were unable to find an open source tool that could use that format
- We thought we could transform the ESRI data to GeoJson format but that took longer than expected. As a result we composed a set of sample data to work with.
- In the data provided we were not able to find things such as block name or other descriptive information that could be used as labels. It appeared this data was there as codes and the related lookup data was not.
