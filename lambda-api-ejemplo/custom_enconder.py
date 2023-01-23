import json
from decimal import Decimal

class CustomEncoder(json.JSONEncoder):
    def defualt (self, obj):
        if isinstance(obj, Decimal):
            return float(obj)
        return json.JSONDecoder.default(self, obj)