from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer

class ProductListView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = Product.objects.all()

        # Query params
        category = self.request.query_params.get('category')
        search = self.request.query_params.get('search')
        price_min = self.request.query_params.get('price_min')
        price_max = self.request.query_params.get('price_max')
        available = self.request.query_params.get('available')

        # Filters
        if category:
            queryset = queryset.filter(category__icontains=category)
        if search:
            queryset = queryset.filter(name__icontains=search)
        if price_min and price_max:
            queryset = queryset.filter(price__range=(price_min, price_max))
        if available is not None and available != '':
            queryset = queryset.filter(available=(available.lower() == 'true'))

        return queryset.order_by('name')
