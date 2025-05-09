from django.db import models

# Create your models here.
class UserInfo(models.Model):
    username=models.CharField(max_length=32)
    password=models.CharField(max_length=64)

"""
create table my_app_userinfo(
    id bigint auto_increment primary key,
    name varchar(32),
    password varchar(64),
    age int
)
"""