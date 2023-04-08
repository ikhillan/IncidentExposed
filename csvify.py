from bs4 import BeautifulSoup
import requests
from incident import *
from analysis import *
import csv

# csvify() is designed to accept a list of incidents, as well as a filename
# it then writes these incidents to the csv file
def csvify(incidentlist, file_name):
    with open(file_name, "w") as file:
        writer = csv.writer(file)
        writer.writerow(["Incident ID", "Occurrence Time", "Report Time", "Type", "Disposition", "Address"])
        for inc in incidentlist:
            writer.writerow(inc.listmaker())
