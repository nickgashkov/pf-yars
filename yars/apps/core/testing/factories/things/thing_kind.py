from __future__ import annotations

import factory
from django.apps import apps


class ThingKindFactory(factory.DjangoModelFactory):
    name = factory.Faker("text", max_nb_chars=200)

    class Meta:
        model = apps.get_model("things.ThingKind")
        strategy = factory.BUILD_STRATEGY
