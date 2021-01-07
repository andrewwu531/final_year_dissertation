from django.contrib import admin
from .models import Restaurant, Restaurant_QR_codes, Restaurant_PDF_Menus

class Restaurant_Admin(admin.ModelAdmin):
    list_display = ('restaurant_id', 'restaurant_name', 'owner_name', 'phone_number', 'address', 'postcode',
                    'city', 'country', 'bank_card_type', 'bank_card_number', 'bank_expiry_month', 'bank_expiry_year',
                    'bank_security_code', 'bank_card_holder_name', 'number_of_tables',
                    'restaurant_menu_link', 'restaurant_account_username', 'restaurant_account_password',
                    'chef_waiter_account_username', 'chef_waiter_account_password', 'opening_time_hour', 'opening_time_minutes',
                    'closing_time_hour', 'closing_time_minutes')
    search_fields = ('restaurant_id',)
    list_display_links = ('restaurant_id',)


class Restaurant_QR_codes_Admin(admin.ModelAdmin):
    list_display = ('restaurant_id','qr_code')
    search_fields = ('restaurant_id',)


class Restaurant_PDF_Menus_Admin(admin.ModelAdmin):
    list_display = ('restaurant_id','pdf_menu')
    search_fields = ('restaurant_id',)


admin.site.register(Restaurant, Restaurant_Admin)
admin.site.register(Restaurant_QR_codes, Restaurant_QR_codes_Admin)
admin.site.register(Restaurant_PDF_Menus, Restaurant_PDF_Menus_Admin)



# class Owner_Category_Meals_Admin(admin.ModelAdmin):
#     list_display = ('restaurant_id', 'categories', 'meals_brief_descriptions')
#     search_fields = ('restaurant_id__restaurant_id',)


# class Owner_Meal_Details_Admin(admin.ModelAdmin):
#     list_display = ('restaurant_id', 'meal_brief_descriptions', 'meal_longer_descriptions','dish_price', 'availability', 'meal_photo')
#     search_fields = ('restaurant_id__restaurant_id',)


# class Owner_Meal_Extras_Admin(admin.ModelAdmin):
#     list_display = ('restaurant_id', 'meal', 'extras')
#     search_fields = ('restaurant_id__restaurant_id',)

# class Owner_Meal_Allergy_Info_Admin(admin.ModelAdmin):
#     list_display = ('restaurant_id', 'meal', 'allergies')
#     search_fields = ('restaurant_id__restaurant_id',)

# class Owner_Menu_Photos_Admin(admin.ModelAdmin):
#     list_display = ('restaurant_id','meals_photos')
#     search_fields = ('restaurant_id__restaurant_id',)


#admin.site.register(Restaurant_Accounts, Owner_Business_Info_Admin)

# admin.site.register(Category_meals, Owner_Category_Meals_Admin)
# admin.site.register(Meal_details, Owner_Meal_Details_Admin)
# admin.site.register(Meal_extras, Owner_Meal_Extras_Admin)
# admin.site.register(Meal_allergy_Info, Owner_Meal_Allergy_Info_Admin)
# admin.site.register(Restaurant_Menu_Photos, Owner_Menu_Photos_Admin)
# admin.site.register(Restaurant_QR_codes, Owner_Restaurant_QR_codes_Admin)