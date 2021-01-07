from django.urls import path
from .views import Restaurant_Serving_Time_Categories_View


urlpatterns = [
    path('itc', Restaurant_Serving_Time_Categories_View.as_view()),
    #path('owner/<slug:serving_time_hour>:<serving_time_minutes>', ITC_View().as_view()),
]