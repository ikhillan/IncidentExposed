# we define a class incident as a representation of each incident
class Incident:
    def __init__(self, ID, occTime, repTime, typ, disposition, address):
        self.ID = ID
        self.occTime = occTime
        self.repTime = repTime
        self.typ = typ
        self.disposition = disposition
        self.address = address.strip().replace(",", " ") + " College Park MD"

    def __str__(self):
        str = f'{self.ID} {self.occTime} {self.repTime} {self.typ} {self.disposition} {self.address}'
        return str

    def listmaker(self):
        list = []
        list.append(self.ID)
        list.append(self.occTime)
        list.append(self.repTime)
        list.append(self.typ)
        list.append(self.disposition)
        list.append(self.address)
        return list