from __future__ import annotations

from django.db import models
from django.utils.translation import ugettext_lazy as _


class Thing(models.Model):
    kind = models.ForeignKey("things.ThingKind", on_delete=models.CASCADE)

    name = models.CharField(max_length=200)
    description = models.TextField(max_length=2000)
    rating = models.DecimalField(max_digits=3, decimal_places=2)
    image = models.ImageField()

    class Meta:
        verbose_name = _("thing")
        verbose_name_plural = _("things")

    def __str__(self) -> str:
        return self.name
