from __future__ import annotations

from rest_framework import routers

from yars.apps.things.viewsets import ThingViewSet

app_name = "things"


router = routers.SimpleRouter()
router.register("things", ThingViewSet, "things")


urlpatterns = router.urls
