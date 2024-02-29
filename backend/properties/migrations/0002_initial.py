# Generated by Django 5.0.1 on 2024-02-29 00:25

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('properties', '0001_initial'),
        ('user_profile', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='propertyprofile',
            name='company',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='property_profiles', to='user_profile.companyprofile'),
        ),
        migrations.AddField(
            model_name='parkingunit',
            name='property',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='parking_units', to='properties.propertyprofile'),
        ),
        migrations.AddField(
            model_name='condounit',
            name='property',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='condo_units', to='properties.propertyprofile'),
        ),
        migrations.AddField(
            model_name='storageunit',
            name='property',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='storage_units', to='properties.propertyprofile'),
        ),
    ]
