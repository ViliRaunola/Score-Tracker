# Generated by Django 4.2.11 on 2024-03-16 21:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_user_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.BinaryField(max_length=256),
        ),
    ]
