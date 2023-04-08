from bs4 import BeautifulSoup
import requests
import csv

from incident import *
from analysis import *
from csvify import *
from maps_api import *
from datetime import *
from list import *

# webscrape and put data into a csv file called data.csv
csv_file = "data.csv"

# creates list of incidents across past 2 months
incidentlist = incidentListify()

# converts list to csv
csvify(incidentlist, csv_file)

# cleaning and putting webscraped data into a dataframe; use google maps geolocation api to get latitude and longitude data in a list 
# also, get formatted of addresses
df, lat_list, lon_list = create_dataframe(csv_file)

# creating lists to feed into the folium map
id_list = df['Incident ID'].tolist()
occ_time_list = df['Occurrence Time'].tolist()
rep_time_list = df['Report Time'].tolist()
type_list = df['Type'].tolist()
disposition_list = df['Disposition'].tolist()
address_list = df['Address'].tolist()   

# df.to_csv(r'C:\Users\arcad\OneDrive\Desktop\Bitcamp23\api_avoider.csv')

print(df)