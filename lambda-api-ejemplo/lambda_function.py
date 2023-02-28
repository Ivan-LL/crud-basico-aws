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
patchMethod = 'PATCH'
deleteMethod = 'DELETE'

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
    elif httpMethod == patchMethod and path == producto:
        requestBody = json.loads(event['body'])
        response = modifyProduct(requestBody['IdProducto'], requestBody['updateKey'], requestBody['updateValue'])
    elif httpMethod == deleteMethod and path == producto:
        requestBody = json.loads(event['body'])
        response = deleteProduct(requestBody['IdProducto'])
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
        logger.exception('Error logger exception getProductos') 

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

def modifyProduct(IdProducto, updateKey, updateValue):
    try:
        if(updateKey=="nombre"):
            response = table.update_item(
            Key={
                'IdProducto': IdProducto
            },
            UpdateExpression='set %s =  :nombre' % updateKey, 
            ExpressionAttributeValues={
                ':nombre': updateValue
            },
            ReturnValues='UPDATED_NEW'
        )
        if(updateKey=="precio"):
            response = table.update_item(
            Key={
                'IdProducto': IdProducto
            },
            UpdateExpression='set %s =  :precio' % updateKey, 
            ExpressionAttributeValues={
                ':precio': updateValue
            },
            ReturnValues='UPDATED_NEW'
        )
        
        if(updateKey=="color"):
            response = table.update_item(
            Key={
                'IdProducto': IdProducto
            },
            UpdateExpression='set %s =  :color' % updateKey, 
            ExpressionAttributeValues={
                ':color': updateValue
            },
            ReturnValues='UPDATED_NEW'
        )
        body = {
            'Operation':'UPDATE',
            'Message': 'SUCCES',
            'UpdatedAttributes': response
        }
        return buildResponse(200, body)
    except:
        logger.exception('Error logger exception') 

def deleteProduct(IdProducto):
    try:
        response = table.delete_item(
            Key={
                'IdProducto': IdProducto
            },
            ReturnValues='ALL_OLD'
        )
        body = {
            'Operation':'DELETE',
            'Message': 'SUCCES',
            'Item': response
        }
        return buildResponse(200, body)

    except:
        logger.exception('Error logger exception') 


def buildResponse(statusCode, body=None):
    response = {
        'statusCode': statusCode,
        'headers':{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,DELETE,PATCH'
        }
    }
    if body is not None:
        response ['body'] = json.dumps(body, cls=CustomEncoder)
    return response