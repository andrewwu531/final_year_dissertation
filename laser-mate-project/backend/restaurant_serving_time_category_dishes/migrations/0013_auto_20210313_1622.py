# Generated by Django 3.1.4 on 2021-03-13 16:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant_serving_time_category_dishes', '0012_auto_20210313_1621'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurant_serving_time_category_dishes',
            name='dish_photo',
            field=models.FileField(upload_to='media/'),
        ),
    ]
