# Generated by Django 5.0.7 on 2024-10-17 17:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('administracion', '0002_alter_clientes_cedula'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='clientes',
            name='id_plan_pago',
        ),
    ]
