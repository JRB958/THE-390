# Generated by Django 5.0.1 on 2024-02-05 21:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_profile', '0003_userprofile_groups_userprofile_is_superuser_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='phone_number',
            field=models.CharField(blank=True, max_length=15),
        ),
    ]
