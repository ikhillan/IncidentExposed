from bs4 import BeautifulSoup
import requests
import csv

from incident import *
from analysis import *
from csvify import *
from maps_api import *
from datetime import *
from list import *
import folium
import pandas as pd
import IPython.display
from IPython.display import display
import geopy.distance


df = pd.read_csv("api_avoider.csv")

criticalList = ["Assault", "Burglary",
                "Sex Offense (Title IX Related)", "Rape", "Fire"]
dangerousList = ["Pedestrian Struck", "Extortion", "Hate Bias Incident", "Theft", "CDS Violation",
                 "Extortion (Title IX Related)", "Assist Other Agency / Death Investigation", "Assist Other Agency / Assault", "Weapon Violation", "Hate Bias Incident",]
moderateList = ["Injured/Sick Person", "Warrant/Summons Service", "Threat Assessment", "DWI/DUI", "Alcohol Violation", "Injured/Sick Person",
                "Damage to State Property", "Assist Other Agency / Robbery", "Peeping Tom (Title IX Related)", "Fraud", "Stolen Motor Vehicle", "Accident", "Accident - Departmental",]
okayList = ["Suspicious Person/Auto", "Other Incident", "Emergency Petition", "Vandalism", "Assist Other Agency / Other", "Check on the Welfare", "Assist Other Agency / Theft", "Disorderly Conduct", "Found/Recovered Property", "Alarm", "Animal Complaint", "Trespassing", "Traffic Arrest", "Recovered Stolen Property",
            "False Report/Statement", "Indecent Exposure", "Assist Other Agency / Check on the Welfare", "Title IX Incident Non Criminal", "Dept Property Damage/Loss", "Suspicious Activity", "Indecent Exposure (Title IX Related)", "Fraud", "Trespassing", "Animal Complaint", "Title IX Incident Non Criminal", "Suspicious Activity (Title IX Related)", "Check on the Welfare"]


lat_list = df['Latitute'].tolist()
lon_list = df['Longitude'].tolist()
type_list = df['Type'].tolist()
address_list = df['Address'].tolist()
disposition_list = df['Disposition'].tolist()


# Create a map with the geospatial data
map = folium.Map(location=[38.98607, -76.94424],
                 zoom_start=14, tiles="OpenStreetMap")
for lat, lng, IncidentType, Location, Disposition in zip(lat_list, lon_list, type_list, address_list, disposition_list):
    if lat != 'null' and lng != 'null':
        color = "white"
        if IncidentType in criticalList:
            color = "red"
        elif IncidentType in dangerousList:
            color = "orange"
        elif IncidentType in moderateList:
            color = "beige"
        elif IncidentType in okayList:
            color = "blue"

        popup_text = "<b>Type:<b> " + IncidentType + "<br>" + "<b>Location:<b> " + \
            Location + "<br>" + "<b>Disposition:<b> " + Disposition
        folium.Marker(
            location=[lat, lng],
            icon=folium.Icon(color=color, icon="fire-extinguisher"),

            popup=folium.Popup(popup_text, min_width=350, max_width=300)
        ).add_to(map)
    map.save('bitcamp2023map.html')
