from bs4 import BeautifulSoup
import requests
from incident import *
from analysis import *
from csvify import *
import csv
from datetime import *

# the incidentListify() function is designed to return a list of Incident objects representing the
# incidents across the past 2 months
def incidentListify():
    currMon = datetime.now().month - 1
    currYr = datetime.now().year
    mon = currMon
    yr = currYr
    if (currMon > 1):
        mon -= 1
    else:
        mon = 12
        yr -= 1


    filelink1 = f'https://www.umpd.umd.edu/stats/incident_logs.cfm?year={yr}&month={mon}'
    filelink2 = f'https://www.umpd.umd.edu/stats/incident_logs.cfm?year={currYr}&month={currMon}'
    html_text1 = requests.get(filelink1).text
    html_text2 = requests.get(filelink2).text

    # we generate incident objects for the list using the analyze function (see: analysis.py)
    incidentlist = analyze(html_text1)
    incidentlist.extend(analyze(html_text2))
    return incidentlist