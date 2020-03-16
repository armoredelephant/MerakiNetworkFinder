# MerakiNeworkFinder

A script that will process a list of networks and find networks that are not created in the Meraki dashboard.

## Setup

- Clone the repo.
- Export the your network list from the overview section of the meraki dashboard.
- Delete **name** from the first row, but keep the row.
- Click the column and go to **DATA => A - Z sort**.
  - If there is white space in front of any network names, you'll see them listed first and out of order. Trim them using the =TRIM() function if necessary.
- In the next column, type the first part of the network name before the underscore and press enter.
  - If the network name is 142_54_meraki, you would type 142.
- On the next line do the same, this should prompt to auto fill, press enter to auto fill or ctrl + enter. If it does not prompt to autofill, continue tying the first portion for each row until it does.
- Next do the same for column C, except for the 2nd part of the nework name.
  - If the network name is 142_54_meraki, you would type 54.
- Continue with each row until you're able to auto fill.
- Once the B and C columns are completed, delete column A.
- Type columnOne into the first row of column A (was B).
- Type columnTwo into the first row of column B (was C).
- Save the spreadsheet as network_list.csv to the repo.

## Use

- With the network_list.csv ready to go in the repo, run npm start from a terminal window terminal.
- Open available_networks.csv to view the outputed network list.
