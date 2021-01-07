from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from django import forms
import uuid

Hours = (
    ('1', '1'), ('2', '2'), ('3', '3'), ('4','4'), ('5', '5'),
    ('6','6'), ('7', '7'), ('8', '8'), ('9', '9'), ('10','10'), 
    ('11', '11'), ('12', '12'), ('13', '13'), ('14', '14'), ('15','15'), 
    ('16', '16'), ('17', '17'), ('18', '18'), ('19', '19'), ('20','20'),
    ('21', '21'), ('22', '22'), ('23', '23'), ('24', '24')
)

Minutes = (
    ('00', '00'), ('15', '15'),  ('30', '30'),  ('45', '45'),
)

Bank_Type = (
    ('debit_card', 'debit card'), ('credit_card', 'credit card')
)

class Restaurant(models.Model):
    restaurant_id = models.CharField(max_length=50, unique=True)
    restaurant_name = models.CharField(max_length=50)
    owner_name = models.CharField(max_length=30)
    phone_number = models.CharField(max_length=12)
    address = models.CharField(max_length=70)
    postcode = models.CharField(max_length=10)
    city = models.CharField(max_length=20)
    country = models.CharField(max_length=20)   
    bank_card_type = models.CharField(max_length=15, choices=Bank_Type, default='debit card')
    bank_card_number = models.CharField(max_length=30)
    bank_expiry_year = models.IntegerField(default='25')
    bank_expiry_month = models.IntegerField(default='01')
    bank_security_code = models.CharField(max_length=10)
    bank_card_holder_name = models.CharField(max_length=30) 
    number_of_tables = models.IntegerField()
    restaurant_menu_link = models.URLField(max_length=50, blank=True)
    restaurant_account_username = models.EmailField(max_length=50)
    restaurant_account_password = models.CharField(max_length=15, default='')
    chef_waiter_account_username = models.EmailField(max_length=50)
    chef_waiter_account_password = models.CharField(max_length=15, default='')
    opening_time_hour = models.CharField(max_length=2, choices=Hours,default='9')
    opening_time_minutes = models.CharField(max_length=2, choices=Minutes,default='30')
    closing_time_hour = models.CharField(max_length=2, choices=Hours,default='20')
    closing_time_minutes = models.CharField(max_length=2, choices=Minutes,default='00')


    class Meta:
        verbose_name_plural = '1 Restaurant'
    
    def __str__(self):
        return '{}'.format(self.restaurant_id)
  
class Restaurant_QR_codes(models.Model):
    restaurant_id = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    qr_code = models.FileField(upload_to='restaurant_qr_codes/', default='-')

    class Meta:
        verbose_name_plural = '1-2 Restaurant ID QR codes'

    def __str__(self):
        return '{}'.format(self.restaurant_id)

class Restaurant_PDF_Menus(models.Model):
    restaurant_id = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    pdf_menu = models.FileField(upload_to='restaurant_pdf_menus/')

    class Meta:
        verbose_name_plural = '1-1 Restaurant PDF Menus'

        
    def __str__(self):
        return '{}'.format(self.restaurant_id)

        