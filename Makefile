.PHONY: fmt check update upgrade test clean


SRCDIR = $(shell pwd)
CODEDIR = $(SRCDIR)/yars
DEPSDIR = $(SRCDIR)/deploy/requirements
FRONTDIR = $(CODEDIR)/apps/frontend

CUSTOM_COMPILE_COMMAND="make update"

AUTOFLAKESKIP = $(SRCDIR)/frontend/**/*.py,$(CODEDIR)/settings/*.py,$(CODEDIR)/apps/*/migrations/*.py,$(CODEDIR)/tests/**/*.py


fmt: _sort _style
check: _stylecheck _typecheck

update:
	pip-compile --upgrade --output-file $(DEPSDIR)/base.out $(DEPSDIR)/base.in
	pip-compile --upgrade --output-file $(DEPSDIR)/dev.out  $(DEPSDIR)/dev.in

upgrade:
	pip-sync $(DEPSDIR)/dev.out

test:
	pytest $(SRCDIR)

clean:
	find $(SRCDIR) -type d -name __pycache__ -o \( -type f -name '*.py[co]' \) -print0 | xargs -0 rm -rf

_stylecheck:
	black $(SRCDIR)/ --check

_typecheck:
	mypy $(SRCDIR)

_sort:
	autoflake -r -i --remove-all-unused-imports --exclude $(AUTOFLAKESKIP) $(SRCDIR)/
	isort -rc $(SRCDIR)/

_style:
	black $(SRCDIR)/
