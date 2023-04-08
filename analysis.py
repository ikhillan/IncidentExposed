from bs4 import BeautifulSoup
import requests
from incident import Incident

# analyze() accepts html_text, in which it finds a table and scans the entries in the table, using
# them to generate Incident objects
def analyze(html_text):
    soup = BeautifulSoup(html_text, 'lxml')

    table = soup.find('table')
    entries = table.find_all('tr')

    # isolating incident info
    incident_info = []
    i = 0
    for e in entries:
        if (i % 2 == 1):
            incident_info.append(e)
        i += 1

    # number of entries
    numEnt = 0
    for a in entries:
        numEnt+=1


    # isolating addresses
    addresses = []
    for i in range(2, numEnt):
        if(i % 2 == 0):
            addresses.append(entries[i])


    # Incident objects
    incidents = []
    for j in range(0, int(numEnt/2)):
        info = incident_info[j]
        infoparts = info.find_all('td')
        incidents.append(Incident(infoparts[0].text, infoparts[1].text, infoparts[2].text, infoparts[3].text, infoparts[4].text, addresses[j].text)) 

    return incidents