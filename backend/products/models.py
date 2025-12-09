from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=120)
    category = models.CharField(max_length=60)  # e.g., Spices, Fruits, Vegetables
    price = models.DecimalField(max_digits=10, decimal_places=2)
    available = models.BooleanField(default=True)
    image = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name
