# Generated by Django 3.1.4 on 2021-01-07 17:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('restaurant', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Restaurant_Serving_Times',
            fields=[
                ('restaurant_serving_time_id', models.CharField(max_length=50, primary_key=True, serialize=False, unique=True)),
                ('serving_time_start_hour', models.CharField(choices=[('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5'), ('6', '6'), ('7', '7'), ('8', '8'), ('9', '9'), ('10', '10'), ('11', '11'), ('12', '12'), ('13', '13'), ('14', '14'), ('15', '15'), ('16', '16'), ('17', '17'), ('18', '18'), ('19', '19'), ('20', '20'), ('21', '21'), ('22', '22'), ('23', '23'), ('24', '24')], default='1', max_length=2)),
                ('serving_time_start_minutes', models.CharField(choices=[('00', '00'), ('15', '15'), ('30', '30'), ('45', '45')], default='00', max_length=2)),
                ('serving_time_end_hour', models.CharField(choices=[('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5'), ('6', '6'), ('7', '7'), ('8', '8'), ('9', '9'), ('10', '10'), ('11', '11'), ('12', '12'), ('13', '13'), ('14', '14'), ('15', '15'), ('16', '16'), ('17', '17'), ('18', '18'), ('19', '19'), ('20', '20'), ('21', '21'), ('22', '22'), ('23', '23'), ('24', '24')], default='1', max_length=2)),
                ('serving_time_end_minutes', models.CharField(choices=[('00', '00'), ('15', '15'), ('30', '30'), ('45', '45')], default='00', max_length=2)),
                ('restaurant_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='restaurant.restaurant')),
            ],
            options={
                'verbose_name_plural': '2-1 Restaurant Serving Times',
            },
        ),
    ]
