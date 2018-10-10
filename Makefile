.PHONY: fmt check update upgrade test


SRCDIR = $(shell pwd)
CODEDIR = $(SRCDIR)/yars
DEPSDIR = $(SRCDIR)/deploy/requirements

CUSTOM_COMPILE_COMMAND="make update"

AUTOFLAKESKIP = $(CODEDIR)/settings/**/*.py,$(CODEDIR)/apps/*/migrations/*.py,$(CODEDIR)/tests/**/*.py


fmt: _sort _style
check: _stylecheck _typecheck

update:
	pip-compile --upgrade --output-file $(DEPSDIR)/base.out $(DEPSDIR)/base.in
	pip-compile --upgrade --output-file $(DEPSDIR)/dev.out  $(DEPSDIR)/dev.in

upgrade:
	pip-sync $(DEPSDIR)/dev.out

test:
	pytest $(SRCDIR)

_stylecheck:
	black $(CODEDIR)/ --check

_typecheck:
	mypy $(SRCDIR)

_sort:
	autoflake -r -i --remove-all-unused-imports --exclude $(AUTOFLAKESKIP) $(CODEDIR)/
	isort -rc $(CODEDIR)/

_style:
	black $(CODEDIR)/
