from django.db import migrations
from api.user.models import CustomUser


class Migration(migrations.Migration):
    def seed_data(apps,schema_editor):
        user = CustomUser(name="kunal",email="kunalkashyap932@gmail.com",is_staff=True,is_superuser=True,phone="8340745094",
        gender="Male")

        user.set_password("abc@123")
        user.save()

    dependencies = []
    operations = [
        migrations.RunPython(seed_data),
    ]
