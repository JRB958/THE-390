# Generated by Django 5.0.1 on 2024-04-29 17:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0007_facility_reservation'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Reservation',
        ),
    ]
