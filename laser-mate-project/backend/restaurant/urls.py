from django.urls import path
from .views import Restaurant_View, Restaurant_QR_codes_View, Restaurant_PDF_Menus_View


urlpatterns = [
    path('<restaurant_id>', Restaurant_View.as_view()),
    path('qr-codes', Restaurant_QR_codes_View.as_view()),
    path('pdf-menus', Restaurant_PDF_Menus_View.as_view()),
    #path('owner/<slug:serving_time_hour>:<serving_time_minutes>', ITC_View().as_view()),
]
#path('owner/<slug:serving_time_hour>:<serving_time_minutes>', ITC_View().as_view()),

    #path('owner/<slug:serving_time_hour:serving_time_minutes>/<slug:categories>', Owner_tcf_View.as_view()),
    # path('owner/business-info', Owner_Interface_Business_Info_View.as_view()),
    # path('customer/<slug:serving_times>', Customer_Interface_Restaurant_Meals_View.as_view()),
    # path('customer/<slug:serving_times>/<slug:meal>', Customer_Interface_Restaurant_Meal_View.as_view()),