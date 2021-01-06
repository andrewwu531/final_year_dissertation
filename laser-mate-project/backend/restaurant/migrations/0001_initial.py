# Generated by Django 3.1.4 on 2021-01-06 16:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('restaurant_id', models.CharField(max_length=50, unique=True)),
                ('restaurant_name', models.CharField(max_length=50)),
                ('owner_name', models.CharField(max_length=30)),
                ('restaurant_address', models.CharField(max_length=70)),
                ('restaurant_postcode', models.CharField(max_length=10)),
                ('restaurant_city', models.CharField(max_length=20)),
                ('restaurant_country', models.CharField(max_length=20)),
                ('restaurant_username', models.EmailField(max_length=50)),
                ('restaurant_password', models.CharField(default='', max_length=15)),
                ('chef_waiter_username', models.EmailField(max_length=50)),
                ('chef_waiter_password', models.CharField(default='', max_length=15)),
                ('restaurant_phone_number', models.CharField(max_length=12)),
                ('number_of_tables', models.IntegerField()),
                ('restaurant_menu_weblink', models.URLField(blank=True, max_length=50)),
                ('bank_card_type', models.CharField(choices=[('debit_card', 'debit card'), ('credit_card', 'credit card')], default='debit card', max_length=15)),
                ('bank_card_number', models.CharField(max_length=30)),
                ('bank_expiry_year', models.IntegerField(default='25')),
                ('bank_expiry_month', models.IntegerField(default='01')),
                ('bank_security_code', models.CharField(max_length=10)),
                ('bank_card_holder_name', models.CharField(max_length=30)),
                ('opening_time_hour', models.CharField(choices=[('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5'), ('6', '6'), ('7', '7'), ('8', '8'), ('9', '9'), ('10', '10'), ('11', '11'), ('12', '12'), ('13', '13'), ('14', '14'), ('15', '15'), ('16', '16'), ('17', '17'), ('18', '18'), ('19', '19'), ('20', '20'), ('21', '21'), ('22', '22'), ('23', '23'), ('24', '24')], default='9', max_length=2)),
                ('opening_time_minutes', models.CharField(choices=[('00', '00'), ('15', '15'), ('30', '30'), ('45', '45')], default='30', max_length=2)),
                ('closing_time_hour', models.CharField(choices=[('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5'), ('6', '6'), ('7', '7'), ('8', '8'), ('9', '9'), ('10', '10'), ('11', '11'), ('12', '12'), ('13', '13'), ('14', '14'), ('15', '15'), ('16', '16'), ('17', '17'), ('18', '18'), ('19', '19'), ('20', '20'), ('21', '21'), ('22', '22'), ('23', '23'), ('24', '24')], default='20', max_length=2)),
                ('closing_time_minutes', models.CharField(choices=[('00', '00'), ('15', '15'), ('30', '30'), ('45', '45')], default='00', max_length=2)),
            ],
            options={
                'verbose_name_plural': '1 Restaurant',
            },
        ),
        migrations.CreateModel(
            name='Restaurant_QR_codes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('qr_codes', models.FileField(upload_to='restaurant_QR_codes/')),
                ('restaurant_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='restaurant.restaurant')),
            ],
            options={
                'verbose_name_plural': '1-2 Restaurant ID QR codes',
            },
        ),
        migrations.CreateModel(
            name='Restaurant_Menus',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('meals_pdfs', models.FileField(upload_to='registration_menu_photos/')),
                ('restaurant_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='restaurant.restaurant')),
            ],
            options={
                'verbose_name_plural': '1-1 Restaurant ID Registration Menu Photos',
            },
        ),
    ]
