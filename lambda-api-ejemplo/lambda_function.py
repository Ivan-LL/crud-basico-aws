import boto3
import json
from custom_enconder import CustomEncoder
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

dynamodbTableName = 'Productos'
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(dynamodbTableName)

getMethod = 'GET'
postMethod = 'POST'

estadoPath = '/estado'
producto = '/producto'
productos = '/productos'

def lambda_handler(event, context):
    logger.info(event)
    httpMethod = event['httpMethod']
    path = event['path']
    if httpMethod == getMethod and path == estadoPath:
        response = buildResponse(200)
    elif httpMethod == getMethod and path == producto:
        response = getProducto(event['queryStringParameters']['IdProducto'])
    elif httpMethod == getMethod and path == productos:
        response = getProductos()
    elif httpMethod == postMethod and path == producto:
        response = saveProduct(json.loads(event['body']))
    else:
        response = buildResponse(404, 'Not Found')
    
    return response

def getProducto(IdProducto):
    try:
        response = table.get_item(
            key={
                'IdProducto':IdProducto
            }
        )
        if 'Item' in response:
            return buildResponse(200, response['Item'])
        else:
            return buildResponse(404, {'Message': 'IdProducto: %s no se encuentra' % IdProducto})
    except:
        logger.exception('Error logger exception')    

def getProductos():
    try:
        response = table.scan()
        result = response['Items']

        while 'LastEvaluatedKey' in response:
            response = table.scan(ExclusiveStartKey=response['LastEvaluatedKey'])
            result.extend(response['Items'])

        body = {
            'productos':result
        }
        return buildResponse(200, body)
    except:
        logger.exception('Error logger exception') 

def saveProduct(requestBody):
    try:
        table.put_item(Item=requestBody)
        body = {
            'Operation':'SAVE',
            'Message': 'SUCCES',
            'Item': requestBody
        }
        return buildResponse(200, body)

    except:
        logger.exception('Error logger exception') 


def buildResponse(statusCode, body=None):
    response = {
        'statusCode': statusCode,
        'headers':{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        }
    }
    if body is not None:
        response ['body'] = json.dumps(body, cls=CustomEncoder)
    return response