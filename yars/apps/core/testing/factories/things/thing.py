from __future__ import annotations

import factory
from django.apps import apps


class ThingFactory(factory.DjangoModelFactory):
    name = factory.Faker("text", max_nb_chars=200)
    description = factory.Faker("text", max_nb_chars=2000)

    class Meta:
        model = apps.get_model("things.Thing")
        strategy = factory.BUILD_STRATEGY
