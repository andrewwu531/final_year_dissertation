from django.contrib.auth import get_user_model
User = get_user_model()
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions

class SignupView_RestaurantOwner_ChefWaiter(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data

        email = data['email']
        password = data['password']
        password2 = data['password2']

        chef_waiter_email = data['chef_waiter_email']
        chef_waiter_password = data['chef_waiter_password']
        chef_waiter_password2 = data['chef_waiter_password2']

        if password != password2:
            return Response({'error':'Restaurant Owner passwords do not match!'})
        else:
            if chef_waiter_password != chef_waiter_password2:
                return Response({'error':'Chef-Waiter passwords do not match!'})
            else:
                if User.objects.filter(email=email).exists():
                    return Response({'error': 'Restauarnt Owner email already exists'})
                else:
                    if User.objects.filter(email=chef_waiter_email).exists():
                        return Response({'error': 'Chef-Waiter email already exists'})
                    else:
                        if len(password) < 6:
                            return Response({'error': 'Restaurant Owner password must be at least 6 characters'})
                        else: 
                            if len(chef_waiter_password) < 6:
                                return Response({'error': 'Chef-Waiter password must be at least 6 characters'})
                            else:
                                user = User.objects.create_restaurant_owner_user(email=email, password=password)
                                user.save()
                                user = User.objects.create_chef_waiter_user(email=chef_waiter_email, password=chef_waiter_password)
                                user.save()
                                return Response({'success': 'User created successfully'})




