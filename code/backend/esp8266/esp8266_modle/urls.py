"""
URL configuration for esp8266_modle project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from my_app import views
from my_app import  views
urlpatterns = [
   # path("admin/", admin.site.urls),
     path("index/",views.index),
     path("test/",views.test),
     path("something/",views.something),
     path("new/",views.S_new.as_view()),
     #1.登录
     path("login/",views.S_login.as_view()),
     #2.注册
     path("register/",views.S_register.as_view()),
     #3.进入
     path("welcome/",views.S_welcom.as_view()),
     #4.模型调用
     path("model/",views.S_model.as_view()),
     path("image/",views.GetDtcImg.as_view()),
     path("doctor/",views.S_doctordata.as_view()),
]
