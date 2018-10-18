from __future__ import annotations

from django.apps import apps
from django.contrib import admin

recipe_model = apps.get_model("things.thing")


@admin.register(recipe_model)
class RecipeAdmin(admin.ModelAdmin):
    pass
