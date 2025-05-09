import pymysql
from django.shortcuts import render
#import pymysql
from django.shortcuts import  render,HttpResponse,redirect
# Create your views here.
import socket
import requests
import json
from django.shortcuts import  HttpResponse
import pymysql
pymysql.install_as_MySQLdb()
from rest_framework.views import APIView

def index(request):
    SERVER_IP = '192.168.47.39'
    SERVER_PORT = 10086
    i = 0
    # 创建TCP/IP套接字
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    # 绑定服务器地址和端口号
    sock.bind((SERVER_IP, SERVER_PORT))
    # 开始监听连esp8266
    sock.listen(1)
    print(f'Listening on {SERVER_IP}:{SERVER_PORT}...')
    myarray = []
    while True:
        if(i==80):
            break
        # 等待连接
        conn, addr = sock.accept()
        print(f'Connected by {addr}')
        # 读取数据
        data = conn.recv(1024)
        if data:
            float_value = float(data.decode('utf-8'))
            myarray.append(float_value)
            print(float_value)

        # 关闭连接
        conn.close()
        i=i+1
    url = "https://aip.baidubce.com/rpc/2.0/ai_custom_bml/v1/table_infer/moxing?access_token=24.251939e0a46391b978cb39575ea5f3b8.2592000.1695432098.282335-37634909"

    headers = {
        'Content-Type': 'application/json'
    }

    data = {
        "include_req": False,
        "data": [{
            "col0": myarray[0],
            "col1": myarray[1],
            "col2": myarray[2],
            "col3": myarray[3],
            "col4": myarray[4],
            "col5": myarray[5],
            "col6": myarray[6],
            "col7": myarray[7],
            "col8": myarray[8],
            "col9": myarray[9],
            "col10":myarray[10],
            "col11":myarray[11],
            "col12":myarray[12],
            "col13":myarray[13],
            "col14":myarray[14],
            "col15":myarray[15],
            "col16":myarray[16],
            "col17":myarray[17],
            "col18":myarray[18],
            "col19":myarray[19],
            "col20":myarray[20],
            "col21":myarray[21],
            "col22":myarray[22],
            "col23":myarray[23],
            "col24":myarray[24],
            "col25":myarray[25],
            "col26":myarray[26],
            "col27":myarray[27],
            "col28":myarray[28],
            "col29":myarray[29],
            "col30":myarray[30],
            "col31":myarray[31],
            "col32":myarray[32],
            "col33":myarray[33],
            "col34":myarray[34],
            "col35":myarray[35],
            "col36":myarray[36],
            "col37":myarray[37],
            "col38":myarray[38],
            "col39":myarray[39],
            "col40":myarray[40],
            "col41":myarray[41],
            "col42":myarray[42],
            "col43":myarray[43],
            "col44":myarray[44],
            "col45":myarray[45],
            "col46":myarray[46],
            "col47":myarray[47],
            "col48":myarray[48],
            "col49":myarray[49],
            "col50":myarray[50],
            "col51":myarray[51],
            "col52":myarray[52],
            "col53":myarray[53],
            "col54":myarray[54],
            "col55":myarray[55],
            "col56":myarray[56],
            "col57":myarray[57],
            "col58":myarray[58],
            "col59":myarray[59],
            "col60":myarray[60],
            "col61":myarray[61],
            "col62":myarray[62],
            "col63":myarray[63],
            "col64":myarray[64],
            "col65":myarray[65],
            "col66":myarray[66],
            "col67":myarray[67],
            "col68":myarray[68],
            "col69":myarray[69],
            "col70":myarray[70],
            "col71":myarray[71],
            "col72":myarray[72],
            "col73":myarray[73],
            "col74":myarray[74],
            "col75":myarray[75],
            "col76":myarray[76],
            "col77":myarray[77],
            "col78":myarray[78],
            "col79":myarray[79]
        }]
    }

    try:
        response = requests.post(url, headers=headers, json=data, timeout=(6, 6))
        response.raise_for_status()  # 对于HTTP错误引发异常
        result = response.json()
        print(result)
        temp=result["batch_result"][0]['col80']
        print(temp)

    except requests.exceptions.RequestException as e:
        print("发生错误：", e)

    LABEL_MAP = {0: '食指', 1: '小指', 2: '中指', 3: '休息', 4: '无名指', 5: '大拇指', 6: '胜利手势'}
    #str = LABEL_MAP[temp-1]
    #print(str)
    #将手势状态存入数据库
   # username = request.data.get("username")
   # password = request.data.get("password")
   # #连接数据库
   # conn = pymysql.connect(host='127.0.0.1', port=3306, user='root', password='123456', charset='utf8', db='test')
   # cursor = conn.cursor(cursor=pymysql.cursors.DictCursor)
   # #将用户名，密码，手势状态存入数据库，保存，当作用户历史记录
   # cursor.execute("insert into shoushi( username, password, shoushi) VALUE('"+username+"','"+password+"','"+str+"')")
##
   # conn.commit()
   # cursor.close()
   # conn.close()



    return HttpResponse(str)
def test(request):


    url = "https://aip.baidubce.com/rpc/2.0/ai_custom_bml/v1/table_infer/moxing?access_token=24.251939e0a46391b978cb39575ea5f3b8.2592000.1695432098.282335-37634909"

    headers = {
        'Content-Type': 'application/json'
    }

    data = {
        "include_req": False,
        "data": [{
            "col0": 0.046904,
            "col1": 0.03827,
            "col2": 0.027714,
            "col3": 0.027727,
            "col4": 0.012447,
            "col5": 0.014541,
            "col6": 0.015139,
            "col7": 0.014557,
            "col8": 0.047688,
            "col9": 0.039265,
            "col10": 0.029502,
            "col11": 0.029266,
            "col12": 0.015934,
            "col13": 0.017176,
            "col14": 0.017364,
            "col15": 0.016997,
            "col16": -0.36719,
            "col17": -0.17188,
            "col18": -0.17969,
            "col19": -0.10938,
            "col20": -0.046875,
            "col21": -0.070313,
            "col22": -0.078125,
            "col23": -0.09375,
            "col24": 0.20313,
            "col25": 0.23438,
            "col26": 0.078125,
            "col27": 0.125,
            "col28": 0.03125,
            "col29": 0.039063,
            "col30": 0.078125,
            "col31": 0.054688,
            "col32": 55,
            "col33": 40,
            "col34": 56,
            "col35": 47,
            "col36": 24,
            "col37": 27,
            "col38": 23,
            "col39": 27,
            "col40": 0.096042,
            "col41": 0.077813,
            "col42": 0.07776,
            "col43": 0.085573,
            "col44": 0.035469,
            "col45": 0.037344,
            "col46": 0.039375,
            "col47": 0.038698,
            "col48": 0.054688,
            "col49": 0.054688,
            "col50": 0.039063,
            "col51": 0.039063,
            "col52": 0.03125,
            "col53": 0.023438,
            "col54": 0.03125,
            "col55": 0.03125,
            "col56": 0.022936,
            "col57": 0.018607,
            "col58": 0.017892,
            "col59": 0.018931,
            "col60": 0.0096375,
            "col61": 0.010029,
            "col62": 0.0095208,
            "col63": 0.0095069,
            "col64": 5.8438,
            "col65": 4.6016,
            "col66": 4.4219,
            "col67": 4.7109,
            "col68": 2.1406,
            "col69": 2.3047,
            "col70": 2.2656,
            "col71": 2.3047,
            "col72": 3,
            "col73": 2,
            "col74": 4,
            "col75": 1,
            "col76": 0,
            "col77": 0,
            "col78": 1,
            "col79": 1
        }]
    }

    try:
        response = requests.post(url, headers=headers, json=data, timeout=(6, 6))
        response.raise_for_status()  # 对于HTTP错误引发异常
        result = response.json()
        print(result)
        print(result["batch_result"][0]['col80'])

    except requests.exceptions.RequestException as e:
        print("发生错误：", e)

    return HttpResponse('none')
def something(request):
    conn = pymysql.connect(host='127.0.0.1', port=3306, user='root', password='123456', charset='utf8', db='django1')
    cursor = conn.cursor(cursor=pymysql.cursors.DictCursor)
    cursor.execute("insert into user values ('1','rosen','123456')")
    conn.commit()
    cursor.close()
    cursor.close()
    return HttpResponse("返回的内容")
#1.登录界面
class S_login(APIView):
    def post(self, request):
        conn = pymysql.connect(host='127.0.0.1', port=3306, user='root', password='123456', charset='utf8',db='django1')
        cursor = conn.cursor(cursor=pymysql.cursors.DictCursor)
        password = request.data.get("password")
        username=request.data.get("username")
        print("id:"+username+" password:"+password)
        cursor.execute("select * from user where username='" + username + "'")
        datalist = cursor.fetchall()
        print(datalist)
        if len(datalist) != 0:
            if(datalist[0]['password']==password):
                if(datalist[0]['new']==0):
                    cursor.execute("update user set new=1 where username='"+username+"'")
                    conn.commit()
                    return HttpResponse('登录成功0')
                else:
                    return HttpResponse('登录成功1')

        return HttpResponse('账户或密码错误')

#注册

class S_new(APIView):
    def get(self, request):
        return HttpResponse('{"data":[{"id": "Jack","content": "男","createTime":"computer"},'
                            '{"id": "sack","content": "s","createTime":"a"}],"num":2}')
#2.注册界面
class S_register(APIView):
    def post(self,request):

        username = request.data.get("username")
        password = request.data.get("password")
        print(username+':')

        datalist = UserInfo.objects.all()
        print(datalist)
        if len(datalist) != 0:
            return HttpResponse('用户已存在')
        else:

            return HttpResponse("注册成功")


import os
import base64

from rest_framework.views import APIView
from rest_framework.response import Response

# coding=UTF-8
import base64

import cv2
from django.http import HttpResponse


#3.传输图片
def imagea(path,type):

    img = cv2.imread('image/'+path+type)
    # 此处是核心部分：OPENCV转BASE64

    img1 = cv2.imencode('.png', img)[1]
    back_2 = base64.b64encode(img1)

    return back_2

class GetDtcImg(APIView):
    def post(self, request):

        path='2'

        back_2 = imagea(path,'.png')
        print(type(back_2))
        return HttpResponse(back_2)
#3.进入界面
class S_welcom(APIView):
    def post(self,request):
        conn = pymysql.connect(host='127.0.0.1', port=3306, user='root', password='123456', charset='utf8', db='django1')
        cursor = conn.cursor(cursor=pymysql.cursors.DictCursor)
        username = request.data.get("username")
        age = request.data.get("age")
        shuliang = request.data.get("shuliang")
        year = request.data.get("year")
        month = request.data.get("month")
        day = request.data.get("day")

        print("username:"+username)
        print("age:"+age)
        print("shuliang:"+shuliang)
        print("year:"+year)
        print("year:"+month)
        print("year:"+day)

        cursor.execute("update user set duanzhitime='"+year+"-"+month+"-"+day+"' where username='" + username + "'")
        cursor.execute("update user set duanzhishuliang="+shuliang+" where username='"+username+"'")
        cursor.execute("update user set age='"+age+"' where username='"+username+"'")

        conn.commit()
        cursor.close()
        return HttpResponse("数据添加成功")
#4.设备页

class S_model(APIView):
    def post(self,request):
        SERVER_IP = '192.168.204.39'
        SERVER_PORT = 6666
        i = 0
        # 创建TCP/IP套接字
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        # 绑定服务器地址和端口号
        sock.bind((SERVER_IP, SERVER_PORT))
        # 开始监听连esp8266
        sock.listen(1)
        print(f'Listening on {SERVER_IP}:{SERVER_PORT}...')
        myarray = []
        while True:
            if (i == 80):
                break
            # 等待连接
            conn, addr = sock.accept()
            print(f'Connected by {addr}')
            # 读取数据
            data = conn.recv(1024)
            if data:
                float_value = float(data.decode('utf-8'))
                myarray.append(float_value)
                print(float_value)

            # 关闭连接
            conn.close()
            i = i + 1
        url = "https://aip.baidubce.com/rpc/2.0/ai_custom_bml/v1/table_infer/moxing?access_token=24.251939e0a46391b978cb39575ea5f3b8.2592000.1695432098.282335-37634909"

        headers = {
            'Content-Type': 'application/json'
        }

        data = {
            "include_req": False,
            "data": [{
                "col0": myarray[0],
                "col1": myarray[1],
                "col2": myarray[2],
                "col3": myarray[3],
                "col4": myarray[4],
                "col5": myarray[5],
                "col6": myarray[6],
                "col7": myarray[7],
                "col8": myarray[8],
                "col9": myarray[9],
                "col10": myarray[10],
                "col11": myarray[11],
                "col12": myarray[12],
                "col13": myarray[13],
                "col14": myarray[14],
                "col15": myarray[15],
                "col16": myarray[16],
                "col17": myarray[17],
                "col18": myarray[18],
                "col19": myarray[19],
                "col20": myarray[20],
                "col21": myarray[21],
                "col22": myarray[22],
                "col23": myarray[23],
                "col24": myarray[24],
                "col25": myarray[25],
                "col26": myarray[26],
                "col27": myarray[27],
                "col28": myarray[28],
                "col29": myarray[29],
                "col30": myarray[30],
                "col31": myarray[31],
                "col32": myarray[32],
                "col33": myarray[33],
                "col34": myarray[34],
                "col35": myarray[35],
                "col36": myarray[36],
                "col37": myarray[37],
                "col38": myarray[38],
                "col39": myarray[39],
                "col40": myarray[40],
                "col41": myarray[41],
                "col42": myarray[42],
                "col43": myarray[43],
                "col44": myarray[44],
                "col45": myarray[45],
                "col46": myarray[46],
                "col47": myarray[47],
                "col48": myarray[48],
                "col49": myarray[49],
                "col50": myarray[50],
                "col51": myarray[51],
                "col52": myarray[52],
                "col53": myarray[53],
                "col54": myarray[54],
                "col55": myarray[55],
                "col56": myarray[56],
                "col57": myarray[57],
                "col58": myarray[58],
                "col59": myarray[59],
                "col60": myarray[60],
                "col61": myarray[61],
                "col62": myarray[62],
                "col63": myarray[63],
                "col64": myarray[64],
                "col65": myarray[65],
                "col66": myarray[66],
                "col67": myarray[67],
                "col68": myarray[68],
                "col69": myarray[69],
                "col70": myarray[70],
                "col71": myarray[71],
                "col72": myarray[72],
                "col73": myarray[73],
                "col74": myarray[74],
                "col75": myarray[75],
                "col76": myarray[76],
                "col77": myarray[77],
                "col78": myarray[78],
                "col79": myarray[79]
            }]
        }

        try:
            response = requests.post(url, headers=headers, json=data, timeout=(6, 6))
            response.raise_for_status()  # 对于HTTP错误引发异常
            result = response.json()
            print(result)
            temp = result["batch_result"][0]['col80']
            print(temp)

        except requests.exceptions.RequestException as e:
            print("发生错误：", e)

        LABEL_MAP = {0: '食指', 1: '小指', 2: '中指', 3: '休息', 4: '无名指', 5: '大拇指', 6: '胜利手势'}
        str = LABEL_MAP[temp-1]
        print(str)
        #将手势状态存入数据库
        username = request.data.get("username")
        password = request.data.get("password")
        #连接数据库
        conn = pymysql.connect(host='127.0.0.1', port=3306, user='root', password='123456', charset='utf8', db='test')
        cursor = conn.cursor(cursor=pymysql.cursors.DictCursor)
        #将用户名，密码，手势状态存入数据库，保存，当作用户历史记录
        cursor.execute("insert into shoushi( username, password, shoushi) VALUE('"+username+"','"+password+"','"+str+"')")

        conn.commit()
        cursor.close()
        conn.close()

        return HttpResponse(str)
#5.doctor

class S_doctordata(APIView):
    def post(self, request):
        #连接数据库

        conn = pymysql.connect(host='127.0.0.1', port=3306, user='root', password='123456', charset='utf8',db='django1')
        cursor = conn.cursor(cursor=pymysql.cursors.DictCursor)
        cursor.execute("select * from doctor")
        datalist = cursor.fetchall()
        num=0
        max=0
        data='{"data":['
        for i in datalist:
            max=max+1
        for i in datalist:
            json_d = json.dumps(i,ensure_ascii=False)
            print(max)
            print(num)
            if(num<max-1):
                data=data+str(json_d)+","
            else:
                data=data+str(json_d)
            num=num+1
        data=data+"],"
        data=data+'"num":'+str(num)+'}'
        print(data)
        print(num)

        return HttpResponse(data)

class S_doctorimage(APIView):
    def post(self, request):
        num = request.data.get("num")
        return HttpResponse("12312")

from my_app.models import UserInfo
class orm111(APIView):
    def post(self,requset):
        #增加表数据
        UserInfo.objects.create(name='123',password='123',age=12)
        UserInfo.objects.create(name='piakk',password='123',age=12)
        #删除表
        UserInfo.objects.filter(id='piakk').delete()
        UserInfo.objects.all().delete()
        #获取多个数据
        datalist=UserInfo.objects.all()
        for obj in datalist:
            print(obj.id,obj.name)
        #获取一个数据
        one=UserInfo.objects.filter(name='123').first()
        print(one.id)
        #更新数据
        UserInfo.objects.all().update(id='666')
        UserInfo.objects.filter(id='123').update(age=123)

        return HttpResponse("victory")
