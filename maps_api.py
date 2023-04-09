import requests
import pandas as pd 

def create_dataframe(csv_file):

    # puts webscraped data's csv into a dataframe
    df = pd.read_csv(csv_file)

    # puts all entries in the address column into a list to make calls to the api
    address_list = df['Address'].tolist()

    API_KEY = '' # use API key here
    base_url = 'https://maps.googleapis.com/maps/api/geocode/json?'

    lat_list = []
    lon_list = []
    i = 0

    # iterate through addresses, making api call on each
    for curr in address_list:
        params = {
            'key': API_KEY,
            'address': curr
        }

        response = requests.get(base_url, params=params).json()

        # if the call was successfull, add latitude and longitude to the list
        if (response['status'] == 'OK'):
            lat_list.append(response['results'][0]['geometry']['location']['lat'])
            lon_list.append(response['results'][0]['geometry']['location']['lng'])

        # add null instead if the call failed
        else:
            lat_list.append('null')
            lon_list.append('null')

        # replace the messy webscraped address with the formatted kind from the api call
        df.iloc[[i], [5]] = response['results'][0]['formatted_address']
        i += 1
        
        
        
    # return values    
    df['Latitude'] = lat_list
    df['Longitude'] = lon_list 
    return df, lat_list, lon_list